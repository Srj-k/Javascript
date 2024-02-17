var textBox=document.getElementById("textBox");
var upperCase=document.getElementById("upperCase");
var lowerCase=document.getElementById("lowerCase");
var numbers=document.getElementById("numbers");
var characters=document.getElementById("characters");
function GenPass(){
    var upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower='abcdefghijklmnopqrstuvwxyz';
    var number='0123456789';
    var specialChars ='!@#$%^&*';
    var generatedPassword ="";
    var length=8;
    var allChar='';
    allChar+= upperCase.checked ? upper : "";
    allChar+= lowerCase.checked ? lower : "";
    allChar+= numbers.checked ? number : "";
    allChar+= characters.checked ? specialChars : "";
    for (let index = 0; index <length; index++) {
        generatedPassword+= allChar.charAt(Math.floor(Math.random()*allChar.length));
    }
    
    textBox.value=generatedPassword;
}