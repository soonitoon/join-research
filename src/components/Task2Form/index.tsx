import InputWithText from "../InputWithText";
import Layout from "../Layout";
import NextButton from "../NextButton";
import $ from "./style.module.scss";

type Props = {};

const Task2Form = () => (
  <Layout>
    <InputWithText
      className={$["input-box"]}
      placeholder="이메일"
      sample="dawdad@gmail.com"
      value=""
      onChange={() => {}}
    />
    <NextButton className={$.button} type="submit" />
  </Layout>
);

export default Task2Form;
