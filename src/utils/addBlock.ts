export const addBlock = (target: HTMLElement, blockType: string) => {
  console.log("addBlockHandler");
  const newBlock = document.createElement("div");
  const content = document.createElement(blockType);
  content.innerText = "Type here!";
  content.style.fontWeight = "bold";
  newBlock.append(content);
  target.insertAdjacentElement("beforeend", newBlock);
};
