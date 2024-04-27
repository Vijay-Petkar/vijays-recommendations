let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = " Front-End  Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = " UI UX Designer";
            }, 4000);
           
        }

        textLoad();
        setInterval(textLoad, 12000);