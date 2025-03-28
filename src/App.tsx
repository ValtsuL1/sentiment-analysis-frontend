import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  const [result, setResult] = useState("")

  const [resultColor, setResultColor] = useState("")

  const [resultTextColor, setResultTextColor] = useState("")

  // Old handleSubmit with random output
  /*
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
  */



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("submitting...")
    fetch('http://127.0.0.1:5000/sentiment', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
       },
      body: JSON.stringify({ text: text })
    })
        .then(response => response.json())
        .then((data) => {
          console.log(data)
          displayResult(data['compound'])
        })
        .catch((error) => console.log(error))
  }

  function displayResult(result: string){
    console.log("displaying...")
    let text: string = ""
    let color: string = ""
    let textColor: string = ""

    const compoundScore = parseFloat(result)
    
    if(compoundScore <= -0.5) {
      text = "negative"
      color = "red"
      textColor = "white"
    }
    else if(compoundScore >= 0.5) {
      text = "positive"
      color = "green"
      textColor = "white"
    }
    else{
      text = "neutral"
      color = "yellow"
      textColor = "black"
    }

    setResult(text)
    setResultColor(color)
    setResultTextColor(textColor)
  }

  return (
    <div>
      <h1>Sentiment analysis</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexFlow: "column"
          }}>
          <label style={{fontSize: "2em"}}>
            Write sentence below:
            <input 
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{fontSize: "1.6em"}}/>
          </label>
          <input type="submit"/>
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
