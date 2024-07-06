// const fakeReq=(url,success,failure)=>{
//     let delay= Math.ceil(Math.random()*4000) +500;
//     setTimeout(()=>{
//         if(delay>4000){
//             failure('Connection Timeout!')
//         }
//         else{
//             success(`This is your data from ${url}`);
//         }
//     },delay)
// }


// fakeReq('books.com/api/page-1',(data1)=>{
//     console.log(`yaay worked!,${data1}`);
//     fakeReq('books.com/api/page-2',(data2)=>{
//         console.log(`yaay worked!,${data2}`);
//     },(err2)=>{
//         console.log(`oh no, ${err2}`);
//     })
// },(err1)=>{
//     console.log(`grrrr, ${err1}`);
// });

// function sum(a, b, clbk) {
//     ans = a + b
//     clbk(ans)
// }

// function displaymsg(data) {
//     console.log("The resultant final data is : " + data)

// }

// sum(1, 2, displaymsg);

// class Animal {
//     constructor(name, legcount, speaks) {
//         this.name = name;
//         this.legcount = legcount;
//         this.speaks = speaks;
//     }
//     static myType() {
//         console.log("I am Animal");
//     }
//     speak(inp) {
//         console.log(inp + " " + this.speaks);
//     }
// }

// let dog = new Animal("Twinkle", 4, "Bhow Bhow");
// let cat = new Animal("Fluffy", 4, "Meow Meow");
// cat.speak("I am a good guy");
// Animal.myType();



// const user = '{"firstName":"Sameer","lastName":"Pradhan","gender":"Male", "age":22}';
// const puser = JSON.parse(user);
// console.log(puser["age"]);

// console.log(Object.entries(puser));

// const fs = require('fs');

// const readpvt = () => {
//     return new Promise((resolve, reject) => {
//         fs.readFile("a.txt", "utf-8", (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         });
//     });
// }

// const display = (data) => {
//     console.log(data)
// }

// const err = (err) => {
//     console.log("grrrrr erorrrrr!!!", err);
// }

// readpvt().then(display).catch(err);



// const fakereqPromise = (url) => {
//     const delay = Math.ceil(Math.random() * 4000) + 500;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject("Connection Timeout!");

//             }
//             else {
//                 resolve("Success!");
//             }
//         }, delay);
//     })
// }


// async function myfunc() {
//     let myval = await fakereqPromise('books.api/page-1');
//     console.log( myval);
// }

// myfunc();

// let transac = [{ "category": "food" }, { "category": "clothing" }]
// let obj = []
// for (let i = 0; i < transac.length; i++) {
//     obj.push(transac[i]["category"])

// }

// console.log(obj6)


// function firstOperation(data, callback) {

//     setTimeout(() => {
//         console.log("First Operation Complete");
//         callback(null, data + 1);
//     }, 1000);
// }

// function SecondOperation(data, callback) {

//     setTimeout(() => {
//         console.log("Second Operation Complete");
//         callback(null, data + 1);
//     }, 1000);
// }

// function ThirdOperation(data, callback) {

//     setTimeout(() => {
//         console.log("Third Operation Complete");
//         callback(null, data + 1);
//     }, 1000);
// }


// firstOperation(0, (err, result1) => {
//     if (err) {
//         console.error(err);
//     }
//     else {
//         SecondOperation(result1, (err, result2) => {
//             if (err) {
//                 console.error(err);
//             }
//             else {
//                 ThirdOperation(result2, (err, result3) => {
//                     if (err) {
//                         console.error(err);
//                     }
//                     else {
//                         console.log("All Operations are complete, Result:", result3)
//                     }
//                 });
//             }
//         })
//     }
// });



function firstOperation(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First Operation Complete");
            resolve(data + 1);
        }, 1000);
    })

}
function SecondOperation(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second Operation Complete");
            resolve(data + 1);
        }, 1000);
    })

}

function ThirdOperation(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third Operation Complete");
            resolve(data + 1);
        }, 1000);
    })

}


firstOperation(0)
    .then(data1 => {
        return SecondOperation(data1);
    })
    .then(data2 => {
        return ThirdOperation(data2);
    })
    .then(data3 => {
        console.log("All Operations are Complete! Result:", data3);
    })
    .catch(err => {
        console.error(err);
    })



