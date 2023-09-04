import React from 'react';

//Pages
import HomeDefault from "./components/home/Home";
import About from "./components/about/AboutUs";
import Service from './components/services/Service';
import Team from './components/team/OurTeam';
import Careers from './components/careers/Careers';
import Contact from "./components/contact/ContactUs";
// import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';
// import HeaderTop from './common/header/HeaderTop';
import Navbar from './common/header/Navbar';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/vendor/slick/slick.css";
import './assets/css/default.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/vendor/modal-video/modal-video.min.css';
import "../node_modules/yet-another-react-lightbox/dist/styles.css";
import Footer from './common/footer/Footer';
import Projects from './components/projects/Projects';


function App() {
  return (
    <>
      {/* <HeaderTop /> */}
      <Navbar />
      <HomeDefault />
      <About />
      <Service />
      <Projects />
      <Team />
      <Careers />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
