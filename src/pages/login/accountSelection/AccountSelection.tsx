import { Dispatch, SetStateAction } from "react";
import Button from "../../../components/button/Button";
import VerticalContainer from "../../../components/verticalContainer/VerticalContainer";
import "./AccountSelection.css";

interface AccountSelectionSpec {
  setIsCodeSent: Dispatch<SetStateAction<boolean>>,
}

function AccountSelection(props: AccountSelectionSpec) {
  const { setIsCodeSent } = props;

  const handleSetCode = () => {
    setIsCodeSent(true);
  };

  return (
    <VerticalContainer className="action-container">
      <a className="demo-link">Try the demo profile</a>
      <Button onClick={handleSetCode}>Get code</Button>
    </VerticalContainer>
  );
}

export default AccountSelection;
