const color=["red","blue","green","yellow"];

function del() {
    color.pop();
}
function add() {
    color.push("pink");
}
document.getElementById("col").innerHTML=del();
document.getElementById("col1").innerHTML=add();
