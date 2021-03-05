const Newtask = document.getElementById('new');
const tasks = document.getElementById('tasks');
const clear = document.getElementById('clear');

var taskId = 0;
var TaskList = [];
var newTaskList = [];

Newtask.addEventListener('keypress', (event) => {
    if (Newtask.value) { 
        if (event.key == 'Enter') {
            if (newTaskList.includes(Newtask.value)) {
                alert('item ja existe');
            }
            else {
                const noTask = document.getElementById('noTask');
                if (noTask) noTask.remove();

                let task = document.createElement('li');
                task.setAttribute('id', `${taskId}`);

                let input = document.createElement('input');
                input.setAttribute('class', 'check');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('id', `${taskId}`);


                let removeButton = document.createElement('button');
                removeButton.setAttribute('id', `${taskId}`);
                removeButton.setAttribute('class', 'removeButton');
                removeButton.append('X');

                task.append(input);
                tasks.append(task);
                task.append(Newtask.value);
                task.append(removeButton);

                taskId++;
                TaskList.push(task);

                removeButton.addEventListener('click', ()=> {
                    task.remove();
                });

                newTaskList.push(Newtask.value);

                event.preventDefault();
                Newtask.value = '';
            }
        }

            
    }
});

clear.addEventListener('click', () => {
    const InputChecked = document.querySelectorAll('#tasks li input');
    InputChecked.forEach((element) => {
        let InputId = element.getAttribute('id');
        let li = document.getElementById(`${InputId}`);
        if (element.checked) {
            li.remove();
        }
    });
})

if (TaskList.length === 0) {
    let msg = document.createElement('p');
    msg.setAttribute('id', 'noTask');
    msg.innerHTML = 'Nenhuma Tarefa'
    tasks.append(msg);

    tanks.append(noTask);
    console.log('aqui');
}