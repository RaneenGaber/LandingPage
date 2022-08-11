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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


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
const myNav = document.getElementById('navbar__list');
const mySections = document.querySelectorAll("section");
console.log(mySections.length);
  // loop through each section
 for (let i = 0; i < mySections.length; i++) {
   const myList = document.createElement("li");
   const myAnchor = document.createElement("a");
   myAnchor.className = "menu__link";
   myAnchor.setAttribute("href","#section" + (i+1));

   myAnchor.textContent = "section" + (i + 1);
   myList.appendChild(myAnchor);
   myNav.appendChild(myList);
 }


// Add class 'active' to section when near top of viewport

// on window scroll
window.addEventListener('scroll', (e) => {


  // loop through each section
  mySections.forEach( section => {

    // get px distance from top
    const topDistance = section.getBoundingClientRect().top;

    // if the distance to the top is between 0-100px
    if (topDistance > 0 && topDistance < 100) {
      section.classList.add("your-active-class");

    // otherwise, remove the class
    } else {
      section.classList.remove("your-active-class");
    }
  });
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Set sections as active


