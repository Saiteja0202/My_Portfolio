import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { sections, profile } from '../data/portfolioData';

const Navbar = ({ }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Shrink / add background once the user scrolls past the hero fold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Logo name = the given name (everything before the surname),
  // e.g. "Sai Teja Srikakulapu" -> "Sai Teja"
  const parts = profile.name.trim().split(/\s+/);
  const logoName = parts.length > 1 ? parts.slice(0, -1).join(' ') : parts[0];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <button className="nav-logo" onClick={() => go('home')} aria-label="Back to top">
          <span className="logo-reactor" aria-hidden="true">
            {/* Arc reactor logo */}
            <svg viewBox="0 0 32 32">
              <defs>
                <radialGradient id="navCore" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#eafcff" />
                  <stop offset="45%" stopColor="#4fc3f7" />
                  <stop offset="100%" stopColor="#0a3a4a" />
                </radialGradient>
              </defs>
              <g className="lr-rings">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#4fc3f7" strokeWidth="1.5" opacity="0.7" />
                {Array.from({ length: 8 }, (_, i) => (
                  <line
                    key={i}
                    x1="16"
                    y1="3"
                    x2="16"
                    y2="7"
                    stroke="#4fc3f7"
                    strokeWidth="1.5"
                    opacity="0.8"
                    transform={`rotate(${i * 45} 16 16)`}
                  />
                ))}
                <circle cx="16" cy="16" r="9" fill="none" stroke="#f5c518" strokeWidth="1.5" opacity="0.9" />
              </g>
              <circle className="lr-core" cx="16" cy="16" r="5" fill="url(#navCore)" />
            </svg>
          </span>
          <span className="logo-name">{logoName}</span>
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {sections.map((s) => (
            <li key={s.id}>
              <button
                className={`nav-link ${active === s.id ? 'active' : ''}`}
                onClick={() => go(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
          {/* Edit button now triggers popup */}
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
