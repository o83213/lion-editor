import { Component } from "./base-component";
import { EditableArea } from "./editable-area";
import { TextDecoration } from "./toolbars/text-decoration";
import { ToolbarLeft } from "./toolbars/toolbarLeft";
import { ToolbarBottom } from "./toolbars/toolbarBottom";
import { ImageInputModal } from "./imgae-input-modal";
//
import { methods } from "../utils/methods/index";
import { editableAreaTemplate } from "../data/htmlTemplate";
export class Editor extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(hostElementId: string) {
    super(hostElementId, "div", true, "lion-editor-editor", "container");
    this.configure();
    console.log(this.queryElements);
  }
  configure(): void {
    new EditableArea(this.element.id);
    new ToolbarLeft(
      this.element.id,
      this.methods,
      "lion-editor-toolbar-left",
      "lion-editor-toolbar-left"
    );
    new TextDecoration(
      this.element.id,
      this.methods,
      "lion-editor-toolbar-top",
      "lion-editor-toolbar-top"
    );
    // new ToolbarBottom(
    //   this.element.id,
    //   "lion-editor-toolbar-bottom",
    //   "lion-editor-toolbar-bottom"
    // );
    // new ImageInputModal(
    //   this.element.id,
    //   "lion-editor-image-modal",
    //   "lion-editor-image-modal"
    // );
    this.getQueryElement();
    this.methods.loadContent();
  }
  queryElements = {
    editableArea: document.createElement("div"),
  };
  protected methods = {
    changeTextBold: () => {
      methods.changeTextBold();
    },
    changeTextItalic: () => {
      methods.changeTextItalic();
    },
    changeTextUnderline: () => {
      methods.changeTextUnderline();
    },
    changeTextDeleteline: () => {
      methods.changeTextDeleteline();
    },
    changeTextHyperlink: () => {
      methods.changeTextHyperlink();
    },
    // left toolbar
    createParagraphBlock: () => {
      console.log(this.queryElements.editableArea);
      methods.createParagraphBlock(this.queryElements.editableArea);
    },
    createOrderList: () => {
      methods.createOrderList(this.queryElements.editableArea);
    },
    createEmbededBlock: () => {
      methods.createEmbededBlock(this.queryElements.editableArea);
    },
    saveContent: () => {
      methods.saveContent(this.queryElements.editableArea.innerHTML);
    },
    openImgModal: () => {
      alert("not yet...");
    },
    loadContent: () => {
      // alert("load content!");
      methods.loadContent(
        this.queryElements.editableArea,
        editableAreaTemplate
      );
    },
  };
  getQueryElement() {
    this.queryElements.editableArea = document.getElementById(
      "lion-editor-editable-area"
    )! as HTMLDivElement;
  }
}
