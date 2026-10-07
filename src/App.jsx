import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import * as data from './data/portfolioData';

function App() {
  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero profile={data.profile} />
        <About about={data.about} hobbies={data.hobbies} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Certifications certifications={data.certifications} />
        <Contact profile={data.profile} />
      </main>

      <Footer profile={data.profile} />
    </>
  );
}

export default App;
