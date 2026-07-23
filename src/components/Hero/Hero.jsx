import "./Hero.css";

import image from "../../assets/images/kuduweb.png";

function Hero() {

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


<div className="hero-content">

<h1>Find Your Dream Plot</h1>

<p>
Discover your perfect plot of land at Kudu Hill.
</p>

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