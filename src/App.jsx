import { useState } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Header/Menu/Menu'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <Menu />
      </Header>
      <main>
        <Hero />
      </main>
    </>
  )
}

export default App
