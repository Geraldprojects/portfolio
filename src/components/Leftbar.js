import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { FiLinkedin } from "react-icons/fi";
import "../styles/Bars.css";

export const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="icons">
        <span></span>
        <HiOutlineMail className="left-icons" />
        <FiLinkedin className="left-icons" />
        <VscGithubAlt className="left-icons" />
        <BiPhoneCall className="left-icons" />
        <AiOutlineInstagram className="left-icons" />
        <span></span>
      </div>
    </div>
  );
};
