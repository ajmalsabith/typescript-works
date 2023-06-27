//  let val = (a:number,b?:number|string)=>{

//     console.log(a);
//     console.log(b);
    

// }

// val(34,'ajmal')


// alias

// type  stringornum = string|number

// let val = (a:number,b?:stringornum)=>{

//     console.log(a);
//     console.log(b);
    

// }
//  val(34)


// let greet :(a:string,b:string)=> void;

// greet= (name:string,greet:string)=>{
//       console.log(`${name} says ${greet}`);
// }

// greet('ajmal','i love you')



// const val= document.querySelector('.name')!;
// console.log(val);

// class a{
//     private name:string='ajmal'
//     age:number=45
//     place:string='tirur'

//      display() {

//         return [this.name,this.age,this.place]
        
//     }

   
// }

// class b extends a{
     
// }

// var list=new a()
// console.log(list.age);
// console.log(list.display());


// interface car{
//     name:string
//     speed:number
// }


// interface car{
//     color:string
//     condition:boolean

// }

// const Carlive : car= {

//     name:'polo',
//     speed:340,
//     color:'blue',
//     condition:true

    
// }

// console.log(Carlive);


// 1


// > ooops consupt in typescript



// class car{
//     name:string;
//     constructor(val:string){
//         this.name=val
//     }
//     move(speed:number){
//         return [this.name,speed]
//     }
// }


 

// const list= new car('polo GT')
// console.log(list.move(180));
// console.log(list.name);


// method overloading

// class A {

//     name:string;
//     sum(obname: string) {
//         this.name= obname
//     }
// }

// class B extends A {
//     sum(name:string) {
       
//     }
// }

// const instance = new B();
// console.log(instance.sum(45, 67)); // Output: 112



// inheritance:


// class Animal {
//     name: string;
  
//     constructor(name: string) {
//       this.name = name;
//     }
  
//     eat() {
//       console.log(`${this.name} is eating.`);
//     }
//   }
  
//   class Dog extends Animal {
//     breed: string;
  
//     constructor(name: string, breed: string) {
//       super(name); // calling the constructor of the parent class
//       this.breed = breed;
//     }
  
//     bark() {
//       console.log(`${this.breed+' '+this.name} is barking.`);
//     }
  
//     eat() {
//       super.eat(); // calling the eat() method of the parent class
//       console.log(`${this.name} is eating bones.`);
//     }
//   }
  
//   class bird extends Dog{

            
//        constructor(name:string,breed:string){
//         super(name,breed)
//        }
//        bark():void{
//         super.bark()
//        }
//        eat(): void {
//          super.eat()
//        }
//   }
//   const myDog = new bird("cat", "labour");

//   myDog.bark(); //: Max is barking.
//   myDog.eat();
//   myDog.name

  

// incapsulation:


// class car {
//  private name:string;
//   lisence:string

//   public setname(getname:string) :void {
//      this.name=getname
//   }
  
//   public getname():string{
//     return this.name
//   }

// }

 

// const list= new car()
// list.setname('benz')
// console.log(list.getname());


// polymorphism:


//overloading
// class sum{


//   add(num1:number,num2:number):number;
//   add(num1:number,num2:number,num3:number):number;
//   add(num1:number,num2:number,num3?:number):number{
//     if (num3!=undefined) {
//       return num1+num2+num3    
//      }else{
//       return num1+num2
//      }
//   }


// }

// const lists=new sum()
// console.log(lists.add(45,64));
// console.log(lists.add(45,69,67));

//overriding

// class Animal {
//   makeSound(): void {
//     console.log("The animal makes a sound.");
//   }
// }

// class Dog extends Animal {
//   makeSound(): void {
//     super.makeSound(); // Calling the parent class method using 'super'
//     console.log("The dog barks.");
//   }
// }

// const dog = new Dog();
// dog.makeSound();


// function namee(num:number):number{
//   console.log(  num.toString());

//   return num+2
// }

// console.log(namee(45));

// let loginUsers= (val:number):number => val 

// console.log(loginUsers(56));


// const gethelo = (s:string):string =>{
//   return ''
// }

// const heros = [ 'thore','spiderman','ironman']

// let val:string[]= heros.map((hero):string =>{
//    return 'ajmal is '+hero 

// })
// console.log(val);

// const all={
//   name:'ajmal',
//   age:35
// }

// function val():{name:string,age:number}{
//   return{name:'salim',age:33}
// }
// console.log(val());
 


// aliases:


// type value=string

// const str:value='ajmal'

// type user={
//   name:string,
//   age:number
// }

// function read(man:user){

//   return man

// }

// console.log(read({name:'ajmal',age:34}));



// readonly:


// type user ={
//  readonly id:string
//   name:string,
//   age:number

// }

// let User: user ={

//     id:'1p',
//     name:'ajmal',
//     age:15

// }


// User.age=12
// console.log(User);



// union:


// let val:string | number='ajmal'
// val=34
// val='sabith'

// type user ={
//   name:string,
//   id:number
// }

// type admin={
//   username:string,
//   id:number
// }

// let ajmal:user|admin={
//   username:'ajmal',
//   id:34

// }
// console.log(ajmal);


// function vaal(id:string|number){

//   if (typeof id=='string') {

//     let val:string=id.toLowerCase()
//     console.log(val);
    
    
//   }else{
//     console.log(id+2);
    
//   }
  
// }
// vaal('AJMAL')



// tuples:


// let user:[string,number]=['ajmal',23,]


//problem !!

// let man:[string,number]=['ajmal',23,]
// man.push('salim')
// console.log(user);


// interface:


// class
 
// interface name{
//   name:string
//   age:number
//   place:string
// }

// class user implements name{
//   name='ajmal'
//   age=23
//   place='tirur'
// }

// const list = new user()
// console.log(list.name);
// console.log(list.age);

 // objuct

// interface user{
//   name:string,
//   age:number
// }

//   let newuser:user ={
//   name:'ajmal',
//   age:23
// }

// merging 

// interface a{
//   name:string
//   age:number
// }
// interface a{
//   place:string
// }

// let b:a={
//   name:'ajmal',
//   age:18,
//   place:'kuttipala'
// }

// console.log(b);


// generics:

// function value<T>(name:T):T{
//      return name
// }

// console.log(value('ajmal'));
// console.log(value(299));



// enum:

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let direction: Direction = Direction.Left;
console.log(direction); // Output: 0

direction = Direction.Down;
console.log(direction); // Output: 3
