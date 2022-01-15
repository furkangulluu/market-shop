import { check } from "../../../assets/icons";
import { Container, RadioButton } from "./radio.styled"

const Radio = (props: {
  id?: string;
  checked?: boolean;
  label: string;
  onClick: Function;
}) => {
  return (
    <Container
      onClick={() => {
        props.onClick();
      }}
    >
      <RadioButton
        id={props.id}
        style={{ borderColor: props.checked ? "#1EA4CE" : "" }}
      >
        {props.checked && <img src={check} alt="" />}
      </RadioButton>
      <div className="label">{props.label}</div>
    </Container>
  );
};

export default Radio;
