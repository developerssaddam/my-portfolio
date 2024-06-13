import { Link } from "react-router-dom";
import Profile from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import "./home.css";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Md Saddam Hossen."],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 2000,
  });
  return (
    <section className="home section grid">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={Profile}
          alt="Home Image"
          className="home_img"
        />
      </div>
      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            {text}
            <br />
            <span>AS A FRONT END DEVELOPER.</span>
          </h1>

          <p className="home_description">
            Hi there! I`m a web designer & front-end developer focused on
            React.js, crafting clean & user-friendly experiences. I am
            passionate about building excellent software that improves the lives
            of those around me.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color_block"></div>
    </section>
  );
};

export default Home;
