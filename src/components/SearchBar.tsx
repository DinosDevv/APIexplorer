import '../styles/SearchBar.css'
import { testCountries } from '../api/index.ts'
import { useState } from 'react'

export default function SearchBar() {

  let listOfCountries : string[] = []
  function updateList(value : string) : string[]{
    const newList : string[] = []

    for(let i = 0; i < testCountries.length; i++) {
      if(testCountries[i].toUpperCase().indexOf(value.toUpperCase()) > -1) {
        newList.push(testCountries[i])
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
      <input value={value} onChange={handleChange} id="country" type="text"/>
      <ul>
        {listOfCountries?.map(country => 
          <li key={country}><a href={`/countryInfo/${country}`}>{country}</a></li>
        )}
      </ul>
    </div>
  )
}