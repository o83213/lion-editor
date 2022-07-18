import { Component } from "../base-component";
import { ButtonList } from "../button/butonList";
import { addBlock } from "../../utils/addBlock";
import { saveContent } from "../../utils/saveContent";
export class ToolbarLeft extends Component<HTMLDivElement, HTMLDivElement> {
  editableArea: HTMLDivElement;
  constructor(
    hostElementId: string,
    newElementId?: string,
    newElementClass?: string[] | string
  ) {
    super(hostElementId, "div", true, newElementId, newElementClass);
    this.editableArea = document.getElementById(
      "lion-editor-editable-area"
    )! as HTMLDivElement;
    this.configure();
  }
  buttons = [
    {
      name: "Create Block!",
      callback: () => {
        addBlock(this.editableArea, "p");
      },
    },
    {
      name: "Save Content!",
      callback: () => {
        saveContent(this.editableArea.innerHTML);
      },
    },
    {
      name: "Ceate order list!",
      callback: () => {
        addBlock(this.editableArea, "ol");
      },
    },
    {
      name: "Ceate embeded!",
      callback: () => {
        addBlock(this.editableArea, "blockquote");
      },
    },
    {
      name: "Add photo!",
      callback: () => {
        document
          .getElementById("lion-editor-image-modal")!
          .classList.toggle("hidden");
      },
    },
  ];
  configure() {
    new ButtonList(this.element.id, this.buttons, `${this.element.id}-list1`, [
      "lion-editor-button-list",
      `${this.element.id}-bl`,
    ]);
  }
}
