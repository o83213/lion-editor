export const loadContent = (target: HTMLElement, defaultContent: string) => {
  const saveContent = localStorage.getItem("lion-editor-content");
  if (!saveContent) {
    console.log("Use default Content!");
    target.innerHTML = defaultContent;
  } else {
    target.innerHTML = saveContent;
  }
};
