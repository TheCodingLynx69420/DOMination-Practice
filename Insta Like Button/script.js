// lets go!;

//declaring important variables;

let container = document.querySelector("#container");

let heartIcon = document.querySelector("i");

//making event listener for the container so when a user double clicks on the image (which is the container because the image is taking 100% of the space that container has), the heart icon is going to pop up smoothly;

container.addEventListener("dblclick", function(){
    //this will change the scale value to "1" instead of "0" making the heart icon appear on the image;
    heartIcon.style.transform = "translate(-50%,-50%) scale(1)";
    //this setTimeout function will make the heart dissapear after few milliseconds (be sure to add transition in the css to make it look smooth);
    setTimeout(function(){
        heartIcon.style.transform = "translate(-50%,-50%) scale(0)";
    },700)
    
})




