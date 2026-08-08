import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience } from '../data/portfolioData';

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <SectionHeading index="03" title="Experience" />

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} className="timeline-item" delay={i * 0.1}>
            <span className={`timeline-dot ${job.current ? 'live' : ''}`} />
            <div className="glass hud-corners exp-card">
              <div className="exp-head">
                <div>
                  <h3 className="exp-role">{job.role}</h3>
                  <span className="exp-company">{job.company}</span>
                </div>
                <span className="exp-period">{job.period}</span>
              </div>

              <ul className="exp-points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <div className="tag-row">
                {job.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
