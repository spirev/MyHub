import Button from '../../components/button/Button';
import LoginGroundWaves from './loginGroundWaves/LoginGroundWaves';
import VerticalContainer from '../../components/verticalContainer/VerticalContainer';
import './login.css';
import LoginBubbles from './loginBubbles/LoginBubbles';
import "./loginBubbles/LoginBubbles.css";
import { useState } from 'react';
import TextInput from '../../components/textInput/TextInput';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [authCode, setAuthCode] = useState('');

  const navigate = useNavigate();

  return (
    <VerticalContainer className="login-page-container">
      <VerticalContainer className="desktop-background-container">
        <VerticalContainer className="mobile-content-container">
          <h1>Login</h1>
          {isCodeSent ? (
            <VerticalContainer className="action-container-code-sent">
              <VerticalContainer className="code-container">
                <h2>Enter the code sent to your email address</h2>
                <TextInput onChange={(e) => setAuthCode(e.target.value)} />
              </VerticalContainer>
              <VerticalContainer className="action-container">
                <a>back</a>
                <Button
                  disable={!authCode}
                  onClick={() => navigate("/home")}
                >
                  Login
                </Button>
              </VerticalContainer>
            </VerticalContainer>
          ) : (
            <VerticalContainer className="action-container">
              <a className="demo-link">Try the demo profile</a>
              <Button onClick={() => setIsCodeSent(true)}>Get code</Button>
            </VerticalContainer>
          )}
        </VerticalContainer>
      </VerticalContainer>
      <LoginGroundWaves />
      <LoginBubbles />
    </VerticalContainer>
  );
}

export default Login;