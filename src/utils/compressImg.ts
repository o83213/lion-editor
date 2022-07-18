const MinWidth = 300; // 最小的寬度限制
const imgQuality = 0.95; // 轉成canvas後的圖片品質(0~1)
export const dealImages = async (files: any) => {
  const newFile = await compressImg(files);
  return newFile;
};
const compressImg = (file: any) => {
  const image = new Image();
  const objectURL = URL.createObjectURL(file);
  console.log(objectURL);
  return new Promise<Blob | null>((resolve, reject) => {
    image.src = objectURL;
    image.onerror = () => {
      URL.revokeObjectURL(objectURL);
      reject(new Error("Fail to read the image file!"));
    };
    image.onload = () => {
      URL.revokeObjectURL(objectURL);
      const width = image.naturalWidth | image.width;
      const height = image.naturalHeight | image.height;
      if (width <= MinWidth) {
        alert(`${file.name}的寬度少於${MinWidth}px`);
        resolve(null);
      } else {
        console.log("width: " + width + ", height: " + height);
        const [newWidth, newHeight] = setNewWidth(width, height, MinWidth);
        const canvas = document.createElement("canvas");
        canvas.height = newHeight;
        canvas.width = newWidth;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          (blob) => {
            displayInfo("original file", file);
            displayInfo("compressed file", blob);
            resolve(blob2File(blob, file.name));
          },
          "image/jpeg",
          imgQuality
        );
      }
    };
  });
};
const setNewWidth = (width: number, height: number, maxWidth: number) => {
  let newWidth = width;
  let newHeight = height;
  if (newWidth > maxWidth) {
    newHeight = Math.round((newHeight * maxWidth) / newWidth);
    newWidth = maxWidth;
  }
  return [newWidth, newHeight];
};
const displayInfo = (label: any, file: any) => {
  const result = `${label} - - ${readableBytes(file.size)}`;
  console.log(result);
};
const readableBytes = (bytes: any) => {
  const i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
};
const blob2File = (blob: any, fileName: string) => {
  const b: any = blob;
  b.lastModifiedDate = new Date();
  b.name = fileName;
  return blob as File;
};
