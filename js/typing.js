const content =
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력 \n을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 \n 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 200);
