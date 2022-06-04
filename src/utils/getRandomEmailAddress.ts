import getRandomInt from "./getRandomInt";

const emailList = ["gmail.com", "naver.com", "hanmail.net", "icloud.com"];

const getRandomEmailAddress = () => {
  const endIndex = emailList.length - 1;
  const randomIndex = getRandomInt(0, endIndex);
  const emailAddress = emailList[randomIndex];

  return emailAddress;
};

export default getRandomEmailAddress;
