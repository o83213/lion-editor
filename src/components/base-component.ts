export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  hostElement: T;
  element: U;
  constructor(
    hostElementId: string,
    elementType: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.hostElement = document.getElementById(hostElementId)! as T;
    this.element = document.createElement(elementType) as U;
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
