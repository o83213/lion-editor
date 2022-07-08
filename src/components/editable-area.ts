import { Component } from "./base-component";
import { autobind } from "../decorators/autobind";
const defaultContent = `<div><p>Let's write something!</p></div>`;
export class EditableArea extends Component<HTMLDivElement> {
  constructor(hostElementId: string) {
    super(hostElementId, true, "lion-editor-editable-area");
    this.configure();
  }
  configure() {
    this.element.classList.add("editableArea");
    this.element.contentEditable = "true";
    this.element.spellcheck = false;
    this.loadContentHandler();
  }
  @autobind
  loadContentHandler() {
    console.log("loadContentHandler");
    const saveContent = localStorage.getItem("content");
    if (!saveContent) {
      console.log("Use default Content!");
      this.element.innerHTML = defaultContent;
    } else {
      this.element.innerHTML = saveContent;
    }
  }
}
