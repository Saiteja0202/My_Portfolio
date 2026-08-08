import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiTool } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { skills } from '../data/portfolioData';

const iconMap = {
  code: <FiCode />,
  layout: <FiLayout />,
  server: <FiServer />,
  tool: <FiTool />,
};

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <SectionHeading index="02" title="Tech Arsenal" />

      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="glass hud-corners skill-card">
              <div className="skill-card-head">
                <span className="skill-icon">{iconMap[group.icon]}</span>
                <h3>{group.category}</h3>
              </div>

              {group.items.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-row-top">
                    <span>{skill.name}</span>
                    <span className="pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
