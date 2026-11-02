
const storageName : string = "favCountries"

function loadStorage() : Object {
  const item = localStorage.getItem(storageName)
  if(!item) return {}
  try {
    return JSON.parse(item)
  } catch {
    return {}
  }
}

function addCountry(country : string) {
  const countries = loadStorage()
  countries["country"] = ""

  localStorage.setItem(storageName, country)
}