import { useNavigate } from "react-router-dom";
import {
  Description as DescriptionText,
  Layout,
  NextButton,
} from "../../../components";
import { descriptions } from "../../../contents";

const Description = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("task");
  return (
    <Layout>
      <DescriptionText description={descriptions.condition1} />
      <NextButton onClick={handleClick} />
    </Layout>
  );
};

export default Description;
