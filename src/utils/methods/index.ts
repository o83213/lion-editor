// textDecoration
import { changeTextBold } from "./textDecoration/changeTextBold";
import { changeTextDeleteline } from "./textDecoration/changeTextDeleteline";
import { changeTextItalic } from "./textDecoration/changeTextItalic";
import { changeTextUnderline } from "./textDecoration/changeTextUnderline";
import { changeTextHyperlink } from "./textDecoration/changeTextHyperlink";
// toolbarLeft
import { createParagraphBlock } from "./toolbarLeft/createParagraphBlock";
import { createOrderList } from "./toolbarLeft/createOrderList";
import { createEmbededBlock } from "./toolbarLeft/createEmbededBlock";
import { saveContent } from "./toolbarLeft/saveContent";
import { openImgModal } from "./toolbarLeft/openImgModal";
// toolbarBottom
import { saveScript } from "./toolbarBottom/saveScript";
import { pushToDatabase } from "./toolbarBottom/pushToDatabase";
// imageModal
import { loadImgFromPC } from "./imageModal/loadImgFromPC";
import { loadImgFromURL } from "./imageModal/loadImgFromURL";
import { closeImgModal } from "./imageModal/closeImgModal";
import { saveImage } from "./imageModal/saveImage";
//
import { loadContent } from "./others/loadContent";
const methods = {
  // textDecoration
  changeTextBold,
  changeTextDeleteline,
  changeTextItalic,
  changeTextUnderline,
  changeTextHyperlink,
  // toolbarLeft
  createParagraphBlock,
  createOrderList,
  createEmbededBlock,
  saveContent,
  openImgModal,
  // toolbarBottom
  saveScript,
  pushToDatabase,
  // imageModal
  loadImgFromPC,
  loadImgFromURL,
  closeImgModal,
  saveImage,
  //
  loadContent,
};
export { methods };
