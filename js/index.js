var buttons = document.querySelectorAll(".drum");

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        var pressedButton = this.textContent;

        playSound(pressedButton);
        
        animatePress(pressedButton);
    });
}

addEventListener("keypress", function(event) {
    playSound(event.key);

    animatePress(event.key);
});


function playSound(key) {
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
         case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(key);
    }
}
 
function animatePress(key){
    var pressedButton = document.querySelector("." + key);
    pressedButton.classList.add("pressed");

    setTimeout(function() {
        pressedButton.classList.remove("pressed");
    }, 100);
}



$("h1").slideUp().slideDown();

console.log();

