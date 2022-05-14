import $ from "./style.module.scss";

type Prop = {
  description: string[];
  isError?: boolean;
};

const Description = ({ description, isError }: Prop) => {
  return (
    <div className={isError ? $.error : ""}>
      {description.map((text) => (
        <p key={text} className={$.prase}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default Description;
