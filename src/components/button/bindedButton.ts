export class BindedButton {
  element: HTMLButtonElement;
  constructor(
    buttonId: string,
    protected name: string,
    protected callback: Function,
    public buttonClassName?: string[] | string
  ) {
    this.element = document.getElementById(buttonId)! as HTMLButtonElement;
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
