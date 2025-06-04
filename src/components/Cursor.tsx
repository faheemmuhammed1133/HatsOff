import React, { useEffect, useRef } from 'react';
import '../styles/Cursor.css';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Animate the outer cursor with a slight delay for a trailing effect
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      
      // Animate the inner dot to follow the cursor exactly
      cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const onMouseDown = () => {
      cursor.classList.add('active');
      cursorDot.classList.add('active');
    };

    const onMouseUp = () => {
      cursor.classList.remove('active');
      cursorDot.classList.remove('active');
    };

    const onMouseEnterInteractive = () => {
      cursor.classList.add('hover');
      cursorDot.classList.add('hover');
    };

    const onMouseLeaveInteractive = () => {
      cursor.classList.remove('hover');
      cursorDot.classList.remove('hover');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, .collection-item');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorDotRef} className="cursor-dot"></div>
    </>
  );
};

export default Cursor;