export const saveImage = (
  imgModal: HTMLElement,
  editableArea: HTMLElement,
  previewImg: HTMLImageElement,
  altInput: HTMLInputElement
) => {
  const container = document.createElement("div");
  container.classList.add("editor-image");
  const img = document.createElement("img");
  //
  if (!previewImg.src) {
    alert("還沒有選擇圖片喔!");
    return;
  }
  img.src = previewImg.src;
  // get the alt text
  if (altInput.value.trim().length > 0) {
    img.alt = altInput.value;
  }
  container.append(img);
  editableArea.append(container);
  imgModal.classList.toggle("hidden");
  previewImg.removeAttribute("src");
};

const saveImageHandler = (hostElement: HTMLElement) => {
  const target = document.getElementById("lion-editor-editable-area")!;
  const container = document.createElement("div");
  container.classList.add("editor-image");
  const img = document.createElement("img");
  const imagePreview = document.getElementById(
    "image-preview"
  )! as HTMLImageElement;
  if (!imagePreview.src) {
    alert("還沒有選擇圖片喔!");
    return;
  }
  img.src = imagePreview.src;
  const altTextInput = document.getElementById(
    "altTextInput"
  )! as HTMLInputElement;
  if (altTextInput.value.trim().length > 0) {
    img.alt = altTextInput.value;
  }
  container.append(img);
  target.append(container);
  hostElement.classList.toggle("hidden");
  imagePreview.removeAttribute("src");
};
const clearImageHandler = (hostElement: HTMLElement) => {
  const imagePreview = document.getElementById(
    "image-preview"
  )! as HTMLImageElement;
  console.log(imagePreview.src);
  hostElement.classList.toggle("hidden");
  imagePreview.removeAttribute("src");
  // imagePreview.src = "";
};
