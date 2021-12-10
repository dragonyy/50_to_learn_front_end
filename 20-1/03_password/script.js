const form = document.getElementById("form");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

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

function resetInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
}

function isValidEmail(content) {
  const re =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(content);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  resetInput(password);
  resetInput(password2);
  if (password.value === "" || password2.value === "") {
    if (password.value === "") {
      showError(password, "密碼欄未輸入文字");
    }
    if (password2.value === "") {
      showError(password2, "密碼欄未輸入文字");
    }
  } else if (password.value != password2.value) {
    showError(password, "密碼欄兩欄密碼不同");
    showError(password2, "密碼欄兩欄密碼不同");
  } else {
    showSuccess(password);
    showSuccess(password2);
  }
  // 02.02 username.value 是不是我所要的東西？
  // console.log(username.value);
});
