const form = document.getElementById("form");
const username = document.getElementById("username");

// 03.01 製作 showError, showSuccess 兩函數
// 04 做點實際有用的，設紅框
// 05 錯誤訊息要特製
function showError(input, message) {
  // 03.02 搬動過來
  // console.log("使用者輸入是空的");
  // 04.01 依據 BT 影片所提供的 API，see A4K p.28 note
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  // 05.03 錯誤訊息畫到螢幕上
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// 03.07 加入參數
function showSuccess(input) {
  // 03.03 搬動過來
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 01 首先先證明這是可以工作的，印出個字串
  // console.log("This is a book for submit");
  // 02 判斷是否真有輸入字串
  // 02.01 不如預期
  // 02.03 原來是我的邏輯錯誤，真假兩個敘述放反了！
  if (username.value === "") {
    // 03 BT 決定在這裡就引入函數
    // 03.04 呼叫
    // 04.02 Ooops! 這個地方要把參睥放進去啦！
    // 05.01 加入新的錯誤訊息
    showError(username, "使用者未輸入文字");
  } else {
    // 03.05 呼叫
    // 03.06 啊啦，要有參數傳進去啊！
    showSuccess(username);
  }
  // 02.02 username.value 是不是我所要的東西？
  // console.log(username.value);
});
