import { MouseEventHandler } from "react";
import $ from "./style.module.scss";

type Prop = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const NextButton = ({ onClick }: Prop) => {
  return (
    <button className={$.button} onClick={onClick}>
      다음
    </button>
  );
};

export default NextButton;
