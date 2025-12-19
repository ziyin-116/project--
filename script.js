let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news() {
  list.innerHTML =
    list.innerHTML +
    `
  <div class+"news">
  <h2>${title.value}</h2>
  <p>${content.value}</p><hr>
  </div>
  `;
  title.value = "";
  content.value = "";
}

let i = 0,
  imgArr = new Array(); //宣告使用變數i及陣列imgArr
imgArr[0] =
  "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/1181px-National_Chiayi_University_seal.svg.png";
imgArr[1] =
  "https://www.ncyu.edu.tw/Uploads/Banner/61d5938b-9de9-466d-a970-d6abd58d74d2.jpg";
imgArr[2] =
  "https://www.ncyu.edu.tw/Uploads/Banner/85818221-a728-451e-9143-f5056f998f97.jpeg";

function showImg() {
  document.getElementById("ico").src = imgArr[i]; //指定img的src
  i = (i + 1) % 3; //把i加1之後，除以3(因為有三張圖輪播)，
}
function show() {
  setInterval(showImg, 2000); //每隔2秒呼叫一次showImg函數
}