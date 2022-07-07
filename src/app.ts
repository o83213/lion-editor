// Decorator
function autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustDescriptor;
}
// Editor class
class Editor {
  hostElement: HTMLDivElement;
  container: HTMLDivElement;
  toolBar: HTMLElement;
  editableArea: HTMLDivElement;
  defaultContent: string;
  constructor(hostElementId: string) {
    this.hostElement = document.getElementById(
      hostElementId
    )! as HTMLDivElement;
    console.log(this.hostElement);
    this.container = document.createElement("div");
    this.toolBar = document.createElement("nav");
    this.editableArea = document.createElement("div");
    this.defaultContent = `<div><p>Let's write something!</p></div>`;
    this.createToolBar();
    this.createEditableArea();
    this.createContainer();
    this.loadContentHandler();
    this.attach();
  }
  attach() {
    this.hostElement.append(this.container);
  }
  createToolBar() {
    this.toolBar.classList.add("toolbar");
    const button1 = document.createElement("button");
    button1.innerText = "Create Block!";
    button1.addEventListener("click", this.addBlockHandler);
    //
    const button2 = document.createElement("button");
    button2.innerText = "Save Content!";
    button2.addEventListener("click", this.saveContentHandler);
    this.toolBar.append(button1, button2);
  }
  createEditableArea() {
    this.editableArea.classList.add("editableArea");
    this.editableArea.contentEditable = "true";
    this.editableArea.spellcheck = false;
  }
  createContainer() {
    this.container.classList.add("container");
    this.container.append(this.toolBar, this.editableArea);
  }
  //
  @autobind
  loadContentHandler() {
    console.log("loadContentHandler");
    const saveContent = localStorage.getItem("content");
    if (!saveContent) {
      console.log("Use default Content!");
      this.editableArea.innerHTML = this.defaultContent;
    } else {
      this.editableArea.innerHTML = saveContent;
    }
  }
  //
  @autobind
  addBlockHandler() {
    console.log("addBlockHandler");
    const newBlock = document.createElement("div");
    const content = document.createElement("p");
    content.innerText = "Type here!";
    content.style.fontWeight = "bold";
    newBlock.append(content);
    this.editableArea.insertAdjacentElement("beforeend", newBlock);
  }
  //
  @autobind
  saveContentHandler() {
    console.log("saveContentHandler");
    const data = this.editableArea.innerHTML;
    localStorage.setItem("content", data);
  }
}
export const createEditor = (hostElementId: string): void => {
  new Editor(hostElementId);
};
