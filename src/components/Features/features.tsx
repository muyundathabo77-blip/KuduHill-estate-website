import "./features.css";

import road from "../../assets/icons/road.png";
import shield from "../../assets/icons/shield.png";
import water from "../../assets/icons/water.png";
import sola from "../../assets/icons/sola.png";
import waste from "../../assets/icons/waste.png";
import home from "../../assets/icons/home.png";


type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

function Features() {
  const features: Feature[] = [
    {
      id: 1,
      icon:home,
      title: "Secure Title Deeds",
      description: "All plots come with verified documentation and secure ownership.",
      width: 60,
      height: 60,
    },
   
    {
      id: 3,
      icon: waste,
      title: "Waste Management ",
      description: "Recycling, composting and waste collection.",
      width: 60,
      height: 60,
    },
    {
      id: 4,
      icon: "",
      title: "Green Space",
      description: "Preserving natural tree cover and harmonizing modern living with nature.",
      width: 60,
      height: 60,
    },
    {
      id: 5,
      icon: water,
      title: "Water Management",
      description: "Rainwater harvesting, greywater recycling, permeable paving and native landscaping.",
      width: 60,
      height: 60,
    },
    {
      id: 6,
      icon: road,
      title: "Good Road Network",
      description: "Easy accessibility, adequate road widths, good connectivity and proper drainage.",
      width: 60,
      height: 60,
    },
  
    {
      id: 8,
      icon: sola,
      title: "Energy Efficiency",
      description: "Solar energy, gas backup and smart lighting solutions.",
      width: 60,
      height: 60,
    },
    {
      id: 9,
      icon: shield,
      title: "Secure Area",
      description: "Armed Security Services.",
      width: 60,
      height: 60,
    },
   
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <h2>
          Why Choose <span>Kudu Hills</span>
        </h2>

        <p>
          Kudu Hills Estates Features
          <br />
          Get your plot today
        </p>
      </div>

      <div className="features-container">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-icon">
              {feature.icon && (
                <img
                  src={feature.icon}
                  alt={feature.title}
                  width={feature.width}
                  height={feature.height}
                />
              )}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;