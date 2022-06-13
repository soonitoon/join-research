import { useNavigate } from "react-router-dom";
import { Description, Layout, NextButton } from "../../../components";
import { descriptions } from "../../../contents";

const Description1 = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/second");

  return (
    <Layout>
      <Description description={descriptions.start.first} />
      <NextButton onClick={handleClick} type="button" />
    </Layout>
  );
};

export default Description1;
