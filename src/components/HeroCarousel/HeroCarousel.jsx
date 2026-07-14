import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./HeroCarousel.css";
import forest1 from "../../assets/images/forest.jpg";
import forest2 from "../../assets/images/forest.jpg";
import forest3 from "../../assets/images/forest.jpg";


function HeroCarousel() {
  const images = [forest1, forest2, forest3];

  return (
    <p>Hero Carousel</p>

  );
}

export default HeroCarousel;