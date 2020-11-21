  function search(e) {
    if (0 === document.getElementById(e).value) {
      var a = document.getElementById("noqry");
      a.className = "show",
        setTimeout(function () {
        a.className = t.className.replace("show", "")
      }  , 3e3)
    }
    else 
      "s1" == e
        ? location.href = "https://rajaniraiyn.github.io/Search-It/?p=" + document.getElementById(e).value
      : "s2" == e
        ? location.href = "https://rajaniraiyn.github.io/Search-It/?c=" + document.getElementById(e).value
      : console.log()
      }
  function offLine() {
    var e = document.getElementById("ofline");
    a.className = "show",
      setTimeout(function () {
      a.className = a.className.replace("show", "")
    }  , 3e3)
  }
  setInterval(function () {
    0 == navigator.onLine && offLine()
  }  , 1e3);
