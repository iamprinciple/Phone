const tdInput1 = document.getElementById('tdInput1');
const tdInput2 = document.getElementById('tdInput2');
const tdForm1 = document.getElementById('tdForm1');
const tdForm2 = document.getElementById('tdForm2');
const tdList = document.getElementById('tdList');
tdForm2.style.display= 'none'

function showTodo() {
    homeScreen.style.display = 'none';
    todo.style.display = 'block';
}

let todoText = [];

function add() {
    if (tdInput1.value === '' && tdInput2.value === '') {
        alert('Field is mandatory');
    } else {
        let theText = {
            text: tdInput1.value,
            completed: false
        };
        todoText.push(theText);
        console.log(theText);
        displayTodo();
        tdInput1.value = '';
    }
}

function displayTodo() {
    tdList.innerHTML = '';
    todoText.forEach((td, i) => {
        tdList.innerHTML += `<li>
            <span style="text-decoration: ${td.completed ? 'line-through' : 'none'}">${td.text}</span>
            <button onclick="del(${i})">x</button> 
            <button onclick="edit(${i})">edit</button>
            <input type="checkbox" onclick="toggle(${i})" ${td.completed ? 'checked' : ''}>
        </li>`;
    });
}
function del(i) {
    todoText.splice(i, 1)
    displayTodo()
}

let editIndex = -1; // Global variable to store the index of the item being edited

function edit(index) {
    editIndex = index; // Store the index of the item being edited
    tdInput2.value = todoText[index].text; // Pre-fill the input with the current text
    tdForm1.style.display = 'none';
    tdForm2.style.display = 'block';
}

function editText() {
    if (editIndex !== -1 && tdInput2.value.trim() !== '') {
        todoText[editIndex].text = tdInput2.value.trim();
        tdForm1.style.display = 'block';
        tdForm2.style.display = 'none';
        displayTodo();
        tdInput2.value = '';
        editIndex = -1; // Reset the edit index
    }
}

function toggle(i) {
   
    todoText[i].completed = !todoText[i].completed;
    displayTodo();
}


