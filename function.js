function doble(input){
    let result = 2 * input ;
    console.log(`result: 2 * ${input} = ${result}`);
}
doble(2)

function sum(para1 , para2){
    let output = para1 + para2
    console. log(`output: ${para1} + ${para2} = ${output}`)
}
sum(20,3)

function diff(para1 = 0, para2 = 0, para3 = 0){
    let resultOfdiffer = para1 - para2 - para3
    console.log(`resultOfdiffer: ${para1} - ${para2} - ${para3} = ${resultOfdiffer}`)
}
diff(10,20)

let member = [
    {
        name : "Prabesh",
        joined_at : "2024-01-10T13:01.0.3456665" 
    },
    {
        name : "ram",
        joined_at : "2024-019-10T13:01.0.3456665" 
    },
    {
        name : "Shyam",
        joined_at : "2024-16-10T13:01.0.3456665" 
    }
]
// function memberInfo(index){
//       console.log(`${member[index].name} joined-at ${member[index].joined_at.substring(0,10)}`)
// }
let{name, joined_at} = member

console.log(`${name} joined-at${joined_at}`)
console.log(`${member[0].name} joined-at${member[0].joined_at}`)