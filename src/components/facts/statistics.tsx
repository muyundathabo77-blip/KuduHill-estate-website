import "../Navbar/Statistics.css";
import roadIcon from "../../assets/icons/road.png";
import homeIcon from "../../assets/icons/home.png";
import waterIcon from "../../assets/icons/water.png";
import natureIcon from "../../assets/icons/nature.png";
import shieldIcon from "../../assets/icons/shield.png";
import kafue from "../../assets/icons/kafue.png";
import cosmo from "../../assets/icons/cosmo.png";
import clif from "../../assets/icons/clif.png";
import canyon from "../../assets/icons/canyon.png";
import lusaka from "../../assets/icons/lusaka.png";
import treecover from "../../assets/icons/treecover.png";
import size from "../../assets/icons/size.png";
import perfect from "../../assets/icons/perfect.png";
import available from "../../assets/icons/available.png";

type Fact = {
  id: number;
  icon: string;
  title: string;
  value: string;
  unit: string;
};

const facts: Fact[] = [
  {
    id: 1,
    icon: kafue,
    title: "From Kafue Road",
    value: "3.3",
    unit: "km",
  },
  {
    id: 2,
    icon: cosmo,
    title: "From Cosmopolitan Mall",
    value: "25",
    unit: "min",
  },
  {
    id: 3,
    icon: clif,
    title: "Kafue River Cliff",
    value: "15",
    unit: "min",
  },
  {
    id: 4,
    icon: canyon,
    title: "From Tiffany's Canyon",
    value: "5",
    unit: "min",
  },
  {
    id: 5,
    icon: lusaka,
    title: "From Lusaka CBD",
    value: "30",
    unit: "min",
  },
  {
    id: 6,
    icon: size,
    title: "Property Size",
    value: "1",
    unit: "acre",
  },
  {
    id: 7,
    icon: treecover,
    title: "Tree Cover",
    value: "80",
    unit: "%",
  },
  {
    id: 8,
    icon: perfect,
    title: "Perfect Scenery",
    value: "100",
    unit: "%",
  },

  {
    id: 9,
    icon: available,
    title: "Plots Available",
    value: "200",
    unit: "+",
  },
];


function Statistics() {
  return (
    <section className="statistics-section">

      <div className="header">
        <p>Kudu Hills Facts</p>

        <h2>
          The Estate that drives you to what matters Most
        </h2>
      </div>


      <div className="statistics-container">

        {facts.map((fact) => (
          <div className="statistics-card" key={fact.id}>
            <img 
              src={fact.icon} 
              alt={fact.title}
              className="statistics-icon"
            />

            <div className="statistics">
              <span className="number">
                {fact.value}
              </span>

              <span className="unit">
                {fact.unit}
              </span>
            </div>

            <p className="statistics-title">{fact.title}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Statistics;