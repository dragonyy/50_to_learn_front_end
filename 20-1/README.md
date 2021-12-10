# 小專案一 Form Validation

這是來自 Brad Traversy 的 [20 Web Projects with Vanilla JavaScript](https://learning.oreilly.com/videos/20-web-projects/9781800563049/)，其中的第一個小專案。

## 專案目的

對一個表單於輸入（按下 Submit 按鈕）時，對於所有的輸入欄位進行我的驗證 -- 這是相對於 email 欄位其實有來自瀏覽器的驗證的事實。

對於我來說的話，是

- 分析作者所使用的 HTML 成稿，了解其組織劃分（即 div 怎麼包）
- 了解、查詢 CSS，在我不太熟悉的狀況下認識、記憶這些 CSS 的要點
- 學習初級的 JavaScript

## 值得深究的源碼

```JS
const form = document.getElementById("form");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
}
```

- `form` 是個 Element 元素（至少在繼承體系上來說是這樣）；在源碼中會用到有趣的方法呼叫
- 很久以前要得到 `form` 這樣的物件似乎必須用 jQuery 才能有一致的行為，不過現在顯然不需要了
- `input` 在函式中代表了傳進來的是 `<input>` 元素；不論其 type 為何，有些共用的方法；比如說 `parentElement` 這個（應該是 property 吧）
- 去看 HTML 的源碼得知，`<input>` 元素的父輩是包住它的 `<div>` 區塊；這只有令 class 名稱而沒有令 id（也許是仿自 Bootstrap? 據說那是依賴於類別名稱而完全不靠 id 的）
- `Element.className` （大概是 property）顯然是會被覆寫掉，所以改的時候要多寫 `form-control` 一次

## 最終的 script.js

[GitHub 上的成品](https://github.com/PacktPublishing/20-Web-Projects-with-Vanilla-JavaScript/blob/master/form-validator/script.js)

程式的主體部分如下：

```JS
// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(!checkRequired([username, email, password, password2])){
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  }

});
```

- 就不說其他工具性的函式了
- 總覺得這是將 MVC 的控制部分給弄了出來
- 我第一次看到的時候另外還想起了 `Template Method` 這個字眼；但顯然不可能在如此小的應用之中製作繼承體系

### 密碼驗證的顯示邏輯

看樣子似乎是這樣：

- 若密一或密二欄是空的，顯示那是空的（反正都是紅字）
- 若密一非空，且密二欄非空，則比對兩者的內容
  - 若不同，則密一欄會是綠色的
  - 若不同，則密二欄會顯示要求兩欄輸入文字要相同！

### JavaScript 似乎真的沒有 `capitalize` 這樣的字串方法呀

坦白說，看到 Brad Traversy 用 `s.charAt()` 和 `s.slice()` 這樣的組合方式來進行 capitalize 的工作我非常地驚訝！可我估狗了一下，似乎問的人不少，官方提供的 API 則沒有… interesting!!!
