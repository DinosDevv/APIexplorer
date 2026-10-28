import { useNavigate } from "react-router"

export default function SearchButton() {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(`/countryInfo/${document.getElementById('country')?.value}`)}>
      Search
    </button>
  )
}