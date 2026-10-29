import SearchButton from './components/SearchButton.tsx'
import './styles/App.css'
import SearchBar from './components/SearchBar.tsx'

function App() {
  return(
    <div>
      <h1>Search</h1>
      <label htmlFor="">Search</label>
      <SearchBar />
      <SearchButton />
    </div>
  )
}
export default App