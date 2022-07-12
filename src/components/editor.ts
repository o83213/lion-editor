import { Component } from "./base-component";
import { EditableArea } from "./editable-area";
import { TextDecoration } from "./text-decoration";
import { Toolbar } from "./toolbar";
import { ToolbarBottom } from "./toolbarBottom";
import { ImageInputModal } from "./imgae-input-modal";
export class Editor extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(hostElementId: string) {
    super(hostElementId, "div", true, "lion-editor-editor");
    console.log(hostElementId);
    this.configure();
  }
  configure(): void {
    this.element.classList.add("container");
    // new TextDecoration("lion-editor-editor");
    new EditableArea(this.element.id);
    new Toolbar(
      this.element.id,
      "lion-editor-toolbar-left",
      "lion-editor-toolbar-left"
    );
    new TextDecoration(
      this.element.id,
      "lion-editor-toolbar-top",
      "lion-editor-toolbar-top"
    );
    new ToolbarBottom(
      this.element.id,
      "lion-editor-toolbar-bottom",
      "lion-editor-toolbar-bottom"
    );
    new ImageInputModal(
      this.element.id,
      "lion-editor-image-modal",
      "lion-editor-image-modal"
    );
  }
}
