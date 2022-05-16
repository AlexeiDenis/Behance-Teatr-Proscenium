let button = document.getElementById('btn')
let menu = document.getElementById('menu')
// let listMenu = document.querySelectorAll('#menu li')

// function changeColor() {
//    this.classList.toggle('open');
//    listMenu.forEach( list =>{
//        if(list != this){list.classList.remove('open')};
//    });
// }

// listMenu.forEach(e =>{ e.addEventListener('click', changeColor)})
button.addEventListener('click', ()=>{
    menu.classList.toggle('opened')
})