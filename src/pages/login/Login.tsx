import Button from '../../components/button/Button';
import VerticalContainer from '../../components/verticalContainer/VerticalContainer';
import './login.css';

function Login() {
  return (
    <VerticalContainer className="login-page-container">
      <h1>Login</h1>
      <VerticalContainer className="action-container">
        <a className="demo-link">Try the demo profil</a>
        <Button>Send authentification code</Button>
      </VerticalContainer>
    </VerticalContainer>
  );
}

export default Login;