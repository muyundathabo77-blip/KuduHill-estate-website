import { useState, useEffect } from "react";
import "./Hero.css";

import image1 from "../../assets/images/kuduhills2.jpeg";
import image2 from "../../assets/images/kudu.png";
import image3 from "../../assets/images/MARC.png";


const slides = [
    {
        image: image1,
        title: "Find Your Dream Plot",
        description: `Discover your perfect plot of land at Kudu Hill Estate,
        where nature meets modern living. Explore our available
        plots and find the ideal location for your dream home.`,
        button: "View Available Plots"
    },
    {
        image: image2,
        title: "Affordable Land For Your Future",
        description: "Secure your plot today with flexible payment options",
        button: "Explore Plots"
    },
    {
        image: image3,
        title: "Home and Nature flourish together",
        description: "A place to find a Home not a house",
        button: "Learn More"
    }
];


function Hero() {

    const [currentImage, setCurrentImage] = useState(0);


    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentImage((prev) => {
                return (prev + 1) % slides.length;
            });

        }, 120000);


        return () => {
            clearInterval(timer);
        };

    }, []);


    return (
        <section className="hero">

            <div
                className="hero-slider"
                style={{
                    transform: `translateX(-${currentImage * 100}%)`
                }}
            >

                {slides.map((slide, index) => (

                    <div
                        className="hero-slide"
                        key={index}
                        style={{
                            backgroundImage: `url(${slide.image})`
                        }}
                    >

                        <div className="hero-content">

                            <h1>{slide.title}</h1>

                            <p>{slide.description}</p>

                            <button>
                                {slide.button}
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Hero;