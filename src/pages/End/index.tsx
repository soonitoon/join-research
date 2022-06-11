import { Link } from "react-router-dom";
import { Description, Layout, NextButton } from "../../components";
import { descriptions } from "../../contents";

const GOOGLE_FORM_URL = "https://forms.gle/rC4Sx7vrPtN5KiYH7";

const End = () => {
  return (
    <Layout>
      <Description isError={false} description={descriptions.end} />
      <NextButton type="link" url={GOOGLE_FORM_URL} />
    </Layout>
  );
};

export default End;
