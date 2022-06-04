import { Description, Layout } from "../../components";
import { Description as DescriptionType } from "../../types";

type Prop = {
  description: DescriptionType[];
  type: "error" | "description";
};

const OnlyTextPage = ({ description, type }: Prop) => {
  const isError = type === "error";

  return (
    <Layout>
      <Description {...{ description, isError }} />
    </Layout>
  );
};

export default OnlyTextPage;
