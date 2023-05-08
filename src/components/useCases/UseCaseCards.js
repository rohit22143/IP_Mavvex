import React, { useState } from "react";
import "./UseCaseCards.css";
import Card from "./Card";
import { UseCaseData } from "./UseCaseData";
import { Container, Typography } from "@mui/material";
export default function UseCaseCards({ responsive, left }) {
  return (
    <div className="useCaseCardsContainer">
      <Container maxWidth="lg">
        <div className="header-title-wrapper">
        <p className="header-title text-center">
         Use Cases{" "}
          <div class="underline">
            <span></span>
          </div>
        </p>
        </div>
        <div className="useCaseCardsWrapper">
          {Object.values(UseCaseData)?.map((item) => {
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
