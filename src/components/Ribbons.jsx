import React, { useEffect, useRef } from 'react';
import './Ribbons.css';

const DEFAULT_RAINBOW_COLORS = [
  '#FF3366', // Hot Pink
  '#FF6B00', // Vivid Orange
  '#FFD000', // Sun Yellow
  '#00E575', // Neon Green
  '#00D2FF', // Electric Cyan
  '#2E66FF', // Royal Blue
  '#8B5CF6', // Purple / Violet
  '#D946EF'  // Magenta
];

const Ribbons = ({
  colors = DEFAULT_RAINBOW_COLORS,
  autoSpeed = 1.1,
  speedMultiplier = 1.0,
  className = ''
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = 370;
    let height = 74;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse state for fluid interactive ripple physics
    const mouse = {
      targetX: width * 0.5,
      targetY: height * 0.5,
      currentX: width * 0.5,
      currentY: height * 0.5,
      targetStrength: 0,
      currentStrength: 0,
      isHovered: false
    };

    const resize = () => {
      // Use clientWidth / offsetWidth to get unscaled layout dimensions
      const rect = container.getBoundingClientRect();
      const clientW = container.clientWidth || container.offsetWidth;
      const clientH = container.clientHeight || container.offsetHeight;

      // Always pick the maximum to ensure the full header width is covered
      const currentW = Math.max(clientW || 0, rect.width || 0, 360);
      const currentH = Math.max(clientH || 0, rect.height || 0, 72);

      width = currentW;
      height = currentH;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };

    resize();

    // ResizeObserver watches for layout changes
    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(container);
    window.addEventListener('resize', resize);

    // Mouse & Touch interaction
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;
      mouse.targetStrength = 1.0;
      mouse.isHovered = true;
    };

    const handlePointerLeave = () => {
      mouse.targetStrength = 0;
      mouse.isHovered = false;
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mouseenter', handlePointerMove);
    container.addEventListener('mouseleave', handlePointerLeave);
    container.addEventListener('touchstart', handlePointerMove, { passive: true });
    container.addEventListener('touchmove', handlePointerMove, { passive: true });
    container.addEventListener('touchend', handlePointerLeave);

    // Floating Stardust Particles
    const particles = Array.from({ length: 8 }, (_, i) => ({
      xRatio: Math.random(),
      speed: 0.12 + Math.random() * 0.22,
      ribbonIndex: i % colors.length,
      size: 1.3 + Math.random() * 1.4,
      twinkleOffset: Math.random() * Math.PI * 2
    }));

    const startTime = performance.now();

    const render = (time) => {
      animId = requestAnimationFrame(render);

      // Dynamically verify width in case scale transition just completed
      const checkW = container.clientWidth || container.offsetWidth;
      if (checkW && Math.abs(checkW - width) > 3) {
        resize();
      }

      const elapsed = (time - startTime) * 0.001;
      const speed = autoSpeed * speedMultiplier;
      const t = elapsed * speed;

      // Smooth mouse easing
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.1;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.1;
      mouse.currentStrength += (mouse.targetStrength - mouse.currentStrength) * 0.08;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // -----------------------------------------------------------------------
      // Layer 1: Ambient Glowing Aurora Backdrop across 100% of header
      // -----------------------------------------------------------------------
      const auroraSweep = Math.sin(t * 0.45) * (width * 0.2);
      const auroraGrad = ctx.createLinearGradient(
        -auroraSweep,
        0,
        width + auroraSweep,
        height
      );
      auroraGrad.addColorStop(0, 'rgba(255, 51, 102, 0.22)');   // Pink
      auroraGrad.addColorStop(0.18, 'rgba(255, 107, 0, 0.18)'); // Orange
      auroraGrad.addColorStop(0.36, 'rgba(255, 208, 0, 0.16)'); // Yellow
      auroraGrad.addColorStop(0.54, 'rgba(0, 229, 117, 0.18)'); // Green
      auroraGrad.addColorStop(0.72, 'rgba(0, 210, 255, 0.22)'); // Cyan
      auroraGrad.addColorStop(0.88, 'rgba(46, 102, 255, 0.22)'); // Blue
      auroraGrad.addColorStop(1, 'rgba(139, 92, 246, 0.25)');   // Purple

      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = auroraGrad;
      ctx.fillRect(0, 0, width, height);

      // -----------------------------------------------------------------------
      // Layer 2: 8 Vibrant Silk Rainbow Ribbon Waves
      // -----------------------------------------------------------------------
      const ribbonCount = colors.length;
      const centerY = height * 0.5;
      const step = 4;
      const extraPad = 30; // Extend past edges so no boundary is cut off
      const totalSteps = Math.ceil((width + extraPad * 2) / step) + 1;

      colors.forEach((color, i) => {
        const offsetRatio = (i - (ribbonCount - 1) / 2);
        const baseOffset = offsetRatio * 3.2; // Vertical separation
        const phase = i * 0.38;

        ctx.beginPath();
        let isFirst = true;

        for (let s = 0; s <= totalSteps; s++) {
          const x = -extraPad + s * step;

          // Double harmonic travelling waves (continuous flow to right)
          const wave1 = Math.sin((x * 0.012) - (t * 1.5) + phase) * 10;
          const wave2 = Math.cos((x * 0.022) + (t * 0.8) + (phase * 0.7)) * 4.5;
          const wave3 = Math.sin((x * 0.006) - (t * 0.4) + (i * 0.5)) * 2.5;

          // Interactive Cursor Deflection
          let mouseDeflect = 0;
          if (mouse.currentStrength > 0.005) {
            const dx = (x - mouse.currentX) / 80;
            const bell = Math.exp(-dx * dx); // Gaussian bell curve
            const dy = mouse.currentY - centerY;
            mouseDeflect = bell * dy * 0.7 * mouse.currentStrength;
          }

          const y = centerY + baseOffset + wave1 + wave2 + wave3 + mouseDeflect;

          if (isFirst) {
            ctx.moveTo(x, y);
            isFirst = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Draw Outer Neon Bloom
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.strokeStyle = color;
        ctx.lineWidth = 4.2;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.globalAlpha = 0.85;
        ctx.stroke();

        // Draw Saturated Core Ribbon
        ctx.shadowBlur = 3;
        ctx.lineWidth = 2.4;
        ctx.globalAlpha = 0.96;
        ctx.stroke();

        // Draw Silky Top Sheen Highlight
        ctx.shadowBlur = 0;
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.globalAlpha = 0.6;
        ctx.stroke();
        ctx.restore();
      });

      // -----------------------------------------------------------------------
      // Layer 3: Floating Stardust Sparkles along Ribbons
      // -----------------------------------------------------------------------
      ctx.globalCompositeOperation = 'lighter';
      particles.forEach((p) => {
        p.xRatio = (p.xRatio + 0.00075 * p.speed) % 1;
        const px = p.xRatio * width;
        const ribbonIdx = p.ribbonIndex;
        const color = colors[ribbonIdx];
        const baseOffset = (ribbonIdx - (ribbonCount - 1) / 2) * 3.2;
        const phase = ribbonIdx * 0.38;

        const wave1 = Math.sin((px * 0.012) - (t * 1.5) + phase) * 10;
        const wave2 = Math.cos((px * 0.022) + (t * 0.8) + (phase * 0.7)) * 4.5;
        const py = centerY + baseOffset + wave1 + wave2;

        const twinkle = 0.4 + 0.6 * Math.sin(t * 3.2 + p.twinkleOffset);

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = twinkle * 0.88;
        ctx.fill();
      });

      ctx.restore();
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mouseenter', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      container.removeEventListener('touchstart', handlePointerMove);
      container.removeEventListener('touchmove', handlePointerMove);
      container.removeEventListener('touchend', handlePointerLeave);
    };
  }, [colors, autoSpeed, speedMultiplier]);

  return (
    <div ref={containerRef} className={`ribbons-container ${className}`}>
      <canvas ref={canvasRef} className="ribbons-canvas" />
    </div>
  );
};

export default Ribbons;
