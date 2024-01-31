function sum( ...rest){
    let result = 0; 
       console.log(rest)
       for(let index = 0; index < rest.length ; index++){
        let number = rest[index]

        result = result + number
       }
       return result

}
console.log(sum(1,2,3,4,5,6))


let todos = [
    {
        title: "variable",
        status: "completed",
        createAt: "2024-01-03"
    },
    {
        title: "array",
        status: "completed",
        createAt: "2024-01-05"
    },
    {
        title: "object",
        status: "completed",
        createAt: "2024-01-07"
    },
    {
        title: "loop",
        status: "pending",
        createAt: "2024-01-09"
    },
    {
        title: "function",
        status: "pending",
        createAt: "2024-01-10"
    },
];

let completedTodos = [];
let pendingTodos = [];


for (let i = 0; i < todos.length; i++) {
    if (todos[i].status === "completed") {
        completedTodos.push(todos[i]);
    } else if (todos[i].status === "pending") {
        pendingTodos.push(todos[i]);
    }
}

console.log("Completed Todos:", completedTodos);
console.log("Pending Todos:", pendingTodos);

const nepaliNames = ["prabesh", "ram", "shyam", "kiran"]

let dummyUsers = []
for(let index = 0; index < nepaliNames.length; index++){
    let elements = nepaliNames[index]
    dummyUsers.push({
        name: elements,
        gmail: `${elements}@gmail.com`,
        password: `${elements}${index}`
    })

}

console.log({dummyUsers})



let user = {
    name: "ram",
    password: "password"
}
let user1 = {
    name: "ram",
    password: "password"
}

const checkPassword =(user,name,password) =>{
    if(user.name == name && user.password == password){
        console.log("sucessfully login")
    }else{
        console.log("login unsucessfull")
    }
}
checkPassword(user1,"ram", "password")


function toCheckNUmber(inputNumber){
    if(typeof inputNumber === 'number' && !isNaN(inputNumber)){
        if(inputNumber < 0){
            console.log('It is negative number')
        }else if(inputNumber > 0){
            console.log('It is positive number')

        }else{
            console.log('The number is zero')
        }
    }else{
        console.log("It is a word")
    }
}
toCheckNUmber(0)



let countries = [
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
  
function findCountryCode(countryName){
    for(let index = 0; index<countries.length; index++){
        let country = countries[index]
        if(country.name.toLowerCase == countryName.toLowerCase){
            console.log("code", country.code)
            break;
        }else{
            console.log("country code not found")
        }
    }
}
findCountryCode("Afghanistan")






