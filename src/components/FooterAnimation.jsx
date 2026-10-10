import React, { useEffect, useRef } from 'react';
import './FooterAnimation.css';

const FooterAnimation = () => {
  const creatureRef = useRef(null);

  useEffect(() => {
    let cleanup = false;

    // Use a variable to prevent Vite from analyzing the external import
    const animeUrl = 'https://esm.sh/animejs';
    
    import(/* @vite-ignore */ animeUrl).then(({ animate, createTimeline, createTimer, stagger, utils }) => {
      if (cleanup) return;
      const creatureEl = creatureRef.current;
      if (!creatureEl) return;
      
      const viewport = { w: window.innerWidth * .5, h: window.innerHeight * .5 };
      const cursor = { x: 0, y: 0 };
      const rows = 13;
      const grid = [rows, rows];
      const from = 'center';
      const scaleStagger = stagger([1, 3], { ease: 'inQuad', grid, from });
      const opacityStagger = stagger([0.45, .05], { grid, from });

      // Clear existing if React StrictMode runs twice
      creatureEl.innerHTML = '';
      
      for (let i = 0; i < (rows * rows); i++) {
        creatureEl.appendChild(document.createElement('div'));
      }

      const particuleEls = creatureEl.querySelectorAll('div');

      utils.set(creatureEl, {
        width: rows * 8 + 'em',
        height: rows * 8 + 'em'
      });

      utils.set(particuleEls, {
        x: 0,
        y: 0,
        scale: scaleStagger,
        opacity: opacityStagger,
        background: stagger([85, 30], { grid, from,
          modifier: v => `hsl(0, 0%, ${v}%)`, // Silver monochrome gradient
        }),
        boxShadow: stagger([5, 1], { grid, from,
          modifier: v => `0px 0px ${utils.round(v, 0)}em 0px #c0c0c0`,
        }),
        zIndex: stagger([rows * rows, 1], { grid, from, modifier: utils.round(0) }),
      });

      const pulse = () => {
        animate(particuleEls, {
          keyframes: [
            {
              scale: 5,
              opacity: 1,
              delay: stagger(90, { start: 1650, grid, from }),
              duration: 150,
            }, {
              scale: scaleStagger,
              opacity: opacityStagger,
              ease: 'inOutQuad',
              duration: 600
            }
          ],
        });
      }

      const mainLoop = createTimer({
        frameRate: 15,
        onUpdate: () => {
          animate(particuleEls, {
            x: cursor.x,
            y: cursor.y,
            delay: stagger(40, { grid, from }),
            duration: stagger(120, { start: 750, ease: 'inQuad', grid, from }),
            ease: 'inOut',
            composition: 'blend',
          });
        }
      });

      const autoMove = createTimeline()
      .add(cursor, {
        x: [-viewport.w * .45, viewport.w * .45],
        modifier: x => x + Math.sin(mainLoop.currentTime * .0007) * viewport.w * .5,
        duration: 3000,
        ease: 'inOutExpo',
        alternate: true,
        loop: true,
        onBegin: pulse,
        onLoop: pulse,
      }, 0)
      .add(cursor, {
        y: [-viewport.h * .45, viewport.h * .45],
        modifier: y => y + Math.cos(mainLoop.currentTime * .00012) * viewport.h * .5,
        duration: 1000,
        ease: 'inOutQuad',
        alternate: true,
        loop: true,
      }, 0);

      const manualMovementTimeout = createTimer({
        duration: 1500,
        onComplete: () => autoMove.play(),
      });

      const followPointer = e => {
        const event = e.type === 'touchmove' ? e.touches[0] : e;
        // Need to calculate cursor relative to footer wrapper
        const rect = creatureEl.parentElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        cursor.x = event.clientX - centerX;
        cursor.y = event.clientY - centerY;
        autoMove.pause();
        manualMovementTimeout.restart();
      }

      window.addEventListener('mousemove', followPointer);
      window.addEventListener('touchmove', followPointer);
      
      window.__footerAnimCleanup = () => {
        window.removeEventListener('mousemove', followPointer);
        window.removeEventListener('touchmove', followPointer);
        mainLoop.pause();
        autoMove.pause();
        manualMovementTimeout.pause();
      };
    }).catch(err => console.error("Error loading animejs:", err));

    return () => {
      cleanup = true;
      if (window.__footerAnimCleanup) {
        window.__footerAnimCleanup();
        window.__footerAnimCleanup = null;
      }
    };
  }, []);

  return (
    <div id="creature-wrapper">
      <div id="creature" ref={creatureRef}></div>
    </div>
  );
};

export default FooterAnimation;
