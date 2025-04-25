//lets gooo!;

//setting up images to show on the stories (you can choose your own!);

let images = [
    { pfp: "https://images.unsplash.com/photo-1612454376902-577cd469d008?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1609372332255-611485350f25?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { pfp: "https://images.unsplash.com/photo-1744894203359-baffe11eb6de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1744140390489-fc279d403107?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { pfp: "https://images.unsplash.com/photo-1744871783125-21a510d12fc1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1744043176705-6f61f70f1646?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { pfp: "https://images.unsplash.com/photo-1743844914274-9e34fc75f841?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1727466961507-b659d9f22f06?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { pfp: "https://plus.unsplash.com/premium_photo-1736194028784-a0afea956b72?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1742729118744-216a86a65560?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { pfp: "https://images.unsplash.com/photo-1744887078747-31d9a636e8f4?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1699969469616-7899a78f3068?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
]


//now lets do some logics!

//this fitImage variable would be empty with string commas (we will add the images link inside it);

let fitImage = ""

//we will use a "forEach" loop for putting the image links inside the img's "src" tag;

//and we are also gonna give index number to the images in the form of "id";

images.forEach((element, index) => {
    //so we are basically adding the whole "div.story with img tag inside" here instead of putting in html directly;
    fitImage += `<div class="story">
                <img src="${element.pfp}" id = "${index}" alt="story-image">
            </div>`

});

//declaring variable for the stories class and then finally adding the content of fitImage variable inside it, so the links in the array of images would be added inside the "src" tag of images inside the stories class;

let storyDiv = document.querySelector(".stories");

storyDiv.innerHTML = fitImage;

//now declaring the fullscreen variable to make changes, when someone clicks on the pfp the story would be shown on full screen!;

let fullScreen = document.querySelector("#full-screen");

//adding click event;

storyDiv.addEventListener("click", function (details) {
    fullScreen.style.display = "block";
    //we are targeting the objects of "images array" (which contains all the pfp and images stuff), but we want that when someone clicks on the pfp the story image would be shown only so hence we are selecting ".story" outside the "[]" bracket, this is important!;
    fullScreen.style.backgroundImage = `url(${images[details.target.id].story})`;

    //now we want the story to go away after some seconds;

    setTimeout(function () {
        fullScreen.style.display = "none";
    }, 5000)

})





