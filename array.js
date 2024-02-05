const englishNames = ["prabesh", "ram", "shyam", "kiran"]
let demoUsers = []
for (let index = 0; index < englishNames.length; index++) {
    let elements = englishNames[index]
    console.log(`${elements}-${index}`)
}


/*call back function 
  - a function passed as an argument to another function
*/
const show = () => {
    console.log("Show popup")
    return undefined
}
setTimeout(show, 2000)
/* anyonomus function */
setTimeout(() => {
    console.log("second popup");
}, 3000)

let numbers = ["prabesh", "roshan", "kishor"]
numbers.forEach((elements, index) => {
    console.log(elements, index)
})

// let number = [1,2,3,4,5]
// number.forEach((el,idx)=>{
// console.log("element",el,"index",idx)
//    finalSum += el
// })
// console.log({finalSum})

let to = [
    {
        title: "Html",
        status: "True"
    },
    {
        title: "react",
        status: "False"
    },
    {
        title: "js",
        status: "False"
    },
]
to.forEach((todo) => {
    if (to.status) {
        console.log(`${todo.title} is completed`)
    } else {
        console.log(`${todo.title} is pending`)

    }
})

let count = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "name": "Albania",
        "path": "albania"
    },
    {
        "code": "dz",
        "name": "Algeria",
        "path": "algeria"
    },
];

// function findCountryCode(countryName){
//     for(let index = 0; index<countries.length; index++){
//         let country = countries[index]
//         if(country.name.toLowerCase == countryName.toLowerCase){
//             console.log("code", country.code)
//             break;
//         }else{
//             console.log("country code not found")
//         }
//     }
// }
// findCountryCode("Afghanistan")

count.forEach((todo) => {
    if (count.name == todo.name) {
        console.log(`${count.code} is code of ${count.name}`)
    } else {
        console.log(`country name dosenot match`)
    }
}, 1000)
// console.log(Algeria)

let num = [1, 2, 3, 4, 7]
let dble = []
let double = num.forEach((element) => {
    dble.push(element * 2)
});
console.log(double)

let triple = num.map((element) => {
    return element * 3
})
console.log(triple)

const nep = ["prabesh", "ram", "shyam", "kiran"]


let mmyUsers = nep.map((element, index) => {
    return ({
        name: element,
        gmail: element + "@gmail.com",
        checkPassword: element + index
    })
})
console.log(mmyUsers)

let wholeNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNumber = wholeNumber.filter((element) => {
    if(element % 2 !== 0){
        return true;
    }
})
let oldEvenNumber = wholeNumber.filter(el=> el % 2 == 0)
console.log(evenNumber)
console.log(oldEvenNumber)

let dobl = (input)=>{
    return input * 2;
}
console.log(dobl(100))
let tripl = input=> input * 3;
console.log(tripl(100))

