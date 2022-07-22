import { Component } from "../BaseComponent";

export class Button extends Component<HTMLDivElement, HTMLButtonElement> {
  constructor(
    hostElementId: string,
    protected name: string,
    protected callback: Function,
    protected buttontId?: string,
    public buttonClassName?: string[] | string
  ) {
    super(hostElementId, "button", false, buttontId, "lion-editor-button");
    this.configure();
  }
  configure() {
    this.element.innerText = this.name;
    this.element.addEventListener("click", this.callback as (e: Event) => void);
    if (this.buttonClassName) {
      if (typeof this.buttonClassName === "string") {
        this.element.classList.add(this.buttonClassName);
      } else {
        this.element.classList.add(...this.buttonClassName);
      }
    }
  }
}
