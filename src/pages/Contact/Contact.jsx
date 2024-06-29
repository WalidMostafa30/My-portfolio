import "./Contact.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import GlobalCard from "../../components/GlobalCard/GlobalCard";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="Contact" id="Contact">
      <GlobalTitle title={"Contact Me"} description={"Get In Touch"} />
      <Container className="Contact__container">
        <div className="Contact__talkToMe">
          <div className="Contact__Card">
            <GlobalCard
              head={"E-mail"}
              icon={faEnvelope}
              info={"walidmoustafa436@gmail.com"}
            />
          </div>

          <div className="Contact__Card">
            <GlobalCard
              head={"Whatsapp"}
              icon={faWhatsapp}
              info={"0106 525 4159"}
            />
          </div>

          <div className="Contact__Card">
            <GlobalCard
              head={"Facebook"}
              icon={faFacebook}
              info={"Walid Mostafa"}
            />
          </div>
        </div>

        <form className="Contact__form">
          <div className="Contact__form-input">
            <label htmlFor="Name">Name</label>
            <input id="Name" type="text" />
          </div>

          <div className="Contact__form-input">
            <label htmlFor="E-mail">E-mail</label>
            <input id="E-mail" type="text" />
          </div>

          <div className="Contact__form-input">
            <label htmlFor="Message">Message</label>
            <textarea id="Message" />
          </div>

          <a href={"email"} className="main-btn">
            Send Message <FontAwesomeIcon icon={faPaperPlane} />
          </a>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
