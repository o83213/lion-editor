import { Component } from "./base-component";
import { ButtonList } from "./button/butonList";
import { addBlock } from "../utils/addBlock";
import { saveContent } from "../utils/saveContent";
export class Toolbar extends Component<HTMLDivElement, HTMLDivElement> {
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
  buttonListTop = [
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
      name: "Ceate IG embeded!",
      callback: () => {
        addBlock(this.editableArea, "blockquote");
      },
    },
    {
      name: "Add photo(from PC)!",
      callback: () => {
        alert("Add photo(from PC)");
      },
    },
    {
      name: "Add photo(link)!",
      callback: () => {
        alert("Add photo(link)");
      },
    },
  ];
  configure() {
    new ButtonList(
      this.element.id,
      this.buttonListTop,
      "lion-editor-buttonList",
      ["lion-editor-button-list", `${this.element.id}-bl`]
    );
  }
}
