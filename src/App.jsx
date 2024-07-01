import { useState } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Header/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header>
        <Menu />
      </Header> */}
      <Menu />
    </>
  )
}

export default App
