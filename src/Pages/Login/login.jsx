import React from "react";
import { Link } from "react-router-dom";
import { Button, FlexDiv, Input } from "../../Components/Styles/styles";

function Login() {
  return (
    <div>
      <FlexDiv>
        <Input type="text" name="user" placeholder="User" />
        <Input type="password" name="user" placeholder="Password" />
        <Link to="/Home">
          <Button>Login</Button>
        </Link>
      </FlexDiv>
    </div>
  );
}

export default Login;
