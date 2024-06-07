import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/My Work/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BackgroundBeams } from './Components/ui/background-beams'

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
    </div>
  )
}

export default App
