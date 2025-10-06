// import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjectSwiper from './components/ProjectSwiper';
import CommitmentSection from './components/CommitmentSection';
import Footer from './components/Footer';

// import Design from './components/Design';

// import Projects from './components/Projects';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// export { default as Header } from './components/Header';
// export { default as Hero } from './components/Hero';
// export { default as Services } from './components/Services';
// export { default as About } from './components/About';
// // export { default as Projects } from './components/Projects';
// // export { default as Blog } from './components/Blog';
// // export { default as Contact } from './Contact';
// // export { default as Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <ProjectSwiper />
      <CommitmentSection />
      <Footer />
      {/* <Design /> */}
      {/* // <Projects />
      // <Blog />
      // <Contact />
      // <Footer />  */}
    </div>
  );
}

export default App;