import { useEffect, useRef } from 'react';

/**
 * Repulsor-glow custom cursor: a bright dot that tracks instantly and a
 * gold ring that eases behind it, expanding over interactive elements.
 * Hidden on touch / small screens via CSS.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const render = () => {
      // ring eases toward the cursor for a trailing feel
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(render);
    };

    const onOver = (e) => {
      if (e.target.closest('a, button, .project-card, .social-btn, .nav-link')) {
        ring.classList.add('hovering');
      }
    };
    const onOut = (e) => {
      if (e.target.closest('a, button, .project-card, .social-btn, .nav-link')) {
        ring.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
