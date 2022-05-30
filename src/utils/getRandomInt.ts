import { GetRandomInt } from "../types";

const getRandomInt: GetRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export default getRandomInt;
