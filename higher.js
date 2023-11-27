d3.json("http://localhost:3000/skrald").then(function (d) {
  let rigtiglyd = new Audio("lyde/Correct Answer Sound Effect.mp3");
  let forkertlyd = new Audio("lyde/Spongebob Stinky Sound Effect.mp3");

  // Her laves vores array af objekter
  const materials = [
    {
      name: d.skrald[0].navn,
      image: "/Spilbilleder/Cigaretskoder.png",
      nedbrydningstid: d.skrald[0].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[0].nedbrydningstidværdi,
      beskrivelse: d.skrald[0].beskrivelse,
    },
    {
      name: d.skrald[4].navn,
      image: "/Spilbilleder/Tyggegummi.png",
      nedbrydningstid: d.skrald[4].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[4].nedbrydningstidværdi,
      beskrivelse: d.skrald[4].beskrivelse,
    },
    {
      name: d.skrald[5].navn,
      image: "/Spilbilleder/ParpirPoser.png",
      nedbrydningstid: d.skrald[5].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[5].nedbrydningstidværdi,
      beskrivelse: d.skrald[5].beskrivelse,
    },
    {
      name: d.skrald[6].navn,
      image: "/Spilbilleder/PlastikPoser.png",
      nedbrydningstid: d.skrald[6].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[6].nedbrydningstidværdi,
      beskrivelse: d.skrald[6].beskrivelse,
    },
    {
      name: d.skrald[7].navn,
      image: "/Spilbilleder/Hundelort.png",
      nedbrydningstid: d.skrald[7].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[7].nedbrydningstidværdi,
      beskrivelse: d.skrald[7].beskrivelse,
    },
    {
      name: d.skrald[8].navn,
      image: "/Spilbilleder/Aluminiumsdåser.png",
      nedbrydningstid: d.skrald[8].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[8].nedbrydningstidværdi,
      beskrivelse: d.skrald[8].beskrivelse,
    },
    {
      name: d.skrald[9].navn,
      image: "/Spilbilleder/PlastikFlasker.png",
      nedbrydningstid: d.skrald[9].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[9].nedbrydningstidværdi,
      beskrivelse: d.skrald[9].beskrivelse,
    },
    {
      name: d.skrald[10].navn,
      image: "/Spilbilleder/Glas.png",
      nedbrydningstid: d.skrald[10].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[10].nedbrydningstidværdi,
      beskrivelse: d.skrald[10].beskrivelse,
    },
    {
      name: d.skrald[11].navn,
      image: "/Spilbilleder/Ballon.png",
      nedbrydningstid: d.skrald[11].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[11].nedbrydningstidværdi,
      beskrivelse: d.skrald[11].beskrivelse,
    },
    {
      name: d.skrald[12].navn,
      image: "/Spilbilleder/Æbleskrog.png",
      nedbrydningstid: d.skrald[12].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[12].nedbrydningstidværdi,
      beskrivelse: d.skrald[12].beskrivelse,
    },
    {
      name: d.skrald[13].navn,
      image: "/Spilbilleder/Fiskesnøre.png",
      nedbrydningstid: d.skrald[13].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[13].nedbrydningstidværdi,
      beskrivelse: d.skrald[13].beskrivelse,
    },
    {
      name: d.skrald[14].navn,
      image: "/Spilbilleder/Plastkrus.png",
      nedbrydningstid: d.skrald[14].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[14].nedbrydningstidværdi,
      beskrivelse: d.skrald[14].beskrivelse,
    },
    {
      name: d.skrald[15].navn,
      image: "/Spilbilleder/Ispind.png",
      nedbrydningstid: d.skrald[15].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[15].nedbrydningstidværdi,
      beskrivelse: d.skrald[15].beskrivelse,
    },
    {
      name: d.skrald[16].navn,
      image: "/Spilbilleder/Papkrus.png",
      nedbrydningstid: d.skrald[16].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[16].nedbrydningstidværdi,
      beskrivelse: d.skrald[16].beskrivelse,
    },
    {
      name: d.skrald[17].navn,
      image: "/Spilbilleder/Kapsel.png",
      nedbrydningstid: d.skrald[17].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[17].nedbrydningstidværdi,
      beskrivelse: d.skrald[17].beskrivelse,
    },
    {
      name: d.skrald[18].navn,
      image: "/Spilbilleder/Appelsinskrald.png",
      nedbrydningstid: d.skrald[18].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[18].nedbrydningstidværdi,
      beskrivelse: d.skrald[18].beskrivelse,
    },
    {
      name: d.skrald[1].navn,
      image: "/Spilbilleder/Bananskrald.png",
      nedbrydningstid: d.skrald[1].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi,
      beskrivelse: d.skrald[1].beskrivelse,
    },
    {
      name: d.skrald[2].navn,
      image: "/Spilbilleder/Mælkekarton.png",
      nedbrydningstid: d.skrald[2].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[2].nedbrydningstidværdi,
      beskrivelse: d.skrald[2].beskrivelse,
    },
    {
      name: d.skrald[3].navn,
      image: "/Spilbilleder/NylonMaterialer.png",
      nedbrydningstid: d.skrald[3].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[3].nedbrydningstidværdi,
      beskrivelse: d.skrald[3].beskrivelse,
    },
    {
      name: d.skrald[19].navn,
      image: "/Spilbilleder/Mobiltelefon.png",
      nedbrydningstid: d.skrald[19].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[19].nedbrydningstidværdi,
      beskrivelse: d.skrald[19].beskrivelse,
    },
    {
      name: d.skrald[21].navn,
      image: "/Spilbilleder/Cykel.png",
      nedbrydningstid: d.skrald[21].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[21].nedbrydningstidværdi,
      beskrivelse: d.skrald[21].beskrivelse,
    },
    {
      name: d.skrald[20].navn,
      image: "/Spilbilleder/møbler.png",
      nedbrydningstid: d.skrald[20].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[20].nedbrydningstidværdi,
      beskrivelse: d.skrald[20].beskrivelse,
    },
    {
      name: d.skrald[22].navn,
      image: "/Spilbilleder/Tøj.png",
      nedbrydningstid: d.skrald[22].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[22].nedbrydningstidværdi,
      beskrivelse: d.skrald[22].beskrivelse,
    },
  ];

  //Der dannes to variable som venstre og højre materiale og scoren sættes til 0.
  let leftMaterial, rightMaterial;
  let score = 0;

  //Funktion der tager et tilfældigt objekt i vores array.
  function getRandomMaterial() {
    return materials[Math.floor(Math.random() * materials.length)];
  }
  //Funktion der indsætter det tilfældige venstre og højre materiale.
  function setMaterials() {
    leftMaterial = getRandomMaterial();
    rightMaterial = getRandomMaterial();

    document.getElementById("leftImage").src = leftMaterial.image;
    document.getElementById("leftMaterial").innerHTML = leftMaterial.name;
    document.getElementById("har").innerHTML = "har";
    document.getElementById("leftnedbrydning").innerHTML =
      leftMaterial.nedbrydningstid + "s";
    document.getElementById("leftnedbrydningtext").innerHTML =
      "nedbrydningstid";
    document.getElementById("beskrivelse").innerText =
      "Fakta: " + leftMaterial.beskrivelse;

    document.getElementById("rightImage").src = rightMaterial.image;
    document.getElementById("rightMaterial").innerHTML = rightMaterial.name;
    document.getElementById("harEn").innerHTML = "har en";
    document.getElementById("rightnedbrydning").innerHTML = "nedbrydningstid";
  }
  //Knapperne til "higher" eller "lower".
  function buttons() {
    document.getElementById("higher").onclick = function () {
      checkAnswer("higher");
    };

    document.getElementById("lower").onclick = function () {
      checkAnswer("lower");
    };
  }
  //Funktion, der tjekker om svaret er korrekt eller forkert
  function checkAnswer(choice) {
    if (
      (choice === "higher" &&
        Number.parseInt(rightMaterial.nedbrydningstidværdi) >
          Number.parseInt(leftMaterial.nedbrydningstidværdi)) ||
      (choice === "lower" &&
        Number.parseInt(rightMaterial.nedbrydningstidværdi) <
          Number.parseInt(leftMaterial.nedbrydningstidværdi)) ||
      (choice === "higher" &&
        Number.parseInt(rightMaterial.nedbrydningstidværdi) ==
          Number.parseInt(leftMaterial.nedbrydningstidværdi)) ||
      (choice === "lower" &&
        Number.parseInt(rightMaterial.nedbrydningstidværdi) ==
          Number.parseInt(leftMaterial.nedbrydningstidværdi))
    ) {
      //Udfaldet ved korrekt svar
      score++;
      displayScore(score);
      console.log(score);
      rigtiglyd.play();

      //Rykker højre materiale til venstre og vælger et nyt tilfældigt materiale til højre.
      leftMaterial = rightMaterial;
      rightMaterial = getRandomMaterial();

      //De nye materialer opdateres
      document.getElementById("leftImage").src = leftMaterial.image;
      document.getElementById("leftMaterial").innerHTML = leftMaterial.name;
      document.getElementById("har").innerHTML = "har";
      document.getElementById("leftnedbrydning").innerHTML =
        leftMaterial.nedbrydningstid + "s";
      document.getElementById("leftnedbrydningtext").innerHTML =
        "nedbrydningstid";
      document.getElementById("beskrivelse").innerText =
        "Fakta:" + leftMaterial.beskrivelse;

      document.getElementById("rightImage").src = rightMaterial.image;
      document.getElementById("rightMaterial").innerHTML = rightMaterial.name;
      document.getElementById("harEn").innerHTML = "har en";
      document.getElementById("rightnedbrydning").innerHTML = "nedbrydingstid";
    }
    //Udfaldet ved forkert svar
    else {
      forkertlyd.play();
      alert("Desværre, prøv igen");
      //Score sættes til 0 og materialerne sættes på ny.
      score = 0;
      setMaterials();
    }
  }

  //viser score
  function displayScore(score) {
    document.getElementById("score").innerText = `Score: ${score}`;
  }

  //Starter spillet
  setMaterials();

  //Event handler og visning af score
  buttons();
  displayScore(score);
});
