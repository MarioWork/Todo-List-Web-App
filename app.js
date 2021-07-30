

var taskList = document.getElementById('taskList');
var addTaskBtn = document.getElementById('addTaskBtn');
var inputText = document.getElementById('taskDescription');

addTaskBtn.addEventListener("click", addNewTask);
taskList.addEventListener("click", checkCompleteOrDelete);

function addNewTask() {

    if (inputText.value) {
        //Create list item
        var li = document.createElement('li');
        li.classList.add('list-item');

        //Create task title
        var taskDescription = document.createElement('p');
        taskDescription.classList.add('task-title');
        taskDescription.appendChild(document.createTextNode(inputText.value));

        //Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('task-delete-button');
        var deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas');
        deleteIcon.classList.add('fa-trash');
        deleteButton.appendChild(deleteIcon);

        //Append list item childs
        li.appendChild(taskDescription);
        li.appendChild(deleteButton);

        //clean input value
        inputText.value = '';

        //Add the list item to the list
        taskList.appendChild(li);
    }
}

function checkCompleteOrDelete(e) {
    const listItem = e.target;
    const listItemParent =  listItem.parentElement;

    if (listItem.classList[0] == 'task-title') {
        listItemParent.classList.toggle('task-completed');
        console.log('completed');

    } else if (listItem.classList[0] == 'task-delete-button') {
        listItemParent.classList.add('task-removed');
        listItemParent.addEventListener('transitionend',function(){
            listItemParent.remove();
        });
    }
}