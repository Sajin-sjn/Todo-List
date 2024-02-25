const inputText = document.getElementById('input-text')
const listContainer = document.getElementById('input-container')

function addTask() {
    if (inputText.value === '') {
        alert("Do write something...")
    }
}