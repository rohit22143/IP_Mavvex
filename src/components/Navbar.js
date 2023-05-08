import { Link } from "react-scroll";
import { Link as Links } from "react-router-dom";
import "./Navbar.css";
import { Container } from "@mui/material";
import img1 from "../components/img/D13 (2).jpg";

function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <div className="navbarWrapper">
      <Container maxWidth="lg">
        <nav class="navbar">
          <h1 className="logo">
            <Links
              spy={true}
              smooth={true}
              duration={1000}
              to="/"
              style={{
                cursor: "pointer",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              <img id="logo" src={img1} />
            </Links>
          </h1>
          <ul class="navbar-links">
            <li class="navbar-dropdown">
               <Links to="/">Use Cases</Links>
              <div class="dropdown">
                <Links to="/deepTech">Deep Tech Product Development</Links>
                <Links to="/dataPrivacy">Data Privacy</Links>
                <Links to="/languageTranslation">
                  Language Transcription and Translation
                </Links>
              </div>
            </li>
            <li class="navbar-dropdown">
               <Links to="/">Industries</Links>
              <div class="dropdown">
                <Links to="/industry/healthcare">Healthcare</Links>
                <Links to="/industry/retail">Retail</Links>
                <Links to="/industry/agriculture">Agriculture</Links>
                <Links to="/industry/conversational">Conversational AI</Links>
                <Links to="/industry/security">
                  Security and Privacy in AI
                </Links>
              </div>
            </li>
            <li>
              <Link
                // onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Customers
              </Link>
            </li>
            <li class="navbar-dropdown">
               <Links to="/">Research</Links>
              <div class="dropdown">
                 <Links to="/publications">Publications</Links>
                 <Links to="/teams">Research Team</Links>
              </div>
            </li>
            <li class="navbar-dropdown">
              <Links to="/">Company</Links>
              <div class="dropdown">
                <Links to="/contactUs">About Us</Links>
                <Links to="/contactUs">Contact Us</Links>
                 <Links to="/">Careers</Links>
              </div>
            </li>
            <li>
              <Link
                // onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
export default Navbar;
