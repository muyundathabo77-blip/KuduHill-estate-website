import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import image from "../../assets/images/kuduhills.png";
import {useState} from "react";

function Navbar() {
  const[showContact,setshowContact]= useState(false);
  const[showPlotDetails,setshowPlotDetails]=useState(false);
  return (
    <header className="navbar">
      <img src={image} alt="Kuduhill Estate Logo" className="logo" />
      <div className="nav-content">

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#"plots>PlotDetails</a>
          <a href="#">Sales</a>
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <button
          className="contact-link"
          onClick={()=> setshowContact(!showContact)}>contact</button>
        </nav>
        {showContact && (
          <div className="contact-popup">
            <p> +260978832662</p>
            <p>property@mudi.co.zm</p>
            </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;