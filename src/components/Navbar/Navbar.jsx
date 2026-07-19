import "./Navbar.css";
import image from "../../assets/images/kuduhills.png";
import { useState } from "react";

function Navbar() {

  const [activeModal, setActiveModal] = useState(null);

  const navDetails = {
    Home:
      "Welcome to KuduHill Estate. Discover beautiful residential plots in a peaceful environment where nature meets modern living.",

    "Plot Details":
      "KuduHill Estate offers spacious 1 acre residential plots with secure ownership, flexible payment options, and a great investment opportunity.",

    Sales:
      "Our sales team is available to help you choose your ideal plot, plot NO; SLN009,109, Katima Mulilo Road, Garden, Lusaka.",

    About:
      "KuduHill Estate is a premium property development designed to provide comfortable, secure, and peaceful living spaces.",

    FAQ:
      "Find answers about plot sizes, payment plans, ownership documents, location, and the process of buying a plot at KuduHill Estate.",

    Contact:
      "Get in touch with our sales team for enquiries, site visits, plot availability, and any additional information on +260978832662, or Email us, property@mudi.co.zm"
  };


  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={image} alt="KuduHill Estate Logo" />
        </div>
        <div className="nav-links">

          {Object.keys(navDetails).map((item)=>(
            <a
              key={item}
              href="#"
              onClick={(e)=>{
                e.preventDefault();
                setActiveModal(item);
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