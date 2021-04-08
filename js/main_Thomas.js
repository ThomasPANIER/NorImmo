   
//declare images
const images = [
    "img/home_design.jpg",
    "img/kitchen_design.jpg",
    "img/modern_home.jpg",
    "img/modern_inside.jpg",
    "img/old_home.jpg",

];
//declare descriptions
const descriptions = [
    "maison moderne style architect juin 2015",
    "cuisine moderne août 2015",
    "maison moderne très lumineuse janvier 2017",
    "aménagement intérieur moderne avril 2017",
    "remise en état maison ancienne septembre 2019",

];

var maxIndex = images.length - 1;

//retrieve image and description of the html document 
//récupérer image et description du document html
var imageContainer = document.getElementById("images");
var description = document.getElementById("descriptions");

//match image and description in index 
//faire correspondre image et description dans l'index
function setCurrentContent() {
    imageContainer.src = images[currentIndex];
    description.innerHTML = descriptions[currentIndex];
}

function setIndex() {
    currentIndex < maxIndex ? currentIndex +=1 : currentIndex = 0;
    setCurrentContent();
}

//select the first image and description, select the time interval (4s) 
//selectionner la première image et description, selectionner l'intervalle de temps(4s)
var currentIndex = 0;
    setCurrentContent();

var sliderTurn = setInterval(setIndex, 4000);

//left and right button function 
//fonction du boutton gauche et droit
function action(click = false) {
    clearInterval(sliderTurn);
    click === true ? (currentIndex < maxIndex ? currentIndex ++ : currentIndex = 0) : (currentIndex > 0 ? currentIndex -- : currentIndex = maxIndex);
    setCurrentContent();
    sliderTurn = setInterval(setIndex, 4000);
}