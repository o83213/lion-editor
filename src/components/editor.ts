import { Component } from "./base-component";
import { EditableArea } from "./editable-area";
// import { TextDecoration } from "./toolbars/text-decoration";
import { TextDecoration } from "./toolbars/text-decoration";
import { ToolbarLeft } from "./toolbars/toolbarLeft";
import { ToolbarBottom } from "./toolbars/toolbarBottom";
// import { ImageInputModal } from "./imgae-input-modal";
import { ImageInputModal } from "./imgae-input-modal";
export class Editor extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(hostElementId: string) {
    super(hostElementId, "div", true, "lion-editor-editor", "container");
    this.configure();
  }
  configure(): void {
    new EditableArea(this.element.id);
    new ToolbarLeft(
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
