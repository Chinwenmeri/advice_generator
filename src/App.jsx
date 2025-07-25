import { useState, useEffect } from 'react'
import Advice from './components/Advice'
import './App.css'

function App() {
  const [advices, setAdvice] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=>{
    fetch('	https://api.adviceslip.com/advice')
    .then(res =>{
      if(!res.ok){
        throw Error('THE DATA IS NOT AVAILABLE TRY AGAIN IN AFEW MINUTES')
      }
      console.log(res.json)
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      setAdvice(data)
      console.log('this is here but the state is not')
    })
    .catch(err=>{
      setError(err.message)
    })
  })

  // console.log(typeof myAdvice)
  return (
    <>
    {error && <div>
      {/* <img src={errorimg} alt="an error signal" /> */}
      <p className="error_message">THE DATA DID NOT LOAD</p>
      </div>}
      {advices && <Advice advices = {advices}/>}
    </>
  )
}

export default App
