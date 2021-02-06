const hour = document.querySelector('#hour');
const state = document.querySelector('#state');
const name = document.querySelector('#name');
const search = document.querySelector('#search');
const question = document.querySelector('h3');

const pics = ['pexels-justin-hamilton-92248.jpg', 'pexels-skitterphoto-1005334.jpg', 'pexels-thibault-jugain-3993081.jpg'];
const states = ['Good Morning', 'Good Afternoon', 'Good Evning'];

//getting time and show status

const setTime = setInterval(() => {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hour.innerHTML = `${h} : ${m} : ${s}`;

    if (h < 12) {
        document.body.style.backgroundImage = 'url(' + pics[1] + ')';
        state.innerHTML = states[0];
    }
    else if (h >= 13 || h <= 19) {
        document.body.style.backgroundImage = 'url(' + pics[2] + ')';
        state.innerHTML = states[1];
    }
    if (h >= 20) {
        document.body.style.backgroundImage = 'url(' + pics[0] + ')';
        state.innerHTML = states[2];
        hour.style.color = 'white';
        state.style.color = 'white';
        name.style.color = 'white';
        name.style.borderColor = 'white';
        search.style.color = 'white';
        search.style.borderColor = 'white';
        question.style.color = 'white';
    }
}, 1000);


// get user name from localStorage

const getFocus = () => {
    if (localStorage.getItem('name') === null) {
        name.value = '';
    }
    else {
        name.value = localStorage.getItem('name');
    }
}
getFocus();


// set name in localStorage

function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem('name', e.target.value );
            name.blur();
        }
    }
    else { localStorage.setItem('name', e.target.value); }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click' , setEmpty)



// search by open new tab

function setSearch(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            window.open(`https://www.google.com/search?q=${search.value}`, '_blank');
            search.value=''
        }
    }
}
search.addEventListener('keypress', setSearch);
search.addEventListener('click' , setEmpty)


// set name and search to '' if empty or unfocus

function setEmpty(){
    this.innerHTML='';
}


