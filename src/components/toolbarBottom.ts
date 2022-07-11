import { Component } from "./base-component";
import { ButtonList } from "./button/butonList";
import { addBlock } from "../utils/addBlock";
import { saveContent } from "../utils/saveContent";
export class ToolbarBottom extends Component<HTMLDivElement, HTMLDivElement> {
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
      name: "store script!",
      callback: () => {
        alert("store script!");
      },
    },
    {
      name: "publish!",
      callback: () => {
        alert("publish!");
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
