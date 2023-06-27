
// import * as readlineSync from 'readline-sync'
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


// let array: (number | string)[] = [];

// array = readlineSync.question('Enter a string: ');

// let isPalindrome = true;

// for (let i = 0; i < array.length / 2; i++) {
//   if (array[i] !== array[array.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// if (isPalindrome) {
//   console.log('It is a palindrome.');
// } else {
//   console.log('It is not a palindrome.');
// }



// let array1: number[][] = [];
// let array2: number[][] = [];
// let arraySum: number[][] = [];
// let limit: number = 3;

// for (let i = 0; i < limit; i++) {
//   array1[i] = [];
//   for (let j = 0; j < limit; j++) {
//     array1[i][j] = parseInt(prompt('Enter array values 1: '));
//   }
// }

// for (let i = 0; i < limit; i++) {
//   array2[i] = [];
//   for (let j = 0; j < limit; j++) {
//     array2[i][j] = parseInt(prompt('Enter array values 2: '));
//   }
// }

// for (let i = 0; i < limit; i++) {
//   arraySum[i] = [];
//   for (let j = 0; j < limit; j++) {
//     arraySum[i][j] = array1[i][j] + array2[i][j];
//   }
// }

// for (let i = 0; i < limit; i++) {
//   for (let j = 0; j < limit; j++) {
//     document.write(arraysum[i][j] + ' ');
//   }
//   document.write('<br>');
// }




// let size: number = 5;
// let array: number[] = [];

// function main() {
//    getArray();
//    displayArray();
// }

// function getArray() {
//    for (let i = 0; i < size; i++) {
//        array[i] = parseInt(prompt('Enter array values: '));
//    }
// }

// function displayArray() {
//    document.write('array=');
//    for (let i = 0; i < size; i++) {
//       document.write(array[i] + ' ');
//    }
// }

// main();



// let prime: number = parseInt(prompt('Enter a number: '));
// let flag: number = 0;

// for (let i = 2; i < prime; i++) {
//    if (prime % i === 0) {
//       flag = 1;
//    }
// }

// if (flag === 0) {
//    document.write("Number is a prime number.");
// } else {
//    document.write("Number is not a prime number.");
// }




// class Operations {
//   addition(num1: number, num2: number) {
//      document.write('addi=' + (num1 + num2));
//   }

//   subtraction(num1: number, num2: number) {
//      document.write('subt=' + (num1 - num2));
//   }

//   multiplication(num1: number, num2: number) {
//      document.write('multy=' + (num1 * num2));
//   }

//   division(num1: number, num2: number) {
//      document.write('divis=' + (num1 / num2));
//   }
// }

// let num1: number = parseInt(prompt('Enter first number: '));
// document.write(num1 + '<br>');

// let num2: number = parseInt(prompt('Enter second number: '));
// document.write(num2 + '<br>');

// let choice: number = parseInt(prompt('Enter your choice (1: addition, 2: subtraction, 3: multiplication, 4: division): '));

// let op = new Operations();

// if (choice === 1) {
//   op.addition(num1, num2);
// }

// if (choice === 2) {
//   op.subtraction(num1, num2);
// }

// if (choice === 3) {
//   op.multiplication(num1, num2);
// }

// if (choice === 4) {
//   op.division(num1, num2);
// }



// let wr: number = 70;
// let la: number = 20;
// let ass: number = 10;

// let wri: number = parseFloat(prompt('Enter your written test mark: '));
// let lab: number = parseFloat(prompt('Enter your lab exam mark: '));
// let assi: number = parseFloat(prompt('Enter your assignment mark: '));

// document.write('Average = ' + ((wri * wr / 100) + (lab * la / 100) + (assi * ass / 100)));



// let amount: number = parseFloat(prompt('Enter your annual income: '));

// if (amount < 250000) {
//    document.write('No tax');
// } else if (amount < 500000) {
//    document.write('Income tax amount = ' + (amount / 100) * 5);
// } else if (amount < 1000000) {
//    document.write('Income tax amount = ' + (amount / 100) * 20);
// } else if (amount < 50000000) {
//    document.write('Income tax amount = ' + (amount / 100) * 30);
// } else {
//    document.write('...!!!');
// }



// let limit: number = 4;
// let p: number = 0;

// for (let i = 1; i <= limit; i++) {
//    for (let j = 1; j <= i; j++) {
//       p++;
//       document.write(p + ' ');
//    }
//    document.write('<br>');
// }


// let array1: number[][] = [];
// let array2: number[][] = [];
// let arraySum: number[][] = [];
// let limit: number = 2;

// function main() {
//    getArray();
//    addArray();
//    displayArray();
// }

// function getArray() {
//    for (let i = 0; i < limit; i++) {
//       array1[i] = [];
//       for (let j = 0; j < limit; j++) {
//          array1[i][j] = parseInt(prompt('Enter array values 1: '));
//       }
//    }
//    document.write('First array');
//    document.write('<br>');
//    for (let i = 0; i < limit; i++) {
//       for (let j = 0; j < limit; j++) {
//          document.write(array1[i][j] + ' ');
//       }
//       document.write('<br>');
//    }
//    document.write('<br>');
//    for (let i = 0; i < limit; i++) {
//       array2[i] = [];
//       for (let j = 0; j < limit; j++) {
//          array2[i][j] = parseInt(prompt('Enter array values 2: '));
//       }
//    }
//    document.write('Second array');
//    document.write('<br>');
//    for (let i = 0; i < limit; i++) {
//       for (let j = 0; j < limit; j++) {
//          document.write(array2[i][j] + ' ');
//       }
//       document.write('<br>');
//    }
//    document.write('<br>');
// }

