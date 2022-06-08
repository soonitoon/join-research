import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Description, Layout, NextButton } from "../../../components";
import { descriptions } from "../../../contents";
import useStore from "../../../hooks/useStore";

const Description1 = () => {
  const navigate = useNavigate();
  const firstTask = useStore((state) => state.firtsTask);

  const handleClick = () => navigate("/second");

  useEffect(() => console.log(firstTask));

  return (
    <Layout>
      <Description description={descriptions.start.first} />
      <NextButton onClick={handleClick} type="button" />
    </Layout>
  );
};

export default Description1;
