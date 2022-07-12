import { Component } from "../base-component";

export class Button extends Component<HTMLDivElement, HTMLButtonElement> {
  constructor(
    hostElementId: string,
    protected name: string,
    protected callback: Function,
    protected newElementId?: string
  ) {
    super(
      hostElementId,
      "button",
      false,
      newElementId ? newElementId : "",
      "lion-editor-button"
    );
    this.configure();
  }
  configure() {
    this.element.innerText = this.name;
    this.element.addEventListener("click", this.callback as (e: Event) => void);
  }
}
