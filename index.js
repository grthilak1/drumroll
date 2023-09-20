// document.querySelector("button").addEventListener("click", function () {
//     alert('W is clicked');
// });

// document.querySelectorAll("button")[1].addEventListener("click", function () {
//     alert('a is clicked');
// });

var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    })
}

function makeSound(buttonInnerHTML) {
    switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}
// function HouseKeeper (name, experience, cleaningRepertoire) {
//     this.name = name;
//     this.experience = experience;
//     this.cleaningRepertoire = cleaningRepertoire;
// }

// houseKeeper1 = new HouseKeeper('Mari', 12, ['bedroom', 'bathroom', 'lobby']);
// houseKeeper2 = new HouseKeeper('Mary', 12, ['Hall', 'bedroom', 'lobby']);

// console.log(houseKeeper1);
// console.log(houseKeeper2);