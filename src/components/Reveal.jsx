import { motion } from 'framer-motion';

/**
 * Reusable scroll-reveal wrapper.
 * Fades + slides its children into view once, when scrolled into the viewport.
 */
const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

const Reveal = ({ children, direction = 'up', delay = 0, className, ...rest }) => {
  const offset = directions[direction] || directions.up;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
