import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/carou.css";
import imgC1 from "../assets/etudiant.jpg";
import imgC2 from "../assets/music.jpg";
import imgC3 from "../assets/lampe.jpg";

export default function Carous() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 size " src={imgC3} alt="Second slide" />
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Carousel.Caption>
            <h3>La connaissance est l'essence de l'homme</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 size h-400px"
            src={imgC1}
            alt="Second slide"
          />
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Carousel.Caption>
            <h3>La recherche du savoir</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 size" src={imgC2} alt="Second slide" />

          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption>
            <h3>L'amour du savoir </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
