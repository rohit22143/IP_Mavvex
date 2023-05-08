import React from "react";
import "./DeepTech.css";
import { Container, Typography } from "@mui/material";
import img1 from "../img/DeepTech2.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function DeepTech() {
  return (
    <div className="deepTech">
      <div className="coverPage">
        <Container maxWidth="lg" className="coverPageContent">
          <div className="title">Deep Tech Product Development</div>
          <div className="content">
          Deep tech products require advanced expertise and innovation
          </div>
        </Container>
      </div>
      <div className="contentPage">
        <Container maxWidth="lg" className="actualContent">
          <div className="content">
            
            <Typography variant="h4">
            Transforming Industries with Innovative Deep Tech Solutions
            </Typography>
            
            <ul className="infoList">
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                We have a team of experts who are passionate about pushing the boundaries of what is possible in deep tech product development. Using a combination of data science, artificial intelligence, machine learning, and other advanced technologies, we create products that transform industries and change lives.
                </Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                Our areas of expertise include autonomous systems, which can operate without human intervention using machine learning algorithms. We also specialize in IoT solutions that connect physical devices to the internet, allowing for remote monitoring and control of everything from industrial equipment to smart homes. Additionally, we have experience in AR/VR technologies that create immersive experiences blending the physical and digital worlds, as well as blockchain solutions that provide secure, decentralized systems for transactions, data storage, and identity management.</Typography>
              </li>
              <li>
                <CheckCircleIcon fontSize="small" className="icon" />
                &nbsp;
                <Typography variant="body1">
                We believe that each of our clients is unique and that their needs require customized solutions. That's why we work closely with you to understand your goals, requirements, and challenges. Our team of experts will develop a solution that meets your specific needs, exceeds your expectations, and ensures your success.
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

export default DeepTech;
