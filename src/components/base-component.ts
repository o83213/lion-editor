export abstract class Component<T extends HTMLElement> {
  hostElement: T;
  element: HTMLDivElement;
  constructor(
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.hostElement = document.getElementById(hostElementId)! as T;
    this.element = document.createElement("div");
    if (newElementId) {
      this.element.id = newElementId;
    }
    this.attach(insertAtStart);
  }
  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }
  abstract configure(): void;
}
