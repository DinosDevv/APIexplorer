import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import { fetchCountry } from "../api/index.ts"
import type { fetchedObj } from "../types/types.ts"

export default function InformationPage() {
  const { countryName } = useParams()

  const [name, setName] = useState('')
  const [flagUrl, setFlagUrl] = useState('../empty.svg')
  const [flagDesc, setFlagDesc] = useState('')

  useEffect(() => {
    async function getCountry() {
      if(countryName) {
        const fetchedObj : fetchedObj = await fetchCountry(countryName)
        setName(fetchedObj.data.objects[0].names.common)
        setFlagUrl(fetchedObj.data.objects[0].flag.url_svg)
        setFlagDesc(fetchedObj.data.objects[0].flag.description)
      }
    }
    getCountry()
  }, [])


  //console.log(country)

  return (
    <>
      <h1>Information for: { name }</h1>
      <img src={flagUrl} alt="" />
      <p>{flagDesc}</p>
    </>

  )
}
