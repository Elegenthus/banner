var container = document.getElementById('container');
var items = container.getElementsByClassName('pic');
var side = document.getElementById("side")
var dot = side.getElementsByTagName('div');
var height = document.body.clientHeight;
var i = 0;
var waiting = false;

container.style.height = height * items.length + 'px';
for (var k = 0; k < items.length; k++)
    items[k].style.height = height + 'px';

function changeDotStyle(i){
	for (var k = 0; k < items.length; k++) {
        if (k == i)
            dot[k].className = "circle1";
        else
            dot[k].className = "circle";
    }
}

function nextPage(e) {
    if (e.deltaY < 0 && i > 0) {
        i--;
    } else if (e.deltaY > 0 && i < items.length - 1) {
        i++;
    }
    container.style.transform = "translateY(-" + i * height + "px)";
    changeDotStyle(i);
}

function changePageByDot(k){
    dot[k].addEventListener('click', function() {
        changeDotStyle(k);
        container.style.transform = "translateY(-" + k * height + "px)";
    })
}

for (var k = 0; k < dot.length; k++) {
    changePageByDot(k);
    
}

window.addEventListener('mousewheel', function(e) {
        console.log("end")
    if (waiting) return;
    nextPage(e);
    waiting = true;
    setTimeout(function(){
        waiting = false
        console.log("end")
    }, 1000);
});
