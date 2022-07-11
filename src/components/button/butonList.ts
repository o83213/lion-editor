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
    new Button(this.element.id, "插入內文", () => {
      addBlock(this.editableArea, "p");
    });
    new Button(this.element.id, "插入圖片", () => {
      addBlock(this.editableArea, `input`);
    });
    new Button(this.element.id, "儲存內容", () => {
      saveContent(this.editableArea.innerHTML);
    });
  }
}
