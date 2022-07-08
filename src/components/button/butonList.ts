import { Component } from "../base-component";
import { Button } from "./button";
import { addBlock } from "../../utils/addBlock";
import { saveContent } from "../../utils/saveContent";
export class ButtonList extends Component<HTMLDivElement, HTMLElement> {
  constructor(protected editableArea: HTMLDivElement) {
    super(
      "lion-editor-toolbar",
      "nav",
      false,
      "lion-editor-buttonlist1",
      "lion-editor-buttonlist"
    );
    this.configure();
  }
  configure() {
    new Button(this.element.id, "Create Block!", () => {
      addBlock(this.editableArea, "p");
    });
    new Button(this.element.id, "Save Content!", () => {
      saveContent(this.editableArea.innerHTML);
    });
  }
}
