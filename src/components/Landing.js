import { useCallback, useState, useEffect } from "react";
import "../styles/Landing.css";

const skills = [
  "Frontend Developement",
  "Backend  Development",
  "Desktop Development",
  "Database Development",
  "Fullstack Development",
];
export const Landing = () => {
  const [skill, setSkill] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * skills.length);
    setSkill(skills[index]);
  }, []);

  useEffect(() => {
    const interval = setInterval(shuffle, 3500);
    return () => clearInterval(interval);
  }, [shuffle]);
  return (
    <div className="intro">
      <div className="container">
        <div className="intro-me">
          <p>Hey, my name is</p>
          <h1>Gerald Mpyana.</h1>
          <h2>I am a Software Developer </h2>
          <div className="background-description">
            <p>I specialize in {skill} </p>
          </div>
          <div>
            <button>Lets Collaborate!</button>
          </div>
        </div>
      </div>

      <div className="scroller">
        <img src="/images/down-arrow.svg" alt="scroll down" />
      </div>
    </div>
  );
};
