import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/** Counts from 0 up to `value` (int or float) once scrolled into view. */
const CountUp = ({ value, duration = 1400 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const target = parseFloat(value);
  const decimals = (String(value).split('.')[1] || '').length;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return;
    let raf;
    let start;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  const shown = Number.isNaN(target) ? value : display.toFixed(decimals);
  return <span ref={ref}>{shown}</span>;
};

export default CountUp;
