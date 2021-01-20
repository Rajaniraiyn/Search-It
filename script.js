document.getElementsByTagName("button")[0 || 1].addEventListener("click", function(){
    if (0 == document.getElementsByTagName("button")[0 || 1].value) {
        var n = document.getElementById("noqry");
        n.className = "show",
        setTimeout(function () {
            n.className = n.className.replace("show", "")
        }, 3e3)
    }})
document.
function offLine() {
    var o = document.getElementById("ofline");
    o.className = "show",
    setTimeout(function () {
        o.className = o.className.replace("show", "")
    }, 3e3)
}
setInterval(function () {
    0 == navigator.onLine && offLine()
}, 1e3);
function btn() {
    var a = document.getElementById("e1"),
        b = document.getElementById("e2");
    "none" === a.style.display
        ? (a.style.display = "block",
           b.style.display = "none")
        : (a.style.display = "none",
           b.style.display = "block")
};
