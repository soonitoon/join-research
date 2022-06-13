import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import shallow from "zustand/shallow";
import db from "../../firebase/db";
import { Description, Layout, NextButton } from "../../components";
import { descriptions } from "../../contents";
import useStore from "../../hooks/useStore";
import OnlyTextPage from "../OnlyTextPage";

const GOOGLE_FORM_URL = "https://forms.gle/rC4Sx7vrPtN5KiYH7";

const End = () => {
  const [isFetched, setIsFetched] = useState(false);
  const [isError, setIsError] = useState(false);
  const studyData = useStore(
    ({
      firtsTask,
      personalInformation,
      screenSize,
      typingSpeedMs,
      randomWords,
      condition1Data,
      condition2Data,
    }) => ({
      firtsTask,
      personalInformation,
      screenSize,
      typingSpeedMs,
      randomWords,
      condition1Data,
      condition2Data,
    }),
    shallow
  );

  useEffect(() => {
    const pushData = async () => {
      try {
        await addDoc(collection(db, "participants"), studyData);
        setIsFetched(true);
      } catch (e) {
        setIsFetched(false);
        setIsError(true);
      }
    };

    pushData();
  }, [studyData]);

  if (!isFetched)
    return (
      <OnlyTextPage description={descriptions.dataPush} type="description" />
    );

  if (isError)
    return (
      <OnlyTextPage
        description={descriptions.error.dataPushError}
        type="error"
      />
    );

  return (
    <Layout>
      <Description isError={false} description={descriptions.end} />
      <NextButton type="link" url={GOOGLE_FORM_URL} />
    </Layout>
  );
};

export default End;
