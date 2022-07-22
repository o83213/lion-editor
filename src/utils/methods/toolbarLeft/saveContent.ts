export const saveContent = (content: string) => {
  console.log("saveContent");
  localStorage.setItem("lion-editor-content", content);
};
