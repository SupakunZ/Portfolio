import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Header/Menu/Menu'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> :
        <>
          <Header>
            <Menu />
          </Header>
          <main>
            <Hero />
            <About />
            <Experience />
            <Project />
            <Contact />
          </main>
          <Footer />
        </>
      }
    </>
  )
}

export default App
