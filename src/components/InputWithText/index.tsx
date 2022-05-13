import { ChangeEventHandler } from "react";
import { sampleTexts, placeholders } from "../../contents";
import $ from "./style.module.scss";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputWithText = ({ value, onChange }: Props) => {
  return (
    <div className={$.contaienr}>
      <input
        className={$.input}
        type="text"
        autoComplete="off"
        placeholder={placeholders.test}
        {...{ value, onChange }}
      />
      <span>{sampleTexts.test}</span>
    </div>
  );
};

export default InputWithText;
