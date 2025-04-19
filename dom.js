//lets go

//declaring useful variables;

let addBtn = document.querySelector(".add");

let image = document.querySelector("img");

let hiddenPara = document.querySelector(".hidden-para");

let aboutSpan = document.querySelector(".addFriend");

//this check variable is like a toggle for our if-else statement below, basically it will check which button is currently on display;
let check = 0;

let state = document.querySelector("h2");

addBtn.addEventListener("click", function () {

    if (check == 0) {
        addBtn.innerHTML = "Remove Friend x";
        aboutSpan.style.display = 'none';
        hiddenPara.style.display = 'block';

        state.innerHTML = 'Friends';
        state.style.border = 'none';
        state.style.backgroundColor = 'green';
        state.style.color = 'white';

        image.style.border = '5px solid greenyellow'



        check = 1;
    } else {
        addBtn.innerHTML = "Add Friend +";
        aboutSpan.style.display = 'inline';
        hiddenPara.style.display = 'none';

        image.style.border = '5px solid gray'

        state.innerHTML = 'Stranger';
        state.style.border = '1px solid gray';
        state.style.backgroundColor = 'gray';
        state.style.color = 'white';

        check = 0;
    }
})