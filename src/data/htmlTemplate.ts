const modalTemplate: string = `
    <div class="image-modal">
      <div class="overlay"></div>
      <div class="modalTable">
        <div class="modalHeader">
          <h3>插入圖片</h3>
          <button id="headerClose" class="label-button">X</button>
        </div>
        <div class="modalInput">
          <h3>選擇檔案</h3>
          <input type="file" id="inputPc" class="input" /><label
            for="inputPc"
            class="label-button"
            >從電腦</label
          ><button id="inputUrl" class="label-button">從網址</button>
          <img class="modalInput-preview" id="image-preview" />
          <div class="modalInputFooter">
            <label class="altTextLabel" for="altTextInput">替代文字:</label>
            <input type="text" class="altTextInput" id="altTextInput" />
          </div>
        </div>
        <div class="modalFooter">
          <button class="label-button" id="cancelButton">取消</button>
          <button class="label-button" id="saveButton">儲存</button>
        </div>
      </div>
    </div>
`;
const editableAreaTemplate: string = `<div>Let's write something!</div>`;
export { modalTemplate, editableAreaTemplate };
