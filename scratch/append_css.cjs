const fs = require('fs');
const css = `
/* Stacked Cards Hover Effect */
.card-stack-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
}

.card-stack-container {
  position: relative;
  width: 100%;
  max-width: 350px;
  height: 120px;
  perspective: 1000px;
  transition: all 0.5s ease;
}

.stacked-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform-origin: top center;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.stacked-card-header {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
  opacity: 0.8;
}

.stacked-card-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 6px;
}

.stacked-card-desc {
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.4;
}

/* Base stack layout */
.stacked-card:nth-child(1) { transform: translateY(0) scale(1); z-index: 6; }
.stacked-card:nth-child(2) { transform: translateY(15px) scale(0.95); z-index: 5; opacity: 0.95; }
.stacked-card:nth-child(3) { transform: translateY(30px) scale(0.9); z-index: 4; opacity: 0.9; }
.stacked-card:nth-child(4) { transform: translateY(45px) scale(0.85); z-index: 3; opacity: 0.85; }
.stacked-card:nth-child(5) { transform: translateY(60px) scale(0.8); z-index: 2; opacity: 0.8; }
.stacked-card:nth-child(6) { transform: translateY(75px) scale(0.75); z-index: 1; opacity: 0.75; }

/* Hover fan out effect */
.card-stack-container:hover .stacked-card:nth-child(1) { transform: translateY(-70px) scale(1); z-index: 6; }
.card-stack-container:hover .stacked-card:nth-child(2) { transform: translateY(60px) scale(1); z-index: 5; opacity: 1; }
.card-stack-container:hover .stacked-card:nth-child(3) { transform: translateY(190px) scale(1); z-index: 4; opacity: 1; }
.card-stack-container:hover .stacked-card:nth-child(4) { transform: translateY(320px) scale(1); z-index: 3; opacity: 1; }
.card-stack-container:hover .stacked-card:nth-child(5) { transform: translateY(450px) scale(1); z-index: 2; opacity: 1; }
.card-stack-container:hover .stacked-card:nth-child(6) { transform: translateY(580px) scale(1); z-index: 1; opacity: 1; }

/* Colors */
.stacked-bg-blue { background-color: #3b82f6; }
.stacked-bg-purple { background-color: #a855f7; }
.stacked-bg-green { background-color: #22c55e; }
.stacked-bg-orange { background-color: #f97316; }
.stacked-bg-pink { background-color: #ec4899; }
`;
fs.appendFileSync('src/pages/builds/BuildPage.css', css, 'utf8');
