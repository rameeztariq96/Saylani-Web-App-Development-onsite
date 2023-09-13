// **********************************Assignment 06 Chapter 35-38 Ques 01**********************************

// function yes(hello){
//     console.log(new Date());
// }
// yes();

// **********************************Assignment 06 Chapter 35-38 Ques 02**********************************
// function abc(){
// var nameFirst= prompt("Enter your First Name")
// var nameSecond= prompt("Enter your First Name")
// alert("Hello ! " +nameFirst+" " +nameSecond)
// }
// abc();

// **********************************Assignment 06 Chapter 35-38 Ques 03**********************************

// function addition(a,b){
//     return a+b;
// }
// console.log( addition( parseInt( prompt("Enter first number to add") ) , parseInt( prompt("Enter Second number to add") ) ) );

// **********************************Assignment 06 Chapter 35-38 Ques 04**********************************

// function calculator(num1,num2,operator){
// if (operator == "/" ){
//     return num1/num2;
// }else if (operator == "*"){
//     return num1*num2;
// }else if (operator == "+" ){
//     return num1+num2;
// }else if (operator == "-"){
//     return num1-num2;
// }else{
//     return console.log("Sorry! You Entered Something Wrrong")
// }
// }
// console.log( calculator( parseInt( prompt("Enter first number to add") ) , parseInt( prompt("Enter Second number to add") ) , prompt("Enter operator") ) );

// **********************************Assignment 06 Chapter 35-38 Ques 05**********************************

// function abc(a){
//     return a*a;
// }
// console.log( abc( parseInt( prompt("Enter a number to square it"))  ) );

// **********************************Assignment 06 Chapter 35-38 Ques 06**********************************

// function factorial(a){
//     var b=1;
//     for(var i=a ; i > 0 ; i--){
//         b = i * b;
//     }
//     return b;
// }
// console.log( factorial( parseInt(prompt("Enter a Number to find the factorial")) ));

// **********************************Assignment 06 Chapter 35-38 Ques 07**********************************
// function counting(a,b){
//     for (var i=a ; i<=b ; i++){
//         console.log(i)
//     }
// }
// console.log( counting( parseInt(prompt("Enter a starting number for counting")) , parseInt(prompt("Enter a ending number"))))

// **********************************Assignment 06 Chapter 35-38 Ques 08**********************************

// function abc(a,b){
//     var base = a*a;
//     var perpenducular = b*b;
//     var result = Math.sqrt(base+perpenducular);
//     return result
// }
// console.log( abc( parseInt( prompt("Enter a number for hypotenuse of a right angle triangle")) , parseInt( prompt("Enter the second value to calculate")) ) );

// **********************************Assignment 06 Chapter 35-38 Ques 09**********************************
// function area(a,b){
//     var cal= a*b;
//     return cal;
// }
// console.log( area( parseInt(prompt("Enter width of a rectangle")) , parseInt(prompt("Enter height of a rectangle")) ) );

// **********************************Assignment 06 Chapter 35-38 Ques 10**********************************

// function palidrome(a){
//     check="";
//     for(var i=a.length-1; i>=0 ; i--){
//         check += a[i]; 
//     }
//     if( a === check){
//         alert("Its a palindrome word")
//     }else{
//         alert("It is not a palindrome word")
//     }
//     return check
// }
// console.log( palidrome( prompt("Enter a word")) );

// **********************************Assignment 06 Chapter 35-38 Ques 11**********************************

function word(a){
   for (var i=0; i <= a.length ; i++){
    a[i] = a[i][0].toUpperCase();
   }
   return a 
}
console.log( word( prompt("Enter a sentence")))