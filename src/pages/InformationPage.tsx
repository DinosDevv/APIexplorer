import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import { fetchCountry } from "../api/index.ts"

export default function InformationPage() {
  const { countryName } = useParams()

  const [name, setName] = useState('')
  const [flagUrl, setFlagUrl] = useState('')
  const [flagDesc, setFlagDesc] = useState('')

  useEffect(() => {
    async function getCountry() {
      if(countryName) {
        const data : [] = await fetchCountry(countryName)
        setName(data.data.objects[0].names.common)
        setFlagUrl(data.data.objects[0].flag.url_svg)
        setFlagDesc(data.data.objects[0].flag.description)
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
