import { useState, useEffect } from 'react'
import Advice from './components/Advice'
// import './App.css'

function App() {
  const [advices, setAdvice] = useState(null)

  useEffect(()=>{
    fetch('	https://api.adviceslip.com/advice')
    .then(res =>{
      return res.json()
    })
    .then((data)=>{
      setAdvice(data)
    })
  }, [])

  return (
    <>
      {advices && <Advice advices = {advices}/>}
    </>
  )
}

export default App
