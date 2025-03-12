import './App.css'

function App() {

  function doAnalysis() {
    console.log("test")
  }

  return (
    <div>
      <h1>Sentiment analysis</h1>
      <div>
        <form
          onSubmit={doAnalysis}
          style={{
            display: "flex",
            flexFlow: "column wrap"
          }}>
          <label>
            Sentence:
          </label>
          <textarea />
          <input type='submit' value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default App