// function addArray() {
//    for (let i = 0; i < limit; i++) {
//       arraySum[i] = [];
//       for (let j = 0; j < limit; j++) {
//          arraySum[i][j] = array1[i][j] + array2[i][j];
//       }
//    }
// }

// function displayArray() {
//    for (let i = 0; i < limit; i++) {
//       for (let j = 0; j < limit; j++) {
//          document.write(arraySum[i][j] + ' ');
//       }
//       document.write('<br>');
//    }
// }

// main();


// let array: string[] = [];
// let limit: number = 5;
// let ar: number[] = [];

// for (let i = 0; i < limit; i++) {
//    array[i] = prompt('Enter array values: ');
// }

// document.write('Entered array is: ');
// for (let i = 0; i < limit; i++) {
//    document.write(array[i] + ' ');
// }
// document.write('<br>');

// for (let i = 0; i < limit - 1; i++) {
//    ar[i] = parseInt(array[i]) * parseInt(array[i + 1]);
// }

// document.write('After adding: ');
// for (let i = 0; i < limit - 1; i++) {
//    document.write(ar[i] + ' ');
// }



// class Comen {
//   limit: number;
//   array: number[][];

//   constructor(limit: number) {
//      this.limit = limit;
//      this.array = [];
//   }

//   getArray() {
//      for (let i = 0; i < this.limit; i++) {
//         this.array[i] = [];
//         for (let j = 0; j < this.limit; j++) {
//            this.array[i][j] = parseInt(prompt('Enter array values: '));
//         }
//      }
//   }

//   displayArray() {
//      document.write('Entered elements are:');
//      document.write('<br>');
//      for (let i = 0; i < this.limit; i++) {
//         for (let j = 0; j < this.limit; j++) {
//            document.write(this.array[i][j] + ' ');
//         }
//         document.write('<br>');
//      }
//   }
// }

// let limit: number = 2;
// let my: Comen = new Comen(limit);

// my.getArray();
// my.displayArray();



// class Area {
//   circle() {
//      let c = parseFloat(prompt('Enter the radius: '));
//      document.write('Area of circle: ' + (2 * 3.14 * c) + '<br>');
//   }

//   square() {
//      let s = parseFloat(prompt('Enter the length: '));
//      document.write('You entered length: ' + s + '<br>');
//      document.write('Area of square: ' + (s * s) + '<br>');
//   }

//   rectangle() {
//      let r = parseFloat(prompt('Enter the length: '));
//      let b = parseFloat(prompt('Enter the breadth: '));
//      document.write('Area of rectangle: ' + (r * b) + '<br>');
//   }

//   triangle() {
//      let t = parseFloat(prompt('Enter the length: '));
//      let k = parseFloat(prompt('Enter the base: '));
//      document.write('Area of triangle: ' + (0.5 * t * k) + '<br>');
//   }
// }

// let ob: Area = new Area();
// let choice: number = parseInt(prompt('Enter your choice: 1: Circle, 2: Square, 3: Rectangle, 4: Triangle'));

// if (choice == 1) {
//   ob.circle();
// } else if (choice == 2) {
//   ob.square();
// } else if (choice == 3) {
//   ob.rectangle();
// } else if (choice == 4) {
//   ob.triangle();
// } else {
//   document.write('Enter correct choice');
// }



// interface Book {
//   title: string;
//   author: string;
//   readingStatus: boolean;
// }

// let library: Book[] = [
//   {
//      title: 'Bill Gates',
//      author: 'The Road Ahead',
//      readingStatus: true
//   },
//   {
//      title: 'Steve Jobs',
//      author: 'Walter Isaacson',
//      readingStatus: true
//   },
//   {
//      title: 'Mockingjay: The Final Book of The Hunger Games',
//      author: 'Suzanne Collins',
//      readingStatus: false
//   }
// ];

// for (let i = 0; i < library.length; i++) {
//   if (library[i].readingStatus == false) {
//      document.write("You still need to read: " + library[i].title + "<br>" + library[i].author + "<br><br>");
//   } else {
//      document.write("Already read: " + library[i].title + "<br>" + library[i].author + "<br>");
//   }
// }



// let my_string = "4321";
// try {
//    let revstring = my_string.split('').reverse().join('');
//    console.log("Reversed string is: " + revstring);
// } catch (err) {
//    console.log("Error: " + err.message);
// } finally {
//    console.log("Type of my_string is: " + typeof my_string);
// }


// let userheight = prompt("Enter height");

// try {
//     if (isNaN(userheight)) {
//         throw new Error("notANumberError: User height is not a number.");
//     }
//     if (userheight > 200) {
//         throw new Error("hugeHeightError: User height is greater than 200.");
//     }
//     if (userheight < 40) {
//         throw new Error("tinyHeightError: User height is less than 40.");
//     }
// } catch (error) {
//     console.log(error);
// }



// function car(name, milage, max_speed) {
//   this.name = name;
//   this.milage = milage;
//   this.speed = max_speed;
// }

// let car1 = new car("innova", 13, 250);
// let car2 = new car("fortuner", 8, 300);

// console.log("brand name:", car1.name);
// console.log("milage:", car1.milage);
// console.log("speed:", car1.speed);

// console.log("brand name:", car2.name);
// console.log("milage:", car2.milage);
// console.log("speed:", car2.speed);



// function myCallback(something) {
//   console.log(something);
// }

// let myArray = [];
// let sum = 0;
// let limit = parseInt(prompt("Enter the limit of the array"));

// function myCalculator(myArray, myCallback) {
//   for (let i = 0; i < limit; i++) {
//       myArray[i] = parseInt(prompt("Enter the numbers"));
//       sum += myArray[i];
//   }
//   console.log("Sum:", sum);
//   if (sum % 2 === 0) {
//       myCallback("true");
//   } else {
//       myCallback("false");
//   }
// }

// myCalculator(myArray, myCallback);
