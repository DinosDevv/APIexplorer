import '../styles/Header.css'

export default function Header() {
  return(
    <div className="header">
      <div className="left">
        <a href="/">API Explorer</a>
      </div>
      <div className="right">
        <a href="/">Home</a>
        <a href="/">Something Else</a>
      </div>
    </div>
  )
}