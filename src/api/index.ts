import type { fetchedObj } from "../types/types";

async function fetchCountry(countryName: string) : Promise<fetchedObj> {
  const response = await fetch(
    `https://api.restcountries.com/countries/v5/names.common/${countryName}`,
    { headers: { 'Authorization': 'Bearer rc_live_7d2f7910cb0140a287d41b5f2810e83e' } }
  )
  const data : Promise<fetchedObj> = await response.json()
  return data
}
async function fetchAll() : Promise<fetchedObj> {
  const response = await fetch(
    `https://api.restcountries.com/countries/v5?limit=100`,
    { headers: { 'Authorization': 'Bearer rc_live_7d2f7910cb0140a287d41b5f2810e83e' } }
  )
  const data : Promise<fetchedObj> = await response.json()
  return data
}

export { fetchCountry, fetchAll }