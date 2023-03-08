const box1 = document.getElementById('box1');
box1.style.height = '50px';
box1.style.width = '50px';
box1.style.backgroundColor = 'red';

// const box2 = document.getElementById('box2');
// box2.style.height = '200px';
// box2.style.width = '200px';
// box2.style.backgroundColor = 'green';
// box2.style.transition = 'transform .3s linear';

const box3 = document.getElementById('box3');
box3.style.height = '300px';
box3.style.width = '300px';
box3.style.backgroundColor = 'gray';
box3.style.display = 'flex';
box3.style.justifyContent = 'center';
box3.style.alignItems = 'center';



let boxLeft = 0;
let boxScale = 0;
setInterval(function() {
    boxLeft += 5;
    boxScale += 0.1;
    box2.style.transform = `translateX(${boxLeft}px) scale(${boxScale})`;
}, 100);



const header2 = document.getElementById('header2');
if (header2.innerText === 'Stuck in a box') {
    header2.innerText = 'Welcome Dylan';
}

const mainHeader = document.getElementById('main-header');
mainHeader.innerText = 'Hello World';

const subHeading = document.getElementById('sub-heading');
if (subHeading.innerText.toLowerCase() === 'dylan smith') {
    
}


const names = [
    'James',
    'Max',
    'Sarah',
    'Liam'
]

const peopleContainer = document.getElementById('People')

// peopleContainer.Container.innerHTML = '<p>Hello world</p>'
// peopleContainer.Container.innerHTML += '<p>Hello world</p>'


for (const name of names) {
    peopleContainer.innerHTML += `<p>${name}</p>`
}


const people = [
    {
        name: 'Dereck',
        age: 32,
        favoriteColor: 'Blue'
    },
    {
        name: 'Sarah',
        age: 25,
        favoriteColor: 'Purple'
    },
    {
        name: 'Chad',
        age: 32,
        favoriteColor: 'Green'
    },
    {
        name: 'Larry',
        age: 55,
        favoriteColor: 'Red'
    },
    {
        name: 'JimboSlice',
        age: 33,
        favoriteColor: 'Gray'
    }
]

for (const person of people) {
    peopleContainer.innerHTML += `
        <div class="card">
            <h2>${person.name}</h2>
            <p>Age: ${person.age}</p>
            <p>Favorite Color: ${person.favoriteColor}</p>
        </div>
    `;
}