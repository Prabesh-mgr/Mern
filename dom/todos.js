// alert("js is connected")
let todos = []

function addTodo(event) {
    event.preventDefault()
    // console.log("New items added")
    let input = document.getElementById("input_title").value;
    console.log("add", input);
    todos.push(input)
    convertTolist()
   
}
function delet_todo(editableidx) {
   todos =  todos.filter((el,index)=> index != editableidx)
   convertTolist()

}

function convertTolist(){
    let outPut = ``;
    todos.forEach((el,index) => {
        outPut += `<li>${el}</>  <button onclick="delet_todo(${index})">Delete</button>`
    })

    document.getElementById("todo_list").innerHTML = outPut;

}
/*suppose to delete particular word using filter
 let arr = ["prabesh","shyam","kiran"]
 arr.filter((el,idx)=>{
    if(idx = 1){
        return false
    }else{
        return true
    }
 })

*/