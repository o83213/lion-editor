import { Component } from "./base-component";
import { EditableArea } from "./editable-area";
import { TextDecoration } from "./toolbars/textDecoration";
import { ToolbarLeft } from "./toolbars/toolbarLeft";
import { ToolbarBottom } from "./toolbars/toolbarBottom";
import { ImageModal } from "./imgaeModal";
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
    new ToolbarBottom(
      this.element.id,
      this.methods,
      "lion-editor-toolbar-bottom",
      "lion-editor-toolbar-bottom"
    );
    new ImageModal(
      this.element.id,
      this.methods,
      "lion-editor-image-modal",
      "lion-editor-image-modal"
    );
    this.getQueryElement();
    this.methods.loadContent();
  }
  queryElements = {
    editableArea: document.createElement("div") as HTMLElement,
    imageModal: document.createElement("div") as HTMLElement,
  };
  protected methods = {
    // textDecoration
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
      methods.openImgModal(this.queryElements.imageModal);
    },
    // toolbarBottom
    saveScript: () => {
      methods.saveScript();
    },
    pushToDatabase: () => {
      methods.pushToDatabase(this.queryElements.editableArea.innerHTML);
    },
    // imageModal
    loadImgFromPC: () => {
      methods.loadImgFromPC();
    },
    loadImgFromURL: () => {
      methods.loadImgFromURL();
    },
    closeImgModal: () => {
      methods.closeImgModal();
    },
    saveImage: () => {
      methods.saveImage();
    },
    //
    loadContent: () => {
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
    this.queryElements.imageModal = document.getElementById(
      "lion-editor-image-modal"
    )! as HTMLDivElement;
  }
}
