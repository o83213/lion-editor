# lion-editor

A rich-text editor build with TS and JS.

# Blue Print

## User Storys

1. 插入文字區塊(標題、副標、內文)
2. 將文章內容儲存到資料庫
3. 改變文字區塊樣式(粗體、斜體、底線等等)
4. 插入圖片(本機，需含圖片解說)
5. 插入圖片網址(雲端，需含圖片解說)
6. 插入超連結
7. 插入列表(數字、圈圈)
8. 插入鑲嵌區塊(IG、FB、YOUTUBE)
9. 廣告放置區塊
10. 能更改儲存的文章

## Features

### 顯示編輯器內容

1. 取得編輯器資料
2. 將資料呈現在編輯器上

### 插入文字區塊(標題、副標、內文)

1. 創建空白區塊
2. 將指定文字樣式區塊插入空白區塊內
3. 使用者點擊(focus)該區塊直接編輯文字內容
4. 離開時(blur)儲存內容

### 將文章內容儲存到資料庫

1. 找到編輯器
2. 儲存編輯器內容
3. 將其轉為 HTML string
4. 將 HTML string 儲存置資料庫

### 更改儲存的文章

1. 讀取 HTML string
2. 置換編輯器的 inner HTML

## Flow Chart

見 public folder
