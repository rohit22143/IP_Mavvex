import React from "react";
import "./Teams.css";
import { Container, Typography } from "@mui/material";
import Card from "./Card";
import img from "../img/avatar2.png";


export const AboutData = {
    about:{
    id:'about',
    img:img,
    title: "Godfrey Sullivan",
    shortDescription:'BOARD MEMBER',
  },
  contact:{
    id:'contact',
    img:img,
    title: "Will Griffith",
    shortDescription:'BOARD MEMBER',
  },
 
  career:{
    id:'career',
    img:img,
    title: "Robin Matlock",
    shortDescription:'CHIEF EXECUTIVE OFFICER & FOUNDER',
  },
  tom:{
    id:'tom',
    img:img,
    title: "Tom Mars",
    shortDescription:'DIRECTOR OF CUSTOMER ENGINEERING',
  },
  contact1:{
    id:'contact',
    img:img,
    title: "Chad Henningson",
    shortDescription:'DIRECTOR OF CLOUD ENGINEERING',
  },
 
  career2:{
    id:'career',
    img:img,
    title: "Gerald Robindon",
    shortDescription:'CHIEF EXECUTIVE OFFICER & FOUNDER',
  },
  tom2:{
    id:'tom',
    img:img,
    title: "Bruce",
    shortDescription:'DIRECTOR OF CUSTOMER ENGINEERING',
  },
};


function Teams() {
  return (
    <div className="teams">
      <div className="coverPage">
        <Container maxWidth="lg" className="coverPageContent">
          <div className="title">Research Teams</div>
          <div className="content">
          Our research team is composed of highly skilled and dedicated professionals who are at the forefront of innovation in the field of artificial intelligence (AI). With expertise spanning machine learning, deep learning, natural language processing, computer vision, and data analytics, our team is committed to pushing the boundaries of AI technology.
          </div>
        </Container>
      </div>
      <div className="contentPage">
        <Container maxWidth="lg">
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
    </div>
  );
}

export default Teams;
