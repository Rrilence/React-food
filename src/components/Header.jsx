import { Link } from "react-router-dom"

function Header () {
    return <nav className="brown darken-4">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo" style={{marginLeft: '10px'}}><i>React ShopMeals</i></Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      </ul>
      <a className="grey-text text-lighten-4 right" href="https://github.com/Rrilence/React-food" style={{marginRight: '10px'}}>Repository</a>
    </div>
  </nav>
}  

export {Header}