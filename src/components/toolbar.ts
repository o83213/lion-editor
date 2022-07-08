import { Component } from "./base-component";
import { ButtonList } from "./button/butonList";
export class Toolbar extends Component<HTMLDivElement, HTMLDivElement> {
  editableArea: HTMLDivElement;
  constructor(hostElementId: string) {
    super(hostElementId, "div", true, "lion-editor-toolbar");
    this.editableArea = document.getElementById(
      "lion-editor-editable-area"
    )! as HTMLDivElement;
    this.configure();
  }
  configure() {
    new ButtonList(this.editableArea);
  }
}
