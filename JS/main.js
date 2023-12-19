var saveBtn = document.getElementById("saveBtn")
var updateBtn = document.getElementById("updateBtn")
var task = document.getElementById("task")
var todoList = []
var list = document.getElementById("list")

saveBtn.onclick = function(e){
    e.preventDefault()
    todoList.push(task.value)
    task.value = ""
    // console.log(todoList)
    view()
}

function destroy(x){
    todoList.splice(x,1)
    view()
}

function view(){
        var resultStr = ""

    for(var i=0; i<todoList.length; i++){
        resultStr += `<tr> <td>${todoList[i]}</td>
            <td><button onclick= 'destroy(${i})'>Delete</button></td>
            <td><button onclick= 'edit(${i})'>Edit</button></td>
            </tr>
        `
    }

    list.innerHTML = resultStr

}

var index

function edit(x){
    index= x
    task.value = todoList[x]
    updateBtn.style.display = "inline"
    saveBtn.style.display = "none"
}

updateBtn.onclick = function(e){
    e.preventDefault()
    // console.log(task.value)
    todoList[index] = task.value
    view()

    updateBtn.style.display = "none"
    saveBtn.style.display = "inline"
    task.value = ""
}