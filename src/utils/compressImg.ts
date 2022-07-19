const MinImageWidth = 300; // 最小的寬度限制, width > target-px
const MaxImageSize = 5e5; // 500kb
const imgQuality = 0.95; // 轉成canvas後的圖片品質(0~1)
export const getCompressedImage = async (imageFile: File) => {
  // 1. check the file size
  // 2. check the file dimension(especially for width)
  // 3. compress the file
  let compressFile: { objectURL: string; blobFile: File };
  try {
    compressFile = await loadAndCompressImg(imageFile);
  } catch (error) {
    throw error;
  }
  return compressFile;
};
const loadAndCompressImg = (file: File) => {
  // 1. check the file size
  if (file.size >= MaxImageSize) {
    throw new Error(`Image must smaller than ${readableBytes(MaxImageSize)}`);
  }
  const image = new Image();
  const objectURL = URL.createObjectURL(file);
  return new Promise<{ objectURL: string; blobFile: File }>(
    (resolve, reject) => {
      image.src = objectURL;
      image.onerror = () => {
        reject(new Error("Fail to read the image file!"));
      };
      image.onload = () => {
        // 2. check the file dimension(especially for width)
        const width = image.naturalWidth | image.width;
        const height = image.naturalHeight | image.height;
        if (width < MinImageWidth) {
          reject(new Error(`${file.name}的寬度少於${MinImageWidth}px`));
        } else {
          console.log("width: " + width + ", height: " + height);
          // 算出新的圖片大小
          const [newWidth, newHeight] = calcNewImageSize(
            width,
            height,
            MinImageWidth
          );
          // 用canvas api to draw new image
          // 3. compress the file
          const compressedImage = drawCompressImage(newWidth, newHeight, image);
          // show file setting and resolve to promise
          compressedImage.toBlob(
            (blob) => {
              displayInfo("original file", file);
              displayInfo("compressed file", blob!);
              resolve({ objectURL, blobFile: blob2File(blob!, file.name) });
            },
            "image/jpeg",
            imgQuality
          );
        }
      };
    }
  );
};

const calcNewImageSize = (width: number, height: number, maxWidth: number) => {
  let newWidth = width;
  let newHeight = height;
  if (newWidth > maxWidth) {
    newHeight = Math.round((newHeight * maxWidth) / newWidth);
    newWidth = maxWidth;
  }
  return [newWidth, newHeight];
};

const drawCompressImage = (
  newHeight: number,
  newWidth: number,
  originalImage: HTMLImageElement
) => {
  const canvas = document.createElement("canvas");
  canvas.height = newHeight;
  canvas.width = newWidth;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(originalImage, 0, 0, newWidth, newHeight);
  return canvas;
};
// convert blob to file
const blob2File = (blob: Blob, fileName: string) => {
  const b: any = blob;
  b.lastModifiedDate = new Date();
  b.name = fileName;
  return blob as File;
};

/* show some detail of the original and compressed images */
const displayInfo = (label: string, file: File | Blob) => {
  const result = `${label} - - ${readableBytes(file.size)}`;
  console.log(result);
};
const readableBytes = (bytes: number) => {
  const i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
};
