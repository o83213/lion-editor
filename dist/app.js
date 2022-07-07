var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator
function autobind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjustDescriptor = {
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
    constructor(hostElementId) {
        this.hostElement = document.getElementById(hostElementId);
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
    loadContentHandler() {
        console.log("loadContentHandler");
        const saveContent = localStorage.getItem("content");
        if (!saveContent) {
            console.log("Use default Content!");
            this.editableArea.innerHTML = this.defaultContent;
        }
        else {
            this.editableArea.innerHTML = saveContent;
        }
    }
    //
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
    saveContentHandler() {
        console.log("saveContentHandler");
        const data = this.editableArea.innerHTML;
        localStorage.setItem("content", data);
    }
}
__decorate([
    autobind
], Editor.prototype, "loadContentHandler", null);
__decorate([
    autobind
], Editor.prototype, "addBlockHandler", null);
__decorate([
    autobind
], Editor.prototype, "saveContentHandler", null);
export const createEditor = (hostElementId) => {
    new Editor(hostElementId);
};
//# sourceMappingURL=app.js.map