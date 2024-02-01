// Complete logic of game inside this function
let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
console.log(computer);
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let result_modal=document.querySelector(".result_modal");
let win=document.querySelector(".win");
let play_again=document.querySelector(".play_again");
let rand=Math.floor(Math.random()*3);
let line1=document.querySelector(".main_line1");
let line2=document.querySelector(".main_line2");
let line3=document.querySelector(".main_line3");
let score = JSON.parse(localStorage.getItem("score")) || 0;
let scoreCom = JSON.parse(localStorage.getItem("scoreCom")) || 0;
let scoreEle = document.getElementById("score");
let scorec = document.getElementById("scorec");
scoreEle.innerText = score; // Update score display
scorec.innerText = scoreCom;
let count = 0;
let countc = 0;
con.forEach((element, idx) => {
  element.addEventListener("click", ()=>{
    user.style.opacity="1";
    line1.style.display="none";
    line2.style.display="none";
    line3.style.display="none";
    con.forEach(item => {
      item.style.display="none";
    });
    element.style.display="block";
    element.classList.add("show");
    setTimeout(() => {
      machine.style.opacity="1";
      setTimeout(() => {
        computer[rand].style.display="block";
        computer[rand].classList.add("right");
      }, 1000);
    }, 500);
    setTimeout(() => {
      if(rand==idx){
          result_modal.style.display="grid";
          win.innerText="   TIE UP";
      }else if(idx==2 && rand==0 || idx==1 && rand==2 || idx==0 && rand==1){
          result_modal.style.display="grid";
          win.innerText="YOU WIN";
          count = score + 1;
          scoreEle.innerText = count;
          localStorage.setItem("score", JSON.stringify(count));
      } else{
        result_modal.style.display="grid";
        win.innerText="YOU LOST";
        countc = scoreCom + 1;
        scorec.innerText = countc;
        localStorage.setItem("scoreCom", JSON.stringify(countc));
      }
    }, 1500);
  });
});
play_again.addEventListener("click", () => {
  window.location.reload();
})


function openDiv() {
  var rules = document.getElementById("rules_box");
  rules.classList.remove("hidden");
  var close_button = document.getElementById("rules_box1");
  close_button.classList.remove("hidden");
}

function closeDiv() {
  var rules = document.getElementById("rules_box");
  rules.classList.add("hidden");
  var close_button = document.getElementById("rules_box1");
  close_button.classList.add("hidden");
}
