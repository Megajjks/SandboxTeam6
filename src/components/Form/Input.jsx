import { useState } from "react";
import { SIinput, SBbuutton } from "./styles"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"

export default function ToggleInput({ value, onChange, name, pattern }) {
  const [eye, setEye] = useState(false);

  const toggleEye = () => {
    setEye(prevState => !prevState);
  }

  return (
    <>
      <SIinput pattern={pattern} type={eye ? "text" : "password"} name={name} value={value} onChange={onChange} />
      <SBbuutton onClick={toggleEye}>
        {eye ? <AiOutlineEyeInvisible /> :
          <AiOutlineEye />}
      </SBbuutton>
    </>
  )
}
