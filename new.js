"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// 1
// const name: string = readlineSync.question('What is your name? ');
// console.log(name);
// 2
// const first:number =parseInt( readlineSync.question('enter first number'))
// const second:number=parseInt( readlineSync.question('enter seconde number'))
// console.log(`resulte=${first+second}`);
// 3
// const p:number=parseInt( readlineSync.question('enter principal amount'))
// const r:number=parseInt(readlineSync.question('enter indrest rate'))
// const n:number=parseInt(readlineSync.question('enter number of years'))
// const si:number= (p*r*n)/100
// console.log(`SI=${si}`);
// 4 
// const mark:number=parseInt(readlineSync.question('enter mark'))
// if (mark>=50 ) {
//     console.log('your passed');
// }else{
//     console.log('!! failed');
// }
// 5
//  const mark:number=parseInt(readlineSync.question('enter mark'))
//  if(mark>100){
//     console.log(' !ooops');
//  }else if (mark>=90) {
//     console.log('A grade');
//  }else if(mark>=80){
//     console.log('B grade');
//  }else if(mark>=70){
//     console.log('C grade');
//  }else if(mark>=60){
//     console.log('D grade');
//  }else if(mark>=50 ){
//     console.log('E grade');
//  }else{
//     console.log('faile !');
//  }
// 6 
//   const day:number=parseInt(readlineSync.question('enter day '))
//   switch(day){
//     case(1) :
//     console.log('sunday');
//     break
//     case(2):
//     console.log('monday');
//     break
//     case(3):
//     console.log('Tuesday');
//     break
//     case(4):
//     console.log('Wednesday');
//     break
//     case(5):
//     console.log('Thursday');
//     break
//     case(6):
//     console.log('friday');
//     break
//     case(7):
//     console.log('saturday');
//     break
//     default:{
//         console.log('invalid day');
//     }
//   }
// 7
//   const num:number=parseInt(readlineSync.question('enter number '))
//    for (let i = 1; i <=10; i++) {
//        console.log(`${i}*${num}=${num*i}`);
//    }
// 8
//    const limit:number=parseInt(readlineSync.question('enter limit '))
//    let sum:number=0;
//    for (let i = 0; i <limit; i++) {
//     if (i%2==1) {
//          sum+=i   
//     }  
//    }
//    console.log(sum);
// 9
// const n: number = 4;
// for (let i = 1; i <= n; i++) {
//   let pattern: string = '';
//   for (let j = 1; j <= i; j++) {
//     pattern += j + ' ';
//   }
//   console.log(pattern.trim());
// }
// 10
// let limit:number=5
// let array:number[]=[]
// let array1:number[]=[]
// for (let i = 0; i <limit; i++) {
//     const val:number= readlineSync.question('enter numbers 1 array')
//     array.push(val)
// }
// for (let i = 0; i <limit; i++) {
//   const val:number= readlineSync.question('enter numbers 2 array')
//   array1.push(val)
// }
// let temp:number[]=array
// array=array1
// array1= temp
// console.log(`array1=${array}`)
// console.log(`array2=${array1}`)
// 11
// let array:number[]=[]
// let limit:number=5
// for (let i = 0; i <limit; i++) {
//        const val:number= readlineSync.question('enter numbers 1 array')
//        array.push(val)
//   }
// let count:number=0
// for (let i = 0; i < array.length; i++) {
//      if (array[i]%2==0) {
//       count++
//      }
// }
// console.log(count);
// 12
// let limit:number=5
// let array:number[]=[]
// for (let i = 0; i <limit; i++) {
//     const val:number= readlineSync.question('enter numbers 1 array')
//     array.push(val)
// }
// for (let i = 0; i < array.length-1; i++) {
//      for (let j = i+1; j < array.length; j++) {
//       if (array[i]<array[j]) {
//         var temp:number=array[i]
//         array[i]=array[j]
//         array[j]=temp
//       }
//      }
// }
// console.log(array);
// 13
var array = [];
array = readlineSync.question('Enter a string: ');
var isPalindrome = true;
for (var i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log('It is a palindrome.');
}
else {
    console.log('It is not a palindrome.');
}
