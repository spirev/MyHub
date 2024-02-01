import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import TextInput from "../../../components/textInput/TextInput";
import VerticalContainer from "../../../components/verticalContainer/VerticalContainer";
import { Dispatch, SetStateAction } from "react";
import "./AuthCode.css";

interface AuthCodeSpec {
  authCode: string,
  setAuthCode: Dispatch<SetStateAction<string>>,
}

function AuthCode( props: AuthCodeSpec ) {
  const { authCode, setAuthCode } = props;
  const navigate = useNavigate();

  return (
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
  );
}

export default AuthCode;
