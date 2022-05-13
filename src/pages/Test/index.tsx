import { ChangeEventHandler, useState } from "react";
import { Description, NextButton, InputWithText } from "../../components";
import { descriptions, sampleTexts, alerts } from "../../contents";
import $ from "./style.module.scss";

const Test = () => {
  const [textValue, setTextValue] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [start, setStart] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const calculateTime = () => {
    const end = new Date().getTime();
    const elapsed = end - start;
    console.log(elapsed);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
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
    if (!isDone) alert(alerts.incomplete);
  };

  return (
    <main className={$.main}>
      <Description description={descriptions.typingTest} />
      <InputWithText value={textValue} onChange={handleChange} />
      <NextButton onClick={handleClick} />
    </main>
  );
};

export default Test;
