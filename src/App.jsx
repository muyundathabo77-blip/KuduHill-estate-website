import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/footer";
import Statistics from "./components/facts/statistics";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Statistics />
      <Footer />
    </>
  );
}

export default App;