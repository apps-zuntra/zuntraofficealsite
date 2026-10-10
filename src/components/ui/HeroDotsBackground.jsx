import React, { useEffect, useRef } from 'react';
import './HeroDotsBackground.css';

const HeroDotsBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Grid configuration
    const spacing = 34; // Spacing between dots in px
    let cols = 0;
    let rows = 0;
    let dots = [];

    // Pointer state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 110,
      active: false
    };

    // Ripples from clicks
    const ripples = [];

    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Rebuild dots grid
      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
      dots = [];

      const startX = (width - (cols - 1) * spacing) / 2;
      const startY = (height - (rows - 1) * spacing) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const originX = startX + c * spacing;
          const originY = startY + r * spacing;
          dots.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            baseRadius: 1.35,
            col: c,
            row: r,
            phase: (c * 0.25 + r * 0.2)
          });
        }
      }
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        mouse.active = false;
        mouse.targetX = -1000;
        mouse.targetY = -1000;
        return;
      }
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) return;
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      ripples.push({
        x: clickX,
        y: clickY,
        radius: 0,
        maxRadius: Math.max(width, height) * 0.6,
        speed: 7,
        strength: 1
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('click', handleClick);

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);
    resize();

    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += ripple.speed;
        ripple.strength = 1 - ripple.radius / ripple.maxRadius;
        if (ripple.radius >= ripple.maxRadius || ripple.strength <= 0) {
          ripples.splice(i, 1);
        }
      }

      const tSec = time * 0.0018;

      // Draw all dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // 1. Ambient gentle wave breathing
        const ambientWave = Math.sin(dot.phase + tSec * 1.8);
        let targetRadius = dot.baseRadius + ambientWave * 0.25;
        let alpha = 0.32 + (ambientWave + 1) * 0.1; // 0.32 to 0.52
        let color = `rgba(148, 163, 184, ${alpha})`;

        // 2. Ripple perturbation on click
        let rippleDisplacementX = 0;
        let rippleDisplacementY = 0;
        for (let r = 0; r < ripples.length; r++) {
          const ripple = ripples[r];
          const dx = dot.originX - ripple.x;
          const dy = dot.originY - ripple.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const diff = Math.abs(dist - ripple.radius);

          if (diff < 40) {
            const rippleFactor = (1 - diff / 40) * ripple.strength;
            targetRadius += rippleFactor * 1.1;
            alpha = Math.min(0.8, alpha + rippleFactor * 0.3);
            const angle = Math.atan2(dy, dx);
            rippleDisplacementX += Math.cos(angle) * rippleFactor * 10;
            rippleDisplacementY += Math.sin(angle) * rippleFactor * 10;
            color = `rgba(129, 140, 248, ${alpha})`;
          }
        }

        // 3. Subtle pointer interaction (gentle attraction, soft elegant hue)
        let mouseDisplacementX = 0;
        let mouseDisplacementY = 0;
        if (mouse.active && mouse.x > 0 && mouse.y > 0) {
          const dx = mouse.x - dot.originX;
          const dy = mouse.y - dot.originY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const factor = 1 - dist / mouse.radius;
            mouseDisplacementX = dx * factor * 0.28;
            mouseDisplacementY = dy * factor * 0.28;
            targetRadius += factor * 0.8;
            alpha = Math.min(0.72, alpha + factor * 0.25);
            color = `rgba(129, 140, 248, ${alpha})`;
          }
        }

        // Target position
        const targetX = dot.originX + mouseDisplacementX + rippleDisplacementX;
        const targetY = dot.originY + mouseDisplacementY + rippleDisplacementY;

        // Spring physics towards target
        dot.vx += (targetX - dot.x) * 14 * dt;
        dot.vy += (targetY - dot.y) * 14 * dt;
        dot.vx *= 0.82;
        dot.vy *= 0.82;
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.8, targetRadius), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('click', handleClick);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="hero-dots-container" ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} className="hero-dots-canvas" />
    </div>
  );
};

export default HeroDotsBackground;
