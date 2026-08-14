//Asynchronous JS - way of executing tsks where JS does not wait for a time-consuming task to finish. It can continue executing other code and handle the result when the task is completed.
//  console.log("A");
//  setTimeout(()=>{
//     console.log("B");
    
//  },3000);
//  console.log("C");
 
//  setTimeout() -> Web API handles Timer -> Timer finished -> callback Queue -> Event loop checks call stack -> call stack  is empty -> callback moves to call stack ->callback executes -> output

// Callback Hell - A situation where multiple nested callbacks make asynchronous JS code difficult to read and MediaStreamAudioDestinationNode. also called "Pyramid of foom" because the indentaion starts looking like a pyramid
//  To handle callback hell and to handle asynchronous operations ---

// Promises - is an object that represents theeventual completion or failure of an asynchronous operation and its resulting value.
//  3 stages - 
// 1. pending- asynchronous operation not completed yet and still waiting
// 2. fulfilled - completed succesfully
// 3. rejected - failed

// const myPromise = new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("Task Completed");
//     }
//     else{
//         reject("Task Failed");
//     }
// });
// myPromise.then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });


// Task -1
// const myPromise = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("Task completed successfully");

//     }
//     else{
//         reject("Task failed");
//     }
// });
// myPromise.then((result)=>{
//     console.log(result);
    
// })
// .catch((error)=>{
//     console.log(error,"ERROR");
    
// })

// Task - 2
// const loginPromise = new Promise((reslove,reject)=>{
//     let isLoggedIn = true;
//     if(isLoggedIn){
//         reslove("Login successful");
//     }
//     else{
//         reject("Login failed");
//     }
// });
// loginPromise
// .then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error,"ERROR");
    
// });

// Task-3

// const userPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("User data received");
//     },2000);
// })
// userPromise.then((res)=>{
//     console.log(res);
    
// })
// .catch((error)=>{
//     console.log("Failed to fetch user data");
    
// });

//Task - 4
// const loginPromise = new Promise((resolve,reject)=>{
//     resolve("User logged in");
// });
// loginPromise
// .then((res)=>{
//     console.log(res);
//     return "Loading dashboard"
    
// })
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((error)=>{
//     console.log("ERROR");
    
// });

// //Task -5 
// const loginPromise = new Promise((resolve,reject)=>{
//     resolve("Login Successful");
// });
// loginPromise
// .then((res)=>{
//     console.log(res);
//     return "User data received";
    
// })
// .then((res)=>{
//     console.log(res);
//     return "Profile loaded";
    
// })
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((error)=>{
//     console.log("ERROR");
    
// });

// //Task -6 
// const loginPromise = new Promise((resolve,reject)=>{
//     resolve("Login Successful");
// });
// loginPromise
// .then((res)=>{
//     console.log(res);
//     return "User data received";
    
// })
// .then((res)=>{
//     console.log(res);
//     throw new Error("failed to load profile");
    
// })
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((Error)=>{
//     console.log(Error.message);
    
// });

// //Task -7 
// const savePromise = new Promise((resolve,reject)=>{
//     let saved = true;
//     if(saved){
//         resolve("Data saved successfully");
//     }
//     else{
//         reject("Failed to save data");
//     }
// });
// savePromise
// .then((res)=>{
//     console.log(res);
// })
// .catch((Error)=>{
//     console.log(Error.message);
    
// })
// .finally(()=>{
//     console.log("Operation finished");
    
// });

// //Task-9
// const orderPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Order Placed");
//     },2000);
// });
// orderPromise
// .then((res)=>{
//     console.log(res);
//     return "Payment successfull";
    
// })
// .then((res)=>{
//     return "Order confirmed";
// })
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((error)=>{
//     console.log(error,"ERROR");
// })
// .finally(()=>{
//     console.log("Order process finished");
    
// });


//async/await - asyn is used to declare a function as asynchronous. An async function always returns a Promise.
// await is used inside an async function to wait for a Promise to settle and get its result
// 
// const promise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("HEllo");
//     },2000)
// })

// async function test() {
//    try{
//      let result = await promise;
//     console.log(result);  
//    } 
//     catch(error){
//     console.log(error);

//    } 
// }
// test();
// 
// const getValue = new Promise ((resolve)=>{
//     resolve(120);
// });

// async function showValue() {
//     const value = await getValue;
//     console.log(value);
// }
// showValue();

const getValue = new Promise((resolve,reject)=>{
    reject("Something went wrong");
});

async function showValue() {
    try{
        const value = await getValue;
    }
    catch(error){
        console.log(error);
        
    }
}
showValue();


