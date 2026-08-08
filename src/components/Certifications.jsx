import { FiAward } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { certifications } from '../data/portfolioData';

const Certifications = () => (
  <section id="certifications" className="section">
    <div className="container">
      <SectionHeading index="06" title="Certifications" />

      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <Reveal key={cert} delay={i * 0.07}>
            <div className="glass hud-corners cert-card">
              <span className="cert-badge">
                <FiAward />
              </span>
              <span className="cert-text">{cert}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
