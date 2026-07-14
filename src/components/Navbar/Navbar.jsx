import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import image from "../../assets/images/kuduhills.png";

function Navbar() {
  return (
    <header className="navbar">
      <img src="src/assets/images/kuduhills.png"alt="Kuduhill Estate Logo" className="logo" />
      <div className="nav-content">

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Plot Details</a>
          <a href="#">Sales</a>
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <a href="#">contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;