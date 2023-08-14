// **********************************Assignment 02 Chapter 06-09 Ques 01**********************************

// var a =10;
// console.log("Result: \n The value of a is "+a);
// ++a;
// console.log("The value of ++a is: "+a);
// console.log("Now the value of a is: "+a);

// console.log("The value of a++ is: "+a);
// a++;
// console.log("Now the value of a is: "+a);

// --a;
// console.log("The value of --a is: "+a);
// console.log("The value of a is: "+a);

// console.log("The value of a-- is:"+a);
// a--;
// console.log("Now the value of a is:"+a);

// **********************************Assignment 02 Chapter 06-09 Ques 02**********************************

// var a=2 , b=1;
// var result = --a - --b + ++b + b--;

// //--a; 1
// //--a - --b; 0
// //--a - --b + ++b; 1
// //--a - --b + ++b + b--; 1
// // 1+0+1+1=3

// console.log("The result is: "+result);

// **********************************Assignment 02 Chapter 06-09 Ques 03**********************************

// var greetings=prompt("Enter Full Name");
// alert("Hello "+greetings );

// **********************************Assignment 02 Chapter 06-09 Ques 05**********************************

// var num= prompt("Enter a number","5");

// var times=1;
// var table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// console.log(num+" x "+times+" = "+table);
// ++times;
// table=num*times;

// **********************************Assignment 02 Chapter 06-09 Ques 06**********************************
// var subjectOne=prompt("Enter First Subject");
// var obtainedMarksOne=+prompt("Obatained Marks for First subject");
// var subjectTwo=prompt("Enter Second Subject");
// var obtainedMarksTwo=+prompt("Obatained Marks for Second subject");
// var subjectThree=prompt("Enter Third Subject");
// var obtainedMarksThree=+prompt("Obatained Marks for Third subject");
// var totalMarks=100;

// var PercentageOne=(obtainedMarksOne/totalMarks)*100;
// var PercentageTwo=(obtainedMarksTwo/totalMarks)*100;
// var PercentageThree=(obtainedMarksThree/totalMarks)*100;

// console.log("Subjects  Total Marks  Obtained Marks  Percentage");
// console.log(subjectOne+" " +totalMarks +" " + obtainedMarksOne+" " + PercentageOne+"%");
// console.log(subjectTwo+" " +totalMarks +" " + obtainedMarksTwo+" " + PercentageTwo+"%");
// console.log(subjectThree+" " +totalMarks +" " + obtainedMarksThree+" " + PercentageThree+"%");

// var totalSubjectMarks = totalMarks*3;
// var totalObtainedMarks = obtainedMarksOne + obtainedMarksTwo + obtainedMarksThree;
// var totalpercentage = PercentageOne + PercentageTwo + PercentageThree/100;
// console.log("        "+totalSubjectMarks +" " + totalObtainedMarks+" " + totalpercentage+"%");

// **********************************Assignment 02 Chapter 09-011 Ques 01**********************************

// var city= prompt("wirte Your city name.");
// if(city === "karachi"){
//     console.log("Welcome To The city of lights.")
// }else{
//     console.log("Congrats you live in darkness.")
// }

// **********************************Assignment 02 Chapter 09-011 Ques 02**********************************

// var gender=prompt("Enter Gender");
// if (gender === "male"){
//     console.log("Good Morning Sir");
// }else if(gender === "female"){
//    console.log("Good Morning Ma'am")
// }else {
//     console.log("InCorrect Input")
// }

// **********************************Assignment 02 Chapter 09-011 Ques 03**********************************

// var signalLight=prompt("Signal Colour");
// if (signalLight === "red"){
//     console.log("Must Stop");
// }else if(signalLight === "yellow"){
//     console.log("Ready to move")
// }else if(signalLight === "green"){
//     console.log("Move on")
// }else{
//     console.log("Incorrect signal colour")
// }

// **********************************Assignment 02 Chapter 09-011 Ques 04**********************************

// var remainingFull= +prompt("Write Remaining Fuel in car");
// if (remainingFull <= 0.25){
//     console.log("Please refill the fuel in your car.")
// }else{
//     console.log("Remainig Fuel is good. No need to refuel now.")
// }

// **********************************Assignment 02 Chapter 09-011 Ques 05**********************************
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// //true
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// //false
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// //false
// if (c === 13){
//     alert("condition 2 is true");
//     }
// //true
// if (++c < 14){
//     alert("condition 3 is true");
//     }
//     //false
//     if(c === 14){
//     alert("condition 4 is true");
//     }
//     //true
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// //true
// if (true){
//     alert("True");
//     }
//     //true
//     if (false){
//     alert("False");
//     }
//     //false

// **********************************Assignment 02 Chapter 09-011 Ques 06**********************************

// var obtainedmarks=+prompt("Enter your obtained marks")
// var totalMarks=300;
// var percentage= obtainedmarks/totalMarks*100;
// var grade;
// var remarks;
// if (percentage >= 80){
//     grade="A-one";
//     remarks="Execellent";
// }else if (percentage >= 70){
//     grade="A";
//     remarks="Good";
// }else if(percentage >= 60){
//     grade="B";
//     remarks="You Need to improve";
// }else if(percentage < 60){
//     grade="Fail";
//     remarks="Sorry";
// }else{
//     console.log("Enter Correct Marks")
// }
// console.log("Total Marks: "+totalMarks+"\nMarks Obtained: "+obtainedmarks+"\nPercentage: "+percentage+" %"+"\nGrade: "+grade+"\nRemarks: "+remarks);

