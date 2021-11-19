const mymenu = document.querySelector('#mymenu')
const sidebar = document.querySelector('.sidenavbar');
mymenu.addEventListener('click', (e) =>{
    sidebar.classList.toggle('show-sidebar')
})
