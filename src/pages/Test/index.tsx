import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Description,
  NextButton,
  InputWithText,
  Layout,
} from "../../components";
import {
  descriptions,
  sampleTexts,
  alerts,
  placeholders,
} from "../../contents";

const Test = () => {
  const [textValue, setTextValue] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [start, setStart] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const navigate = useNavigate();

  const calculateTime = () => {
    const end = new Date().getTime();
    const elapsed = end - start;
    console.log(elapsed);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    if (isDone) return;

    setTextValue(value);

    if (!isStarted) {
      setStart(new Date().getTime());
      setIsStarted(true);
    }

    if (value === sampleTexts.test) {
      calculateTime();
      setIsDone(true);
    }
  };

  const handleClick = () => {
    if (!isDone) {
      alert(alerts.incomplete);
      return;
    }
    navigate("/condition1");
  };

  return (
    <Layout>
      <Description description={descriptions.typingTest} />
      <InputWithText
        value={textValue}
        onChange={handleChange}
        sample={sampleTexts.test}
        placeholder={placeholders.test}
      />
      <NextButton onClick={handleClick} type="button" />
    </Layout>
  );
};

export default Test;
