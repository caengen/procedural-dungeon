import { string } from "prop-types";

export interface IColors {
  [key: string]: {
    Lightest: string;
    Light: string;
    Base: string;
    Dark: string;
    Darkest: string;
  };
}

export const Colors: IColors = {
  Stone: {
    Lightest: "#6F7B7E",
    Light: "#525F62",
    Base: "#3A4548",
    Dark: "#1C2224",
    Darkest: "#132226"
  },
  Earth: {
    Lightest: "#CBC4B2",
    Light: "#9E9684",
    Base: "#746D5C",
    Dark: "#3A362D",
    Darkest: "#3E341E"
  }
};
