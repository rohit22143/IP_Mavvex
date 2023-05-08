import React from "react";
import "./IndustryDetails.css";
import { Container, Typography } from "@mui/material";
import img1 from "../img/useCaseContent.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useParams } from "react-router-dom";
import { IndustryInfo } from "./IndustryData";

function IndustryDetails() {
  const {type}=useParams()
  return (
    <div className="industryDetails">
      <div className="coverPage" style={{backgroundImage:`url(${IndustryInfo?.[type]?.img})`, background:`linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${IndustryInfo?.[type]?.img}) no-repeat center center`}}>
        <Container maxWidth="lg" className="coverPageContent">
          <div className="title">{IndustryInfo?.[type]?.title}</div>
          <div className="content">
          {IndustryInfo?.[type]?.quote}
          </div>
        </Container>
      </div>
      <div className="contentPage">
        <Container maxWidth="lg" className="actualContent">
          <div className="content">
            {/* <Typography variant="overline">
            
            </Typography> */}
            <Typography variant="h4">
              {IndustryInfo?.[type]?.subtitle}
            </Typography>
            {/* <Typography variant="body1">
              Analyze two years of historic activity data to identify leading
              indicators and build benchmarks that impact the outcomes of future
              quarters.
            </Typography> */}
            <Typography variant="body1" style={{textAlign:'justify', whiteSpace:'pre-line'}}>
              {IndustryInfo?.[type]?.description}
            </Typography>
          </div>
          <div className="image">
          {IndustryInfo?.[type]?.img2?


<img width={'100%'} src={IndustryInfo?.[type]?.img2} />:''}<br /><br/><br />
{IndustryInfo?.[type]?.img3?


            <img width={'100%'} src={IndustryInfo?.[type]?.img3} />:''}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default IndustryDetails;
