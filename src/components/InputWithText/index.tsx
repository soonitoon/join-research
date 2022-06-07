import classnames from "classnames";
import { ChangeEventHandler, RefObject } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import $ from "./style.module.scss";

type BasicProps = {
  placeholder: string;
  sample: string;
  className?: string;
  refObject?: RefObject<HTMLInputElement>;
};

type RegisterProps = {
  register: () => UseFormRegisterReturn;
} & BasicProps;

type OnChangeProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & BasicProps;

type Props = RegisterProps | OnChangeProps;

const InputWithText = (props: Props) => {
  let inputController;
  const {
    className,
    placeholder,
    sample,
    refObject,
    ...conditionalAttributes
  } = props;

  if ("register" in conditionalAttributes)
    inputController = conditionalAttributes.register();
  else inputController = conditionalAttributes;

  return (
    <div className={classnames($.contaienr, className)}>
      <input
        className={$.input}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        ref={refObject}
        {...inputController}
      />
      <span className={$.sample}>{sample}</span>
    </div>
  );
};

export default InputWithText;
