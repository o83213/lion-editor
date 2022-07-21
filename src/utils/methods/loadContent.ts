export const loadContent = (target: HTMLElement, defaultContent: string) => {
  console.log("loadContentHandler");
  console.log(target);
  console.log(defaultContent);
  const saveContent = localStorage.getItem("lion-editor-content");
  if (!saveContent) {
    console.log("Use default Content!");
    target.innerHTML = defaultContent;
  } else {
    console.log(target);
    target.innerHTML = saveContent;
  }
};
