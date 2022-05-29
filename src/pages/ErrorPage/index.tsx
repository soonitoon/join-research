import { Description, Layout } from "../../components";
import { Description as DescriptionType } from "../../types";

type Prop = {
  errorMessage: DescriptionType[];
};

const ErrorPage = ({ errorMessage }: Prop) => {
  return (
    <Layout>
      <Description description={errorMessage} isError={true} />
    </Layout>
  );
};

export default ErrorPage;
