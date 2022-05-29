import { useNavigate } from "react-router-dom";
import { Description, Layout, NextButton } from "../../../components";
import { descriptions } from "../../../contents";

const Description2 = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/test");

  return (
    <Layout>
      <Description description={descriptions.start.second} />
      <NextButton onClick={handleClick} />
    </Layout>
  );
};

export default Description2;