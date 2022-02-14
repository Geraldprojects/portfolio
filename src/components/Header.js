import React from "react";
import "../styles/Header.css";
import { MenuItems } from "./MenuItems";
import FeedIcon from "@mui/icons-material/Feed";
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TopicIcon from '@mui/icons-material/Topic';
export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>G</h1>
      </div>
      <div className="menu-item">
        <MenuItems Icon={FeedIcon} Title="About" />
        <MenuItems Icon={WorkIcon} Title="Experiences" />
        <MenuItems Icon={AccountTreeIcon} Title="Work" />
        <MenuItems Icon={ContactMailIcon} Title="Contact" />
        <MenuItems Icon={TopicIcon} Title="Resume" />
      </div>
    </div>
  );
};
