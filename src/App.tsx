import './styles/App.css'

function App() {
  return(
    <form action={`countryInfo/${document.getElementById("country")}`}>
      <h1>Search</h1>
      <label htmlFor="">Search</label>
      <input id="country" type="text" />
      <input type="submit" />
    </form>
  )
}
export default App