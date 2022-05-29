import { ChangeEventHandler } from "react";
import { sampleTexts, placeholders } from "../../contents";
import $ from "./style.module.scss";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  sample: string;
};

const InputWithText = ({ value, onChange, placeholder, sample }: Props) => {
  return (
    <div className={$.contaienr}>
      <input
        className={$.input}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        {...{ value, onChange }}
      />
      <span>{sample}</span>
    </div>
  );
};

export default InputWithText;
