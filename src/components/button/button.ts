import { Component } from "../base-component";

export class Button extends Component<HTMLDivElement, HTMLButtonElement> {
  constructor(
    hostElementId: string,
    protected name: string,
    protected callback: Function
  ) {
    super(
      hostElementId,
      "button",
      false,
      `button-${name}`,
      "lion-editor-button"
    );
    this.configure();
  }
  configure() {
    this.element.innerText = this.name;
    this.element.addEventListener("click", this.callback as (e: Event) => void);
  }
}
