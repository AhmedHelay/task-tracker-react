import React from "react";

import { Container } from "./../components/styles/container.styled";
import { Button } from "./../components/styles/button.styled";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardInput,
} from "./../components/styles/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function handleEvent(event) {
    const { value } = event.target;
    if (event.type === "blur") {
      //OnBlur
      event.target.style.borderBottomColor = "red";
    } else if (event.type === "change") {
      //OnChange
      event.target.style.borderBottomColor = "blue";
      event.target.value = value.trim(); 
    }
  }

  return (
    <>
      <Container>
        <CardWrapper>
          <CardHeader>
            <CardHeading>Login</CardHeading>
          </CardHeader>
          <CardBody>
            <form>
              <CardInput
                placeholder="Username"
                id="username"
                type="text"
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                required
              />
              <CardInput
                placeholder="Password"
                id="password"
                type={passwordShown ? "text" : "password"}
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                required
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>
              <Button
                bg="#e5195f"
                color="#fff"
                onClick={togglePasswordVisiblity}
                type="submit"
              >
                Login
              </Button>
            </form>
          </CardBody>
        </CardWrapper>
      </Container>
    </>
  );
}

export default Login;
