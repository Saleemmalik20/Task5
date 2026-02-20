// JavaScript Intermediate Real-Time Task Assignment

// 1 Employee Data Merge System

// let teamA = [
// { name: "John", role: "Developer" },
// { name: "Arun", role: "Tester" }
// ];

// let teamB = [
// { name: "Naveen", role: "Designer" },
// { name: "David", role: "Manager" }
// ];

// Tasks:
// • Merge both teams using spread operator
// • Add one new employee manually
// • Clone the final array into backupTeam
// • Remove last employee
// • Add new employee at first position



let teamA = [
{ name: "John", role: "Developer" },
{ name1: "Arun", role1: "Tester" }
];

let teamB = [
{ name2: "Naveen", role2: "Designer" },
{ name3: "David", role3: "Manager" }
];

// Merging two teams using spread Operator.

let combinedTeams = [...teamA,...teamB];
console.log(combinedTeams);

// Adding one Employee manually.

combinedTeams.push({name4:"Saleem", role4: "Developer"});
console.log(combinedTeams);

// Cloning the last array into backupTeam.

let backUp = [...combinedTeams];
console.log(backUp);

// Removing the Last employee

combinedTeams.pop();
console.log(combinedTeams);

// Adding new employee at the first position.

combinedTeams.unshift({name:"Kiran", role : "Admin"});
console.log(combinedTeams);


// 2 Salary Management (Object Spread)

// let emp1 = { name: "John", salary: 30000 };
// let emp2 = { name: "John", salary: 45000 };


// Tasks:
// • Merge both objects
// • Update salary to 50000
// • Clone into new object
// • Destructure name and salary
// • Print: "John earns 50000"


let emp1 = { name: "John", salary: 30000 };
let emp2 = { name: "John", salary1: 45000 };

// Merging both objects into new memory.

let newEmp = {...emp1,...emp2};
console.log(newEmp);

// Updating Salary to 50000

let updateSal ={...emp2, salary1: 50000};
console.log(updateSal);

// Clonning of the object

let cloneEmp = {...updateSal};
console.log(cloneEmp);

// Destructuring the name and salary

let {name,salary} = newEmp;

// Printing the name and salary.
console.log(`${name} earns ${updateSal.salary1}`);


// 3 Product Cart System

// let cart = ["Laptop", "Phone", "Tablet", "Watch"];

// Tasks:
// • Remove last product
// • Add two products at end
// • Add one product at beginning
// • Remove first product
// • Replace "Tablet" with "Camera" using splice
// • Check if "Phone" exists
// • Find index of "Watch"

// Removing the Last Product from the array.

let cart = ["Laptop", "Phone", "Tablet", "Watch"];
cart.pop();
console.log(cart);

// Adding two products at the end of array

cart.push("TV","PC");
console.log(cart);

// Adding one product at the begining of array

cart.unshift("Fridge");
console.log(cart);

// Removing the first product.

cart.shift();
console.log(cart);

// Replacing "Tablet" with "camera".

cart.splice(2,1,"Camera");
console.log(cart);

// Checking if phone exist in the array or not.

let exists = cart.includes("phone");
console.log(exists);

// index of the watch cannot be obtained because it was deleted from the array.




// 4  Student Marks Analyzer


// let marks = [78, 90, 66, 84, 99, 45];

// Tasks:
// • Sort marks (correct way using compare function)
// • Reverse sorted marks
// • Slice top 3 marks
// • Find index of 84
// • Replace 45 with 50 using splice


let marks = [78, 90, 66, 84, 99, 45];

// Sorting Marks in correct way using compare function
let sort = marks.sort();
console.log(sort);

// // Reversing Sorted marks
let revSort = sort.reverse();
console.log(revSort);

// // Slice top 3 marks       // 45, 66, 78, 84, 90, 99

let topMark = sort.slice(3,6);
console.log(topMark);

// // Find Index of 84

let index = marks.indexOf(84);
console.log(index);


// Replacing 45 with 50 using Splice

sort.splice(0,1,50);
console.log(sort);


//5 Nested Data Extractor

// let company = [
// "Stackly",
// ["Frontend", ["HTML", "CSS", ["JavaScript"]]]
// ];


// Tasks:
// • Extract "JavaScript" normally
// • Extract using destructuring
// • Flatten entire array
// • Replace "CSS" with "Tailwind"


let company = ["Stackly",["Frontend", ["HTML", "CSS", ["JavaScript"]]]];

