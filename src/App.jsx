import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/footer";
import Features from "./components/Features/features";
import Statistics from "./components/facts/statistics";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Statistics />
      <Features />
      <Footer />
    </>
  );
}

export default App;