import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <section className="Footer">
      <Container className="Footer__container">
        <h1>Walid</h1>

        <div className="Footer__pages">
          <a href="#About">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Services">Services</a>
          <a href="#Projects">Projects</a>
        </div>

        <div className="Footer__links">
          <a href="https://www.facebook.com/profile.php?id=100011538554307&mibextid=ZbWKwL">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/walid-m0stafa-">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/WalidMostafa30">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </Container>
    </section>
  );
}
