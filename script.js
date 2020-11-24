function search(e) {
    if (0 == document.getElementById(e).value) {
        var n = document.getElementById("noqry");
        n.className = "show",
        setTimeout(function () {
            n.className = n.className.replace("show", "")
        }, 3e3)
    } else 
        "s1" == e
            ? location.href = "https://rajaniraiyn.github.io/Search-It/?p=" + document.getElementById(e).value
            : "s2" == e
                ? location.href = "https://rajaniraiyn.github.io/Search-It/?c=" + document.getElementById(e).value
                : console.log()
        }
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
        b = document.getElementById("e2"),
        c = document.getElementsByClassName("e3");
    "none" === a.style.display
        ? (a.style.display = "block",
           b.style.display = "none",
           c.innerHTML = "Switch to Complete Mode")
        : (a.style.display = "none",
           b.style.display = "block",
           c.innerHTML = "Switch to Private Mode")
};
