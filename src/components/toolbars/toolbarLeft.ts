import { Component } from "../BaseComponent";
import { ButtonList } from "../Button/ButonList";
export class ToolbarLeft extends Component<HTMLDivElement, HTMLDivElement> {
  editableArea: HTMLDivElement;
  constructor(
    hostElementId: string,
    protected methods: any,
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
      name: "Create P Block!",
      callback: this.methods.createParagraphBlock,
    },
    {
      name: "Ceate order list!",
      callback: this.methods.createOrderList,
    },
    {
      name: "Ceate embeded!",
      callback: this.methods.createEmbededBlock,
    },
    {
      // name: "Ceate embeded!",
      name: "Save Content!",
      callback: this.methods.saveContent,
    },
    {
      name: "Add photo!",
      callback: this.methods.openImgModal,
    },
  ];
  configure() {
    new ButtonList(this.element.id, this.buttons, `${this.element.id}-list1`, [
      "lion-editor-button-list",
      `${this.element.id}-bl`,
    ]);
  }
}
