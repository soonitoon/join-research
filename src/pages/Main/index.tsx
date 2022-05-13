import { useNavigate } from "react-router-dom";
import { Description, Layout, NextButton } from "../../components";
import { descriptions } from "../../contents";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/test", { replace: true });

  return (
    <Layout>
      <Description description={descriptions.start} />
      <NextButton onClick={handleClick} />
    </Layout>
  );
};

export default Main;
