import { Component } from "./base-component";
import { modalTemplate } from "../data/htmlTemplate";
import { BindedButton } from "../components/button/bindedButton";
// import {
//   uploadImageFromPc,
//   uploadImageFromUrl,
//   saveImageHandler,
//   clearImageHandler,
// } from "../utils/olderFunctions/uploadImage";
export class ImageModal extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(
    hostElementId: string,
    protected methods: any,
    newElementId?: string,
    newElementClass?: string[] | string
  ) {
    super(hostElementId, "div", false, newElementId, newElementClass);
    this.configure();
  }
  buttons = [
    {
      id: "headerClose",
      name: "關閉",
      callback: this.methods.closeImgModal,
    },
    {
      id: "inputPc",
      name: "From PC",
      callback: this.methods.loadImgFromPC,
    },
    {
      id: "inputUrl",
      name: "From URL",
      callback: this.methods.loadImgFromURL,
    },
    {
      id: "cancelButton",
      name: "Cancel",
      callback: this.methods.closeImgModal,
    },
    {
      id: "saveButton",
      name: "Save",
      callback: this.methods.saveImage,
    },
  ];
  configure() {
    // render the template
    this.element.classList.add("hidden");
    this.element.insertAdjacentHTML("beforeend", modalTemplate);

    // build up the buttonList
    console.log("bindnewBtn");
    this.buttons.forEach(
      (btn) => new BindedButton(btn.id, btn.name, btn.callback)
    );
  }
}
