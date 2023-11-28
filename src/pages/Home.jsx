import { Link } from "react-router-dom"
import '../styles/Home.css'
// import BannerImg from "../assets/pizzahome.jpg"


function Home() {
  return (
    <div className="Home">
      <div className="headerContainer">
        <p className="heading">Doms Pizza</p><p className="subHeading"> Best Pizza in town</p>
       <Link to='/menu'>
        <button className="orderNow">
         Order Now!
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Home

// style={{backgroundImage:`url(${BannerImg})`}}