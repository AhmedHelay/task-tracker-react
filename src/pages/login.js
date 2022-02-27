import React from 'react';

import { Container } from "./../components/styles/container.styled"
import { Button } from "./../components/styles/button.styled"
import {CardWrapper, CardHeader, CardHeading, CardBody, CardInput} from "./../components/styles/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {

  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function onBlurChange(element){
    document.getElementById(element).style.borderBottomColor = 'red'
  }

  function onChange(element){

    document.getElementById(element).style.borderBottomColor = 'blue'
  }

  return (
    <>
      <Container>
        <CardWrapper>
          <CardHeader>
            <CardHeading>
              Login
            </CardHeading>
          </CardHeader>
          <CardBody>
          <form>
            <CardInput placeholder="Username" id='username' type="text" 
              onBlur={() => onBlurChange('username')} onChange={() => onChange('username')}  required />
            <CardInput placeholder="Password" id='password' type={passwordShown ? "text" : "password"}
              onBlur={() => onBlurChange('password')} onChange={() => onChange('password')}  required/>
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            <Button bg='#e5195f' color='#fff' onClick={togglePasswordVisiblity}  type="submit">Login</Button>
          </form>
          </CardBody>
          </CardWrapper> 
     </Container>
    </>
   );
}


export default Login; 
