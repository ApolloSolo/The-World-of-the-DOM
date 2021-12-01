const btn = document.querySelectorAll('button');
const h1 = document.querySelectorAll('h1');

//Make random color
const randomColor = () =>{
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${b}, ${g})`;
}

for(let buttons of btn){
    buttons.addEventListener("click", () => {
        buttons.style.backgroundColor = randomColor();
        buttons.style.color = randomColor();
    })
}

for(let h1s of h1){
    h1s.addEventListener('click',colorized)
}

//Changing the background and text color can be handled in a single function. Using the keyword this in place of 
//a variable or element like in the above h1 example. 

function colorized () {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

//When we are using the keyword this inside of a callback that is invoked by an event handler, "this" will refer to the element
//that the event was triggered on. 