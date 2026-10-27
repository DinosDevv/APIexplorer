import './styles/App.css'
import { fetchCountry } from './api/index.ts'
import { useEffect, useState } from 'react'

function App() {
  const [country, setCountry] = useState({})
  const countryName = 'greece'

  useEffect(() => {
    async function getCountry() {
      console.log('Im getting it')
      const data = await fetchCountry(countryName)
      setCountry(data)
    }
    getCountry()
  }, [])
  
  return(
    <div>
      { JSON.stringify(country) }
      <h1>Search</h1>
      <label htmlFor="">Search</label>
      <input type="text" />
    </div>
  )
}
export default App