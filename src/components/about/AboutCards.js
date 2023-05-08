import React, { useState } from "react";
import "./AboutCards.css";
import Card from "./Card";
import { AboutData } from "./AboutData.js";
import { Container, Typography } from "@mui/material";
export default function AboutCards({ responsive, left }) {
  return (
    <div className="aboutCardsContainer">
      <Container maxWidth="lg">
        <div className="header-title-wrapper">
          <p className="header-title text-center">
            Company{" "}
            <div class="underline">
              <span></span>
            </div>
          </p>
        </div>
        <div className="useCaseCardsWrapper">
          {Object.values(AboutData)?.map((item) => {
            return (
              <Card
                id={item?.id}
                title={item.title}
                img={item?.img}
                text={item.shortDescription}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
