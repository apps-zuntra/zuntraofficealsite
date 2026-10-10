import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './InteractiveDotsBackground.css';

const InteractiveDotsBackground = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const [gridSize, setGridSize] = useState({ x: 0, y: 0 });
  const pull_distance = 70;

  useEffect(() => {
    const measureGrid = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const dotSpacing = 24; // 3px size + 21px gap
        // Add extra buffer rows/cols to ensure dots seamlessly reach and exceed all edges
        setGridSize({
          x: Math.ceil(width / dotSpacing) + 6,
          y: Math.ceil(height / dotSpacing) + 6
        });
      }
    };

    measureGrid();
    window.addEventListener('resize', measureGrid);
    return () => window.removeEventListener('resize', measureGrid);
  }, []);

  useEffect(() => {
    if (gridSize.x === 0 || gridSize.y === 0) return;
    let clicked = false;
    let reset_all = false;

    // Get actual DOM elements for rows and cells
    const grid = gridRef.current;
    if (!grid) return;
    
    const rows = Array.from(grid.querySelectorAll('.dots-row'));
    const cells = Array.from(grid.querySelectorAll('.dots-cell'));
    
    // Fallback if no cells found (e.g., component unmounted)
    if (cells.length === 0) return;

    const updateCellPositions = () => {
      cells.forEach((cell) => {
        // Use offset positions which are relative to the container and unaffected by page scrolling/layout shifts
        cell.center_position = {
          x: cell.offsetLeft + (cell.offsetWidth / 2),
          y: cell.offsetTop + (cell.offsetHeight / 2),
        };
      });
    };

    const handleGridClick = (e) => {
      if (clicked) return;
      
      const containerRect = grid.getBoundingClientRect();
      const pointer_x = e.clientX - containerRect.left;
      const pointer_y = e.clientY - containerRect.top;

      // Find the closest cell to the click to use as the center of the stagger
      let closestIdx = 0;
      let minDistance = Infinity;

      cells.forEach((cell, i) => {
        if (!cell.center_position) return;
        const dx = pointer_x - cell.center_position.x;
        const dy = pointer_y - cell.center_position.y;
        const dist = dx * dx + dy * dy;
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = i;
        }
      });

      handleCellClick(e, closestIdx);
    };

    const handleCellClick = (e, i) => {
      clicked = true;
      
      gsap.to(cells, {
        duration: 1.6,
        // physics2D requires a premium plugin, so we simulate a scattered explosion without it:
        x: () => (Math.random() - 0.5) * 500,
        y: () => (Math.random() - 0.5) * 500 + 200,
        rotation: () => Math.random() * 360,
        opacity: 0,
        scale: 0.5,
        stagger: {
          grid: [rows.length, rows[0].children.length],
          from: i,
          amount: 0.3
        },
        onComplete: function () {
          this.timeScale(-1.3);
        },
        onReverseComplete: () => {
          clicked = false;
          reset_all = true;
          handlePointerMove(e);
        },
      });
    };

    const handlePointerMove = (e = { clientX: -pull_distance * 2, clientY: -pull_distance * 2 }) => {
      if (clicked) return;

      const containerRect = grid.getBoundingClientRect();
      // Calculate pointer position relative to the grid container
      const pointer_x = e.clientX - containerRect.left;
      const pointer_y = e.clientY - containerRect.top;
      
      cells.forEach((cell) => {
        if (!cell.center_position) return;
        
        const diff_x = pointer_x - cell.center_position.x;
        const diff_y = pointer_y - cell.center_position.y;
        const distance = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

        if (distance < pull_distance) {
          const percent = distance / pull_distance; 
          cell.pulled = true;
          gsap.to(cell, {
            duration: 0.2,
            x: diff_x * percent,
            y: diff_y * percent,
          });
        } else {
          if (!cell.pulled) return;
          cell.pulled = false;
          gsap.to(cell, {
            duration: 1,
            x: 0,
            y: 0,
            ease: "elastic.out(1, 0.3)",
          });
        }
      });
      
      if (reset_all) {
        reset_all = false;
        gsap.to(cells, {
          duration: 1,
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    // Initialize
    updateCellPositions();
    
    window.addEventListener('resize', updateCellPositions);
    window.addEventListener('pointermove', handlePointerMove);
    
    // Because the dots might be embedded in a specific section, we should listen to mouse movements on window
    
    const leaveHandler = () => handlePointerMove({ clientX: -pull_distance * 2, clientY: -pull_distance * 2 });
    document.body.addEventListener('pointerleave', leaveHandler);

    grid.addEventListener('pointerup', handleGridClick);

    return () => {
      window.removeEventListener('resize', updateCellPositions);
      window.removeEventListener('pointermove', handlePointerMove);
      document.body.removeEventListener('pointerleave', leaveHandler);
      grid.removeEventListener('pointerup', handleGridClick);
    };
  }, [gridSize]);

  // Generate grid
  const rows = [];
  for (let y = 0; y < gridSize.y; y++) {
    const cols = [];
    for (let x = 0; x < gridSize.x; x++) {
      cols.push(
        <div key={`cell-${x}-${y}`} className="dots-cell" data-x={x} data-y={y} />
      );
    }
    rows.push(
      <div key={`row-${y}`} className="dots-row">
        {cols}
      </div>
    );
  }

  return (
    <div className="interactive-dots-container" ref={containerRef}>
      {gridSize.x > 0 && (
        <div className="dots-grid" ref={gridRef}>
          {rows}
        </div>
      )}
    </div>
  );
};

export default InteractiveDotsBackground;
