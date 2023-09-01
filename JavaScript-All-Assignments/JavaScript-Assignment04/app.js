// **********************************Assignment 04 Chapter 17-20 Ques 01**********************************
// var arr1=[[],[]];

// **********************************Assignment 04 Chapter 17-20 Ques 02**********************************
// var arr1=[0,1,2,3]
// var arr2=[1,0,1,2]
// var arr3=[2,1,0,1];
// console.log(arr1,arr2,arr3);

// **********************************Assignment 04 Chapter 17-20 Ques 03**********************************

// for(var i=1; i<=10 ;i++){
//     console.log(i);   
// }

// **********************************Assignment 04 Chapter 17-20 Ques 04**********************************

// var userInput=+prompt("Enter a number to print Table");
// var userLenght=+prompt("Enter the length of table, that you want to print")
// for(var i=1; i<=userLenght ;i++){
//     console.log(userInput+" x "+ i + " = "+ userInput*i);
// }

// **********************************Assignment 04 Chapter 17-20 Ques 05**********************************

// var fruits=["apple","banana","mango","orange","strawberry"]
// for(var i=0 ; i<fruits.length ; i++){
//     console.log("Element at index "+ i +" is " +fruits[i]);
// }

// **********************************Assignment 04 Chapter 17-20 Ques 06**********************************

// console.log("Counting: ");
// for(var i=1; i<=15;i++){
//     console.log(i);
// }

// console.log("Reverse Counting: ")
// for(var j=10 ; j>=1 ; j-- ){
//     console.log(j)
// }

// console.log("Even Number: ")
// for(var k=0; k<=20;k++){
//     if( k % 2 ===0 ){
//         console.log(k);
//     }
// }

// console.log("Odd Number: ")
// for(var l=0; l<=20;l++){
//     if(l % 2 !== 0){
//         console.log(l)
//     }
// }

// console.log("Series: ")
// for(var m=1; m<=20; m++){
//     if(m % 2 ===0){
//         console.log(m+"K")
//     }
// }

// **********************************Assignment 04 Chapter 17-20 Ques 07**********************************

// var items=["cake","apple pie","cookie","chips","patties"];
// var usersearch = prompt("Welcome to my Bakery. What do you want to order sir/ma'am?");
// var allItems=false;

// for(var i=0 ; i<items.length ; i++){
//     if(usersearch === items[i]){
//         allItems=true;
//         console.log(usersearch+" is available at index "+ i +" in our bakery");
//     } 
// }
// if(allItems !== true){
//     console.log("We are sorry. "+usersearch+" is not Available in our bakery");
// }

// **********************************Assignment 04 Chapter 17-20 Ques 08**********************************

// var A=[24,53,78,91,12];
// var maxNum= A[0];

// for(var i=0; i < A.length ; i++){
//     if(A[i] > maxNum){
//         maxNum= A[i];
//     }
// }
// console.log("Array Items: "+A);
// console.log("The largest number is: "+maxNum);

// **********************************Assignment 04 Chapter 17-20 Ques 09**********************************
// var A=[24,53,78,91,12];
// var min=A[0];

// for(var i=0; i < A.length; i++){
//     if( min > A[i] ){
//         min=A[i]
//     }
// }
// console.log("Array Items: "+ A);
// console.log("The smallest number is: "+ min);

// **********************************Assignment 04 Chapter 17-20 Ques 10**********************************

// for(var i=1; i<=100; i++){
//     if( i % 5 === 0){
//         console.log(i);
//     }
// }

// *******************************************************************************************************
// **********************************Assignment 04 Chapter 21-25 Ques 01**********************************
// *******************************************************************************************************

// var firstName=prompt("Enter your First Name").toUpperCase();
// var lastName=prompt("Enter your Last Name").toUpperCase();
// var fullName=(firstName+" "+lastName);
// alert("Hello " + fullName);

// **********************************Assignment 04 Chapter 21-25 Ques 02**********************************

// var mobileModel=prompt("Enter your favorite mobile phone model");
// console.log("My favorite phone is: ", mobileModel)
// console.log("length of string is: ", mobileModel.length);

// **********************************Assignment 04 Chapter 21-25 Ques 03**********************************

// var nationality="Pakistani";
// console.log("String :", nationality);
// for(var i=0; i < nationality.length ; i++){
//     if( nationality[i] === "n"){
//         console.log("Index of 'n' is: ", i);
//         break;
//     }
// }

// **********************************Assignment 04 Chapter 21-25 Ques 04**********************************

// var text="hello world";
// console.log("String :",text);
// for(var i=text.length; i > 0 ; i--){
//     if( text[i] === "l"){
//         console.log("Last index of 'l' is: "+ i);
//         break;
//     }    
// }

// **********************************Assignment 04 Chapter 21-25 Ques 05**********************************

// var nationality = "Pakistani";
// console.log("String:",nationality);

// var result = nationality.charAt(3)
// console.log("Character at index 3 is:"+ result);

// **********************************Assignment 04 Chapter 21-25 Ques 06**********************************

// var firstName=prompt("Enter your First Name").toUpperCase();
// var lastName=prompt("Enter your Last Name").toUpperCase();
// var fullName=(firstName+" "+lastName);
// alert("Hello " + fullName);

// **********************************Assignment 04 Chapter 21-25 Ques 07**********************************

// var city="Hyderabad";
// console.log("City:",city);

// var city2 = city.slice(5);
// var city3 = "Islam"+ city2;
// console.log("After replacement: "+city3);

// **********************************Assignment 04 Chapter 21-25 Ques 08**********************************

// var text="Ali and Sami are best friends. They play cricket and football together.";
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "and") { 
//         text = text.slice(0, i) + "&" + text.slice(i + 3);   
//     }
// }
// console.log(text);

// **********************************Assignment 04 Chapter 21-25 Ques 09**********************************

// **********************************Assignment 04 Chapter 21-25 Ques 10**********************************

// var inputUser = prompt("Enter a words");
// console.log("User Input: ",inputUser);
// console.log("Upper Case: ",inputUser.toUpperCase());

// **********************************Assignment 04 Chapter 21-25 Ques 11**********************************

// var inputUser = prompt("Enter a word");
// var secInput = inputUser.slice(1);
// var thirdInput = inputUser.slice(0,1);

// console.log("User input:" ,inputUser);
// console.log("Title case: ",thirdInput.toUpperCase()+secInput);

// **********************************Assignment 04 Chapter 21-25 Ques 12**********************************

