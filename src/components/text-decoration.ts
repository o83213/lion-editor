import { Component } from "./base-component";
import { ButtonList } from "./button/butonList";
import { addBlock } from "../utils/addBlock";
import { saveContent } from "../utils/saveContent";
export class TextDecoration extends Component<HTMLDivElement, HTMLDivElement> {
  editableArea: HTMLDivElement;
  constructor(
    hostElementId: string,
    newElementId?: string,
    newElementClass?: string[] | string
  ) {
    super(hostElementId, "div", true, newElementId, newElementClass);
    this.editableArea = document.getElementById(
      "lion-editor-editable-area"
    )! as HTMLDivElement;
    this.configure();
  }
  buttonListTop = [
    {
      name: "Bold!",
      callback: () => {
        alert("Bold!");
      },
    },
    {
      name: "Italic!",
      callback: () => {
        alert("Italic!");
      },
    },
    {
      name: "Under text!",
      callback: () => {
        alert("Under text!");
      },
    },
    {
      name: "Delete line!",
      callback: () => {
        alert("Under text!");
      },
    },
    {
      name: "Hyper link!",
      callback: () => {
        alert("Hyper link!");
      },
    },
  ];
  configure() {
    new ButtonList(
      this.element.id,
      this.buttonListTop,
      "lion-editor-buttonList",
      ["lion-editor-button-list", `${this.element.id}-bl`]
    );
  }
}
