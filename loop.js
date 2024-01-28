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

