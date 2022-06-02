import { useState } from "react";
import {
  InputPassword,
  ButtonPassword,
  ToggleWrapper,
} from "./ToggleInputStyle";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function ToggleInput({
  value,
  name,
  pattern,
  isRequired,
  onChange,
}) {
  const [eye, setEye] = useState(false);

  const toggleEye = () => {
    setEye((prevState) => !prevState);
  };

  return (
    <ToggleWrapper>
      <InputPassword
        pattern={pattern}
        type={eye ? "text" : "password"}
        name={name}
        value={value}
        required={isRequired}
        onChange={onChange}
      />
      <ButtonPassword type="button" onClick={toggleEye}>
        {eye ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </ButtonPassword>
    </ToggleWrapper>
  );
}
