// let arr =[12,23,45];

// let ansarr = arr.map((number)=>{
//     return number*number;

// })

// let evenarr=arr.filter((number)=>{
//     if(number%2===0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
    
// })


// const min =1;
// const max=10;

// const user = prompt("enter random number");
// console.log(user)



// if(user == Math.floor(Math.random()*(max-min+1)+min))
// {
//     console.log("you are lucky")
// }
// else
// {
//     console.log("better luck next time")

// }


// let mySym = Symbol("mysym1")
// console.log(typeof(mySym))

// const  mySym1 = Symbol("key1")

// const obji1 = {

//     "full mame " : "Atul singh",
//     [mySym1] : "atul28", 
//     "addersss" : "jaipur"
// } 

// console.log(obji1["full mame "])
// console.log(obji1.addersss)
// console.log(obji1[mySym1])
// console.log(typeof(obji1.mySym1))


// const obj1 ={1: "a", 2:"b"}
// const obj2 ={3: "a", 4:"b"}
// const obj3 ={5: "a", 6:"b"}

// // const objresult = {obj1, obj2, obj3}
// // const objresult = Object.assign({}, obj1, obj2,obj3)
// const objresult = {...obj1,...obj2,...obj3}


// console.log(objresult)

// let src={
//     age : 12,
//     wt : 60,
//     ht : 190
// };
// let dest = {...src};
// let cpydes = src;
// src.age  = 90;



// console.log(cpydes);
// console.log(src)
// console.log(dest);

// let redans = arr.reduce((acc,curr)=> {
//     return acc+curr;
// })

// let length = arr.length;
// console.log(length) 

// for(let index=0;index<length;index++)
// {
//     console.log(arr[index]);
// }














// (
//     function loggedin(username)
// {
//     if(username === undefined)
//     {
//         console.log("please enter a username ")
//     }
//     console.log( `${username} is just loggedin`)

// }
// )();   // immediate invoked function expression

// (
//     (name)=>{
//         console.log(`DB connected ${name}`)
//     }
// )('atul')


// const day = "Thursday";

// switch(day)
// {
//     case "sunday":
//         console.log(`Today is ${day}`);
//         break;

//         case "Monday":
//         console.log(`Today is ${day}`);
//         break;

//         case "Tuesday":
//         console.log(`Today is ${day}`);
//         break;

//         case "Wednesday":
//         console.log(`Today is ${day}`);
//         break;
        
//         case "Thursday":
//         console.log(`Today is ${day}`);
//         break;

//         case "Friday":
//         console.log(`Today is ${day}`);
//         break;

//         case "Saturday":
//         console.log(`Today is ${day}`);
//         break;

//         default :
//         console.log("enter correct day ")
//         break;
// }




// const arr = ["atul", "pallavi","kunal"]

// for (const element of arr)           // for of loop
// {
//     // console.log(arr)
    
//     console.log(element.toUpperCase())
    
// }

// const arr = "atul"

// for (const element of arr)           // for of loop
// {
//     // console.log(arr)
    
//     console.log(element.toUpperCase())
    
// }


// const map = new Map()    //map known for unique value intreptation having key amd value  

// map.set("atul singh" , "male")
// map.set("pallavi singh", "female") 
// map.set("kunal singh", "male")

// map.set("atul singh" , "male")
// map.set("pallavi singh", "female")
// map.set("kunal singh", "male")


// // console.log(map)

// for (const [key , value] of map) 
// {
//     console.log(key, ':-' , value)  
// }





// const obji ={
//     "rb" : "ruby",
//     "js" : "javascript",
//     "cpp" : "c++",
//     "swift" : "swift by apple"
// }

// for (const key in obji) {
//     console.log(`${key} shortcut is for ${obji.[key]}`);
    
// }

// const coding = ["lenovo", "apple","hp","dell"]

// coding.forEach((val) =>
// {
//     console.log(val)
// })


// const coding = [1,2,3,4,5,6,7,8,9,10]

// const newnum = coding.filter((num)=>{
//     return num>4
// })

// console.log(newnum)


// const book = [

//     {
//         title :'book one ',
//         genere : 'fiction',
//         publish : '1981',
//         edition : 2004
//     },
    
//     {
//         title :'book two ',
//         genere : ' non - fiction',
//         publish : '1971',
//         edition : 2003
//     },

//     {
//         title :'book three ',
//         genere : 'fiction',
//         publish : '2941',
//         edition : 2023
//     },

//     {
//         title :'book four ',
//         genere : 'history',
//         publish : '2381',
//         edition : 2054
//     },

//     {
//         title :'book five ',
//         genere : 'science',
//         publish : '2001',
//         edition : 2000
//     },

//     {
//         title :'book six',
//         genere : 'fiction',
//         publish : '2381',
//         edition : 2045
//     },

// ];

// // const user = book.filter((bk)=> bk.genere === 'history')

//  const user = book.filter((bk)=>{
//     return bk.publish >= 2000 && bk.genere === 'fiction'
//  })

// console.log(user)



// const mynumber = [1,2,3,4,5,6,7,8,9,10]

// const newnumber = mynumber
//                   .map((num) => num *10)
//                   .map((num)=> num+1)
//                   .filter((num)=> num>40)
//                   .filter((num)=> {
//                     return num%2!==0 
//                   })


//                   console.log(newnumber)


// const mynums = [1,2,3]                     //reduce is use to add or group data elements

// const mytotal = mynums.reduce((Acc, curr) => {
//         return Acc+curr
// },0)

// console.log(mytotal)



