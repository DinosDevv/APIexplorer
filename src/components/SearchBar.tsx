import '../styles/SearchBar.css'
import { fetchCountries } from '../api/index.ts'
import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce.ts'

export default function SearchBar() {
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce(value)

  const countries = fetchCountries()

  let listOfCountries : string[] = []
  function updateList(value : string) : string[]{
    const newList : string[] = []

    for(let i = 0; i < countries.length; i++) {
      if(countries[i].name.toUpperCase().indexOf(value.toUpperCase()) > -1) {
        newList.push(countries[i].name)
      }
    }
    return newList
  }

  function likeCountry(country: string) {
    console.log(`Added ${country} to liked countries!`)
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  if(debouncedValue)  listOfCountries = updateList(debouncedValue)
  return(
    <div className="search_bar">
      <input autoComplete="off" value={value} placeholder="What about Greece?" onChange={handleChange} id="country" type="text"/>
      <ul>
        {listOfCountries?.map(country => 
          <div key={country}>
            <a onClick={() => console.log(`${country}`)} href={`/countryInfo/${country}`}><li className="country_item">{country}</li>
            </a>
            <a onClick={() => likeCountry(country)}><img src="../heart.svg" alt="" /></a>
          </div>
        )}
      </ul>
    </div>
  )
}