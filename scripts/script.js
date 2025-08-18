// Let's cache the tagline element and modify its text content 
let signInEl = document.getElementById("tagLine");
console.log(signInEl.textContent);
// Let's change the text contents
signInEl.textContent = "Personalized Playdate Finder for your Puppy"
console.log(signInEl.textContent);

//Now, let's cache the icon images from the features section and change their size

// let featureImgs = document.querySelectorAll("section.features > img");
// console.log(featureImgs);

// Let's create a new hero section and new elements and add them to the Hero section
// Let's create a new div to be included in the section
let div1 = document.createElement("div");
console.log(div1)

// First, let's create the section
let section = document.createElement("section");
section.className = "hero"
console.log(section)

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
img.src = "./images/puppyWalk_hvua.svg";
img.width = "400px"

console.log(img)

// let's add the new elements to div 1
div1.append(section, h1, p, img);
console.log(div1)

// Let's create another div for the rest of the following contents
let div2 = document.createElement("div");
div2.className = "callToAction"
console.log(div2)


