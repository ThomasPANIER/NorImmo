// Create function submit with HTML onclick
function submit(){
// Create let Main for take element in operation
  let roomsNumber = document.getElementById("bedrooms");
  let userRoom = roomsNumber.value;
  let surface = document.getElementById("surface");
  let userSurface = surface.value;
  let materials = document.getElementById("construct-material");
  let userMaterials = materials.value;
  let materialsPrice = {};
// Make a condition for let materialsPrice
    if (userMaterials === "parpaing") {
      materialsPrice = 2;
    }
    else if (userMaterials === "bois") {
      materialsPrice = 4;
    }
    else {
      materialsPrice = 6;
    }
// Operation to have Result
  let resultPrice = materialsPrice * ((userSurface*100)+(userRoom*100));
// Create let to have result in simulation HTML
  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerText = resultPrice + " €";
}




