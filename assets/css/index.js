

function validFormFieldInput(data){

const newTaskNameInput = document.querySelector('#task-name');
const name = newTaskNameInput.value;

const newTaskDescription = document.querySelector('#task-description');
const task = newTaskDescription.value;

const newAssignedTo = document.querySelector('#assigned-to');
const assigned = newAssignedto.value;

}
const errorElement = document.getElementById('error')
const form = document.getElementById('#form')
 
form.addEventListener('button', (e) => {

let message = []
if (name.value === '' || name.value === null) {
    message.push('Name is required')
}
if (message.length > 0) {
    e.preventDefault()
    errorElement.innerText = message.join(', ')
}   

})
