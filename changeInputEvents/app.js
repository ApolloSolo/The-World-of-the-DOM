const input = document.querySelector('#input');
const h1 = document.querySelector('h1');

//change event will activate the listener when the value has changes and the user moves off of the input box. 
// input.addEventListener('change', () => {
//     console.log(input.value);
// })

//input event will fire anytime there is a change to the input.
//Here we update our h1 as we type in the value
input.addEventListener('input', () => {
    h1.innerText = input.value;
})


