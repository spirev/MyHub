import Button from '../../components/button/Button';
import LavaLampGround from '../../components/lavaLampGround/LavaLampGround';
import VerticalContainer from '../../components/verticalContainer/VerticalContainer';
import './login.css';

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
      <LavaLampGround/>
    </VerticalContainer>
  );
}

export default Login;