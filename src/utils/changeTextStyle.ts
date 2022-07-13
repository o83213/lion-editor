enum TextType {
  Bold,
  Italic,
  Underline,
  Delete,
}
const changeTextStyle = (textType: TextType) => {
  const selectionObj = window.getSelection();
  if (!selectionObj) {
    alert("No selection!");
    return;
  }
  const selectionObjParent = selectionObj.getRangeAt(0).commonAncestorContainer;
  // create the new node and set the innerText to selection content
  const selectionContentText = selectionObj.toString();
  const newNode = document.createElement("span");
  switch (textType) {
    case TextType.Bold:
      newNode.style.fontWeight = "bold";
      break;
    case TextType.Italic:
      newNode.style.fontStyle = "italic";
      break;
    case TextType.Underline:
      newNode.style.textDecoration = "underline";
      break;
    case TextType.Delete:
      newNode.style.textDecoration = "line-through";
      break;
    default:
  }
  newNode.innerText = selectionContentText;
  // delete the selection
  selectionObj.deleteFromDocument();
  // insert the new Node into parent
  selectionObj.getRangeAt(0).insertNode(newNode);
  // normalize the node to merge break text node
  selectionObjParent.normalize();
};

export { TextType, changeTextStyle };
