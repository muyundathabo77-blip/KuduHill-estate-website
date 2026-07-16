import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Features from "./components/Features/features"
import Footer from "./components/Footer/footer"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <contact/>
      <plotDetails/>
      <Features/>
      <Footer/>
    </>
      
  );
}

export default App;