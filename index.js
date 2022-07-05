// alert("working");

// document.querySelectorAll("button")[0].addEventListener("click",handlesClick)

/*function handlesClick(){
    alert("i got cliked");
}

to use this in even listener ... just write name of fuction without () this
*/ 
// or anonymous function --without name function



// detecting button press
var NoOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<NoOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){ 
    
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
})

//detecting key bord press
document.addEventListener("keydown", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
})

function makeSound(key){
    
    switch (key) {
        case "m":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "u":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case "i":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "c":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case "a":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "l":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default: console.log(buttonInnerHTML)
            break;
    }

}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
    
}

}