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

<button>
Schedule A Visit With Us
</button>

</div>


</section>
);

}

export default Hero;