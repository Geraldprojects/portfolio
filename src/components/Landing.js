import { useCallback, useState, useEffect } from "react";
import "../styles/Landing.css";
const skills = [
  "Front-end Developement",
  "Back-end Development",
  "Desktop Development",
  "Database Development",
  "Fullstack-development",
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
      <div className="intro-me">
        <p>Hey, my name is</p>
        <h1>Gerald Mpyana.</h1>
        <h2>I specialize in {skill} </h2>
      </div>
      <div className="background-description">
        <p>I am Software Developer based in South Africa(JHB),</p>
      </div>
    </div>
  );
};
