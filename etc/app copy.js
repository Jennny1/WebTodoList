// const fat = null; // null로 정의된 것, null은 자연발생하지 않음, variable 안에 어떤 것이 없다는 것을 확실히 하기 위해
// let somthing; // undefined : 정의되지 않음


// const Week = ["Mon", "Tue", "Wed", "thu", "fri", "sat"];

// console.log(Week[1]);

// Week.push("sun");

// console.log(Week[6]);


// ### object
// const player = {
//     name : "nico",
//     points : 10,
//     fat : true,
// };

// console.log(player);

// player.points = player.points + 15;

// console.log(player); 

// ### function

// function sayHello(nameOfPerson, age){
//     console.log("hello " + nameOfPerson + ", " + age + "살입니다.");
// }

// sayHello("jojo", "10")
// sayHello("Hyunjun", "20")
// sayHello("song", "30")


// function plus(a,b){
//     console.log(a+b);    
// }

// plus(1,2);
// plus(6,7);
// plus(10,22);

// const player = {
//     name : "Hjunjun",
//     sayHello : function(UserName){
//         console.log("hello, " + UserName + " 방가방가")
//     },
// };

// player.sayHello("기웅");
// player.sayHello("현준");


// ### 계산기 만들기

// const calc = {
//     plus : function(a, b){
//         return a+b
//     },
//     minus : function(a,b){
//         return a-b
//     },
//     times : function(a,b){
//         return a*b
//     },
//     div : function(a,b){
//         return a/b
//     },
//     power : function(a,b){
//         return a**b
//     }
// }

// const res = calc.plus(1,2);
// console.log(res)
// // calc.minus(1,2)
// // calc.times(1,2)
// // calc.div(1,2)
// // calc.power(1,2)

// // ### return 사용하기
// function calcKage(age){
//     return age + 2;
// }

// const age = 90;
// console.log(calcKage(age));



// ### conditional
// const age = parseInt(prompt("How old are u?"));

// if (isNaN(age) || age < 0){
//     console.log("Please write a real positivenumber");
// } else if (age < 18 ){
//     console.log("You are too young to drink");

// } else if(age >= 18 && age <=50){
//     // &&는 and
//     console.log("You can drink")
    
// } else {
//     // 위 두 조건이 모두 false일때 (숫자, age가 18 이상, 50살 이상)
//     // else는 선택사항
//     console.log("You can drink But, please take care of your condition")
// }