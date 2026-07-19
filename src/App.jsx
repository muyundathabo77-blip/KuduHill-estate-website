import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/facts/statistics";
import Features from "./components/Features/features";
import Footer from "./components/Footer/footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <Footer />
    </>
  );
}

export default App;