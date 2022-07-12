import { Component } from "./base-component";
import {
  uploadImageFromPc,
  uploadImageFromUrl,
  saveImageHandler,
  clearImageHandler,
} from "../utils/uploadImage";
export class ImageInputModal extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(
    hostElementId: string,
    newElementId?: string,
    newElementClass?: string[] | string
  ) {
    super(hostElementId, "div", false, newElementId, newElementClass);
    this.configure();
  }
  configure() {
    // container
    this.element.classList.add("hidden");
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("image-modal");
    // overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    // box table
    const table = document.createElement("div");
    table.classList.add("table");
    // //
    const modalHeader = document.createElement("div");
    const headerTitle = document.createElement("div");
    headerTitle.innerText = "插入圖片";
    const headerClose = document.createElement("button");
    headerClose.innerHTML = "X";
    headerClose.addEventListener("click", () => {
      clearImageHandler(this.element);
    });
    modalHeader.classList.add("modalHeader");
    modalHeader.append(headerTitle, headerClose);
    // //
    const modalInput = document.createElement("div");
    const inputPc = document.createElement("input");
    inputPc.type = "file";
    //
    inputPc.id = "inputPc";
    inputPc.classList.add("input");
    const labelForPc = document.createElement("label");
    labelForPc.innerText = "選擇檔案(從本機端)";
    labelForPc.setAttribute("for", "inputPc");
    labelForPc.classList.add("label-button");
    inputPc.addEventListener("change", uploadImageFromPc);
    ///
    const labelForURL = document.createElement("button");
    labelForURL.innerText = "選擇檔案(從網址)";
    labelForURL.addEventListener("click", uploadImageFromUrl);

    const imagePreview = document.createElement("img");
    imagePreview.classList.add("image-preview");
    imagePreview.id = "image-preview";
    //
    modalInput.append(inputPc, labelForPc, labelForURL, imagePreview);
    // //
    const modalFooter = document.createElement("div");
    const inputCancel = document.createElement("button");
    inputCancel.innerText = "取消";
    inputCancel.addEventListener("click", () => {
      clearImageHandler(this.element);
    });
    const inputSave = document.createElement("button");
    inputSave.innerText = "儲存";
    inputSave.addEventListener("click", () => {
      saveImageHandler(this.element);
    });
    modalFooter.append(inputCancel, inputSave);
    //
    table.append(modalHeader, modalInput, modalFooter);
    //
    modalContainer.append(overlay, table);
    this.element.append(modalContainer);
  }
}
