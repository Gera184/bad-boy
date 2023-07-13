import { ButtonGroupWrapper} from "./ButtonGroup.styles";

const ButtonGroup = ({ direction,children }) => {
  return <ButtonGroupWrapper direction={direction}>{children}</ButtonGroupWrapper>;
};

export default ButtonGroup; 