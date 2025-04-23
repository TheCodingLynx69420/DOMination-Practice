//lets go!!;

//using query All to select all of the elements of "elem" class, they would appear as a "Node list";
let elem = document.querySelectorAll(".elem");

//we are gonna be using the For each loop as Node list is like an array;
elem.forEach(function (value) {
    value.addEventListener("mouseenter", function (details) {
        //using "childNodes[3]" as we need to target the "img" tag inside the ".elems"

        //after this we can add the event listener for mouse entering/leaving and hovering (mousemove);

        //the code for mousemove is the same one as the "Custom Cursor" we did in the prev project!;
        value.childNodes[3].style.opacity = "1"
    })
    value.addEventListener("mouseleave", function () {
        value.childNodes[3].style.opacity = "0"
    })
    value.addEventListener("mousemove", function (details) {
        value.childNodes[3].style.left = details.x + "px";
        value.childNodes[3].style.top = details.y + "px";
    })

})

