import { Component } from "./base-component";
import { ButtonList } from "./button/butonList";
import { changeTextStyle, TextType } from "../utils/changeTextStyle";
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
  buttons = [
    {
      name: "Bold!",
      callback: () => {
        changeTextStyle(TextType.Bold);
      },
    },
    {
      name: "Italic!",
      callback: () => {
        changeTextStyle(TextType.Italic);
      },
    },
    {
      name: "Under text!",
      callback: () => {
        changeTextStyle(TextType.Underline);
      },
    },
    {
      name: "Delete line!",
      callback: () => {
        changeTextStyle(TextType.Delete);
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
    new ButtonList(this.element.id, this.buttons, `${this.element.id}-list1`, [
      "lion-editor-button-list",
      `${this.element.id}-bl`,
    ]);
  }
}
