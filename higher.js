d3.json("http://localhost:3000/skrald").then(function(d){
    console.log(d.skrald[10]);

    console.log(d.skrald[10].nedbrydningstidværdi < d.skrald[11].nedbrydningstidværdi);


    
// Sample materials database
const materials = [
    { name: d.skrald[1].name, image: '/Spilbilleder/Cigaretskoder.png', breakdownTime: 10 },
    { name: 'Material B', image: 'billeder/material_b.jpg', breakdownTime: 15 },
    // Add more materials as needed
];

let leftMaterial, rightMaterial;

function getRandomMaterial() {
    return materials[Math.floor(Math.random() * materials.length)];
}

function setMaterials() {
    leftMaterial = getRandomMaterial();
    rightMaterial = getRandomMaterial();

    document.getElementById('leftImage').src = leftMaterial.image;
    document.getElementById('leftMaterial').innerText = leftMaterial.name;

    document.getElementById('rightImage').src = rightMaterial.image;
    document.getElementById('rightMaterial').innerText = rightMaterial.name;
}

function checkAnswer(choice) {
    if ((choice === 'higher' && rightMaterial.breakdownTime > leftMaterial.breakdownTime) ||
        (choice === 'lower' && rightMaterial.breakdownTime < leftMaterial.breakdownTime)) {
        // Correct answer
        // Move right material to the left
        leftMaterial = rightMaterial;
        setMaterials();
    } else {
        // Incorrect answer
        // Handle accordingly (maybe display a message or reset the game)
    }
}

// Call setMaterials to initialize the game
setMaterials();

    
});

// d.skrald[10].navn fjern herfra
// kør både node main.js og liveserver i to terminaler

