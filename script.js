function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    botao.classList.toggle(darkModeClass);
    titulo.classList.toggle(darkModeClass);
    corpo.classList.toggle(darkModeClass);
    rodape.classList.toggle(darkModeClass);

}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode'

    if (corpo.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode;
        titulo.innerHTML = darkMode + " On";
        return;
    }
    botao.innerHTML = darkMode;
    titulo.innerHTML = lightMode + " On";

}

const darkModeClass = 'dark-mode';
const botao = document.getElementById('mode-selector');
const titulo = document.getElementById('page-title');
const corpo = document.getElementsByTagName('body')[0];
const rodape = document.getElementsByTagName('footer')[0];

botao.addEventListener('click', changeMode);