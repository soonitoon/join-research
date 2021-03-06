import classNames from "classnames";
import { MouseEventHandler } from "react";
import $ from "./style.module.scss";

type Prop =
  | { type: "submit"; className?: string }
  | {
      type: "button";
      onClick: MouseEventHandler<HTMLButtonElement>;
      className?: string;
    }
  | {
      type: "link";
      url: string;
      className?: string;
    };

const NextButton = ({ className, ...prop }: Prop) => {
  if (prop.type === "link")
    return (
      <a className={$.button} href={prop.url}>
        다음
      </a>
    );
  return (
    <button className={classNames($.button, className)} {...prop}>
      다음
    </button>
  );
};

export default NextButton;
