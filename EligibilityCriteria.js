let name = "Sunil";
let age = 18
let CET = 85
let HSC = 80
let PCM = 80
function Access(age){
    if (age > 14) {
        console.log("Welcome to Blockchain Website !!!");
    } else {
        console.log("Access Denied!!! Sorry Try Again later or check the credentials!!");
    }
}
Access(80);

function Cet_mrk(CET){
    if (CET >= 60) {
        console.log("Congratulations!! you are eligible for level 1  ");
    } else {
        console.log("So Sorry!! you are not eligible for level 1  ");
    }
}
Cet_mrk(90);

function BoardPercentile(HSC){
    if (HSC >= 60) {
        console.log("Congratulations!! you are eligible for level 2  ");
    } else {
        console.log("So Sorry!! you are not eligible for level 2 ");
    }
}
BoardPercentile(90);

function PCMPercentile(PCM){
    if (PCM >= 60) {
        console.log("Congratulations!! you are eligible for level 3  ");
    } else {
        console.log("So Sorry!! you are not eligible for level 3 ");
    }
}
PCMPercentile(50);
