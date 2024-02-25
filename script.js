const inputText = document.getElementById('input-text')
const listContainer = document.getElementById('input-container')

function addTask() {
    if (inputText.value === '') {
        alert("Do write something...")
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputText.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputText.value = ''
    dataStorage()
}
listContainer.addEventListener('click',function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        dataStorage()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        dataStorage()
    }
},false)

function dataStorage() {
    localStorage.setItem('data',listContainer.innerHTML)
}
function showTasks() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTasks()