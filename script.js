const body = document.body;
const container = document.getElementById("container");
const container2 = document.getElementById("container2");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const defaultContent = `<div><p>Let's write something!</p></div>`;
const loadContentHandler = () => {
  const saveContent = localStorage.getItem("content");
  if (!container.innerHTML && !saveContent) {
    console.log("Use default Content!");
    container.innerHTML = defaultContent;
  } else if (!container.innerHTML) {
    container.innerHTML = saveContent;
  }
};
const addBlockHandler = (event) => {
  event.preventDefault();
  const newBlock = document.createElement("div");
  const content = document.createElement("p");
  content.innerText = "Type here!";
  content.style.fontWeight = "bold";
  newBlock.append(content);
  container.insertAdjacentElement("beforeend", newBlock);
};
const saveContentHandler = (event) => {
  event.preventDefault();
  const data = container.innerHTML;
  localStorage.setItem("content", data);
};
button1.addEventListener("click", addBlockHandler.bind(this));
button2.addEventListener("click", saveContentHandler);
loadContentHandler();
