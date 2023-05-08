import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./IndustryCards.css";
import Card from "./Card";
import { IndustryInfo } from "./IndustryData";
import { Container } from "@mui/material";
export default function Instructors({ responsive, left }) {
  const myResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3.1,
      partialVisibilityGutter: 40,
    },
    midLevel: {
      breakpoint: { max: 1280, min: 720 },
      items: 2.9,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 720, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container maxWidth="lg" className="industryCards">
      <div className="header-title-wrapper">
      <p className="header-title text-center">
         Industry{" "}
          <div class="underline">
            <span></span>
          </div>
        </p>
      </div>
     
      <div className="">
        <Carousel
          responsive={responsive ? responsive : myResponsive}
          // renderButtonGroupOutside={true}
          // arrows={false}
          containerClass="carousel-container"
          infinite
          autoPlay
          autoPlaySpeed={2000}
        >
          {Object.values(IndustryInfo)?.map((item) => {
            return (
              <Card
                id={item?.id}
                title={item.title}
                img={item?.img}
                text={item.shortDescription}
              />
            );
          })}
        </Carousel>
      </div>
</Container>  );
}
