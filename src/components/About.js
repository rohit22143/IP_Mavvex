import Card from "./Card";
import React from "react";
import AboutImage1 from "./img/img1.png";
import AboutImage2 from "./img/img2.png";
import AboutImage3 from "./img/img3.png";
function About() {
  return (
    <div className="container about">
      <h2 className="main-title text-center">Company</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-3">
              <Card
                title="About us"
                img={AboutImage1}
                text="AI based consultancy and product development enterprise
offering services to build deep technology based products for a variety of domains including healthcare, agriculture and retail.
"
              />
            </div>
            <div className="col-md-4 mb-3">
              <Card
                title="Contact us"
                img={AboutImage2}
                text="Managing and Enabling Data Privacy in Machine Learning Model"
              />
            </div>
            <div className="col-md-4 mb-3">
              <Card
                title="Careers"
                img={AboutImage3}
                text="Working and providing Better Language Transcription and Translation Services"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
