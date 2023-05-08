import React from "react";
import "./DataPrivacy.css";
import { Container, Typography } from "@mui/material";
import img1 from "../img/DataPrivacy2.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function DataPrivacy() {
  return (
    <div className="dataPrivacy">
      <div className="coverPage">
        <Container maxWidth="lg" className="coverPageContent">
          <div className="title">Data Privacy</div>
          <div className="content">
          Protecting personal information from unauthorized access or use
          </div>
        </Container>
      </div>
      <div className="contentPage">
        <Container maxWidth="lg" className="actualContent">
          <div className="content">
           
            <Typography variant="h4">
            Data Collection and Use
            </Typography>
            
            <ul className="infoList">
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                	We respect your privacy and only collect the information that is necessary to provide you with the best possible experience on our website.
	               
                </Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
	                We collect information such as your browsing behaviour on our site, the pages you visit, and the links you click on to improve our website and personalize your experience.
	               
                </Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
	                We take data security seriously and have implemented measures such as encryption, firewalls, and regular security audits to protect your information.
	               
                </Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                 We do not sell or rent your personal information to third parties, but we may share it with trusted third-party service providers who assist us in operating our website.
	               
                </Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                You have the right to access, modify, or delete your personal information and opt-out of marketing messages at any time.

                </Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                We reserve the right to modify this privacy policy at any time and will post any changes on this page.

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

export default DataPrivacy;
