import { TextType, changeTextStyle } from "../helpers/changeTextStyle";
export const changeTextBold = () => {
  console.log("change text to bold!");
  changeTextStyle(TextType.Bold);
};
