export const loadImgFromURL = async (previewImg: HTMLImageElement) => {
  const imageURL = prompt("請輸入網址")!;
  console.log(imageURL);
  if (!imageURL || imageURL.trim().length === 0) {
    alert("沒輸入內容喔!");
    return;
  }
  const getImageSrc = new Promise<string>((resolve, reject) => {
    const newImage = document.createElement("img");

    newImage.onload = () => {
      console.log("onload!");
      resolve(imageURL);
    };

    newImage.onerror = () => {
      console.log("fail!");
      reject(new Error(`fail to load image from: ${imageURL}`));
    };
    newImage.src = imageURL;
  });
  try {
    previewImg.src = await getImageSrc;
  } catch (error) {
    if (
      error instanceof Error ||
      (error instanceof Object && "message" in error)
    )
      alert(error.message);
  }
};
