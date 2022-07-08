import { Component } from "../base-component";
import { Button } from "./button";
import { addBlock } from "../../utils/addBlock";
import { saveContent } from "../../utils/saveContent";
export class ButtonList extends Component<HTMLDivElement, HTMLElement> {
  constructor(protected editableArea: HTMLDivElement) {
    super("lion-editor-toolbar", "nav", false);
    this.configure();
  }
  configure() {
    new Button("Create Block!", () => {
      addBlock(this.editableArea, "p");
    });
    new Button("Save Content!", () => {
      saveContent(this.editableArea.innerHTML);
    });
  }
}
