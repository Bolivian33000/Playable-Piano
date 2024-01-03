var numberOfKeys = document.querySelectorAll(".key").length;

for (var i = 0; i < numberOfKeys; i++)  {

    document.querySelectorAll(".key")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    })
}

function makeSound(key) {

    switch(key){
    case "C":
        var C_key = new Audio("./sounds/piano-c-notes/piano-c2.wav");
        C_key.play();
    break;
    
    case "C#":
        var C_sharpKey = new Audio("./sounds/piano-csharp-notes/piano-cs2.wav");
        C_sharpKey.play();
    break;
    
    case "D":
        var D_key = new Audio("./sounds/piano-d-notes/piano-d2.wav");
        D_key.play();
    break;

    case "D#":
        var D_sharpKey = new Audio("./sounds/piano-dsharp-notes/piano-ds2.wav");
        D_sharpKey.play();
    break;

    case "E":
        var E_key = new Audio("./sounds/piano-e-notes/piano-e2.wav");
        E_key.play();
    break;

    case "F":
        var F_key = new Audio("./sounds/piano-f-notes/piano-f2.wav");
        F_key.play();
    break;

    case "F#":
        var F_sharpKey = new Audio("./sounds/piano-fsharp-notes/piano-fs2.wav");
        F_sharpKey.play();
    break;

    case "G":
        var G_key = new Audio("./sounds/piano-g-notes/piano-g2.wav");
        G_key.play();
    break;

    case "G#":
        var G_sharpKey = new Audio("./sounds/piano-gsharp-notes/piano-gs2.wav");
        G_sharpKey.play();
    break;

    case "A":
        var A_key = new Audio("./sounds/piano-a-notes/piano-a2.wav");
        A_key.play();
    break;

    case "A#":
        var A_sharpKey = new Audio("./sounds/piano-asharp-notes/piano-as2.wav");
        A_sharpKey.play();
    break;

    case "B":
        var B_key = new Audio("./sounds/piano-b-notes/piano-b2.wav");
        B_key.play();
    break;

    case "C2":
        var C2_key = new Audio("./sounds/piano-c-notes/piano-c3.wav");
        C2_key.play();
    break;
    
        
    }
}


