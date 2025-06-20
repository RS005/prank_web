function showmessage() {
      document.getElementById("female").innerText = "bitch you hijru?";
    }
const submitBtn = document.getElementById("submit");
const result= document.getElementById("result");
const userinput = document.getElementById("userinput");
let randomnum = Math.floor(Math.random()*6)+1;

submitBtn.onclick = function () {
    let input = Number(userinput.value); // Get the user's guess
    console.log(randomnum);

    if (input < randomnum) {
        result.innerHTML = `Oops, yours is small . Dont worry there's a solution . If interested Check out <a href="https://www.amazon.in/horse-power-capsule-for-men/s?k=horse+power+capsule+for+men" target="_blank" style="color: blue; font-weight: bold;">😋</a>  else alt+f4` ; 
    } else if (input > randomnum) {
        result.innerHTML = `Enjoy the big one bro but use  <a href="https://www.amazon.in/horse-power-capsule-for-men/s?k=horse+power+capsule+for+men" target="_blank" style="color: blue; font-weight: bold;">PROTECTION</a> `;
    } else {
        result.innerHTML = `Yours is just fine but can be better . If interested Check out <a href="https://www.amazon.in/horse-power-capsule-for-men/s?k=horse+power+capsule+for+men" target="_blank" style="color: blue; font-weight: bold;">😋</a>  else alt+f4` ;
    }
};



