import { Component } from "./base-component";
import { loadContent } from "../utils/loadContent";
import { defaultEditableAreaContent as defaultContent } from "../data/default-contents";

export class TextDecoration extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(hostElementId: string) {
    super(
      hostElementId,
      "div",
      true,
      "lion-editor-text-decoration",
      "textDecoration"
    );
    this.configure();
  }
  configure() {
    // this.element.contentEditable = "true";
    // this.element.spellcheck = false;
    // @autobind
    loadContent(this.element, "文字裝飾");
  }
}
