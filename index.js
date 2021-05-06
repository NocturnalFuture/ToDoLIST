// Input Var
let input = prompt('What would you like to do?')


// Todos Array
const todos = [];

while(input !== 'quit'){
    if(input === 'list'){
        for(let i = 1; i < todos.length;i++){
            console.log(`${i}: ${todos[i]}`)
        }
    } else if(input === "new" ){
        const newToDo = prompt("OK, what is the new todo?");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list`)
    } else if(input === "delete"){
        const index = parseInt(prompt("Ok, enter an index to delete"))
        const deletedTarget = todos.splice(index, 1);
        console.log(deletedTarget[0])
        console.log(`You successfully removed ${deletedTarget[0]} from the list`)
    }
    input =  prompt("What would you like to do?")
}

alert("Okay, you quit the input")