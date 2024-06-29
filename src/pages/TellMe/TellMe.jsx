import { Container } from "react-bootstrap";
import "./TellMe.css";
import tellMeImg from "../../assets/Images/Webinar-pana.webp";

const TellMe = () => {
  return (
    <article className="TellMe">
      <Container className="TellMe__container">
        <div className="TellMe__text">
          <h1>You have a new project!</h1>
          <h5>Contact me and tell me about your project</h5>
          <a href="#Contact" className="main-btn">
            Contact Me
          </a>
        </div>
        
        <img src={tellMeImg} alt="img" />
      </Container>
    </article>
  );
};

export default TellMe;
