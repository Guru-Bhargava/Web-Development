console.log("This is tutorial 53");

// function greet(name){
//     console.log(name + " is a good boy");
// }

function greet(name,greetText){
    console.log(greetText+ " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d=a+b+c;
    return(d);
}

let name="guru"
let name1="sagar"
let name2="harry"
let name3="rohan"
let greetText="Good Morning";

// console.log(name + " is a good boy")
// console.log(name1 + " is a good boy")
// console.log(name2 + " is a good boy")
// console.log(name3 + " is a good boy")

// greet(name)
// greet(name1)
// greet(name2)
// greet(name3)

greet(name,greetText)
greet(name1,greetText)
greet(name2,greetText)
greet(name3,greetText)

let returnval=sum(1,2,3);
console.log(returnval);

