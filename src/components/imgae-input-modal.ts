import { Component } from "./base-component";
import { modalTemplate } from "../data/htmlTemplate";
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
    this.element.classList.add("hidden");
    this.element.insertAdjacentHTML("beforeend", modalTemplate);
    // HeaderClose btn function
    const headerClose = document.getElementById("headerClose")!;
    headerClose.addEventListener("click", () => {
      clearImageHandler(this.element);
    });
    // GetImgFromPc Button
    const getImgFromPcButton = document.getElementById("inputPc")!;
    getImgFromPcButton.addEventListener("change", uploadImageFromPc);
    // GetImgFromUrl Button
    const getImgFromUrlButton = document.getElementById("inputUrl")!;
    getImgFromUrlButton.addEventListener("click", uploadImageFromUrl);
    // Cancel and Save Button
    const inputCancel = document.getElementById("cancelButton")!;
    inputCancel.addEventListener("click", () => {
      clearImageHandler(this.element);
    });
    const inputSave = document.getElementById("saveButton")!;
    inputSave.addEventListener("click", () => {
      saveImageHandler(this.element);
    });
  }
}
