export const closeImgModal = (
  imgModal: HTMLElement,
  previewImg: HTMLImageElement
) => {
  imgModal.classList.toggle("hidden");
  previewImg.removeAttribute("src");
};
