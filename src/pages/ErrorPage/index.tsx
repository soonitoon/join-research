import { Description, Layout } from "../../components";

type Prop = {
  errorMessage: string[];
};

const ErrorPage = ({ errorMessage }: Prop) => {
  return (
    <Layout>
      <Description description={errorMessage} isError={true} />
    </Layout>
  );
};

export default ErrorPage;
