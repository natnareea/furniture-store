// // simple change model
// document.getElementById("change-colour").addEventListener("click", function() {
//     document.getElementById("model").src = "/models/product1_1.glb";
// });

// // example with showing content
// document.getElementById("change-colour").addEventListener("click", function() {
//     document.getElementById("model-info").style.display = "block";
// });

// // example with multiple models
// var myModels = ["/models/product1.glb", "/models/product1_1.glb", ]
// var counter = 0;
// document.getElementById("change-colour").addEventListener("click", function() {
//     counter++;
//     if (counter==3) { 
//         counter = 0;
//     }
//     document.getElementById("model").src = myModels[counter];
// });

const colorModels = {
    'peach': ['./models/product1.glb'],
    'cream': ['./models/product1_1.glb'],
    'light-beige': ['./models/product2.glb'],
    'gray': ['./models/product2_2.glb'],
    'brown': ['./models/product3.glb'],
    'beige': ['./models/product3_2.glb']
    // Add more colors and their associated model files as needed
};

function changeColor(viewerId) {
    const colorDropdown = document.getElementById(`colorDropdown${viewerId.slice(-1)}`);
    const selectedColor = colorDropdown.value;
    const modelViewer = document.getElementById(viewerId);

    // Get the current model index for the selected color and viewer
    let currentIndex = modelViewer.dataset.currentIndex || 0;

    // Get the array of model files for the selected color
    const modelsForColor = colorModels[selectedColor];

    // Update the src attribute with the next model file
    modelViewer.src = modelsForColor[currentIndex];

    // Increment the model index, or reset it to 0 if it exceeds the array length
    currentIndex = (currentIndex + 1) % modelsForColor.length;

    // Store the updated index in the dataset for future reference
    modelViewer.dataset.currentIndex = currentIndex;
}