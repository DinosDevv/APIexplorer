import '../styles/SearchBar.css'
import { fetchCountries } from '../api/index.ts'
import { useState } from 'react'

export default function SearchBar() {
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

  const [value, setValue] = useState<string>('')

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  if(value !== "") listOfCountries = updateList(value)
  return(
    <div className="search_bar">
      <input autoComplete="off" value={value} onChange={handleChange} id="country" type="text"/>
      <ul>
        {listOfCountries?.map(country => 
          <a onClick={() => console.log(`${country}`)}key={country} href={`/countryInfo/${country}`}><li className="country_item">{country}<a href="#"><img src="../heart.svg" alt="" /></a></li>
          </a>
        )}
      </ul>
    </div>
  )
}