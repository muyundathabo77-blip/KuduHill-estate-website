import "../Navbar/Statistics.css";
import roadIcon from "../../assets/icons/road.png";
import homeIcon from "../../assets/icons/home.png";
import waterIcon from "../../assets/icons/water.png";
import natureIcon from "../../assets/icons/nature.png";
import shieldIcon from "../../assets/icons/shield.png";

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
    icon: roadIcon,
    title: "From Kafue Road",
    value: "3.3",
    unit: "km",
  },
  {
    id: 2,
    icon: homeIcon,
    title: "From Cosmopolitan Mall",
    value: "25",
    unit: "min",
  },
  {
    id: 3,
    icon: waterIcon,
    title: "Kafue River Cliff",
    value: "15",
    unit: "min",
  },
  {
    id: 4,
    icon: natureIcon,
    title: "From Tiffany's Canyon",
    value: "5",
    unit: "min",
  },
  {
    id: 5,
    icon: shieldIcon,
    title: "From Lusaka CBD",
    value: "30",
    unit: "min",
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

          </div>
        ))}

      </div>

    </section>
  );
}

export default Statistics;