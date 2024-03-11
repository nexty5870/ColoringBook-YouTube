import colors from "../../real-colors.json";

interface Colors {
  [key: string]: {
    name: string;
    hex: string;
  }[];
}

const tmp: Colors = colors;

export const solidColors = [{
  name: "",
  hex: "transparent",
}, ...Object.keys(colors).flatMap(color => tmp[color])];

export const solidColors2 = [
  {
    key: "",
    name: "Not specified",
    bgColor: "#FFFFFF",
    textColor: "#020617B2",
    borderColor: "#000000B2",
  },
  {
    key: "red",
    name: "Red",
    bgColor: "#DE1927",
    textColor: "#020617B2",
  },
  {
    key: "pink",
    name: "Pink",
    bgColor: "#F5006E",
    textColor: "#020617B2",
  },
  {
    key: "magenta",
    name: "Magenta",
    bgColor: "#DD17AD",
    textColor: "#020617B2",
  },
  {
    key: "violet",
    name: "Violet",
    bgColor: "#8C05EF",
    textColor: "#020617B2",
  },
  {
    key: "blue",
    name: "Blue",
    bgColor: "#3330FF",
    textColor: "#020617B2",
  },
  {
    key: "azure",
    name: "Azure",
    bgColor: "#2D9FFB",
    textColor: "#020617B2",
  },
  {
    key: "aquamarine",
    name: "Aquamarine",
    bgColor: "#42FA77",
    textColor: "#020617B2",
  },
  {
    key: "green",
    name: "Green",
    bgColor: "#41D121",
    textColor: "#020617B2",
  },
  {
    key: "lime",
    name: "Lime",
    bgColor: "#A9FF06",
    textColor: "#020617B2",
  },
  {
    key: "yellow",
    name: "Yellow",
    bgColor: "#FDEB00",
    textColor: "#020617B2",
  },
  {
    key: "orange",
    name: "Orange",
    bgColor: "#F4810C",
    textColor: "#020617B2",
  },
  {
    key: "white",
    name: "White",
    bgColor: "#FAFAFA",
    textColor: "#020617B2",
  },
  {
    key: "off-white",
    name: "Off White",
    bgColor: "#D5D5D5",
    textColor: "#020617B2",
  },
  {
    key: "beige",
    name: "Beige",
    bgColor: "#F0D8BB",
    textColor: "#020617B2",
  },
  {
    key: "grey",
    name: "Grey",
    bgColor: "#878787",
    textColor: "#020617B2",
  },
  {
    key: "black",
    name: "Black",
    bgColor: "#000000",
    textColor: "#FFFFFF99",
  },
  {
    key: "gold",
    name: "Gold",
    bgColor: "#F2A93C",
    textColor: "#020617B2",
  },
  {
    key: "bronze",
    name: "Bronze",
    bgColor: "#BA573F",
    textColor: "#020617B2",
  },
  {
    key: "silver",
    name: "Silver",
    bgColor: "#AFCEDD",
    textColor: "#020617B2",
  },
];