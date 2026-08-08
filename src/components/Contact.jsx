import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { profile } from '../data/portfolioData';

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <SectionHeading index="07" title="Contact" />

      <div className="contact-wrap">
        <Reveal>
          <div className="glass hud-corners contact-card">
            <h3>Let's Build Something</h3>
            <p>
              Open to opportunities and collaborations. Reach out and I'll respond faster than
              JARVIS boots up.
            </p>

            <div className="contact-methods">
              <a className="contact-method" href={`mailto:${profile.email}`}>
                <FiMail /> {profile.email}
              </a>
              <a className="contact-method" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                <FiPhone /> {profile.phone}
              </a>
              <span className="contact-method">
                <FiMapPin /> {profile.location}
              </span>
            </div>

            <div className="social-row">
              <a
                className="social-btn"
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="social-btn"
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a className="social-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Contact;
