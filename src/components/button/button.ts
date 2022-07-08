import { Component } from "../base-component";

export class Button extends Component<HTMLDivElement, HTMLButtonElement> {
  constructor(protected name: string, protected callback: Function) {
    super("lion-editor-toolbar", "button", false);
    this.configure();
  }
  configure() {
    this.element.innerText = this.name;
    this.element.addEventListener("click", this.callback as (e: Event) => void);
  }
}
