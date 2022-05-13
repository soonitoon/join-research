import { useNavigate } from "react-router-dom";
import { Description, NextButton } from "../../components";
import { descriptions } from "../../contents";
import $ from "./style.module.scss";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/test");

  return (
    <main className={$.main}>
      <Description description={descriptions.start} />
      <NextButton onClick={handleClick} />
    </main>
  );
};

export default Main;
