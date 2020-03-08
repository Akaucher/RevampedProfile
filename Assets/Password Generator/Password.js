
function generatepassword(){
// let desiredlength = prompt("How long would you like your password to be?")
// let desiredproperties_upperletter = document.getElementById("uppercase"); 
// let desiredproperties_lowerletter = document.getElementById("lowercase");
// let desiredproperties_unicode = document.getElementById("unicode");
// let desiredproperties_interger = document.getElementById("interger");

//declare variables for password criteria
let desiredlength = prompt("How long would you like your password to be?")
let desiredproperties_upperletter = confirm("uppercase");
let desiredproperties_lowerletter = confirm("lowercase");
let desiredproperties_unicode = confirm("unicode");
let desiredproperties_interger = confirm("interger");

//check booleans
console.log(desiredlength);
console.log(desiredproperties_interger);
console.log(desiredproperties_upperletter);
console.log(desiredproperties_lowerletter);
console.log(desiredproperties_unicode);
console.log(desiredproperties_interger);

//set if statement for no conditions entered
if (desiredproperties_interger == false && desiredproperties_lowerletter == false && desiredproperties_upperletter == false && desiredproperties_unicode == false){
    console.log("No conditions met");
    alert("Please Select a Condition!");
    var noConditionsMet = true;
}

if (desiredlength < 8 || desiredlength > 128){
    console.log("Length not in range");
    alert("Please Select a value between 8 and 128");
    var noConditionsMet = true;
    let desiredproperties_upperletter = false;
    let desiredproperties_lowerletter = false;
    let desiredproperties_unicode = false;
    let desiredproperties_interger = false;
}

//declare password_variables
var password_formula = [];
var password_final = "";

//declare arrays
var upperletterarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerletterarray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var unicodearray = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027','\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E']
var intergersarray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//declare no condition array
var noConditionsMetArray = [""]

//confirms must pass logical tests for arrays to be passed along
if(desiredproperties_upperletter){
   password_formula = password_formula.concat(upperletterarray);
    console.log("upperletters true");
}
if(desiredproperties_lowerletter){
   password_formula = password_formula.concat(lowerletterarray);
    console.log("lowerletters true");
}
if(desiredproperties_unicode){
    password_formula = password_formula.concat(unicodearray);
    console.log("unicode true");
}
if(desiredproperties_interger){
    password_formula = password_formula.concat(intergersarray);
    console.log("intergers true");
}
if(noConditionsMet){
    password_formula = password_formula.concat(noConditionsMetArray);
    console.log("no conditions true");
}

console.log(password_formula)

//generate password by repeating random numbers to the length of the password_formula
for (let i = 0; i < desiredlength; i++) {
    var Randompicker = Math.floor((Math.random() * (password_formula.length)));
    // console.log(password_formula[Randompicker]) <--- uncomment to see relation of randomly picked intergers to password values
    password_final += password_formula[Randompicker];
}

//print password for proof
console.log(password_final);

document.getElementById("password").innerHTML = password_final;
}

function CopyToClipboard(){
    var CopyText = document.getElementById("password");
    CopyText.select();
    document.execCommand("copy");
    alert("Password copied to Clipboard")
}