import "./Home.css";
import kuduhills2 from "../assets/images/kuduhills2.jpeg";
<<<<<<< HEAD
=======
import PlotDetails from "../components/PlotDetails";
>>>>>>> fa8a1a28f5748f3eb19da4f3c65ebc51c5d6ea44

function Home() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${kuduhills2})` }}
    >
      <div className="hero-content">
        <h1>Find your dream plot</h1>
         <h2>At Kudu Hill Estate</h2>

        <p>
          Discover your perfect plot of land at Kudu Hill Estate,
          where nature meets modern living. Explore our available
          plots and find the ideal location for your dream home.
        </p>

        <button>View Available Plots</button>
    
      </div>
    </section>
  );
}

export default Home;