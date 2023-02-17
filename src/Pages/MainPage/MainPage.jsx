import React from "react";
import { Link } from "react-router-dom";
import { Button, MainPageH1 } from "../../Components/Styles/styles";

function MainPage() {
  return (
    <div>
      <MainPageH1>Thanks for listening 💅</MainPageH1>
      <Link to={"https://github.com/ItzAle/Styled-Components"} target="_blank">
        <Button>Github Page</Button>
      </Link>
    </div>
  );
}

export default MainPage;
