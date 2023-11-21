d3.json("http://localhost:3000/skrald").then(function(d){
    console.log(d.skrald[10]);
    console.log(d.skrald)

    console.log(d.skrald[10].nedbrydningstidværdi < d.skrald[11].nedbrydningstidværdi);


    
// Sample materials database
const materials = [
    { name: d.skrald[1].navn, image: '/Spilbilleder/Cigaretskoder.png', nedbrydningstid: d.skrald[1].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[2].navn, image: '/Spilbilleder/Tyggegummi.png', nedbrydningstid: d.skrald[2].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[3].navn, image: '/Spilbilleder/ParpirPoser.png', nedbrydningstid: d.skrald[3].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[4].navn, image: '/Spilbilleder/PlastikPoser.png', nedbrydningstid: d.skrald[4].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[5].navn, image: '/Spilbilleder/Hundelort.png', nedbrydningstid: d.skrald[5].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[6].navn, image: '/Spilbilleder/Aluminiumsdåser.png', nedbrydningstid: d.skrald[6].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[7].navn, image: '/Spilbilleder/PlastikFlasker.png', nedbrydningstid: d.skrald[7].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[8].navn, image: '/Spilbilleder/Glas.png', nedbrydningstid: d.skrald[8].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[9].navn, image: '/Spilbilleder/Ballon.png', nedbrydningstid: d.skrald[9].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[10].navn, image: '/Spilbilleder/Æbleskrog.png', nedbrydningstid: d.skrald[10].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[11].navn, image: '/Spilbilleder/Fiskesnøre.png', nedbrydningstid: d.skrald[11].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[12].navn, image: '/Spilbilleder/Plastkrus.png', nedbrydningstid: d.skrald[12].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[13].navn, image: '/Spilbilleder/Ispind.png', nedbrydningstid: d.skrald[13].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[14].navn, image: '/Spilbilleder/Papkrus.png', nedbrydningstid: d.skrald[14].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[15].navn, image: '/Spilbilleder/Kapsel.png', nedbrydningstid: d.skrald[15].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[16].navn, image: '/Spilbilleder/Appelsinkrald.png', nedbrydningstid: d.skrald[16].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[17].navn, image: '/Spilbilleder/Bananskrald.png', nedbrydningstid: d.skrald[17].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[18].navn, image: '/Spilbilleder/Mælkekarton.png', nedbrydningstid: d.skrald[18].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[19].navn, image: '/Spilbilleder/NylonMaterialer.png', nedbrydningstid: d.skrald[19].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[20].navn, image: '/Spilbilleder/Mobiltelefon.png', nedbrydningstid: d.skrald[20].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[21].navn, image: '/Spilbilleder/Cykel.png', nedbrydningstid: d.skrald[21].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[0].navn, image: '/Spilbilleder/møbler.png', nedbrydningstid: d.skrald[0].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[22].navn, image: '/Spilbilleder/Tøj.png', nedbrydningstid: d.skrald[22].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    
];

let leftMaterial, rightMaterial;

function getRandomMaterial() {
    return materials[Math.floor(Math.random() * materials.length)];
}

function setMaterials() {
    leftMaterial = getRandomMaterial();
    rightMaterial = getRandomMaterial();

    document.getElementById('leftImage').src = leftMaterial.image;
    document.getElementById('leftMaterial').innerHTML = leftMaterial.name;

    document.getElementById('rightImage').src = rightMaterial.image;
    document.getElementById('rightMaterial').innerHTML = rightMaterial.name;
}

function checkAnswer(choice) {
    if ((choice === 'higher' && rightMaterial.nedbrydningstidværdi > leftMaterial.nedbrydningstidværdi) ||
        (choice === 'lower' && rightMaterial.nedbrydningstidværdi < leftMaterial.nedbrydningstidværdi)) {
        // Correct answer
        // Move right material to the left
        leftMaterial = rightMaterial;
        setMaterials();
    } else {
          // Incorrect answer
          alert('You are a loser!');
          // Reset the game by calling setMaterials again
          setMaterials();
      }
  }

// Call setMaterials to initialize the game
setMaterials();

    
});

// d.skrald[10].navn fjern herfra
// kør både node main.js og liveserver i to terminaler

