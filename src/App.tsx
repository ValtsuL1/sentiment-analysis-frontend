import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState("")

  const [resultColor, setResultColor] = useState("")

  const [resultTextColor, setResultTextColor] = useState("")

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const number = Math.floor(Math.random() * 3)

    let text: string = ""
    let color: string = ""
    let textColor: string = ""

    if(number == 0) {
      text = "negative"
      color = "red"
      textColor = "white"
    }
    else if(number == 1) {
      text = "neutral"
      color = "yellow"
      textColor = "black"
    }
    else if(number == 2) {
      text = "positive"
      color = "green"
      textColor = "white"
    }

    setResult(text)
    setResultColor(color)
    setResultTextColor(textColor)
  }

  // deploy test
  return (
    <div>
      <h1>Sentiment analysis</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexFlow: "column wrap"
          }}>
          <label style={{fontSize: "2em"}}>
            Write sentence below:
          </label>
          <textarea/>
          <input 
            type='submit'
            value="Submit"
            style={{fontSize: "1.6em"}}/>
        </form>
      </div>
      <div>
        <p style={{
            fontSize: "2em",
            background: resultColor.toString(),
            color: resultTextColor.toString()}}>
          {result}
        </p>
      </div>
    </div>
  )
}

export default App
