import InputWithText from "../InputWithText";
import { placeholders } from "../../contents";
import getRandomInt from "../../utils/getRandomInt";
import NextButton from "../NextButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { Task1Inputs } from "../../types";
import React, { useEffect, useState } from "react";
import Description from "../Description";
import $ from "./style.module.scss";
import useStore from "../../hooks/useStore";
import getRandomEmailAddress from "../../utils/getRandomEmailAddress";

const Task1Form = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [age, setAge] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const randomWords = useStore((state) => state.randomWords);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task1Inputs>();

  useEffect(() => {
    setAge(getRandomInt(20, 60).toString());
    setEmailAddress(getRandomEmailAddress());
    setStartTime(new Date().getTime());
  }, []);

  const INPUT_DATA = [
    {
      registerName: "email" as const,
      sample: `${randomWords[0]}@${emailAddress}`,
      placeholder: placeholders.task1.email,
    },
    {
      registerName: "password" as const,
      sample: randomWords[1],
      placeholder: placeholders.task1.password,
    },
    {
      registerName: "name" as const,
      sample: randomWords[2],
      placeholder: placeholders.task1.name,
    },
    {
      registerName: "age" as const,
      sample: age,
      placeholder: placeholders.task1.age,
    },
    {
      registerName: "school" as const,
      sample: `${randomWords[3]} school`,
      placeholder: placeholders.task1.school,
    },
    {
      registerName: "petName" as const,
      sample: randomWords[4],
      placeholder: placeholders.task1.petName,
    },
    {
      registerName: "location" as const,
      sample: randomWords[5],
      placeholder: placeholders.task1.location,
    },
  ];

  const onSubmit: SubmitHandler<Task1Inputs> = () => {
    const endTime = new Date().getTime();
    const elapsed = endTime - startTime;

    console.log(elapsed);
    console.log(clickCount);
  };

  const handleFormClick = () => setClickCount((pre) => pre + 1);

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
