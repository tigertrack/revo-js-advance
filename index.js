function testPrint(){
    alert('BUTTON IS CLICKED!')
}

function testInputChange(){
    console.log("input was change")
}

function checkLoad(){
    console.log("element is loaded")
}

function checkKeyUp(){
    alert('SOME KEY IS PRESSED!')
}

// f(x): x+5
// f(2): 2+5
// 7


function addElement(id, title){
    // Creating a new element
    const newElement = document.createElement('li');
    newElement.textContent = title;

    // Appending the new element
    const parentElement = document.getElementById(id);
    parentElement.appendChild(newElement);
}


function removeElementById(id){
    const elementToRemove = document.getElementById('toright');
    elementToRemove.remove();

}

const displayData = async () => {
    let inputKeyword = document.getElementById('keyword')

    let data = await callData(inputKeyword.value);
    
    for (let index = 0; index < data.length; index++) {
        addElement('movieTitles', data[index].Title)
    }
}

 const callData = async (title) => {
    const key = 'c29407e2'
    const url = `http://www.omdbapi.com/?apikey=${key}&s=${title}`
    
    let response = await fetch(url); 
    let data = await response.json();
    return data.Search;
}