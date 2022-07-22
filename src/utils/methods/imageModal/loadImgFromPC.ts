import { getCompressedImage } from "../../helpers/compressImg";
export const loadImgFromPC = (
  imgFileInput: HTMLInputElement,
  previewImg: HTMLImageElement
) => {
  imgFileInput.click();
  imgFileInput.addEventListener("change", async () => {
    const curFile = imgFileInput.files!;
    console.log(curFile);
    const ImageFile = curFile[0];
    try {
      const newImage = await getCompressedImage(ImageFile);
      const { objectURL } = newImage;
      previewImg.src = objectURL;
    } catch (error) {
      if (
        error instanceof Error ||
        (error instanceof Object && "message" in error)
      )
        alert(error.message);
    }
  });
};
