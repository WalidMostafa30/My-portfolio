import "./Skills.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { skillsData } from "../../assets/data/Data";
import { Container } from "react-bootstrap";

const Skills = () => {
  return (
    <section className="Skills" id="Skills">
      <GlobalTitle title={"My Skills"} description={"My Technical Level"} />

      <Container className="Skills__container">
        <div className="Skills__all-skills">
          {skillsData.map((skill, index) => {
            return (
              <div className="Skills__skill" key={index}>
                <h4>{skill}</h4>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
