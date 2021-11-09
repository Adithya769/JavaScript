// task2
const colors=["red","blue","green","yellow"];
function del() {
    colors.pop();
    return colors;
}
function add() {
    colors.push("pink");
    return colors;
}
function shi() {
    colors.shift();
    return colors;
}
function unshi() {
    colors.unshift("lightblue");
    return colors;
}
// colors.pop();
// document.getElementById("col").innerHTML= colors;
// colors.push("pink");
// document.getElementById("col1").innerHTML=colors;
// colors.shift();
// document.getElementById("col2").innerHTML=colors;
// colors.unshift("lightblue");
// document.getElementById("col3").innerHTML=colors;


document.getElementById("col").innerHTML= del();
document.getElementById("col1").innerHTML= add();
document.getElementById("col2").innerHTML= shi();
document.getElementById("col3").innerHTML= unshi();
// 
// task3