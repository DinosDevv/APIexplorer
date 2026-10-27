
async function fetchCountry(countryName: string) : Promise<object> {
  const response = await fetch(
    `https://api.restcountries.com/countries/v5?q=${countryName}`,
    { headers: { 'Authorization': 'Bearer rc_live_7d2f7910cb0140a287d41b5f2810e83e' } }
  );
  const data = await response.json();

  return data
}

export { fetchCountry }