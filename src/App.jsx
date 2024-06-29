import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import Skills from "./pages/Skills/Skills";
import TellMe from "./pages/TellMe/TellMe";

function App() {
  window.onscroll = () => {
    const navBarLink = document.querySelectorAll(".NavBar__link");
    const sections = document.querySelectorAll("section");
    const nav = document.querySelector(".NavBar");

    sections.forEach((sec) => {
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute("id");
      if (
        window.scrollY > offset &&
        window.scrollY < offset + sec.offsetHeight
      ) {
        navBarLink.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector(`.NavBar__links [href*=${id}]`)
            .classList.add("active");
        });
      }
    });

    if (window.scrollY >= 40) {
      nav.style.boxShadow = "0px 0px 20px -7px var(--main-color)";
    } else {
      nav.style.boxShadow = "none";
    }
  };

  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Services />
      <TellMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
