import Reveal from './Reveal';

/** Numbered HUD-style section heading, e.g. "// 02" + TITLE */
const SectionHeading = ({ index, title }) => (
  <Reveal className="section-heading">
    <span className="section-index">// {index}</span>
    <h2 className="section-title">{title}</h2>
  </Reveal>
);

export default SectionHeading;
