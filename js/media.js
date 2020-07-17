"use strict";

const obj = {
    name : "Alex",
    age : 18,
    colors : {
        one : "yellow",
        two : "black",
        whether : {
            summer : "hot",
            winter : "cold"
        }
    },
    hello : function(){
        console.log("hello my friend")
    }
}

const copyObjJson = JSON.parse(JSON.stringify(obj))
const copyObjSpred = {...obj}
const copyObj = Object.assign(copyObjSpred,copyObjJson)

copyObj.age = 33;
copyObj.colors.one = "white"
copyObj.colors.whether.summer = "more hotter!!"

// console.log(obj)
// console.log(copyObj)
// copyObj.hello()

// console.log(typeof(parseInt("x15px",10)))
// console.log(parseInt("15px",10))


