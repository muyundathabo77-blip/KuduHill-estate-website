import { useState, useEffect } from "react";
import "./Hero.css";
import image from "../../assets/images/kuduweb3.png";

const slides = [
  {
    title: "Find Your Dream Plot",
    description:
      "Discover your perfect plot of land at Kudu Hill.",
  },
  {
    title: "Affordable Land",
    description:
      "Secure your plot today with flexible payment.",
  },
  {
    title: "A Home You Deserve",
    description:
      "Grow a community with quality infrastructure.",
  },
];

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

return (
<section className="hero">

<div 
className="hero-images"
style={{
backgroundImage: `url(${image})`,
}}
>
</div>


<div className="hero-overlay"></div>


<div className="hero-content"key={currentSlide}>

<h1>{slides[currentSlide].title}</h1>

<p>{slides[currentSlide].description}</p>

<a
  href="https://wa.me/260762603394?text=Hello%20Kudu%20Hill%20Estate,%20I%20would%20like%20to%20schedule%20a%20visit."
  target="_blank"
  rel="noopener noreferrer"
  className="visit-btn"
>
 Schedule A Visit With Us
</a>

</div>

</section>
);

}

export default Hero;