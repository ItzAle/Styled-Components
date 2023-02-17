import React from "react";
import { Link } from "react-router-dom";
import { StyledLink } from "../../Components/Styles/styles";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h1>This is a test for Styled Components 💅</h1>
          </li>
          <StyledLink
            to={"https://github.com/ItzAle/Styled-Components"}
            target="_blank"
          >
            <li>Github Page</li>
          </StyledLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
