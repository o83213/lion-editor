import { Component } from "./base-component";
import { ButtonList } from "./button/butonList";
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
  buttons = [
    {
      name: "save script!",
      callback: () => {
        alert("save script!");
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
    new ButtonList(this.element.id, this.buttons, "lion-editor-buttonList", [
      "lion-editor-button-list",
      `${this.element.id}-bl`,
    ]);
  }
}
