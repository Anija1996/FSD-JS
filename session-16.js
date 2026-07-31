// Loops - Iterative block of code

// for loop
// for(let i=0;i<5;i++){
//     console.log("count=",i);
// }

//for loop with continue keyword
// for(let i=1;i<5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log("count=",i);
    
// }


//for loop with break keyword
// for(let i=1;i<5;i++){
//     if(i==3){
//         break;
//     }
//     console.log("count=",i);
    
// }

// while loop
// let stock=10;
// while(stock>0){
//     console.log("stock=",stock);
//     stock--;
// }


// do-while loop
// let stock=10
// do{
//     console.log("stock=",stock);
//     stock--;
// }while(stock>0);

// Arrays

let fruits=["mango","banana","apple","orange","grapes"];
// console.log(fruits.length);
// let lastIndex=fruits.length - 1;
// console.log(fruits[lastIndex]);


// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


//for..of
// for(const fruit of fruits){
// console.log(fruit);
// }

// for..in
// for(const fruit in fruits){
//     console.log(fruit);
// }

// push() -Add to the end
// fruits.push("Avocado");
// console.log(fruits);

// pop() - remove from end
// fruits.pop();
// console.log(fruits);

//unshift() - add to the begginning
// fruits.unshift("Avocado");
// console.log(fruits);

//shift() - remove from the begginning
// fruits.shift();
// console.log(fruits);

// splice() - add or remove elements
// fruits.splice(1,0,"avocado");
// console.log(fruits);

// fruits.splice(1,1,"avocado");
// console.log(fruits);

// fruits.splice(1,3,"avocado");
// console.log(fruits);

// fruits.splice(1,2,"pineapple","avocado")
// console.log(fruits);

// slice() 
// console.log(fruits.slice(1,3));

// concat()- join two arrays
// console.log(fruits.concat(["kiwi","mangosteen"]));


//indexOf() - find the index
// console.log(fruits.indexOf("grapes"));

//lastIndexOf() - find last index
// console.log(fruits.lastIndexOf("apple"));

//includes() - check if value exists, return true of false
// console.log(fruits.includes("mango"));

let numbers=[10,20,30,40,50,60,70,80,90,100];

// find() - return the first matching element
// let n = numbers.find(num => num>40);
// console.log(n);

// findIndex() - return the first matching index
// let n=numbers.findIndex(num => num>50);
// console.log(n);


// forEach() - loop through Array
// let n = numbers.forEach(num => console.log(num));
// console.log(n);

// map() - create a new array
// let n=numbers.map(num => num/10);
// console.log("Resultant Array = ",n);
// console.log("Array = ",numbers);

// filter() - keep matching elements
// let n = numbers.filter(num => num%3==0);
// console.log(n);

// reduce() - reduce to one value
// let n = numbers.reduce((sum,num) => sum+num);
// console.log(n);

// every() - checks whether all elements match
// let n = numbers.every(num => num%2==0);
// console.log(n);

// some() - checks any elements match
// let n = numbers.some(num => num%3==0);
// console.log(n);

// sort()
let nums=[6,2,82,1,68,92,12,58,34];
// let n = nums.sort((a,b) => a-b);
// console.log(n);

// let n =nums.reverse();
// console.log(n);

// join()
// console.log(fruits.join(", "));

// toString()
// console.log(fruits.toString());

// fill() - fill array with one value
// let n = numbers.fill(5);
// console.log(n);

// flat() - flatten nested arrays
// n1=[[1,3,4],2,6,7,[8,9]];
// let n=n1.flat();
// console.log(n);

// flatMap() - map and flatten
// let n2=[2,3,4];
// let n = n2.flatMap(num => [num, num*2]);
// console.log(n);

// at() - access by index
// console.log(fruits.at(-4));


// Objects

let user = {
    name:"ANIJA",
    age:30
};
//  console.log(user.age);
//  console.log(user["age"]);

// user.city="TVM";
// user.age=30;
// // console.log(user);

// delete user.age;
// console.log(user);

// let keys=Object.keys(user);
// console.log(keys);

// let values=Object.values(user);
// console.log(values);

// let entries=Object.entries(user);
// console.log(entries);


for(let key in user){
    console.log(user[key]);
}

