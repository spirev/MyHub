import Button from '../../components/button/Button';
import LoginGroundWaves from './loginGroundWaves/LoginGroundWaves';
import VerticalContainer from '../../components/verticalContainer/VerticalContainer';
import './login.css';
import LoginBubbles from './loginBubbles/LoginBubbles';
import "./loginBubbles/LoginBubbles.css";

function Login() {
  return (
    <VerticalContainer className="login-page-container">
      <VerticalContainer className="desktop-background-container">
        <VerticalContainer className="mobile-content-container">
          <h1>Login</h1>
          <VerticalContainer className="action-container">
            <a className="demo-link">Try the demo profile</a>
            <Button>Get code</Button>
          </VerticalContainer>
        </VerticalContainer>
      </VerticalContainer>
      <LoginGroundWaves />
      <LoginBubbles />
    </VerticalContainer>
  );
}

export default Login;