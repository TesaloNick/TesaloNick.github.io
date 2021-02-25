const inputText = document.getElementById('input-text')
const buttonEnter = document.getElementById('enter')
const buttonClear = document.getElementById('clear')
const taskList = document.getElementById('task-list')

let taskArray = [];

const addTask = () => {                                 // добавляет задачу в список
    let task = document.createElement('li')             // создание поля для задачи

    let taskText = document.createElement('p')          // текст задачи
    taskText.innerHTML = `${inputText.value}`;

    let editImg = document.createElement('img')         // иконка редактирования задачи
    editImg.setAttribute('src', 'images/edit.png')

    let deleteImg = document.createElement('img')       // иконка удаления задачи
    deleteImg.setAttribute('src', 'images/274c.png')

    let checkbox = document.createElement('input')      // отметка о выполнении
    checkbox.setAttribute('type', 'checkbox')

    taskList.appendChild(task)
    task.appendChild(checkbox)
    task.appendChild(taskText)
    task.appendChild(editImg)
    task.appendChild(deleteImg)
    inputText.value = ''
    taskArray.push(task)
    task.classList.add(`task${taskArray.length}`)
    taskText.classList.add(`text${taskArray.length}`)
    deleteImg.classList.add(`delete${taskArray.length}`)
    editImg.classList.add(`edit${taskArray.length}`)
    checkbox.classList.add(`checkbox${taskArray.length}`)
}

buttonEnter.addEventListener('click', addTask)              // добавляет задачу по нажатию на button
inputText.addEventListener('keydown', (event) => {          // добавляет задачу по нажатию на Enter
    if (event.key === 'Enter') addTask()
})

buttonClear.addEventListener('click', () => {               // очистка списка задач
    taskList.innerHTML = ''
})

const deleteAndEditTask = (event) => {                         
    const item = event.target;
    // console.log(item);
    for (let i=1; i <= taskArray.length; i++) {
        if (item.classList.value === `delete${i}`) {                    //  удалению задачи
            let elemDelete = document.getElementsByClassName(`task${i}`)
            elemDelete[0].parentNode.removeChild(elemDelete[0])
        }
        if (item.classList.value === `edit${i}`) {                      // изменение задачи
            let parentEdit = item.parentElement
            let elemDelete = taskList.getElementsByClassName(`text${i}`) // нахождение задачи
            elemDelete[0].parentNode.removeChild(elemDelete[0])          // удаление задачи
            const newText = prompt('Введите новую задачу')
            let task = document.createElement('p')                      // создание новой задачи
            task.classList.add(`text${i}`)
            task.innerHTML = `${newText}`
            parentEdit.insertBefore(task, item)                         // вставка новой задачи
        }
        if (item.classList.value === `checkbox${i}`) {                  // зачеркивание, в зависимости от чекбокса
            if (item.checked) {
                item.nextElementSibling.classList.remove('normal-text')
                item.nextElementSibling.classList.add('crossOut')
            } else {
                item.nextElementSibling.classList.remove('crossOut')
                item.nextElementSibling.classList.add('normal-text')
            }
        }
    }
}
taskList.addEventListener("click", deleteAndEditTask);         // событие по удалениюб изменению и зачеркиванию задачи


