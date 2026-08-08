import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ArcReactor from './ArcReactor';
import { profile } from '../data/portfolioData';

/** Self-contained typewriter that cycles through profile.roles. */
const useTypewriter = (words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="section" style={{ paddingTop: 0 }}>
      <div className="container hero">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p className="hero-eyebrow" variants={item}>
            {profile.codename}
          </motion.p>

          <motion.h1 className="hero-name" variants={item}>
            {profile.name}
          </motion.h1>

          <motion.div className="hero-roles" variants={item}>
            <span className="role-word">{typed}</span>
            <span className="type-cursor">_</span>
          </motion.div>

          <motion.p className="hero-tagline" variants={item}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero-cta" variants={item}>
            <a
              className="btn btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects <FiArrowRight />
            </a>
            {profile.resumeUrl ? (
              <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Download Résumé <FiDownload />
              </a>
            ) : (
              <a
                className="btn btn-ghost"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch <FiMail />
              </a>
            )}
          </motion.div>

          <motion.div className="hero-meta" variants={item}>
            <span>
              <FiMapPin style={{ verticalAlign: '-2px', marginRight: 6 }} />
              {profile.location}
            </span>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <ArcReactor />
        </div>
      </div>
    </section>
  );
};

export default Hero;
