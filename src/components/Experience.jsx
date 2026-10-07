import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience } from '../data/portfolioData';

const calculateDuration = (startDateStr) => {
  const startDate = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
  const monthStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

  return [yearStr, monthStr].filter(Boolean).join(' ');
};


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
                <span className="exp-period">
  {job.current
    ? `${job.period} · ${calculateDuration(job.startDate)}`
    : job.period}
</span>

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
