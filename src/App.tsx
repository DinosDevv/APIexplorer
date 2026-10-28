import { useEffect, useState } from 'react'
import { fetchAll } from './api/index.ts'
import SearchButton from './components/SearchButton.tsx'
import './styles/App.css'
import type { fetchedObj } from './types/types.ts'

function App() {
  const [countries, setCountries] = useState<fetchedObj | null>(null)

  useEffect(() => {
    async function getCountries() {
      const fetchedObj : fetchedObj = await fetchAll()
      setCountries(fetchedObj)
    }
    getCountries()
  }, [])

  return(
    <div>
      <h1>Search</h1>
      <label htmlFor="">Search</label>
      <input id="country" type="text" />
      <SearchButton />
      {countries?.data.objects.map(country => 
        <p key={country.names.common}>{country.names.common}</p>
      )}
    </div>
  )
}
export default App