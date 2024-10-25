
import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import CTA from './component/CTA';
import Casestudy from './component/Casestudy';
import WorkingProcess from './component/WorkingProcess';
import Team from './component/Team';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="font-primary overflow-hidden ">
    <Navbar/>
    <Hero/>
    <Services/>
    <CTA/>
    <Casestudy/>
    <WorkingProcess/>
    <Team/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
