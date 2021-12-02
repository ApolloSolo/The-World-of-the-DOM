//the event object is alwayes passed as an argument to the callback weather we make it explicet or not. 

document.querySelector('button').addEventListener('click', function (event) {
    console.log(event);
})

//two types of key events - 'keyup' and 'keydown'
const input = document.querySelector('input');

input.addEventListener('keydown', function() {
    console.log(input.value);
})

//To find out what key was pressed, we need the event object
input.addEventListener('keydown', function(event) {
    //console.log(event); this will log entire event
    console.log(`This is the key pressed: ${event.key}`);
    console.log(`This is the code: ${event.code}`);
})

window.addEventListener('keydown', function(event) {
    if(event.code === 'ArrowUp'){
        console.log("Up!");
    }
    else if(event.code === 'ArrowRight'){
        console.log('Right!');
    }
    else if(event.code === 'ArrowDown'){
        console.log('Down!');
    }
    else if(event.code === 'ArrowLeft'){
        console.log('Left');
    }
    else{console.log('Ignored');}
})

/*****Form and Input******/
const form = document.querySelector('#shelterForm');

//In this case, preventDefault will prevent the form action from changing page
form.addEventListener('submit', function(e) {
    console.log('submited');
    e.preventDefault();
})