// Extracting JavaScript Normally
let n1 = company[0];
let n2 = company[1][0];
let n3 = company[1][1][0];
let n4 = company[1][1][1];
let n5 = company[1][1][2][0];

console.log(n5);


// Extracting using destructuring
let[companyName,[department,[html,css,[destructuring]]]]= company;

console.log(destructuring);

// Flatten entire array

let flatten = company.flat(Infinity);
console.log(flatten);

// Replace "CSS" with "Tailwind"
flatten.splice(3,1,"Tailwind");
console.log(flatten);


// 6 Attendance System (Rest Operator)

// function attendance(day, ...students) {}

// Tasks:
// • Print day
// • Print total students count
// • Print first student
// • Print last student
// • Return all students array

// Call function:
// attendance("Monday", "John", "Arun", "David", "Naveen")




function attendance(day, ...students) {

// Print Day
console.log("Day:", day);


// Print total student count
console.log("Total Student:", students.length);


// Printing first student
console.log("First student:", students[0]);

//Printing Last Student
console.log("Last Student:", students[students.length-1]);

// return all student array
return students;

}

attendance("Monday","john","Arun","David","Naveen");       //  Day : "Monday",Total student:4, First Student:"John",Last Student: "Naveen".


// 7 Inventory Management

// let stock = [10, 20, 30, 40, 50];


// Tasks:
// • Fill last two values with 0
// • Add 60 and 70 at end
// • Remove first value
// • Find if 30 exists
// • Get last index of 20
// • Reverse the stock


let stock = [10, 20, 30, 40, 50];

// Fill last two values with 0

stock.fill(0,3);
console.log(stock);

// Adding 60 and 70  at the end

stock.push(60,70);
console.log(stock);

// Removing the first value.

stock.shift();
console.log(stock);

// Finding if 30 exists.

let find = stock.includes(30);
console.log(find);

// Last index of 20.

let lastIndex = stock.lastIndexOf(20);
console.log(lastIndex);


// Reversing the stock

stock.reverse();
console.log(stock);



// 8 User Profile System


// let user = {
// name: "Naveen",
// role: "Developer",
// skills: ["HTML", "CSS", "JavaScript"]
// };


// Tasks:
// • Destructure name and role
// • Add one new skill using spread
// • Clone entire user object
// • Merge with new object { experience: "2 Years" }
// • Print skills length


let user = {
name4: "Malik",
role: "Tester",
skills: ["HTML", "CSS", "JavaScript"]
};

// Destructuring name and role.

let{name4,role} = user;

console.log(name4);
console.log(role);



// Add one new skill using spread.

let newSkill = [...user.skills,"Python"];
console.log(newSkill);


// Cloning entire user object.

let clone = {...user};
console.log(clone);

// Merge with new object { experience : "2 years"}

let newObj = {...clone, experience: "2 Years"}
console.log(newObj);

// Printing skills Length

console.log(newObj.skills.length);


// 9 Sales Report

//let sales = [12000, 45000, 22000, 8000, 15000];

// Tasks:
// • Sort ascending
// • Sort descending
// • Slice middle 3 sales
// • Replace lowest sale with 10000
// • Check if 50000 exists



let sales = [12000, 45000, 22000, 8000, 15000];

// Sorting in ascending order

let ascending = sales.sort((a,b) => a -b);
console.log(sales);

// Sorting Descending Order.
let descending = sales.sort((a,b) => b-a);
console.log(sales);

// Slice Middle 3 sales.
let cut = sales.slice(0,3);
console.log(cut);

// Replace lowest sale with 10000.

sales.splice(0,1,10000);
console.log(sales);



// 10 Data Cleaning System


// let rawData = [1, 2, null, 4, undefined, 6, [7, 8], { a: 10 }];


// Tasks:
// • Print last element using length
// • Flatten array
// • Remove last element
// • Add 100 at end
// • Clone cleaned array


let rawData = [1, 2, null, 4, undefined, 6, [7, 8], { a: 10 }];

// Printing last Element using Length

let lastElement = rawData[rawData.length-1];
console.log("Last Element is :",lastElement);


// Flatting array 

let flatten = rawData.flat(Infinity);
console.log("Flatten Array is : " ,flatten);


// Removing last Element from array

flatten.pop();
console.log("Removed Last Element is : ", flatten);


// Adding 100 at the end of array.

flatten.push(100);
console.log("Adding 100 to array:" , flatten);


// Cloning cleaned Array

let clonning = [...flatten];
console.log("Cloning cleaned Array :", clonning);
