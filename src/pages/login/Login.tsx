import LoginGroundWaves from './loginGroundWaves/LoginGroundWaves';
import VerticalContainer from '../../components/verticalContainer/VerticalContainer';
import './login.css';
import LoginBubbles from './loginBubbles/LoginBubbles';
import "./loginBubbles/LoginBubbles.css";
import { useState } from 'react';
import AccountSelection from './accountSelection/AccountSelection';
import AuthCode from './authCode/AuthCode';

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
      <LoginGroundWaves />
      <LoginBubbles />
    </VerticalContainer>
  );
}

export default Login;