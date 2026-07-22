import "./Navbar.css";
import image from "../../assets/images/kuduhills.png";
import { useState } from "react";

function Navbar() {

  const [activeModal, setActiveModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);


  const navLinks = [
    "Home",
    "Plot Details",
    "Sales",
    "About",
    "FAQ",
    "Contact"
  ];


  const navDetails = {

    About:
      "KuduHill Estate is a premium property development designed to provide comfortable, secure, and peaceful living spaces.",

    Contact:
      "Get in touch with our sales team for enquiries, site visits, plot availability, and any additional information on +260978832662, or Email us at property@mudi.co.zm"

  };


  return (
    <>

      <nav className="navbar">

        <div className="logo">
          <img src={image} alt="KuduHill Logo" />
        </div>


        <div 
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>


        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          {navLinks.map((item) => (

            <a
              key={item}
              href="#"
              onClick={(e)=>{

                e.preventDefault();

                // only open modal if details exist
                if(navDetails[item]){
                  setActiveModal(item);
                }

              }}
            >
              {item}
            </a>

          ))}

        </div>

      </nav>



      {activeModal && (

        <div
          className="modal-overlay"
          onClick={()=>setActiveModal(null)}
        >


          <div
            className="modal-content"
            onClick={(e)=>e.stopPropagation()}
          >

            <span
              className="close"
              onClick={()=>setActiveModal(null)}
            >
              ×
            </span>


            <h2>{activeModal}</h2>


            <p>
              {navDetails[activeModal]}
            </p>


          </div>

        </div>

      )}

    </>
  );
}

export default Navbar;