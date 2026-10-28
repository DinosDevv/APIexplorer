import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import { fetchCountry } from "../api/index.ts"
import type { fetchedObj } from "../types/types.ts"

export default function InformationPage() {
  const { countryName } = useParams()

  const [country, setCountry] = useState<fetchedObj | null>(null)

  useEffect(() => {
    async function getCountry() {
      if(countryName) {
        const fetchedObj : fetchedObj = await fetchCountry(countryName)
        setCountry(fetchedObj)
      }
    }
    getCountry()
  }, [])
  
  return (
    <>
      <h1>Information for: { country?.data.objects[0].names.common }</h1>
      <img src={country?.data.objects[0].flag.url_svg} alt="" />
      <p>{country?.data.objects[0].flag.description}</p>
      <p>{country?.data.objects[0].continents}</p>
      <p>{country?.data.objects[0].descriptions.long}</p>
      <p>{country?.data.objects[0].languages[0].name}</p>
      <p>{country?.data.objects[0].region}</p>
      <p>{country?.data.objects[0].subregion}</p>
      <p>{country?.data.objects[0].currencies[0].name} ({country?.data.objects[0].currencies[0].symbol})</p>
      <p>More info? {country?.data.objects[0].links.wikipedia}</p>
    </>

  )
}
