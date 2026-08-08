import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { projects } from '../data/portfolioData';

/** Card that tilts toward the cursor for a subtle 3D HUD feel. */
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      className="glass hud-corners project-card"
      data-accent={project.accent}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {project.featured && <span className="featured-badge">FEATURED</span>}

      <div className="project-top">
        <span className="project-num">{String(index + 1).padStart(2, '0')}</span>
        <FiArrowUpRight className="project-link-icon" />
      </div>

      <h3 className="project-title">{project.title}</h3>
      <span className="project-subtitle">{project.subtitle}</span>
      <p className="project-desc">{project.description}</p>

      <div className="tag-row">
        {project.tech.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </a>
  );
};

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <SectionHeading index="04" title="Projects" />

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
