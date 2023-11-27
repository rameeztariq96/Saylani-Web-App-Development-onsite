var generator = document.getElementById("typeText");

var alphabets = "abcdefghijklmnopqrstuvwxxyz";
var alphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number=1234567890;
var special="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var password=[alphabets+alphabetsUpper+number+special];

function hello() {
    for(var i=0; i < 9; i++){
        var newPassword =Math.floor(Math.random().password);
        console.log(password);
    }
}
