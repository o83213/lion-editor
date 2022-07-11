import { Component } from "./base-component";
import { EditableArea } from "./editable-area";
import { TextDecoration } from "./text-decoration";
import { Toolbar } from "./toolbar";
export class Editor extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(hostElementId: string) {
    super(hostElementId, "div", true, "lion-editor-editor");
    this.configure();
  }
  configure(): void {
    this.element.classList.add("container");
    new TextDecoration("lion-editor-editor");
    new EditableArea("lion-editor-editor");
    new Toolbar("lion-editor-editor");
  }
}
