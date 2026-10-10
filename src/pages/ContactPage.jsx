import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from '../firebase';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    phone: '',
    buildDetails: '',
    moreDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const db = getFirestore(app);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        workEmail: '',
        company: '',
        phone: '',
        buildDetails: '',
        moreDetails: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-left">
          <h5>Let's Talk</h5>
          <h1>Have a challenge<br />worth solving?</h1>
          <p className="contact-desc">
            Tell us what you're building, what you're trying to improve, or where you see an opportunity.
          </p>

          <ul className="contact-features">
            <li>AI & Intelligence</li>
            <li>Product Engineering</li>
            <li>Automation & Data</li>
            <li>Digital Experiences</li>
            <li>Emerging Technology</li>
          </ul>

          <div className="contact-details">
            <h6>EMAIL</h6>
            <p>info@zuntra.com</p>
            <p>info@zuntradigital.com</p>

            <h6>PHONE</h6>
            <p>+91 91502 36930</p>

            <h6>NORTH AMERICA</h6>
            <p>631 4th Avenue, Brooklyn, NY 11232</p>

            <h6>SOUTH ASIA HQ</h6>
            <p>No 61, 3rd Floor, Estate Main Rd,</p>
            <p>Industrial Estate, Perungudi,</p>
            <p>Chennai 600096</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <h2>Get in touch</h2>
          <p className="form-desc">Fill out the form and we'll respond within 2 business days.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name <span>*</span></label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Last Name <span>*</span></label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Work Email <span>*</span></label>
              <input type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Company</label>
                <input type="text" name="company" placeholder="Your organization" value={formData.company} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>What are you looking to build? <span>*</span></label>
              <textarea name="buildDetails" value={formData.buildDetails} onChange={handleChange} required></textarea>
            </div>

            <div className="form-group">
              <label>Tell us more <span>*</span></label>
              <textarea name="moreDetails" value={formData.moreDetails} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SEND INQUIRY \u2192'}
            </button>

            {submitStatus === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>Your inquiry has been sent successfully!</p>}
            {submitStatus === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>There was an error sending your inquiry. Please try again later.</p>}

            <p className="form-footer-text">
              By submitting this form you agree to Zuntra's Privacy Policy. We will not share your information with third parties.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
