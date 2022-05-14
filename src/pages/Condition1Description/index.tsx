import { useNavigate } from "react-router-dom";
import { Description, Layout, NextButton } from "../../components";
import { descriptions } from "../../contents";

const Condition1Description = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("task");
  return (
    <Layout>
      <Description description={descriptions.condition1} />
      <NextButton onClick={handleClick} />
    </Layout>
  );
};

export default Condition1Description;