// **********************************Assignment 02 Chapter 09-011 Ques 07**********************************

// var num= 4;
// var guess=+prompt("Guess the number");
// if (num === guess){
//     console.log("Bingo! Correct Answer");
// }else {
//     if(num+1 === guess){
//         console.log("Close enough to the correct answer");
//     }else{
//         console.log("Incorrect Answer")
//     }
// }

// **********************************Assignment 02 Chapter 09-011 Ques 08**********************************
// var num=+prompt("Enter a number");
// if(num % 3 == 0){
//     console.log(num+" Number is divisible by 3");
// }else{
//     console.log(num+" is not divisible by 3")
// }

// **********************************Assignment 02 Chapter 09-011 Ques 09**********************************
// var num =+prompt("Enter a number");
// if (num % 2 == 0){
//     console.log(num+" This is a Even number");
// }else{
//     console.log(num+" This number is Odd");
// }

// **********************************Assignment 02 Chapter 09-011 Ques 10**********************************
// var temp=+prompt("Tell me the Temperature")
// if (temp > 40 ){
//     console.log("Its to hot outside")
// }else if(temp > 30){
//     console.log("The weather today is normal")
// }else if(temp > 20){
//     console.log("Today's weather is cool")
// }else if (temp > 10){
//     console.log("OMG! Today's weather is so cool")
// }else{
//     console.log("The temperature input is invalid")
// }

// **********************************Assignment 02 Chapter 09-011 Ques 11**********************************

// var firstNum=+prompt("Enter first number") , secondNum=+prompt("Enter second number"); operation=prompt("What calculation you want? \n(+, -, *, /, %):")
// var mult= firstNum*secondNum;
// var divid= firstNum/secondNum;
// var plus= firstNum+secondNum;
// var minus=firstNum-secondNum;
// var percent= firstNum/secondNum*100;
// if(operation === "*"){
//     console.log(firstNum+" x "+secondNum+" = "+mult);
// }else if (operation === "/"){
//     console.log(firstNum+" / "+secondNum+" = "+divid);
// }else if (operation === '+'){
//     console.log(firstNum+" + "+secondNum+" = "+plus);
// }else if (operation === '-'){
//     console.log(firstNum+" - "+secondNum+" = "+minus);
// }else if (operation === "%"){
//     console.log(firstNum+" % "+secondNum+" = "+percent);
// }else{
//     console.log("Your operation input is invalid")
// }

// **********************************Assignment 02 Chapter 12-13 Ques 01**********************************

// var user=prompt("Enter a number or String");
// var charCode= user.charCodeAt(0);
// if (user >= 48 || charCode <=57){
//     console.log("This is a number")
// }else if(charCode >= 65 && charCode <= 90) {
//     console.log("The input is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//     console.log("The input is a lowercase letter.");
// } else {
//     console.log("The input is not a number or a letter.");
// }


// **********************************Assignment 02 Chapter 12-13 Ques 02**********************************

// var firstNum=+prompt("Enter First number");
// var secondNum=+prompt("Enter Second number");
// if (firstNum > secondNum){
//     console.log(firstNum+" is greater")
// }else if(secondNum > firstNum){
//     console.log(secondNum+" is greater")
// }else if(firstNum === secondNum){
//     console.log("Both number are equal.")
// }else{
//     console.log("Invalid input")
// }

// **********************************Assignment 02 Chapter 12-13 Ques 03**********************************

// var num=+prompt("Enter a number.");
// if (num < 0){
//     console.log("Number is negative")
// }else if (num > 0){
//     console.log("Number is positive")
// }else if (num === 0){
//     console.log("Number is equal to zero")
// }else{
//     console.log("Input is invalid")
// }

// **********************************Assignment 02 Chapter 12-13 Ques 04**********************************
// var alpha=prompt("Enter a single alphabet");
// if (alpha.length === 1){
//     if(alpha === "a" ||alpha === "e" ||alpha === "i" ||alpha === "o" ||alpha === "u"){
//         console.log("Its a vowel");
//     }else{
//         console.log("Not a vowel");
//     }
// }else{
//     console.log("long input");
// }

// **********************************Assignment 02 Chapter 12-13 Ques 05**********************************

// var ans="pakistan";
// var input=prompt("Enter Password");
// if (input !== ans || input.length === 0){
//     console.log("Incorrect Password");
// }else if (input === ans){
//     console.log("Correct!")
// }else{
//     console.log("Please enter your pasword")
// }

// **********************************Assignment 02 Chapter 12-13 Ques 06**********************************

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// console.log(greeting);
// }else{
// greeting = "Good evening";
// console.log(greeting);
// }

// **********************************Assignment 02 Chapter 12-13 Ques 07**********************************

// var num=+prompt("Enter time in 24 hours format");
// if(num >= 0000 && num < 1200){
//     console.log("Good Morning")
// }else if(num >=1200 && num < 1700){
//     console.log("Good Afternoon")
// }else if(num >= 1700 && num < 2100){
//     console.log("Good Evening")
// }else if(num >= 2100 && num <= 2359){
//     console.log("Good Night")
// }else{
//     console.log("Invalid input")
// }