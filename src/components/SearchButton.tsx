import { useNavigate } from "react-router"
import '../styles/SearchButton.css'

export default function SearchButton() {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(`/countryInfo/${(document.getElementById('country') as HTMLInputElement).value}`)}>
      Search
    </button>
  )
}