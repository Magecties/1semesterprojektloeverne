d3.json("http://localhost:3000/skrald").then(function(d){
    console.log(d.skrald[10]);
    console.log(d.skrald)

    console.log(d.skrald[10].nedbrydningstidværdi < d.skrald[11].nedbrydningstidværdi);


    
// Sample materials database
const materials = [
    { name: d.skrald[1].name, image: '/Spilbilleder/Cigaretskoder.png', nedbrydningstid: d.skrald[1].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[2].name image: '/Spilbilleder/Tyggegummi.png', nedbrydningstid: d.skrald[2].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[3].name image: '/Spilbilleder/ParpirPoser.png', nedbrydningstid: d.skrald[3].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[4].name image: '/Spilbilleder/PlastikPoser.png', nedbrydningstid: d.skrald[4].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[5].name image: '/Spilbilleder/Hundelort.png', nedbrydningstid: d.skrald[5].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[6].name image: '/Spilbilleder/Aluminiumsdåser.png', nedbrydningstid: d.skrald[6].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[7].name image: '/Spilbilleder/PlastikFlasker.png', nedbrydningstid: d.skrald[7].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[8].name image: '/Spilbilleder/Glas.png', nedbrydningstid: d.skrald[8].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[9].name image: '/Spilbilleder/Ballon.png', nedbrydningstid: d.skrald[9].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[10].name image: '/Spilbilleder/Æbleskrog.png', nedbrydningstid: d.skrald[10].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[11].name image: '/Spilbilleder/Fiskesnøre.png', nedbrydningstid: d.skrald[11].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[12].name image: '/Spilbilleder/Plastkrus.png', nedbrydningstid: d.skrald[12].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[13].name image: '/Spilbilleder/Ispind.png', nedbrydningstid: d.skrald[13].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[14].name image: '/Spilbilleder/Papkrus.png', nedbrydningstid: d.skrald[14].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[15].name image: '/Spilbilleder/Kapsel.png', nedbrydningstid: d.skrald[15].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[16].name image: '/Spilbilleder/Appelsinkrald.png', nedbrydningstid: d.skrald[16].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[17].name image: '/Spilbilleder/Bananskrald.png', nedbrydningstid: d.skrald[17].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[18].name image: '/Spilbilleder/Mælkekarton.png', nedbrydningstid: d.skrald[18].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[19].name image: '/Spilbilleder/NylonMaterialer.png', nedbrydningstid: d.skrald[19].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[20].name image: '/Spilbilleder/Mobiltelefon.png', nedbrydningstid: d.skrald[20].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[21].name image: '/Spilbilleder/Cykel.png', nedbrydningstid: d.skrald[21].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[0].name image: '/Spilbilleder/møbler.png', nedbrydningstid: d.skrald[0].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[22].name image: '/Spilbilleder/Tøj.png', nedbrydningstid: d.skrald[22].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    

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

