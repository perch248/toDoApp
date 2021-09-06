//add to-do button
document.querySelector('.push').onclick = function() {
    if(document.querySelector('.newtask input').value.length === 0){
        console.log('error');
    }
    else{
        document.querySelector('.tasks').innerHTML += `<div class="task">
            <span class="taskname">
                ${document.querySelector('.newtask input').value}    
            </span>
            <span class="delete">
                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </span>
        </div>`
    }

    

//delete button on to-do list
    let currentTasks = document.querySelectorAll('.delete');
    for (let i = 0; i < currentTasks.length; i++){
        currentTasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }

//line-through for finished to-do/task
    let taskList = document.querySelectorAll('.task');
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].onclick = function () {
            this.classList.toggle('completed');
        }
    }

//press enter to search
    // document.querySelector('.newtask input').addEventListener('keyup', function (event) {
    //     if (event.key === 'Enter') {
            
    //     }
    // }

    document.querySelector('.newtask input').value = '';
}
