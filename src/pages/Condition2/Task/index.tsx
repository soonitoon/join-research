import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  Description,
  InputWithText,
  Layout,
  NextButton,
} from "../../../components";
import { placeholders } from "../../../contents";
import useStore from "../../../hooks/useStore";
import { Condition2TextIndex } from "../../../types";
import getRandomEmailAddress from "../../../utils/getRandomEmailAddress";
import getRandomInt from "../../../utils/getRandomInt";
import $ from "./style.module.scss";

const Task = () => {
  const [formDataIndex, setFormDataIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [startTime, setStartTime] = useState<Date>();

  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();
  const words = useStore((state) => state.randomWords);
  const setCondition2Data = useStore((state) => state.setCondition2Data);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const randomWord = words[Condition2TextIndex.email];
    const randomEmailAddress = getRandomEmailAddress();

    setEmail(`${randomWord}@${randomEmailAddress}`);
    setAge(getRandomInt(20, 60).toString());
    setStartTime(new Date());
  }, []);

  const FORM_DATA = [
    {
      placeholder: placeholders.task1.email,
      sample: email,
    },
    {
      placeholder: placeholders.task1.password,
      sample: words[Condition2TextIndex.password],
    },
    {
      placeholder: placeholders.task1.name,
      sample: words[Condition2TextIndex.name],
    },
    {
      placeholder: placeholders.task1.age,
      sample: age,
    },
    {
      placeholder: placeholders.task1.school,
      sample: words[Condition2TextIndex.school],
    },
    {
      placeholder: placeholders.task1.petName,
      sample: words[Condition2TextIndex.petName],
    },
    {
      placeholder: placeholders.task1.location,
      sample: words[Condition2TextIndex.location],
    },
  ];

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setInputValue(value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const isCorrect = inputValue === FORM_DATA[formDataIndex].sample;
    const lastIndex = Condition2TextIndex.location;
    const isLastIndex = formDataIndex === lastIndex;

    if (isCorrect) {
      setIsError(false);

      if (isLastIndex) {
        const endTime = new Date();
        const elapsedTimeMs = endTime.getTime() - startTime!.getTime();
        setCondition2Data({ elapsedTimeMs });

        navigate("/end");
        return;
      }
      setFormDataIndex((pre) => ++pre);
      setInputValue("");
      return;
    }

    setIsError(true);
    inputRef.current?.focus();
  };

  return (
    <Layout>
      <form className={$.form} onSubmit={handleSubmit}>
        <div className={$["input-box"]}>
          <Description
            description={{
              text: isError
                ? `${FORM_DATA[formDataIndex].placeholder}(을)를 다시 확인해주세요`
                : "",
              isStrong: true,
            }}
          />
          <InputWithText
            placeholder={FORM_DATA[formDataIndex].placeholder}
            sample={FORM_DATA[formDataIndex].sample}
            value={inputValue}
            onChange={handleChange}
            refObject={inputRef}
          />
        </div>
        <NextButton className={$.button} type="submit" />
      </form>
    </Layout>
  );
};

export default Task;
