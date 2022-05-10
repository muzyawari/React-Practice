import { useState } from "react";
import "./carousel.styles.css";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";

export default function Carousel() {
  const [slide, setSlide] = useState(1);

  const images = document.querySelectorAll("img").length;

  function handleSlideClick(index) {
    setSlide(index);
  }

  function handleNextClick() {
    if (slide !== images) {
      setSlide((prevIndex) => prevIndex + 1);
    } else if (slide === images) {
      setSlide(1);
    }
  }

  function handlePrevClick() {
    if (slide !== 1) {
      setSlide((prevIndex) => prevIndex - 1);
    } else setSlide(3);
  }

  return (
    <section className="carousel">
      <button
        className="carousel__button previous-button"
        onClick={handlePrevClick}
        // {hidden={slide === 1 ? "hidden" : ""}}
      >
        <svg id="left" viewBox="0 0 54 69.007">
          <path d="M47 0L3.44 34.502 47 69.007z" />
        </svg>
      </button>

      <div className="carousel__contents-container">
        <ul className="carousel__contents">
          <li className={`carousel__slide ${slide === 1 ? "is-selected" : ""}`}>
            <img src={Image1} alt="" />
          </li>
          <li className={`carousel__slide ${slide === 2 ? "is-selected" : ""}`}>
            <img src={Image2} alt="" />
          </li>
          <li className={`carousel__slide ${slide === 3 ? "is-selected" : ""}`}>
            <img src={Image3} alt="" />
          </li>
        </ul>
      </div>

      <button
        className="carousel__button next-button"
        onClick={handleNextClick}
        // {hidden={slide === images ? "hidden" : ""}}
      >
        <svg viewBox="0 0 54 69.007">
          <path d="M5-.121l43.56 34.502L5 68.886z" />
        </svg>
      </button>

      <div className="carousel__dots">
        <button
          className="carousel__dot"
          onClick={() => handleSlideClick(1)}
        ></button>
        <button
          className="carousel__dot"
          onClick={() => handleSlideClick(2)}
        ></button>
        <button
          className="carousel__dot"
          onClick={() => handleSlideClick(3)}
        ></button>
      </div>
    </section>
  );
}
