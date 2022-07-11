export const addBlock = (target: HTMLElement, blockType: string) => {
  console.log("addBlockHandler");
  const newBlock = document.createElement("div");
  const imageBlock = document.createElement("div");
  const content = document.createElement(blockType);
  const image = document.createElement(blockType);

  switch (blockType) {
    case "p": {
      content.innerText = "Type here!";
      content.style.fontWeight = "bold";
      newBlock.append(content);
      target.insertAdjacentElement("beforeend", newBlock);
      break;
    }
    case `input`: {
      console.log("image", image);
      imageBlock.append(image);
      console.log("imageBlock", imageBlock);
      target.insertAdjacentElement("beforeend", imageBlock);
      break;
    }
  }
};
