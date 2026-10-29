import { useEffect, useState } from 'react'
import SearchButton from './components/SearchButton.tsx'
import './styles/App.css'
import type { fetchedObj } from './types/types.ts'
import SearchBar from './components/SearchBar.tsx'

function App() {
  // const [countries, setCountries] = useState<fetchedObj | null>(null)

  // useEffect(() => {
  //   async function getCountries() {
  //     const fetchedObj : fetchedObj = await fetchAll()
  //     setCountries(fetchedObj)
  //   }
  //   getCountries()
  // }, [])

  return(
    <div>
      <h1>Search</h1>
      <label htmlFor="">Search</label>
      <SearchBar />
      <SearchButton />
      {/* {countries?.data.objects.map(country => 
        <p key={country.names.common}>{country.names.common}</p>
      )} */}
    </div>
  )
}
export default App