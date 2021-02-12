import React, { useState } from "react";
import { ReleaseMenuItems } from "./ReleaseMenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function ReleasesDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {ReleaseMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {" "}
                {item.title}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
       
    </>
  );
}
export default ReleasesDropdown;
