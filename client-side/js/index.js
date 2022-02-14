import About from './components/About';
import Account from './components/Account';
import BusinessResources from './Components/BusinessResources.js';
import Contact from './components/Contact';
import Login from "./components/Login";
import Maps from './Components/Maps';
import Resources from './components/Resources';
import Village from './components/Village';
import apiHelpers from "./components/apiHelpers.js";
import businessResource from './Components/BusinessResource.js';

// import {
//     createTestScheduler
// } from 'jest';

buildPage();
loadBusinesses();

function buildPage() {
    about();
    businessResource();
    BusinessResources();
    account();
    contact();
    resources();
    village();
    navAccess();
    //login();
    mapsResources();
    businessList();
    loadBusinesses();




}


console.log("Client Side is wired up!");



// buildPage();

// function buildPage() {
// login();
// }

// function login() {
// const loginElem = document.querySelector(".login-button");
// loginElem.addEventListener("click", () => {
// const page = document.querySelector(".Page");
// page.innerHTML = Login();
// });

//}


function mapsResources() {
    const mapsElem = document.querySelector("#resources")
    mapsElem.addEventListener('click', () => {
        PageContent.innerHTML = Resources();
        clickMaps();
    })
}


function clickMaps() {
    PageContent.addEventListener("click", (event) => {
        console.log("Is this thing on????")
        PageContent.innerHTML = Maps();
        if (event.target.classList.contains("returnToResources")) {
            PageContent.innerHTML = Resources();
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

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})



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

function navAccess() {
    const accessElem = document.querySelector('#access');
    accessElem.addEventListener('click', () => {
        apiHelpers.getRequest(
            "http://localhost:8080/api/business-resources",
            (businessResources) => {
                PageContent.innerHTML = BusinessResources(businessResources);
                console.log('FIRE');
    
            }
        );
        businessList();
    });
}

// function renderBusinessResource() {
//     PageContent.addEventListener('click', (event) => {
//         let keywordsCity = ['Cleveland', 'Akron', 'Toledo', 'Cincinnati'];
        
//         if (event.target.classList.contains("city")) {
//             let value = keywordsCity;
//             apiHelpers.getRequest(`http://localhost:8080/api/business-resources/`, (businessResource) => {
//                 console.log('BUS ID', busId);
//                 PageContent.innerHTML = BusinessResource(businessResource);
//                 });
//         }
//     });
// }
function businessList() {
const businessList = document.getElementById('businessList');
let accessBusinesses = [];

const loadBusinesses = async () => {
    try {
        const res = await fetch('http://localhost:8080/api/business-resources');
        accessBusinesses = await res.json();
        displayBusinesses(accessBusinesses);
    } catch (err) {
        console.error(err);
    }
};
}
const displayBusinesses = (businessResources) => {
    const htmlString = businessResources
        .map((businessResources) => {
            return `
            <li class="business">
                <h2>${businessResources.name}</h2>
                <p>URL: ${businessResources.businessUrl}</p>
                
            </li>
        `;
        })
        .join('');
    businessList.innerHTML = htmlString;
};

loadBusinesses();

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