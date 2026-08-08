import { motion } from 'framer-motion';

/**
 * Animated arc reactor — the visual centerpiece of the hero.
 * Two counter-rotating tech rings (CSS keyframes) + a pulsing repulsor core,
 * with a gentle floating entrance driven by framer-motion.
 */
const ArcReactor = () => {
  // evenly spaced radial "coil" segments around the core
  const coils = Array.from({ length: 8 }, (_, i) => i * 45);
  const ticks = Array.from({ length: 36 }, (_, i) => i * 10);

  return (
    <motion.div
      className="arc-reactor"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -14, 0],
      }}
      transition={{
        opacity: { duration: 0.9 },
        scale: { duration: 0.9, ease: 'backOut' },
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <svg viewBox="0 0 300 300" role="img" aria-label="Arc reactor">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#eafcff" />
            <stop offset="40%" stopColor="#4fc3f7" />
            <stop offset="100%" stopColor="#0a3a4a" />
          </radialGradient>
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(79,195,247,0.4)" />
            <stop offset="100%" stopColor="rgba(79,195,247,0)" />
          </radialGradient>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5c518" />
            <stop offset="100%" stopColor="#e62429" />
          </linearGradient>
        </defs>

        {/* outer glow halo */}
        <circle cx="150" cy="150" r="140" fill="url(#halo)" />

        {/* outer tick ring — spins slowly */}
        <g className="ar-spin-slow">
          <circle
            cx="150"
            cy="150"
            r="132"
            fill="none"
            stroke="rgba(79,195,247,0.35)"
            strokeWidth="1"
          />
          {ticks.map((deg) => (
            <line
              key={deg}
              x1="150"
              y1="20"
              x2="150"
              y2={deg % 30 === 0 ? 34 : 28}
              stroke="#4fc3f7"
              strokeWidth={deg % 30 === 0 ? 2 : 1}
              opacity="0.6"
              transform={`rotate(${deg} 150 150)`}
            />
          ))}
        </g>

        {/* gold structural ring — spins the other way */}
        <g className="ar-spin-rev">
          <circle
            cx="150"
            cy="150"
            r="108"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="4"
            strokeDasharray="6 14"
            opacity="0.9"
          />
        </g>

        {/* copper coil segments around the core */}
        <g className="ar-spin-slow">
          {coils.map((deg) => (
            <rect
              key={deg}
              x="144"
              y="52"
              width="12"
              height="34"
              rx="3"
              fill="url(#ringGrad)"
              opacity="0.85"
              transform={`rotate(${deg} 150 150)`}
            />
          ))}
          <circle
            cx="150"
            cy="150"
            r="78"
            fill="none"
            stroke="rgba(245,197,24,0.5)"
            strokeWidth="2"
          />
        </g>

        {/* triangular repulsor housing */}
        <polygon
          points="150,92 200,178 100,178"
          fill="none"
          stroke="rgba(79,195,247,0.55)"
          strokeWidth="2"
        />

        {/* pulsing core */}
        <g className="ar-core">
          <circle cx="150" cy="150" r="42" fill="url(#coreGlow)" />
          <circle cx="150" cy="150" r="42" fill="none" stroke="#eafcff" strokeWidth="2" />
          <circle cx="150" cy="150" r="26" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
        </g>
      </svg>
    </motion.div>
  );
};

export default ArcReactor;
