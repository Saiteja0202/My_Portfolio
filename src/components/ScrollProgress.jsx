import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin arc-reactor gradient bar at the very top that fills as you scroll. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX, width: '100%' }} />;
};

export default ScrollProgress;
