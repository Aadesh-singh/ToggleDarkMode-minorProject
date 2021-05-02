var toggled = false;

var h1 = document.getElementById('h1');
var body = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

var toggle = document.getElementById('toggle');

toggle.onclick = function(e) {
    if(!toggled){
        h1.classList.add("white-color");
        body.classList.add("bk-color");
        circle.style.marginLeft = "100px";
        toggled = true;
    }
    else {
        h1.classList.remove("white-color");
        body.classList.remove("bk-color");
        circle.style.marginLeft = "1px";
        toggled = false;
    }
}