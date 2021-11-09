const animal=["lion","Wolf","Crocodile","Tiger"];
// function ani() {
//     animal.splice(0,0,"Snake","Bear","Whale");
//     return animal;
// }
animal.splice(0,0,"Snake","Bear","Whale")
document.getElementById("ani").innerHTML=animal;
animal.splice(2,3,"Monkey","Leopard","Kangaroo");
document.getElementById("ani1").innerHTML=animal;
// sort method
const vegies=["potato","brinjals","tomato","spinaash"];
document.getElementById("ani2").innerHTML=vegies;
vegies.sort();
document.getElementById("ani3").innerHTML=vegies;

const nos=[321,128,10,84,35,15];
document.getElementById("ani4").innerHTML=nos;
nos.sort(function(a,b) {return a-b;
    
});
document.getElementById("ani5").innerHTML=nos;

let txt =" ";
nos.forEach(myfunction);
function myfunction(value,index,array) {
    txt += value+"<br>";
}
document.getElementById("ani6").innerHTML=txt;
nos.map(myfunction1);
function myfunction1(value,index,array) {
    txt += value+100+"<br>";}
document.getElementById("ani7").innerHTML=txt;

const dt= new Date();
document.getElementById("ani8").innerHTML=dt;
const d= new Date("October 13, 2014 11:13:00");
document.getElementById("ani9").innerHTML=d;
let r=Math.random();
document.getElementById("ani10").innerHTML=r;
let r1= Math.floor(Math.random()*10000);
document.getElementById("ani11").innerHTML=r1;

// 
const car = ["bmw","volvo","saad","ford","fiat","audi"];
let text="";
for(let i=0;i< car.length;i++){
    text+= car[i]+"<br>";
}
document.getElementById("ani12").innerHTML=text;

// decision making
let age = 18;
let vote= (age>=18)?"eligible":"not eligible";
document.getElementById("ani13").innerHTML=vote;
// second
function decisionmak() {
    let time =16;
    let msg = "";
    if(time<= 10){
        msg="good moring";
    }else if(time<= 15){
        msg ="good afternoon";
    }else if(time<=19){
        msg="good evening";
    }else{
        msg="good night";
    }
    return msg;
}
let x=decisionmak();
document.getElementById("ani14").innerHTML=x;
// Switch case
function switchcasedemo() {
    let d=1;
    let day="";
    switch(d){      //new date().getday it will take today 's day "new Date().getDay()"
        case 0:
            day="sunday";
            break;
        case 1:
            day="monday";
            break;
        case 2:
            day="tuesday";
            break;
        case 3:
            day="wednesday";
            break;
        case 4:
            day="thursday";
            break;
        case 5:
            day="friday";
            break;
        case 6:
            day="saturday";
            break;
    }
    return day;
}
let day=switchcasedemo();
document.getElementById("ani15").innerHTML=day;
