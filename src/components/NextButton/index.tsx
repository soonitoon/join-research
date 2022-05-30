import { MouseEventHandler } from "react";
import $ from "./style.module.scss";

type Prop =
  | { type: "submit" }
  | {
      type: "button";
      onClick: MouseEventHandler<HTMLButtonElement>;
    };

const NextButton = (prop: Prop) => {
  return (
    <button className={$.button} {...prop}>
      다음
    </button>
  );
};

export default NextButton;
