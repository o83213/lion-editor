export const saveContent = (content: string) => {
  console.log("saveContentHandler");
  localStorage.setItem("lion-editor-content", content);
};
