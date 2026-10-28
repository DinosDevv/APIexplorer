import SearchButton from './components/SearchButton.tsx'
import './styles/App.css'

function App() {
  

  return(
    <div>
      <h1>Search</h1>
      <label htmlFor="">Search</label>
      <input id="country" type="text" />
      <SearchButton />
    </div>
  )
}
export default App