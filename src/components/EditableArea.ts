import { Component } from "./BaseComponent";

export class EditableArea extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(hostElementId: string) {
    super(
      hostElementId,
      "div",
      true,
      "lion-editor-editable-area",
      "editableArea"
    );
    this.configure();
  }
  configure() {
    this.element.contentEditable = "true";
    this.element.spellcheck = false;
  }
}
