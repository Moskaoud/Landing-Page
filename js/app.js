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
//get ul to append children li
let navList = document.getElementById("navbar__list");
//fragment that have li to append it on ul
let fragment = document.createDocumentFragment();
//get all section tags
let sectionList = document.querySelectorAll("section");
//lis item , anchor , dataNav, rect for section border
let li, a, dataNav,rect,id;

sectionList.forEach((section) => {
    //building a menu with craete <li><a>
    li = document.createElement("li");
    a = document.createElement("a");
    // Scroll to anchor ID using scrollTO event
    // Scroll to section on link click
    a.addEventListener('click', () => section.scrollIntoView({ 'behavior': 'smooth' }));

    dataNav = section.getAttribute("data-nav");
    id = section.getAttribute("id");
    li.setAttribute("id","li"+id);
    li.setAttribute("data-nav",dataNav);

    a.innerText= dataNav;
    li.appendChild(a);    
    fragment.appendChild(li);

    // Page Scroll
    var lastScrollTop = 0;
    document.addEventListener("scroll", () => {        
        var st = window.pageYOffset;        
        var bool = true;
        rect = section.getBoundingClientRect();
        if (st >= lastScrollTop) {// scroll down
            if (rect.top >= -120  && rect.bottom <= (window.innerHeight ||  document.documentElement.clientHeight))//sction in viewport
                {
                    section.classList.add("your-active-class");
                    bool = false;
                }
        } else // scroll up
          {
            if (rect.top >= -120  && rect.bottom <= (window.innerHeight ||  document.documentElement.clientHeight))//sction in viewport
            {
                section.classList.add("your-active-class");
                bool = false;
            }}                    
        if(bool)
            section.classList.remove("your-active-class");

        lastScrollTop = st <= 0 ? 0 : st;
    });
})
// Build menu 
navList.appendChild(fragment);
// Add class 'active' to section when near top of viewport
// Set sections as active on menu list item from getting active section class
document.addEventListener("scroll", () => {
    sectionList.forEach(section => {
        let liId=section.getAttribute("id")            
        let ele = document.getElementById("li"+liId);            
        ele.classList.remove("your-active-class")});

        sectionList.forEach(section => {    
            if(section.classList.contains("your-active-class")){
                let liId=section.getAttribute("id")
                let ele = document.getElementById("li"+liId);
                ele.classList.add("your-active-class");
            }

        });
    });
