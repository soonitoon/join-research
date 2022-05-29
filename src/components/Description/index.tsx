import classNames from "classnames";
import { Description as DescriptionType } from "../../types";
import $ from "./style.module.scss";

type Prop = {
  description: DescriptionType[];
  isError?: boolean;
};

const Description = ({ description, isError }: Prop) => {
  return (
    <div className={isError ? $.error : ""}>
      {description.map(({ text, isStrong }) => (
        <p key={text} className={classNames($.parse, { [$.strong]: isStrong })}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default Description;
