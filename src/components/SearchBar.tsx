import '../styles/SearchBar.css'
import { testCountries } from '../api/index.ts'
import { useState } from 'react'

export default function SearchBar() {

  const list = testCountries

  function updateList(value : string) {
    console.log(value)
    console.log(value.length)

    for(let i = 0; i < list.length; i++) {
      console.log(list[i].toUpperCase().indexOf(value.toUpperCase()))
      if(list[i].toUpperCase().indexOf(value.toUpperCase()) > value.length || list[i].toUpperCase().indexOf(value.toUpperCase()) < 0) {
        list.splice(i, 1)
        i--
      } else {
        list[i] = list[i]
      }
    }
    console.log(list)
  }

  const [value, setValue] = useState<string>('')
  const keyDown = (event : React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = (document.getElementById('country') as HTMLInputElement).value
    if(event.code === `Key${event.key.toUpperCase()}`) {
      setValue(inputValue.concat("", event.key))
    } else if(event.code === "Backspace"){
      setValue(inputValue.substring(0, inputValue.length - 1))
    }
  }
  updateList(value)
  return(
    <div className="search_bar">
      <label htmlFor="">Search Country</label>
      <input onKeyDown={keyDown} id="country" type="text" />
      <select name="" id="">
        {testCountries.map(country => 
          <option key={country}>{country}</option>
        )}
      </select>

    </div>
  )
}