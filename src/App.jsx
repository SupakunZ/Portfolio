import { useState } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Header/Menu/Menu'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <Menu />
      </Header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
      </main>
    </>
  )
}

export default App
