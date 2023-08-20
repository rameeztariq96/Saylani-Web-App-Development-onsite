// **********************************Assignment 03 Chapter 14-16 Ques 01**********************************
// var studentNames=[];

// **********************************Assignment 03 Chapter 14-16 Ques 02**********************************
// var studentNames=[];

// **********************************Assignment 03 Chapter 14-16 Ques 03**********************************
// var studentNames=["Muhammad","Rameez","Tariq"];

// **********************************Assignment 03 Chapter 14-16 Ques 04**********************************
// var studentNames=[1,2,3,4];

// **********************************Assignment 03 Chapter 14-16 Ques 05**********************************
// var studentNames=[true , false];

// **********************************Assignment 03 Chapter 14-16 Ques 06**********************************
// var studentNames=["Rameez",133583,true];

// **********************************Assignment 03 Chapter 14-16 Ques 07**********************************
// var qualification=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// console.log(qualification);

// **********************************Assignment 03 Chapter 14-16 Ques 08**********************************
// var studentNames=["Michael","John","Tony"]; 
// var obtainedMarks=[ 320, 230, 480 ];
// var totalMarks=500;

// var percentageMichael=obtainedMarks[0]/totalMarks*100;
// var percentageJohn=obtainedMarks[1]/totalMarks*100;
// var percentageTony=obtainedMarks[2]/totalMarks*100;

// console.log("Score of "+studentNames[0]+" is "+obtainedMarks[0]+". Percentage: "+percentageMichael+"%");
// console.log("Score of "+studentNames[1]+" is "+obtainedMarks[1]+". Percentage: "+percentageJohn+"%");
// console.log("Score of "+studentNames[2]+" is "+obtainedMarks[2]+". Percentage: "+percentageTony+"%");

// **********************************Assignment 03 Chapter 14-16 Ques 09**********************************

// var colorName=["red","yellow","green"];
// console.log(colorName);

// colorName.unshift(prompt("Enter a Colour. It will display at the start of array."));
// console.log(colorName);

// colorName.push(prompt("Enter a Colour. It will display at the end of array."));
// console.log(colorName);

// colorName.unshift(prompt("Enter a Colour. It will display at the start of array."),prompt("Enter a Colour. It will display at the start of array."));
// console.log(colorName);

// colorName.shift("First Colour is deleted from Array");
// console.log(colorName)

// colorName.pop("Last Colour is deleted from Array");
// console.log(colorName)

// colorName.splice(+prompt("Enter position of colour. It will display at entered positon of array."),0 ,prompt("Enter color."));
// console.log(colorName);
 
// colorName.splice(+prompt("which index you want to delete?")-1 , +prompt("How many you want to deleted") );
// console.log(colorName);

// **********************************Assignment 03 Chapter 14-16 Ques 10**********************************

// var scores=[320,230,480,120];
// console.log("Scores of students is: "+scores);
// scores.sort();
// console.log("Ordered scores of students is: "+scores);

// **********************************Assignment 03 Chapter 14-16 Ques 11**********************************

// var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// console.log("Cities list: "+cities);
// var selectedCities= cities.slice(2,4);
// console.log("Selected cities list: "+selectedCities);

// **********************************Assignment 03 Chapter 14-16 Ques 12**********************************
var arr = ["This "," is "," my "," cat "];
console.log("Array: "+arr);
var updatedArr=arr.join();
console.log("String: "+updatedArr)
