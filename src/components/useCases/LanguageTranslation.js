import React from "react";
import "./LanguageTranslation.css";
import { Container, Typography } from "@mui/material";
import img1 from "../img/LanguageTranslation2.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function LanguageTranslation() {
  return (
    <div className="languageTranslation">
      <div className="coverPage">
        <Container maxWidth="lg" className="coverPageContent">
          <div className="title">Language Transcription and Translation</div>
          <div className="content">
          Professional language services for global communication
          </div>
        </Container>
      </div>
      <div className="contentPage">
        <Container maxWidth="lg" className="actualContent">
          <div className="content">
            
            <Typography variant="h4">
            Services We Offer
            </Typography>
            <Typography variant="body1">
            Transcription Services:
            </Typography>
            <ul className="infoList">
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                Accurately transcribe audio and video files in different languages
                
                </Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                Verbatim and non-verbatim transcription services available
               
                </Typography>
              </li>
              
              
            </ul>
            <Typography variant="body1">
            Translation Services:
            </Typography>
            <ul className="infoList">
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                  Professional translation services for various industries
                 
                </Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                  Over 50 languages available, including Arabic, Chinese, Dutch, French, German, Italian, Japanese, Portuguese, Russian, and Spanish
                
                </Typography>
              </li>
              

            </ul>

            <Typography variant="body1">
            Our Promise:
            </Typography>
            <ul className="infoList">
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                  High-quality language services with accurate and culturally sensitive translations and transcriptions                 
                </Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                  Personalized approach tailored to meet the needs of our clients                
                </Typography>
              </li>
              

            </ul>


          </div>
          <div className="image">
            <img width={'100%'} src={img1} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default LanguageTranslation;
