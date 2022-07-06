const createEditor = (hostElementId) => {
  // hostElement
  const hostElement = document.getElementById(hostElementId);
  const container = document.createElement("div");
  container.classList.add("container");
  // toolbar
  const toolbar = document.createElement("nav");
  toolbar.classList.add("toolbar");
  const button1 = document.createElement("button");
  button1.innerText = "Create Block!";
  const button2 = document.createElement("button");
  button2.innerText = "Save Content!";
  toolbar.append(button1, button2);
  // editor
  const editor = document.createElement("div");
  editor.classList.add("editor");
  editor.contentEditable = true;
  editor.spellcheck = false;
  // append to container
  container.append(toolbar, editor);
  hostElement.append(container);

  // Default content
  const defaultContent = `<div><p>Let's write something!</p></div>`;

  // function util
  const loadContentHandler = () => {
    console.log("loadContentHandler");
    const saveContent = localStorage.getItem("content");
    if (!editor.innerHTML && !saveContent) {
      console.log("Use default Content!");
      editor.innerHTML = defaultContent;
    } else if (!editor.innerHTML) {
      editor.innerHTML = saveContent;
    }
  };

  const addBlockHandler = (event) => {
    console.log("addBlockHandler");
    event.preventDefault();
    const newBlock = document.createElement("div");
    const content = document.createElement("p");
    content.innerText = "Type here!";
    content.style.fontWeight = "bold";
    newBlock.append(content);
    editor.insertAdjacentElement("beforeend", newBlock);
  };

  const saveContentHandler = (event) => {
    console.log("saveContentHandler");
    event.preventDefault();
    const data = editor.innerHTML;
    localStorage.setItem("content", data);
  };
  // execute
  button1.addEventListener("click", addBlockHandler.bind(this));
  button2.addEventListener("click", saveContentHandler);
  loadContentHandler();
};
export { createEditor };
