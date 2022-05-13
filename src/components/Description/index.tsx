type Prop = {
  description: string;
};

const Description = ({ description }: Prop) => {
  return <p>{description}</p>;
};

export default Description;
