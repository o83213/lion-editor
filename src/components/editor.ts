import { Component } from "./BaseComponent";
import { EditableArea } from "./EditableArea";
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
    editableArea: document.createElement("div"),
    imageModal: document.createElement("div"),
    previewImg: document.createElement("img"),
    imgFileInput: document.createElement("input"),
    altInput: document.createElement("input"),
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
      methods.loadImgFromPC(
        this.queryElements.imgFileInput,
        this.queryElements.previewImg
      );
    },
    loadImgFromURL: () => {
      methods.loadImgFromURL(this.queryElements.previewImg);
    },
    closeImgModal: () => {
      methods.closeImgModal(
        this.queryElements.imageModal,
        this.queryElements.previewImg
      );
    },
    saveImage: () => {
      methods.saveImage(
        this.queryElements.imageModal,
        this.queryElements.editableArea,
        this.queryElements.previewImg,
        this.queryElements.altInput
      );
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
    this.queryElements.previewImg = document.getElementById(
      "image-preview"
    )! as HTMLImageElement;
    this.queryElements.altInput = document.getElementById(
      "altTextInput"
    )! as HTMLInputElement;
    this.queryElements.imgFileInput = document.getElementById(
      "imgFileInput"
    )! as HTMLInputElement;
  }
}
