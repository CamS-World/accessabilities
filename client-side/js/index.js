import About from './components/About';
import Access from './components/Access';
import Account from './components/Account';
import Contact from './components/Contact';
import Login from "./components/Login";
import Maps from './Components/Maps';
import Resources from './components/Resources';
import Village from './components/Village';
import apiHelpers from "./apiHelpers";

renderPage();

function renderPage() {
    about();
    access();
    account();
    contact();
    resources();
    village();
    mapsResources();
}


console.log("Client Side is wired up!");

buildPage();

function buildPage() {
    login();
}

function login() {
    const loginElem = document.querySelector(".login-button");
    loginElem.addEventListener("click", () => {
        const page = document.querySelector(".Page");
        page.innerHTML = Login();
    });
}

function mapsResources(){
    const mapsElem = document.querySelector("#resources")
    mapsElem.addEventListener('click',()=> {
        PageContent.innerHTML = Resources();
        clickMaps();
    })
}

function clickMaps(){
    PageContent.addEventListener("click", (event) => {
        console.log("Is this thing on????")
        PageContent.innerHTML = Maps();
        if(event.target.classList.contains("returnToResources")){
            PageContent.innerHTML= Resources();
        }
    
    });
}


//Lyzz js to enable hamburger menu
document.body.classList.toggle('js-enabled');

document.addEventListener('DOMContentLoaded', function (event) {
    let hamburger = document.getElementById('hamburger');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.onclick = function () {
        if (this.getAttribute('aria-expanded') == 'false') {
            this.setAttribute('aria-expanded', 'true');
        } else {
            this.setAttribute('aria-expanded', 'false');
        }
    }
});

function about() {
    const contactElem = document.querySelector('#about');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = About();
    });
}

function account() {
    const contactElem = document.querySelector('#account');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = Account();
    });
}

function access() {
    const contactElem = document.querySelector('#access');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = Access();
    });
}

function contact() {
    const contactElem = document.querySelector('#contact');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = Contact();
    });
}

function resources() {
    const contactElem = document.querySelector('#resources');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = Resources();
    });
}

function village() {
    const contactElem = document.querySelector('#village');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = Village();
    });
}