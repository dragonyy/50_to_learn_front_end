# 跟著 CSS Crash Course 學 CSS

* 作者是 Brad Traversy
* 取得方式：開啟 Youtube 網站，以「brad traversy css crash course」為關鍵字搜尋即可
* （觀看的）前置條件是已經了解了HTML的大致運作
* 本影片中不會有 Flexbox / Grid 相關內容

## 開發環境

### 作業系統

MacOS

### 編輯器

* Visual Studio Code （一般檔案編輯）
* Typora (Markdown)

不管以前如何，現在的 BT 在任何新課程都使用 VIsual Studio Code 來進行教學，所以我這裡就採用 Code，而非影片中作者所用的編輯器。

有些 extensions（這似乎是 VS Code 的術語，不是用 plugin），這裡不一一列出。反正 BT 在管子上給出的資源很多，這也是可以搜尋得到的。

VS Code 似乎也可以編輯 Markdown 格式的檔案，不過我是為了學習 Typora 這個輕量化的小編輯器。

### 瀏覽器

Google Chrome

# 正文開始

先建立兩個子目錄，csscheatsheet 和 mywebsite。一開始先在前者中進行編輯。

暫時停用 Vim 延伸模組（因為好久沒有使用了…）。

## 困難與解決

### VS Code 中的 Emmet 不工作

查詢估狗後依[這篇](https://stackoverflow.com/questions/48888869/visual-studio-code-emmet-not-working)調整了一些設定後好像可以了。

在index.html中按下「!」及<tab>後得到基礎的HTML網頁一枚。

### VS Code 中給 html 檔案用的註解快速鍵給出了奇怪的東西

編輯視窗的下方「選取語言模式」莫名地變成了「Django html」；點一下，選HTML。

### VS Code 中 Prettier 似乎沒有在工作

```js
File > Preferences > Settings > Search for "default formatter" 
```

（不翻譯成中文了）原始設定居然是「無」…改成和 prettier 相關的之後（似乎）正常工作了。

#### 測試方法

將 <style> 標籤整個向右移動一些（空白鍵），儲存時又格式化回來了。







