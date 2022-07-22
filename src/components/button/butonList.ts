import { Component } from "../BaseComponent";
import { Button } from "./Button";
type buttonSetting = {
  name: string;
  callback: Function;
};
export class ButtonList extends Component<HTMLDivElement, HTMLElement> {
  protected buttonList: buttonSetting[];
  constructor(
    hostElementId: string,
    buttonList: buttonSetting[],
    buttonListId: string,
    buttonListClass?: string[] | string
  ) {
    super(hostElementId, "nav", false, buttonListId, buttonListClass);
    this.buttonList = buttonList;
    this.configure();
  }
  configure() {
    if (this.buttonList.length > 0) {
      this.buttonList.forEach((buttonSetting) => {
        new Button(this.element.id, buttonSetting.name, buttonSetting.callback);
      });
    }
  }
}
