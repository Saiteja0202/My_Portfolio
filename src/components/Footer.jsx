import { profile } from '../data/portfolioData';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>
        © {profile.name} — Powered by an arc reactor <span className="heart">◆</span> React + Vite
      </p>
    </div>
  </footer>
);

export default Footer;
