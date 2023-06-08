var queryLink = document.getElementById('queryLink')
const HOST = document.getElementById('queryLink').innerText + '/'

const queryInput = document.getElementById('query')
queryInput.onkeyup = function(target){
    queryLink.innerHTML = HOST + encodeURIComponent(queryInput.value)
    eventPageInput()
}

const pageInput = document.getElementById('page')
function eventPageInput(target){ 
    if(pageInput.value.length)
        queryLink.innerHTML = HOST + queryInput.value + `?page=` + pageInput.value 
}
pageInput.onchange = eventPageInput
pageInput.onkeyup = eventPageInput