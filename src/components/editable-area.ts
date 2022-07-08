import { Component } from "./base-component";
import { loadContent } from "../utils/loadContent";
import { defaultEditableAreaContent as defaultContent } from "../data/default-contents";

export class EditableArea extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(hostElementId: string) {
    super(hostElementId, "div", true, "lion-editor-editable-area");
    this.configure();
  }
  configure() {
    this.element.classList.add("editableArea");
    this.element.contentEditable = "true";
    this.element.spellcheck = false;
    // @autobind
    loadContent(this.element, defaultContent);
  }
}
