import SearchButton from './components/SearchButton.tsx'
import './styles/App.css'
import SearchBar from './components/SearchBar.tsx'

function App() {
  return(
    <div className='container'>
      <h1>Find out everything about your favorite countries</h1>

      <div className="search">
        <SearchBar />
        <SearchButton />
      </div>
    </div>
  )
}
export default App