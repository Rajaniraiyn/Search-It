function myS1(){
  if(0===document.getElementById("S1").value){
    var a=document.getElementById("noqry");
    a.className="show";
    setTimeout(function(){
      a.className=a.className.replace("show","")},3E3)}
  else location.href="https://rajaniraiyn.github.io/Search-It/?p="+document.getElementById("S1").value}
function myS2(){
  if(0===document.getElementById("S2").value){
    var a=document.getElementById("noqry");
    a.className="show";
    setTimeout(function(){
      a.className=a.className.replace("show","")},3E3)}
  else location.href="https://rajaniraiyn.github.io/Search-It/?c="+document.getElementById("S2").value}
function offLine(){
  var a=document.getElementById("ofline");a.className="show";
  setTimeout(function(){
    a.className=a.className.replace("show","")},3E3)}
setInterval(function(){
  0==navigator.onLine&&offLine()},1E3);
