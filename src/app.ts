import { Editor } from "./components/Editor";
import "./css/editor-style.css";
// import sheet from "./styles/editor-style.css" assert { type: "css" };
// (document as any).adoptedStyleSheets = [sheet];
const createEditor = (hostElementId: string): void => {
  new Editor(hostElementId);
};
declare global {
  interface Window {
    createEditor: Function;
  }
}
window.createEditor = createEditor;
export {};
