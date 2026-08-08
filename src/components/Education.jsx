import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { education } from '../data/portfolioData';

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <SectionHeading index="05" title="Education" />

      <div className="edu-grid">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.08}>
            <div className="glass hud-corners edu-card">
              <h3 className="edu-degree">{edu.degree}</h3>
              <div className="edu-inst">{edu.institution}</div>
              <span className="edu-score">{edu.score}</span>
              {edu.note && <p className="edu-note">{edu.note}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
