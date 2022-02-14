import React from "react";
import "../styles/MenuItems.css";



export const MenuItems = ({onClick,Icon,Title}) => {
    return (
        <div onClick={onClick} className="MenuItems">
          <Icon className="menuIcon" />
          <h2 className="MenuTitle">{Title}</h2>
        </div>
      );
}

