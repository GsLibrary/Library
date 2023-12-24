// Thanks For Choosing GsLibrary!
// You Are Currently Using Version 1.0.5

// To Visit The Documents/Wiki Head To https://github.com/GsLibrary/Documents

// OnEvent
function onEvent(Event, Read, Callback) {
    if (Event === "click") {
        Read.addEventListener("click", Callback);
    } else if (Event === "rclick") {
        Read.addEventListener("contextmenu", Callback);
    } else if (Event === "dclick") {
        Read.addEventListener("dblclick", Callback);
    } else if (Event === "hover") {
        Read.addEventListener("mouseover", Callback);
    } else if (Event === "leave") {
        Read.addEventListener("mouseout", Callback);
    } else if (Event === "keypress") {
        document.addEventListener("keydown", function (event) {
            if (event.key === Read) {
                Callback();
            }
        });
    } else {
        console.warn("Invalid Parameters");
    }
}

// Generation
// I Will Be Changing This One So It Uses Return Instead.
function getRandom(Type, Set){
    if (Type === "1"){
        Set = Math.round(Math.random() * 10);
    } else if (Type === "2"){
        Set = Math.round(Math.random() * 100);
    } else if (Type === "3"){
        const RandomLetterCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Set = RandomLetterCharacters.charAt(Math.floor(Math.random() * RandomLetterCharacters.length));
    } else {
        console.warn("Invalid Parameters");
    }
}

// Class
function manageClass(Type, Read, A, B){
    if (Type === "1" || "add"){
        Read.classList.add(A);
    } else if (Type === "2" || "remove"){
        Read.classList.remove(A);
    } else if (Type === "3" || "change" || "swap"){
        Read.classList.remove(A);
        Read.classList.add(B);
    } else if (Type === "4" || "toggle"){
        Read.classList.toggle(A);
    } else {
        console.warn("Invalid Parameters")
    }
}