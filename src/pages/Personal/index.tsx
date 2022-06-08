import { useForm } from "react-hook-form";
import {
  Description,
  InputWithText,
  Layout,
  NextButton,
} from "../../components";
import useStore from "../../hooks/useStore";
import { descriptions, placeholders } from "../../contents";
import { PersonalInformationInputs } from "../../types";
import $ from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const navigate = useNavigate();
  const setPersonalInformation = useStore(
    (state) => state.setPersonalInformation
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInformationInputs>();

  const onSubmit = ({ birth, phone }: PersonalInformationInputs) => {
    const time = new Date();
    const personalCode = `${time}${birth}${phone}`;
    setPersonalInformation(personalCode);
    navigate("/test");
  };

  return (
    <Layout>
      <Description description={descriptions.personal} />
      <form className={$.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={$["input-box"]}>
          {errors.birth && (
            <Description
              isError={true}
              description={descriptions.error.personalInputError.birth}
            />
          )}
          <InputWithText
            className={$["birth-input"]}
            placeholder={placeholders.personal.birth}
            sample="1998년생 -> 98"
            register={() =>
              register("birth", { required: true, pattern: /[0-9]{2}/ })
            }
          />
          {errors.phone && (
            <Description
              isError={true}
              description={descriptions.error.personalInputError.phone}
            />
          )}
          <InputWithText
            placeholder="전화번호 뒷자리"
            sample="010-1234-5678 -> 5678"
            register={() =>
              register("phone", { required: true, pattern: /[0-9]{4}/ })
            }
          />
        </div>
        <NextButton type="submit" />
      </form>
    </Layout>
  );
};

export default Personal;
