import { Component } from "../base-component";
import { ButtonList } from "../button/butonList";
export class ToolbarBottom extends Component<HTMLDivElement, HTMLDivElement> {
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
      name: "save script!",
      callback: this.methods.saveScript,
    },
    {
      name: "publish!",
      callback: this.methods.pushToDatabase,
    },
  ];
  configure() {
    new ButtonList(this.element.id, this.buttons, `${this.element.id}-list1`, [
      "lion-editor-button-list",
      `${this.element.id}-bl`,
    ]);
  }
}
