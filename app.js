const hOne = document.querySelector("h1");
const firstPara = document.querySelector("p");
//firstPara.innerText = "LOLOLOLOL"

const allLinks = document.querySelectorAll("a");

for(links of allLinks){
    links.innerText = "I am a LINK"
}

hOne.innerHTML += '<sup>2</sup>'

const input = document.querySelector('input[type="text"]');

console.log(input.type);

input.type = 'color'

//set a class attribute 
const h2 = document.querySelector('h2');

h2.setAttribute('class', 'purple');
firstPara.setAttribute('class', 'border');

//class list
console.log(h2.classList);
h2.classList.add('border');
//h2.classList.remove('border')

//Toggle classes vis .classList.toggle("class");
console.log(h2.classList.contains('border')); //true - class is applied
h2.classList.toggle('border');                //Toggle border class off
console.log(h2.classList.contains('border')); //false - class was removed

const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1637952112301-6090dca83ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
document.body.appendChild(newImg);

//insertAdjacentElement('afterend' - 'beforeend' - 'afterbegin' - 'beforebegin')
const newB = document.createElement('b') 
newB.append('New Bold Tag');
hOne.insertAdjacentElement('afterend', newB);

