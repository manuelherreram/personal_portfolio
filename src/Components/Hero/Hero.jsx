import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Manuel Herrera,</span> Full-stack developer based in Chile
      </h1>
      <p>
        I am a Full-stack developer from Valparaiso, Chile with 2 years of
        experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          {" "}
          <a
            href="https://www.linkedin.com/in/manuelherreramontoya/"
            target="_blank"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
