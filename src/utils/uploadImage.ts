const uploadImageFromPc = () => {
  const input = document.getElementById("inputPc")! as HTMLInputElement;
  const curFile = input.files!;
  console.log(curFile);
  const ImageFile = curFile[0];
  const image = document.getElementById("image-preview") as HTMLImageElement;
  const imageURL = URL.createObjectURL(ImageFile);
  image.src = imageURL;

  // URL.revokeObjectURL(imageURL);
};

const uploadImageFromUrl = () => {
  // alert("sayHI!!!!");
  const imageURL = prompt("請輸入網址")!;
  if (imageURL.trim().length === 0) {
    alert("沒輸入內容喔!");
    return;
  }
  // console.log(imageURL);
  const image = document.getElementById("image-preview") as HTMLImageElement;
  image.src = imageURL;
};

export const saveImageHandler = (hostElement: HTMLElement) => {
  const target = document.getElementById("lion-editor-editable-area")!;
  const container = document.createElement("div");
  const img = document.createElement("img");
  const imagePreview = document.getElementById(
    "image-preview"
  )! as HTMLImageElement;
  if (!imagePreview.src) {
    alert("還沒有選擇圖片喔!");
    return;
  }
  img.src = imagePreview.src;
  container.append(img);
  target.append(container);
  hostElement.classList.toggle("hidden");
  imagePreview.removeAttribute("src");
};
export const clearImageHandler = (hostElement: HTMLElement) => {
  const imagePreview = document.getElementById(
    "image-preview"
  )! as HTMLImageElement;
  hostElement.classList.toggle("hidden");
  imagePreview.removeAttribute("src");
};

export { uploadImageFromPc, uploadImageFromUrl };
