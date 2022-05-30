import classnames from "classnames";
import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import $ from "./style.module.scss";

type Props =
  | {
      register: () => UseFormRegisterReturn;
      placeholder: string;
      sample: string;
      className?: string;
    }
  | {
      value: string;
      onChange: ChangeEventHandler<HTMLInputElement>;
      placeholder: string;
      sample: string;
      className?: string;
    };

const InputWithText = (prop: Props) => {
  if ("register" in prop) {
    const { register, placeholder, sample, className } = prop;

    return (
      <div className={classnames($.contaienr, className)}>
        <input
          className={$.input}
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          {...register()}
        />
        <span className={$.sample}>{sample}</span>
      </div>
    );
  }

  const { value, onChange, placeholder, sample, className } = prop;

  return (
    <div className={classnames($.contaienr, className)}>
      <input
        className={$.input}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        {...{ value, onChange }}
      />
      <span className={$.sample}>{sample}</span>
    </div>
  );
};

export default InputWithText;
