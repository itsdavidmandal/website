import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/My Work/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BackgroundBeams } from './Components/ui/background-beams'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WebDesign from './Components/Services/service_details/Webdesign';
// import GraphicsDesign from './Components/Services/service_details/GraphicsDesign';
// import SocialMediaManagement from './Components/Services/service_details/socialmediamanagement';
// import DigitalMarketing from './Components/Services/service_details/digitalmarketing';

import Webdesign from './Components/Services/service_details/Webdesign'
import GraphicsDesign from './Components/Services/service_details/GraphicsDesign'

import SocialMediaManagement from './Components/Services/service_details/SocialMediaManagement'
import DigitalMarketing from './Components/Services/service_details/DigitalMarketing'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
      <BackgroundBeams/>

      <Router>
      <Routes>
        <Route path="/Services/service_details/Webdesign" element={<WebDesign />} />
        <Route path="/Services/service_details/GraphicsDesign" element={<GraphicsDesign />} />
        <Route path="/Services/service_details/SocialMediaManagement" element={<SocialMediaManagement />} />
        <Route path="/Services/service_details/DigitalMarketing" element={<DigitalMarketing />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
