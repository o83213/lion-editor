import { Component } from "../base-component";
import { Button } from "./button";
import { addBlock } from "../../utils/addBlock";
import { saveContent } from "../../utils/saveContent";
type buttonConfiguration = {
  name: string;
  callback: Function;
};
export class ButtonList extends Component<HTMLDivElement, HTMLElement> {
  constructor(protected buttonList: buttonConfiguration[]) {
    super(
      "lion-editor-toolbar",
      "nav",
      false,
      "lion-editor-buttonlist1",
      "lion-editor-buttonlist"
    );
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
