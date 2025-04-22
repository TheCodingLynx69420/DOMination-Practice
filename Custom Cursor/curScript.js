//lets go!!;

//declaring important variables;

let main = document.querySelector("#main");

let cursor = document.querySelector(".cursor");

//now we will make an event listener which would track your mouse movement, by using "mousemove" event;

//the "details" in the parameter will give details about where the mouse is and it will keep updating, the idea here is to change the left and right property of the style of cursor with "details.x" (horizontle value) and "details.y" (vertical value), it is important to give the "position: absolute" to the cursor to make this event work!;
main.addEventListener("mousemove", function (details) {
    //there are 2 ways to make the cursor element move along with the mouse;
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";

    //or this (both works perfectly the below one uses ES6's concatenation);

    // cursor.style.left = `${details.x}px`;
    // cursor.style.top = `${details.y}px`;

})


