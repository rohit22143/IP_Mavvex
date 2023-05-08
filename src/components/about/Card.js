import React from "react";
import "./Card.css";
import { Link } from 'react-router-dom'

import { Typography ,Button} from "@mui/material";

function Card(props) {
  return (
    <div className="card-wrapper">
      <img alt="image" src={props.img} className="text-center image" />
      <div className="content">
        <Typography variant="h5" className="title">{props.title}</Typography>
        
        <Typography variant="body1" className="text">{props?.text}</Typography>
      </div>
    </div>
  );
}

export default Card;
