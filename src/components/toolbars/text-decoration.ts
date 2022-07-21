import { Component } from "../base-component";
import { ButtonList } from "../button/butonList";
// import { changeTextStyle, TextType } from "@utils/changeTextStyle";
import { changeTextStyle, TextType } from "../../utils/helpers/changeTextStyle";
export class TextDecoration extends Component<HTMLDivElement, HTMLDivElement> {
  editableArea: HTMLDivElement;
  constructor(
    hostElementId: string,
    protected methods: any,
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
      callback: this.methods.changeTextBold,
    },
    {
      name: "Italic!",
      callback: this.methods.changeTextItalic,
    },
    {
      name: "Underline!",
      callback: this.methods.changeTextUnderline,
    },
    {
      name: "Deleteline!",
      callback: this.methods.changeTextDeleteline,
    },
    {
      name: "Hyperlink!",
      callback: this.methods.changeTextHyperlink,
    },
  ];
  configure() {
    new ButtonList(this.element.id, this.buttons, `${this.element.id}-list1`, [
      "lion-editor-button-list",
      `${this.element.id}-bl`,
    ]);
  }
}
