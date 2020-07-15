"use strict";
/*
const obj = {
    name : "Alex",
    age : 18,
    color : {
        first : "red",
        second : "white"
    }
};

//let tempObj = Object.assign({},obj);

const add = {
    status : "open",
    access : "true"
};

console.log(Object.assign(obj,add));
*/
/*
const video = ['terma', 'gamma', 'tranta'],
      audio = ['solo','santa'],
      end = [...video, ...audio,'liss', 'hight'];
    
console.log(end);
function out(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}


out(...audio);

console.log([1,2,3]);
*/

const solder = {
    helth : 400,
    armor : 120,
    helloSolder : function(){
        console.log('Hello god of war')
    }
};


const john = Object.create(solder);
john.helloSolder();
//const john = {
//    armor : 150
//};

//john.__proto__ = solder;

//Object.setPrototypeOf(john,solder);
//john.helloSolder();











