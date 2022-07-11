import { Component } from "./base-component";
import { EditableArea } from "./editable-area";
import { TextDecoration } from "./text-decoration";
import { Toolbar } from "./toolbar";
import { ToolbarBottom } from "./toolbarBottom";
export class Editor extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(hostElementId: string) {
    super(hostElementId, "div", true, "lion-editor-editor");
    console.log(hostElementId);
    this.configure();
  }
  configure(): void {
    this.element.classList.add("container");
    // new TextDecoration("lion-editor-editor");
    new EditableArea("lion-editor-editor");
    new Toolbar(
      "lion-editor-editor",
      "lion-editor-toolbar-left",
      "lion-editor-toolbar-left"
    );
    new TextDecoration(
      "lion-editor-editor",
      "lion-editor-toolbar-top",
      "lion-editor-toolbar-top"
    );
    new ToolbarBottom(
      "lion-editor-editor",
      "lion-editor-toolbar-bottom",
      "lion-editor-toolbar-bottom"
    );
  }
}
