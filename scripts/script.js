// Let's cache the tagline element and modify its text content 
let signInEl = document.getElementById("tagLine");
console.log(signInEl);
// Let's change the text contents
signInEl.textContent = "Personalized Playdate Finder for your Puppy"
console.log(signInEl.textContent);

//======================================================================================================

// Let's create a new hero section and new elements and add them to the Hero section

// First, let's create the section
let section = document.createElement("section");
section.className = "hero"
console.log(section)

// Let's create a new div to be included in the section
let div1 = document.createElement("div");
console.log(div1)

//let's create the first element of the section
let h1 = document.createElement("h1");
h1.textContent = "Welcome to Wuf Wuf";
h1.id = "heroH1";
console.log(h1);

//let's create the second element of the section
let p = document.createElement("p");
p.id = "heroTxt";
p.textContent = "Your puppies need appropriate daily stimulation and social interaction. At Wuf Wuf, we pair your puppies based on their breed, personality, age and diet. We welcome puppies that are nuttered as well as those that aren't. All puppies are welcome at Wuf Wuf!";
console.log(p);

// let's add an image to div1 and then add that to the section
let img = document.createElement("img");
img.id = "heroImg";
img.alt = "brand image";
let imgLink = "../images/puppyWalk_hvua.svg"
img.src = imgLink;
img.width = 400;

console.log(img)

// let's add h1 to section
section.append(h1);

// let's add the new elements to div 1
div1.append(p, img);
console.log(div1)

// now append div1 to section as child
section.append(div1);
console.log(section)

//======================================================================================================

// Let's create another div for the rest of the following contents
let div2 = document.createElement("div");
div2.className = "callToAction"
console.log(div2)

// Let's create new elements to be included in div2
let h3 = document.createElement('h3');
h3.textContent="Give your puppy the gift of companionship and happiness!";
console.log(h3);

let button = document.createElement('button');
button.type = "button";
button.className = "btn btn-info";

let link = document.createElement("a");
link.href = "./pages/signUp.html";
link.textContent = "Register Today";

button.appendChild(link);
div2.appendChild(button)
console.log(div2);

// now append the new elements to div2
div2.append(h3,button)
console.log(div2)

// Now append div2 to section
section.append(div2);
console.log(section);
//======================================================================================================

// Now, let's add the section to the HTML before the features section
const featuresSection = document.querySelector("section.features")
console.log(featuresSection);
let mainBody = document.getElementById("mainBody");
if(mainBody && featuresSection){
    mainBody.insertBefore(section, featuresSection);
}

console.log(mainBody)

//======================================================================================================


//Iterate over a collection of elements to accomplish some task
// Let's modify the font type and font size of the paragraph elements in the footer section
footerEl = document.querySelectorAll(".footer div p");
footerEl. forEach (p => {
    p.style.fontFamily = "Inter";
    p.style.fontSize = "20px"
}) 

console.log(footerEl);

// Use the parent-child-sibling relatinship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling)
// Let's update the content of the last phrase of the features section
let featuresLastDivs = document.querySelectorAll(".card-footer");
featuresLastDivs.forEach(p => {
    p.textContent = "Here to please!"
})

//======================================================================================================

// Event-based JS Validations: 
// Included buttons, dropdown items in the sign up. e.g. vaccinated or not? If the puppy is not vaccinated, pop up an alert using event listener
let vaccinationForm = document.getElementById("vaccinationForm");


if (vaccinationForm) {
    vaccinationForm.addEventListener("change", handleVaccinationCheck);
}

function handleVaccinationCheck (event) {
    if(vaccinationForm.value === "No") {
        event.preventDefault();
        alert("Sorry, you can not proceed without vaccination");
    }
}


//======================================================================================================

// Use at least two BOM properties or methods
// Let's use some BOM methods to assign alerts

const FindPuppyDate = document.getElementById("FindPuppyDate");

if(FindPuppyDate) {
    FindPuppyDate.addEventListener("click", function() {
        alert("Coming soon...stay tuned!");
});
};
// another BOM property to alert users about display
window.addEventListener("load", () => {
    if(window.innerWidth < 500) {
        alert("Some features may look different at your screen size.");
    }
});

//======================================================================================================
// Use Document Fragment or cloneNode method to create templated content
// Let's use a document fragment to add some content to the PuppyDate page
let matches = document.getElementById("matches");
if (matches) {
let docFrag = document.createDocumentFragment();

let h1Matches = document.createElement('h1');
h1Matches.textContent = "Welcome to the matches page";

let imgMatches = document.createElement("img");

imgMatches.src = "../images/puppyWalk_hvua.svg";

let pMatches = document.createElement("p");
pMatches.textContent = "In this page, you will receive personalized matches for your puppy playdate based on the personality, breed, age and other personal features of your puppy. The page is currently under construction. Stay tuned and stay in touch!"
pMatches.style.fontSize= "30px";
pMatches.style.color= "blue"

docFrag.append(h1Matches, imgMatches, pMatches);

matches.appendChild(docFrag);

console.log(matches);
};
//======================================================================================================
// Add responsiveness to all links and buttons
const links = document.querySelectorAll("a");
console.log(links)

links.forEach(link => {
    link.addEventListener("click", (event) => {
        links.forEach(lnk => lnk.classList.remove("active"));

        event.target.classList.add("active");
    });
})