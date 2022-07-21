// import { getCompressedImage } from "./helpers/compressImg";
// const uploadImageFromPc = async () => {
//   const input = document.getElementById("inputPc")! as HTMLInputElement;
//   const curFile = input.files!;
//   const ImageFile = curFile[0];
//   const image = document.getElementById("image-preview") as HTMLImageElement;

//   //
//   try {
//     const newImage = await getCompressedImage(ImageFile);
//     const { objectURL } = newImage;
//     image.src = objectURL;
//   } catch (error) {
//     if (
//       error instanceof Error ||
//       (error instanceof Object && "message" in error)
//     )
//       alert(error.message);
//   }
//   //
// };

// const uploadImageFromUrl = async () => {
//   const imageURL = prompt("請輸入網址")!;
//   if (imageURL.trim().length === 0) {
//     alert("沒輸入內容喔!");
//     return;
//   }
//   const image = document.getElementById("image-preview") as HTMLImageElement;

//   const getImageSrc = new Promise<string>((resolve, reject) => {
//     const newImage = document.createElement("img");

//     newImage.onload = () => {
//       console.log("onload!");
//       resolve(imageURL);
//     };

//     newImage.onerror = () => {
//       console.log("fail!");
//       reject(new Error(`fail to load image from: ${imageURL}`));
//     };
//     newImage.src = imageURL;
//   });
//   try {
//     image.src = await getImageSrc;
//   } catch (error) {
//     if (
//       error instanceof Error ||
//       (error instanceof Object && "message" in error)
//     )
//       alert(error.message);
//   }
// };

// const saveImageHandler = (hostElement: HTMLElement) => {
//   const target = document.getElementById("lion-editor-editable-area")!;
//   const container = document.createElement("div");
//   container.classList.add("editor-image");
//   const img = document.createElement("img");
//   const imagePreview = document.getElementById(
//     "image-preview"
//   )! as HTMLImageElement;
//   if (!imagePreview.src) {
//     alert("還沒有選擇圖片喔!");
//     return;
//   }
//   img.src = imagePreview.src;
//   const altTextInput = document.getElementById(
//     "altTextInput"
//   )! as HTMLInputElement;
//   if (altTextInput.value.trim().length > 0) {
//     img.alt = altTextInput.value;
//   }
//   container.append(img);
//   target.append(container);
//   hostElement.classList.toggle("hidden");
//   imagePreview.removeAttribute("src");
// };
// const clearImageHandler = (hostElement: HTMLElement) => {
//   const imagePreview = document.getElementById(
//     "image-preview"
//   )! as HTMLImageElement;
//   console.log(imagePreview.src);
//   hostElement.classList.toggle("hidden");
//   imagePreview.removeAttribute("src");
//   // imagePreview.src = "";
// };

// export {
//   uploadImageFromPc,
//   uploadImageFromUrl,
//   saveImageHandler,
//   clearImageHandler,
// };
