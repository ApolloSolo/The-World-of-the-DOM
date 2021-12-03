/*****Form and Input******/
const form = document.querySelector('#shelterForm');
const input = document.querySelector('#cat-name-input');
const ulList = document.querySelector('#cat-name-list');

//function used in submit event
function addLi (catName){                        //catName arg passed for innerText (our cat name input)
    let listItem = document.createElement('li'); //create an <li> element
    listItem.innerText = catName;                //Set the <li> innerText to our arg (will pass in cat name input) 
    ulList.append(listItem);                     //add the li element to the <ul> 
}

form.addEventListener('submit', function(e) {   //e for event to preventDefault (stop change page to form action)
    e.preventDefault();
    let name = input.value;                    //get input value
    addLi(name);                               //run our function that inputs name value into our appended <li>
})



