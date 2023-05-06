import useFetch from "../../hooks/useFetch";
import "./featured.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import hero1 from "./../assets/hero1.jpg";
import hero2 from "./../assets/hero2.jpg";
import hero3 from "./../assets/hero3.jpg";

const Featured = () => {
  const {data,loading,error,reFetch}=useFetch("");
  
  return (
    <div className="featured">
      <Carousel fade >
        <Carousel.Item>
          <img 
            className="d-block w-100 hero-img "
            src={hero1}
            alt="First slide"
            width="640" height="450"
          />
          <Carousel.Caption>
            <p className="fs-3 fw-bold ">STAGE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img "
            src={hero2}
            alt="Second slide"
            width="640" height="450"
          />

          <Carousel.Caption>
            <p className="fs-3 fw-bold">SCOLAIRE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img "
            src={hero3}
            alt="Third slide"
            width="640" height="450"
          />

          <Carousel.Caption>
            <p className="fs-3 fw-bold">PARASCOLAIRE</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Featured;
