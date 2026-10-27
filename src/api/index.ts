
async function fetchCountry(countryName: string) : Promise<[]> {
  const response = await fetch(
    `https://api.restcountries.com/countries/v5?q=${countryName}`,
    { headers: { 'Authorization': 'Bearer rc_live_7d2f7910cb0140a287d41b5f2810e83e' } }
  );
  const data : Promise<[]> = await response.json();
  console.log(data.data.objects[0].names.common)
  return data
}

export { fetchCountry }