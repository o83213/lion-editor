export const loadContent = (target: HTMLElement, defaultContent: string) => {
  console.log("loadContentHandler");
  const saveContent = localStorage.getItem("lion-editor-content");
  if (!saveContent) {
    console.log("Use default Content!");
    target.innerHTML = defaultContent;
  } else {
    target.innerHTML = saveContent;
  }
};
