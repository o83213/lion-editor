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
    table.classList.add("modalTable");
    // //
    const modalHeader = document.createElement("div");
    const headerTitle = document.createElement("h3");
    headerTitle.innerText = "插入圖片";
    const headerClose = document.createElement("button");
    headerClose.innerHTML = "X";
    headerClose.classList.add("label-button");
    headerClose.addEventListener("click", () => {
      clearImageHandler(this.element);
    });
    modalHeader.classList.add("modalHeader");
    modalHeader.append(headerTitle, headerClose);
    //
    const modalInput = document.createElement("div");
    modalInput.classList.add("modalInput");
    const modalInputHeader = document.createElement("h3");
    modalInputHeader.innerText = "選擇檔案";
    //
    const inputPc = document.createElement("input");
    inputPc.type = "file";
    inputPc.id = "inputPc";
    inputPc.classList.add("input");
    const labelForPc = document.createElement("label");
    labelForPc.innerText = "從電腦";
    labelForPc.setAttribute("for", "inputPc");
    labelForPc.classList.add("label-button");
    inputPc.addEventListener("change", uploadImageFromPc);
    ///
    const labelForURL = document.createElement("button");
    labelForURL.innerText = "從網址";
    labelForURL.classList.add("label-button");
    labelForURL.addEventListener("click", uploadImageFromUrl);

    const imagePreview = document.createElement("img");
    imagePreview.classList.add("modalInput-preview");
    imagePreview.id = "image-preview";
    //
    const inputReplaceText = document.createElement("div");
    inputReplaceText.classList.add("modalInputFooter");
    const altTextInput = document.createElement("input");
    altTextInput.type = "text";
    altTextInput.classList.add("altTextInput");
    altTextInput.id = "altTextInput";
    const altTextLabel = document.createElement("label");
    altTextLabel.innerText = "替代文字:";
    altTextLabel.classList.add("altTextLabel");
    altTextLabel.htmlFor = "altTextInput";
    inputReplaceText.append(altTextLabel, altTextInput);
    //
    modalInput.append(
      modalInputHeader,
      inputPc,
      labelForPc,
      labelForURL,
      imagePreview,
      inputReplaceText
    );
    // //
    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modalFooter");
    const inputCancel = document.createElement("button");
    inputCancel.innerText = "取消";
    inputCancel.classList.add("label-button");
    inputCancel.addEventListener("click", () => {
      clearImageHandler(this.element);
    });
    const inputSave = document.createElement("button");
    inputSave.innerText = "儲存";
    inputSave.classList.add("label-button");
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
