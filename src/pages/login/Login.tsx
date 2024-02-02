import { useState } from 'react';
import VerticalContainer from '../../components/verticalContainer/VerticalContainer';
import './login.css';
import AccountSelection from './accountSelection/AccountSelection';
import AuthCode from './authCode/AuthCode';
import Bubbles from './bubbles/Bubbles';
import GroundWaves from './groundWaves/GroundWaves';

function Login() {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [authCode, setAuthCode] = useState('');

  return (
    <VerticalContainer className="login-page-container">
      <VerticalContainer className="desktop-background-container">
        <VerticalContainer className="mobile-content-container">
          <h1>Login</h1>
          {isCodeSent ? (
            <AuthCode
              authCode={authCode}
              setAuthCode={setAuthCode}
            />
          ) : (
            <AccountSelection setIsCodeSent={setIsCodeSent} />
          )}
        </VerticalContainer>
      </VerticalContainer>
      <GroundWaves />
      <Bubbles />
    </VerticalContainer>
  );
}

export default Login;