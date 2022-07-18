import { setHTMLWithScript } from "./runEmbedCode";
export const addBlock = (target: HTMLElement, blockType: string) => {
  console.log("addBlockHandler");
  const newBlock = document.createElement("div");
  let content: HTMLElement | string;
  switch (blockType) {
    case "ul":
    case "ol":
      content = document.createElement(blockType);
      content.style.listStylePosition = "inside";
      for (let i = 0; i < 3; i++) {
        const listElement = document.createElement("li");

        content.append(listElement);
      }
      break;
    case "blockquote":
      const data = prompt("請輸入鑲嵌的code: ")!;
      if (data.trim().length === 0) {
        alert("沒輸入內容喔!");
        return;
      }
      content = document.createElement("div");
      content.classList.add("embeded-card");
      // setHTMLWithScript(content, data);
      // make the parent of the first div in the document becomes the context node
      const range = document.createRange();
      const embededFrament = range.createContextualFragment(data);
      console.log(embededFrament);
      content.appendChild(embededFrament);
      break;
    default:
      content = document.createElement(blockType);
      content.innerText = "Type here!";
      content.style.fontWeight = "bold";
  }
  newBlock.append(content);
  target.insertAdjacentElement("beforeend", newBlock);
};
