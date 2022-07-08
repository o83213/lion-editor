import { Editor } from "./components/editor";

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
