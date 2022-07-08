import { Component } from "./base-component";
import { autobind } from "../decorators/autobind";

export class Toolbar extends Component<HTMLDivElement> {
  editableArea: HTMLDivElement;
  constructor(hostElementId: string) {
    super(hostElementId, true, "lion-editor-toolbar");
    this.configure();
    this.editableArea = document.getElementById(
      "lion-editor-editable-area"
    )! as HTMLDivElement;
  }
  configure() {
    const button1 = document.createElement("button");
    button1.innerText = "Create Block!";
    button1.addEventListener("click", this.addBlockHandler);
    const button2 = document.createElement("button");
    button2.innerText = "Save Content!";
    button1.addEventListener("click", this.saveContentHandler);
    this.element.append(button1, button2);
  }
  //
  @autobind
  addBlockHandler() {
    console.log("addBlockHandler");
    const newBlock = document.createElement("div");
    const content = document.createElement("p");
    content.innerText = "Type here!";
    content.style.fontWeight = "bold";
    newBlock.append(content);
    this.editableArea.insertAdjacentElement("beforeend", newBlock);
  }
  //
  @autobind
  saveContentHandler() {
    console.log("saveContentHandler");
    console.log(this);
    const data = this.editableArea.innerHTML;
    localStorage.setItem("content", data);
  }
}
