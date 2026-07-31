// const originalObject={name:"Anija", age:25};
// const copyObject=originalObject;//reference
// copyObject.age=30;
// console.log(copyObject);
// console.log(originalObject);

// const array1=[1,2,3];
// const array2=array1;//reference
// array2.push(5);
// console.log(array1);
// console.log(array2);

// spread open - (...)

// const array1=[1,2,3];
// const array2=[...array1];
// array2.push(5);
// console.log(array1);
// console.log(array2);

// const orgObj={name:"Anija",age:25};
// const copyObj={...orgObj};
// copyObj.age=30;
// console.log(orgObj);
// console.log(copyObj);

// Merge using spread

// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const mergeArray=[...arr1,...arr2];
// console.log(mergeArray);
// const arr3=["a",...arr1,30];
// console.log(arr3);

// const num1=[15,2,1,7,4,35,8,90,25,19];
// const sortedArrayAsc=num1.sort((a,b) => a-b);
// console.log(sortedArrayAsc);


// const num2=[15,2,1,7,4,35,8,90,25,19];
// const sortedArraydesc=num1.sort((a,b) => b-a);
// console.log(sortedArraydesc);

// const userBasicDetails={
//     name:"Anija",
//     age:25,
//     gender:"F"
// }

// const userAddressDetails={
//     city:"TVM",
//     pincode:695504,
//     state:"Kerala"
// }

// const userDetails={...userBasicDetails,...userAddressDetails};
// console.log(userDetails);


// const updatedDetails={...userBasicDetails,age:30,father:"Manoj"};
// console.log(updatedDetails);


// const user={
//     name:"Anija",
//     age:25,
//     gender:"F",
//     address:{
//         city:"TVM",
//         pincode:695504,
//         state:"Kerala"
//     }
// };
// // const copyUser1={...user};//nested,reference
// const copyUser2=structuredClone(user);//nested
// copyUser2.age=30;
// copyUser2.address.city="Kollam";
// console.log(copyUser2);
// console.log(user);

//Object.assign()
// const target={
//     a:1
// };
// const source={
//     b:2,
//     c:3
// };

// const res=Object.assign({},target,source);
// console.log(res);
// console.log(target);
// console.log(source);

// Object.freeze()
const user={
    name:"Anija",
    age:30
};
 Object.freeze(user);
 user.name="Sarath";
 console.log(user);
 


