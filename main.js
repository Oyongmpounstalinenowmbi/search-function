// Step 1: Create an array of imageobjects
const IMAGES = [
{name: "drink", url: "ASSETS/IMAGES/drink.jpg" },
{name: "car", url: "ASSETS/IMAGES/car.png" },
{name: "food", url: "ASSETS/IMAGES/food.jpg" },
{name: "man", url: "ASSETS/IMAGES/man.jpg" },
{name: "woman", url: "ASSETS/IMAGES/woman.jpg" }

];

// Step 2: Get HMTL Elements
const searchinput = document.getElementById("searchinput");
const searchbtn = document.getElementById("searchbtn");
const result = document.getElementById("result");

// Step 3: Add Click event to button 
searchbtn.addEventListener("click", searchImage);

// Step 4: Create Search Function
function searchImage(){
    const keyword = searchinput.value.toLowerCase();
    result.innerHTML = ""; //Clear previous result

// Step 5: Loop through array to find match
let foundImage = null;
for (let i = 0; i < IMAGES.length; i++){
    if (IMAGES[i].name === keyword){
        foundImage = IMAGES[i];
    }
}

if (foundImage){
// Display only the url as a clickable link
result.innerHTML = 
            "<p> Image found: </p>" +
            "<a href = 'image.html?img="  + foundImage.url + "'>" +
            foundImage.url +  
            "</a>";     
} else {
    result.innerHTML = "<p> Image not found </p>";
}
}
