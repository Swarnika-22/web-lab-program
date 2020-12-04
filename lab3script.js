var text_sz = 0;
var timeout1,timeout2;
var text;
function startAnim() {
    text = document.getElementById("text");
    timeout1 = window.setInterval("incr()",100);

}
function incr() {
    text_sz += 1;
    text.innerHTML ="TEXT GROWING......."+text_sz +" pt";
    text.style.fontSize = text_sz +"pt";
    text.style.color = "yellow";
    if (text_sz > 50) {
        window.clearInterval(timeout1);
        timeout2 = window.setInterval("decr()",100);
    }
}
function decr() {
    text_sz -=1;
    text.innerHTML ="TEXT SHRINKING......."+text_sz +" pt";
    text.style.fontSize = text_sz +"pt";
    text.style.color = "red";
    if (text_sz < 6) {
        window.clearInterval(timeout2);
        timeout2 = window.setInterval("incr()",100);
    }
}