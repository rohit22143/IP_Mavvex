import { Link, animateScroll as scroll } from "react-scroll";
import img1 from "../components/img/D13 (2).jpg";
import "./Footer.css";
import { Container } from "@mui/material";
function Footer() {
  return (
    <footer>
      <Container maxWidth="lg">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
              <h1 className="logo">
          <Link
            spy={true}
            smooth={true}
            duration={1000}
            to="headerbg"
            style={{
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            <a href="/index.js">
              <img id="logo" src={img1} />
            </a>
          </Link>
        </h1>
                
              </div>
              <div className="col-md-3">
                <div>
                  <p className="footer-title">
                    Important Links{" "}
                    <div class="underline">
                      <span></span>
                    </div>
                  </p>
                </div>
                <ul className="footerList">
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Use Cases{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      Industries{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="headerbg"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Research{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="about" spy={true} smooth={true} duration={1000}>
                      {" "}
                      Company{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="headerbg"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Blog{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row footer-wrapper">
              <div className="col-md-3">
                <div>
                  <p className="footer-title">
                    Office{" "}
                    <div class="underline">
                      <span></span>
                    </div>
                  </p>
                </div>
                <ul className="footerList">
                  <li>
                    <Link to="#">1197 Sainik Colony,</Link>
                  </li>
                  <li>
                    <Link to="#"> Sector 49,</Link>
                  </li>
                  <li>
                    <Link to="#">Faridabad HR,</Link>
                  </li>
                  <li>
                    <Link to="#">PIN 121001,</Link>
                  </li>
                  <li>
                    <Link to="#">India</Link>
                  </li>
                  <li>
                    <Link to="#">admin@mavvexlabs.com</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <div>
                  <p className="footer-title">
                    Social Media{" "}
                    <div class="underline">
                      <span></span>
                    </div>
                  </p>
                </div>

                {/* <p className="footer-title">Social Media</p> */}
                <ul className="footerList">
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com"
                    >
                      {" "}
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com"
                    >
                      {" "}
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com"
                    >
                      {" "}
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 social-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-pinterest"></i>
              </div>
            </div>
          </div>
        </div>
       
      </Container>
      <button
          onClick={() => scroll.scrollToTop(2500)}
          src=""
          className="gotop"
        >
          <i className="fas fa-level-up-alt fa-lg"></i>
          <br />
        </button>
    </footer>
  );
}
export default Footer;
