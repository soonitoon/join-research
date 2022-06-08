import InputWithText from "../InputWithText";
import { placeholders } from "../../contents";
import getRandomInt from "../../utils/getRandomInt";
import NextButton from "../NextButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { Condition1TextIndex, Task1Inputs } from "../../types";
import React, { useEffect, useState } from "react";
import Description from "../Description";
import $ from "./style.module.scss";
import useStore from "../../hooks/useStore";
import getRandomEmailAddress from "../../utils/getRandomEmailAddress";
import { useNavigate } from "react-router-dom";

const Task1Form = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [age, setAge] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [touchCount, setTouchCount] = useState(0);
  const randomWords = useStore((state) => state.randomWords);
  const setCondition1Data = useStore((state) => state.setCondition1Data);
  const firstTask = useStore((state) => state.firtsTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task1Inputs>();
  const navigate = useNavigate();

  useEffect(() => {
    setAge(getRandomInt(20, 60).toString());
    setEmailAddress(getRandomEmailAddress());
    setStartTime(new Date().getTime());
  }, []);

  const INPUT_DATA = [
    {
      registerName: "email" as const,
      sample: `${randomWords[Condition1TextIndex.email]}@${emailAddress}`,
      placeholder: placeholders.task1.email,
    },
    {
      registerName: "password" as const,
      sample: randomWords[Condition1TextIndex.password],
      placeholder: placeholders.task1.password,
    },
    {
      registerName: "name" as const,
      sample: randomWords[Condition1TextIndex.name],
      placeholder: placeholders.task1.name,
    },
    {
      registerName: "age" as const,
      sample: age,
      placeholder: placeholders.task1.age,
    },
    {
      registerName: "school" as const,
      sample: `${randomWords[Condition1TextIndex.school]} school`,
      placeholder: placeholders.task1.school,
    },
    {
      registerName: "petName" as const,
      sample: randomWords[Condition1TextIndex.petName],
      placeholder: placeholders.task1.petName,
    },
    {
      registerName: "location" as const,
      sample: randomWords[Condition1TextIndex.location],
      placeholder: placeholders.task1.location,
    },
  ];

  const onSubmit: SubmitHandler<Task1Inputs> = () => {
    const endTime = new Date().getTime();
    const elapsedTimeMs = endTime - startTime;
    setCondition1Data({ elapsedTimeMs, touchCount });
    navigate(firstTask === "condition1" ? "/condition2" : "/end");
  };

  const handleFormClick = () => setTouchCount((pre) => pre + 1);

  return (
    <form
      className={$.form}
      onSubmit={handleSubmit(onSubmit)}
      onClick={handleFormClick}
    >
      {INPUT_DATA.map(({ registerName, sample, placeholder }) => (
        <React.Fragment key={registerName}>
          <Description
            description={{
              text: errors[registerName]
                ? `${placeholder}(을)를 다시 확인해주세요`
                : "",
              isStrong: true,
            }}
          />
          <InputWithText
            className={$.input}
            register={() =>
              register(registerName, {
                required: true,
                pattern: new RegExp(sample),
              })
            }
            {...{ placeholder, sample }}
          />
        </React.Fragment>
      ))}
      <NextButton type="submit" />
    </form>
  );
};

export default Task1Form;
