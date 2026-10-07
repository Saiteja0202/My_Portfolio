import { FiChevronRight } from 'react-icons/fi';
import { GiCricketBat, GiBookCover } from 'react-icons/gi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { about, hobbies } from '../data/portfolioData';

const hobbyIcons = {
  cricket: <GiCricketBat />,
  anime: <GiBookCover />,
};

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

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <SectionHeading index="01" title={about.heading} />

      <div className="about-grid">
        <Reveal direction="right">
          <p className="about-text">{about.summary}</p>

          <ul className="highlight-list">
            {about.highlights.map((h) => (
              <li key={h}>
                <FiChevronRight />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="hobbies-row">
            {hobbies.map((hobby) => (
              <span className="hobby-chip" key={hobby.label}>
                {hobbyIcons[hobby.icon]}
                {hobby.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div className="stat-grid">
            {about.stats.map((stat) => (
  <div className="glass hud-corners stat-card" key={stat.label}>
    <div className="stat-value">
      {stat.startDate ? (
        <>
          <span>{calculateDuration(stat.startDate)}</span>
        </>
      ) : (
        <>
          <span>{stat.value}</span>
          <span className="suffix">{stat.suffix}</span>
        </>
      )}
    </div>
    <div className="stat-label">{stat.label}</div>
  </div>
))}

          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
