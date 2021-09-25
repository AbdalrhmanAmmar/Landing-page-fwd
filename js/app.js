/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let navigation = document.querySelector('ul')
let sections = document.querySelectorAll('section')



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(buildingList => {
    let list = document.createElement('li')
    navigation.appendChild(list)
    
    list.innerHTML = `<a href="#${buildingList.getAttribute('id')}" class = "menu__link" >${buildingList.getAttribute('data-nav')}</a>`
});

// Add class 'active' to section when near top of viewport
let lists = document.querySelectorAll('li')











//smmothy scroll

document
    .querySelectorAll('.navbar__menu a[href^="#section"]')

    .forEach(function(scrollbehavior) {
        scrollbehavior.onclick = function(e) {
            e.preventDefault();
            const link = this.getAttribute('href');
            const Koordinaten= document.querySelector(link);
            const header = 102;
            const localpostion = Koordinaten.offsetTop;
            const position = localpostion - header;

            window.scrollTo({
                top:position,
                behavior: "smooth"
            });
        };
    });


// Scroll to anchor ID using scrollTO event



scescroll = () => {
    let x = sections.length
    for(let x = 0; x < sections.length; x++) {
        if(sections[x].getBoundingClientRect().top < 45 && sections[x].getBoundingClientRect().bottom > 0) {
            sections[x].classList.add("your-active-class"); 
        } else {
            sections[x].classList.remove("your-active-class"); 
        };
    };
};

document.addEventListener("scroll", scescroll); 


// Build menu 

// Scroll to section on link click

// Set sections as active


