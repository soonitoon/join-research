import classNames from "classnames";
import { Description as DescriptionType } from "../../types";
import $ from "./style.module.scss";

type Prop = {
  description: DescriptionType[] | DescriptionType;
  isError?: boolean;
};

const Description = ({ description, isError }: Prop) => {
  return (
    <div className={isError ? $.error : ""}>
      {"length" in description ? (
        description.map(({ text, isStrong }) => (
          <p
            key={text}
            className={classNames($.parse, { [$.strong]: isStrong })}
          >
            {text}
          </p>
        ))
      ) : (
        <p
          className={classNames($.parse, { [$.strong]: description.isStrong })}
        >
          {description.text}
        </p>
      )}
    </div>
  );
};

export default Description;
