import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatbot.css';
import aichatLogo from "../assets/aichat-logo/aichat.webp";
import zuntralogo from "../assets/footerlogo.png";

const PREDEFINED_RESPONSES = {
  greetings: {
    keywords: ['hi', 'hello', 'hey', 'start'],
    reply: "Hello! I'm Zuntra's virtual assistant. How can I help you today?",
    suggestions: [
      { text: "About Us", path: "/about/mission-vision" },
      { text: "Our Products", path: "/huzzler" },
      { text: "Contact", path: "/contact" }
    ]
  },
  products: {
    keywords: ['product', 'products', 'huzzler', 'rentit', 'mungo', 'zuca', 'wiviy'],
    reply: "We have several innovative products designed to solve real-world problems. Which one would you like to know more about?",
    suggestions: [
      { text: "Huzzler", path: "/huzzler" },
      { text: "Wiviy", path: "/wiviy" },
      { text: "RentIt", path: "/rentit" },
      { text: "Mungo", path: "/mungo" },
      { text: "Zuca", path: "/zuca" }
    ]
  },
  enterprise: {
    keywords: ['enterprise', 'business', 'talvivo', 'workzi', 'cubeforge', 'cubeforge'],
    reply: "Our enterprise solutions empower businesses to scale efficiently. Explore our enterprise offerings below.",
    suggestions: [
      { text: "Talvivo", path: "/talvivo" },
      { text: "Workzi", path: "/workzi" },
      { text: "cubeforge", path: "/cubeforge" }
    ]
  },
  careers: {
    keywords: ['career', 'job', 'hiring', 'work', 'careers', 'apply'],
    reply: "We're always looking for talented individuals to join our team! Check out our open positions.",
    suggestions: [
      { text: "Careers Page", path: "/company/careers" }
    ]
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'support', 'help', 'reach'],
    reply: "Need assistance? You can reach out to our team directly through our contact page.",
    suggestions: [
      { text: "Contact Us", path: "/contact" }
    ]
  },
  about: {
    keywords: ['about', 'team', 'mission', 'vision', 'who'],
    reply: "Zuntra is on a mission to build a better future through technology. Learn more about our vision and leadership.",
    suggestions: [
      { text: "Mission & Vision", path: "/about/mission-vision" },
      { text: "Leadership", path: "/about/leadership" },
      { text: "Our Team", path: "/about/team" }
    ]
  },
  default: {
    keywords: [],
    reply: "I'm not quite sure about that. Could you try rephrasing, or would you like to explore some of our main sections?",
    suggestions: [
      { text: "Home", path: "/" },
      { text: "Products", path: "/huzzler" },
      { text: "Contact", path: "/contact" }
    ]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'init-msg',
      sender: 'bot',
      text: "Hi there! Welcome to Zuntra. How can I help you find what you're looking for?",
      suggestions: [
        { text: "Explore Products", path: "/huzzler" },
        { text: "Enterprise Solutions", path: "/talvivo" },
        { text: "About Us", path: "/about/mission-vision" }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [messages, isOpen, isTyping]);

  const handleToggle = () => {
    setIsOpen(prev => {
      const nextState = !prev;
      if (nextState) setShowTeaser(false);
      return nextState;
    });
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    for (const key in PREDEFINED_RESPONSES) {
      if (key === 'default') continue;

      const category = PREDEFINED_RESPONSES[key];
      if (category.keywords.some(keyword => lowerInput.includes(keyword))) {
        return category;
      }
    }
    return PREDEFINED_RESPONSES.default;
  };

  const handleSend = (e) => {
    e?.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed || isTyping) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Natural typing delay
    setTimeout(() => {
      const response = getBotResponse(trimmed);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: response.reply,
          suggestions: response.suggestions
        }
      ]);
    }, 650);
  };

  const handleSuggestionClick = (suggestion) => {
    if (isTyping) return;
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: `Take me to ${suggestion.text}`
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      navigate(suggestion.path);
      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Navigating to ${suggestion.text}...`
        }
      ]);
    }, 500);
  };

  return (
    <div className="chatbot-container">



      {/* Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={handleToggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <span className="chatbot-pulse-ring" />
        <span className="chatbot-pulse-ring delay" />

        <div className={`chatbot-toggle-icon icon-chat ${isOpen ? 'is-hidden' : 'is-visible'}`}>
          <img className="chatbot-toggle-img" src={aichatLogo} alt="AI Chatbot" />
        </div>

        <div className={`chatbot-toggle-icon icon-close ${isOpen ? 'is-visible' : 'is-hidden'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar-container">
              <img className="chatbot-avatar" src={zuntralogo} alt="Zuntra AI Logo" />
              <span className="chatbot-avatar-pulse"></span>
            </div>
            <div>
              <h3 className="chatbot-title">ZAI</h3>
              <div className="chatbot-status">

              </div>
            </div>
          </div>
          <button className="chatbot-close" onClick={handleToggle} aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id || msg.text} className={`chatbot-message-wrapper ${msg.sender}`}>
              <div className="chatbot-message-row">
                {msg.sender === 'bot' && (
                  <div className="chatbot-msg-avatar" aria-hidden="true">
                    <img src={zuntralogo} alt="" />
                  </div>
                )}
                <div className={`chatbot-message ${msg.sender}`}>
                  <p>{msg.text}</p>
                </div>
              </div>
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className="chatbot-suggestions">
                  {msg.suggestions.map((sug, i) => (
                    <button
                      key={i}
                      className="chatbot-suggestion-btn"
                      style={{ '--chip-index': i }}
                      onClick={() => handleSuggestionClick(sug)}
                    >
                      <span className="chip-sparkle">✦</span>
                      <span>{sug.text}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="chatbot-message-wrapper bot typing-wrapper">
              <div className="chatbot-message-row">
                <div className="chatbot-msg-avatar" aria-hidden="true">
                  <img src={zuntralogo} alt="" />
                </div>
                <div className="chatbot-message bot typing-bubble">
                  <div className="typing-dots">
                    <span className="dot dot-1" />
                    <span className="dot dot-2" />
                    <span className="dot dot-3" />
                  </div>
                  <span className="typing-label">Thinking...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-area" onSubmit={handleSend}>
          <div className="chatbot-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="chatbot-input"
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
            />
          </div>
          <button
            type="submit"
            className={`chatbot-send ${inputValue.trim() ? 'active' : ''}`}
            disabled={!inputValue.trim() || isTyping}
            aria-label="Send message"
          >
            <svg className="chatbot-send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
