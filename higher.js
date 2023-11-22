d3.json("http://localhost:3000/skrald").then(function(d){
    console.log(d.skrald[10]);
    console.log(d.skrald)

    console.log(d.skrald[10].nedbrydningstidværdi < d.skrald[11].nedbrydningstidværdi);


    
// Sample materials database
// lave det her om til et loop på sigt og få sat Number.parseInt den her ind i loopet og fjern det fra checkAnswer funktionen. 
//Billederne skal nok i et array?
const materials = [
    { name: d.skrald[1].navn, image: '/Spilbilleder/Cigaretskoder.png', nedbrydningstid: d.skrald[1].nedbrydningstid, nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi },
    { name:  d.skrald[2].navn, image: '/Spilbilleder/Tyggegummi.png', nedbrydningstid: d.skrald[2].nedbrydningstid, nedbrydningstidværdi: d.skrald[2].nedbrydningstidværdi },
    { name:  d.skrald[3].navn, image: '/Spilbilleder/ParpirPoser.png', nedbrydningstid: d.skrald[3].nedbrydningstid, nedbrydningstidværdi: d.skrald[3].nedbrydningstidværdi },
    { name:  d.skrald[4].navn, image: '/Spilbilleder/PlastikPoser.png', nedbrydningstid: d.skrald[4].nedbrydningstid, nedbrydningstidværdi: d.skrald[4].nedbrydningstidværdi },
    { name:  d.skrald[5].navn, image: '/Spilbilleder/Hundelort.png', nedbrydningstid: d.skrald[5].nedbrydningstid, nedbrydningstidværdi: d.skrald[5].nedbrydningstidværdi },
    { name:  d.skrald[6].navn, image: '/Spilbilleder/Aluminiumsdåser.png', nedbrydningstid: d.skrald[6].nedbrydningstid, nedbrydningstidværdi: d.skrald[6].nedbrydningstidværdi },
    { name:  d.skrald[7].navn, image: '/Spilbilleder/PlastikFlasker.png', nedbrydningstid: d.skrald[7].nedbrydningstid, nedbrydningstidværdi: d.skrald[7].nedbrydningstidværdi },
    { name:  d.skrald[8].navn, image: '/Spilbilleder/Glas.png', nedbrydningstid: d.skrald[8].nedbrydningstid, nedbrydningstidværdi: d.skrald[8].nedbrydningstidværdi },
    { name:  d.skrald[9].navn, image: '/Spilbilleder/Ballon.png', nedbrydningstid: d.skrald[9].nedbrydningstid, nedbrydningstidværdi: d.skrald[9].nedbrydningstidværdi },
    { name:  d.skrald[10].navn, image: '/Spilbilleder/Æbleskrog.png', nedbrydningstid: d.skrald[10].nedbrydningstid, nedbrydningstidværdi: d.skrald[10].nedbrydningstidværdi },
    { name:  d.skrald[11].navn, image: '/Spilbilleder/Fiskesnøre.png', nedbrydningstid: d.skrald[11].nedbrydningstid, nedbrydningstidværdi: d.skrald[11].nedbrydningstidværdi },
    { name:  d.skrald[12].navn, image: '/Spilbilleder/Plastkrus.png', nedbrydningstid: d.skrald[12].nedbrydningstid, nedbrydningstidværdi: d.skrald[12].nedbrydningstidværdi },
    { name:  d.skrald[13].navn, image: '/Spilbilleder/Ispind.png', nedbrydningstid: d.skrald[13].nedbrydningstid, nedbrydningstidværdi: d.skrald[13].nedbrydningstidværdi },
    { name:  d.skrald[14].navn, image: '/Spilbilleder/Papkrus.png', nedbrydningstid: d.skrald[14].nedbrydningstid, nedbrydningstidværdi: d.skrald[14].nedbrydningstidværdi },
    { name:  d.skrald[15].navn, image: '/Spilbilleder/Kapsel.png', nedbrydningstid: d.skrald[15].nedbrydningstid, nedbrydningstidværdi: d.skrald[15].nedbrydningstidværdi },
    { name:  d.skrald[16].navn, image: '/Spilbilleder/Appelsinskrald.png', nedbrydningstid: d.skrald[16].nedbrydningstid, nedbrydningstidværdi: d.skrald[16].nedbrydningstidværdi },
    { name:  d.skrald[17].navn, image: '/Spilbilleder/Bananskrald.png', nedbrydningstid: d.skrald[17].nedbrydningstid, nedbrydningstidværdi: d.skrald[17].nedbrydningstidværdi },
    { name:  d.skrald[18].navn, image: '/Spilbilleder/Mælkekarton.png', nedbrydningstid: d.skrald[18].nedbrydningstid, nedbrydningstidværdi: d.skrald[18].nedbrydningstidværdi },
    { name:  d.skrald[19].navn, image: '/Spilbilleder/NylonMaterialer.png', nedbrydningstid: d.skrald[19].nedbrydningstid, nedbrydningstidværdi: d.skrald[19].nedbrydningstidværdi },
    { name:  d.skrald[20].navn, image: '/Spilbilleder/Mobiltelefon.png', nedbrydningstid: d.skrald[20].nedbrydningstid, nedbrydningstidværdi: d.skrald[20].nedbrydningstidværdi },
    { name:  d.skrald[21].navn, image: '/Spilbilleder/Cykel.png', nedbrydningstid: d.skrald[21].nedbrydningstid, nedbrydningstidværdi: d.skrald[21].nedbrydningstidværdi },
    { name:  d.skrald[0].navn, image: '/Spilbilleder/møbler.png', nedbrydningstid: d.skrald[0].nedbrydningstid, nedbrydningstidværdi: d.skrald[0].nedbrydningstidværdi },
    { name:  d.skrald[22].navn, image: '/Spilbilleder/Tøj.png', nedbrydningstid: d.skrald[22].nedbrydningstid, nedbrydningstidværdi: d.skrald[22].nedbrydningstidværdi },
    
];

let leftMaterial, rightMaterial;
let score= 0

function getRandomMaterial() {
    return materials[Math.floor(Math.random() * materials.length)];
}

function setMaterials() {
    leftMaterial = getRandomMaterial();
    rightMaterial = getRandomMaterial();

    document.getElementById('leftImage').src = leftMaterial.image;
    document.getElementById('leftMaterial').innerText = leftMaterial.name;
    document.getElementById('leftnedbrydning').innerText = leftMaterial.nedbrydningstid;

    document.getElementById('rightImage').src = rightMaterial.image;
    document.getElementById('rightMaterial').innerText = rightMaterial.name;
    document.getElementById('rightnedbrydning').innerText = rightMaterial.nedbrydningstid;

    console.log(leftMaterial);
    console.log(rightMaterial);
}

function buttons() {
    document.getElementById('higher').onclick = function() {
        checkAnswer('higher');
    };

    document.getElementById('lower').onclick = function() {
        checkAnswer('lower');
    };
}



function checkAnswer(choice) {
    if ((choice === 'higher' && Number.parseInt(rightMaterial.nedbrydningstidværdi) > Number.parseInt(leftMaterial.nedbrydningstidværdi)) ||
        (choice === 'lower' && Number.parseInt(rightMaterial.nedbrydningstidværdi) < Number.parseInt(leftMaterial.nedbrydningstidværdi)) ||
        (choice === 'higher' && Number.parseInt(rightMaterial.nedbrydningstidværdi) == Number.parseInt(leftMaterial.nedbrydningstidværdi)) ||
        (choice === 'lower' && Number.parseInt(rightMaterial.nedbrydningstidværdi) == Number.parseInt(leftMaterial.nedbrydningstidværdi))) {
        // Correct answer
        // Move right material to the left
        score++;
        displayScore(score)
        console.log(score)
        
       // leftMaterial = rightMaterial;
        setMaterials();
    
    } else {
          // Incorrect answer
          alert('fucking dumme taber man');
          score=0
          // Reset the game by calling setMaterials again
          setMaterials();
      }
  }

  //viser score
  function displayScore(score) {
document.getElementById('score').innerText = `Score: ${score}`;
}

// Call setMaterials to initialize the game
setMaterials();

// Set up event handlers for buttons
buttons();
displayScore(score);
});

// d.skrald[10].navn fjern herfra
// kør både node main.js og liveserver i to terminaler

