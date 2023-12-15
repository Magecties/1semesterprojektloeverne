d3.json("https://projektspillet-loverne.onrender.com/skrald").then(function (
  d
) {
  // Lyde til svar på spil
  let rigtiglyd = new Audio("lyde/Correct Answer Sound Effect.mp3");
  let forkertlyd = new Audio("lyde/Spongebob Stinky Sound Effect.mp3");

  // Her laves vores array af objekter som sætter billeder sammen med vores database
  const materials = [
    {
      name: d.skrald[0].navn,
      image: "/Spilbilleder/Cigaretskoder.png",
      nedbrydningstid: d.skrald[0].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[0].nedbrydningstidværdi,
      beskrivelse: d.skrald[0].beskrivelse,
    },
    {
      name: d.skrald[3].navn,
      image: "/Spilbilleder/Tyggegummi.png",
      nedbrydningstid: d.skrald[3].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[3].nedbrydningstidværdi,
      beskrivelse: d.skrald[3].beskrivelse,
    },
    {
      name: d.skrald[4].navn,
      image: "/Spilbilleder/ParpirPoser.png",
      nedbrydningstid: d.skrald[4].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[4].nedbrydningstidværdi,
      beskrivelse: d.skrald[4].beskrivelse,
    },
    {
      name: d.skrald[5].navn,
      image: "/Spilbilleder/PlastikPoser.png",
      nedbrydningstid: d.skrald[5].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[5].nedbrydningstidværdi,
      beskrivelse: d.skrald[5].beskrivelse,
    },
    {
      name: d.skrald[19].navn,
      image: "/Spilbilleder/Hundelort.png",
      nedbrydningstid: d.skrald[19].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[19].nedbrydningstidværdi,
      beskrivelse: d.skrald[19].beskrivelse,
    },
    {
      name: d.skrald[13].navn,
      image: "/Spilbilleder/Aluminiumsdåser.png",
      nedbrydningstid: d.skrald[13].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[13].nedbrydningstidværdi,
      beskrivelse: d.skrald[13].beskrivelse,
    },
    {
      name: d.skrald[6].navn,
      image: "/Spilbilleder/PlastikFlasker.png",
      nedbrydningstid: d.skrald[6].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[6].nedbrydningstidværdi,
      beskrivelse: d.skrald[6].beskrivelse,
    },
    {
      name: d.skrald[20].navn,
      image: "/Spilbilleder/Glas.png",
      nedbrydningstid: d.skrald[20].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[20].nedbrydningstidværdi,
      beskrivelse: d.skrald[20].beskrivelse,
    },
    {
      name: d.skrald[14].navn,
      image: "/Spilbilleder/Ballon.png",
      nedbrydningstid: d.skrald[14].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[14].nedbrydningstidværdi,
      beskrivelse: d.skrald[14].beskrivelse,
    },
    {
      name: d.skrald[15].navn,
      image: "/Spilbilleder/Æbleskrog.png",
      nedbrydningstid: d.skrald[15].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[15].nedbrydningstidværdi,
      beskrivelse: d.skrald[15].beskrivelse,
    },
    {
      name: d.skrald[7].navn,
      image: "/Spilbilleder/Fiskesnøre.png",
      nedbrydningstid: d.skrald[7].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[7].nedbrydningstidværdi,
      beskrivelse: d.skrald[7].beskrivelse,
    },
    {
      name: d.skrald[8].navn,
      image: "/Spilbilleder/Plastkrus.png",
      nedbrydningstid: d.skrald[8].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[8].nedbrydningstidværdi,
      beskrivelse: d.skrald[8].beskrivelse,
    },
    {
      name: d.skrald[18].navn,
      image: "/Spilbilleder/Ispind.png",
      nedbrydningstid: d.skrald[18].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[18].nedbrydningstidværdi,
      beskrivelse: d.skrald[18].beskrivelse,
    },
    {
      name: d.skrald[9].navn,
      image: "/Spilbilleder/Papkrus.png",
      nedbrydningstid: d.skrald[9].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[9].nedbrydningstidværdi,
      beskrivelse: d.skrald[9].beskrivelse,
    },
    {
      name: d.skrald[10].navn,
      image: "/Spilbilleder/Kapsel.png",
      nedbrydningstid: d.skrald[10].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[10].nedbrydningstidværdi,
      beskrivelse: d.skrald[10].beskrivelse,
    },
    {
      name: d.skrald[16].navn,
      image: "/Spilbilleder/Appelsinskrald.png",
      nedbrydningstid: d.skrald[16].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[16].nedbrydningstidværdi,
      beskrivelse: d.skrald[16].beskrivelse,
    },
    {
      name: d.skrald[17].navn,
      image: "/Spilbilleder/Bananskrald.png",
      nedbrydningstid: d.skrald[17].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[17].nedbrydningstidværdi,
      beskrivelse: d.skrald[17].beskrivelse,
    },
    {
      name: d.skrald[1].navn,
      image: "/Spilbilleder/Mælkekarton.png",
      nedbrydningstid: d.skrald[1].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[1].nedbrydningstidværdi,
      beskrivelse: d.skrald[1].beskrivelse,
    },
    {
      name: d.skrald[2].navn,
      image: "/Spilbilleder/NylonMaterialer.png",
      nedbrydningstid: d.skrald[2].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[2].nedbrydningstidværdi,
      beskrivelse: d.skrald[2].beskrivelse,
    },
    {
      name: d.skrald[11].navn,
      image: "/Spilbilleder/Mobiltelefon.png",
      nedbrydningstid: d.skrald[11].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[11].nedbrydningstidværdi,
      beskrivelse: d.skrald[11].beskrivelse,
    },
    {
      name: d.skrald[22].navn,
      image: "/Spilbilleder/Cykel.png",
      nedbrydningstid: d.skrald[22].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[22].nedbrydningstidværdi,
      beskrivelse: d.skrald[22].beskrivelse,
    },
    {
      name: d.skrald[12].navn,
      image: "/Spilbilleder/Møbler.png",
      nedbrydningstid: d.skrald[12].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[12].nedbrydningstidværdi,
      beskrivelse: d.skrald[12].beskrivelse,
    },
    {
      name: d.skrald[21].navn,
      image: "/Spilbilleder/Tøj.png",
      nedbrydningstid: d.skrald[21].nedbrydningstid,
      nedbrydningstidværdi: d.skrald[21].nedbrydningstidværdi,
      beskrivelse: d.skrald[21].beskrivelse,
    },
  ];

  // Tomt array til at lagre billederne
  const preloadedImages = [];

  // Funktion for at præindlæse billederne (så animationen bliver mere smooth)
  function preloadImages() {
    materials.forEach((material) => {
      const image = new Image();
      image.src = material.image;
      preloadedImages.push(image);
    });
  }

  // Her kaldes ovenstående funktion
  preloadImages();

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
    do {
      rightMaterial = getRandomMaterial();
    } while (rightMaterial === leftMaterial);

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
  // VS boks opdatering når man svarer rigtigt
  function updateTextOnCorrectAnswer() {
    let vsTextElement = document.querySelector(".vsText");
    let vsButton = document.querySelector(".vsButton");

    if (vsTextElement && vsButton) {
      // Gem original text og style
      let originalText = vsTextElement.innerHTML;
      let originalStyle = vsButton.style.background;

      // Sæt checktegn og ændre farven
      vsTextElement.innerHTML = "&#10004;";
      vsButton.style.background = "green";

      // Tilbage til original efter kort delay
      setTimeout(function () {
        vsTextElement.innerHTML = originalText;
        vsButton.style.background = originalStyle;
      }, 1000);
    } else {
      console.error("Element with class vsText not found");
    }
  }
  // VS boks opdatering ved forkert svar
  function updateTextOnWrongAnswer() {
    let vsTextElement = document.querySelector(".vsText");
    let vsButton = document.querySelector(".vsButton");

    if (vsTextElement) {
      // Gem original text og style
      let originalText = vsTextElement.innerHTML;
      let originalStyle = vsButton.style.background;

      // Sæt checktegn og ændre farven
      vsTextElement.innerHTML = "&#10006;";
      vsButton.style.background = "red";

      // tilbage til original efter kort delay
      setTimeout(function () {
        vsTextElement.innerHTML = originalText;
        vsButton.style.background = originalStyle;
      }, 1000);
    } else {
      console.error("Element with class vsText not found");
    }
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
      document
        .getElementById("leftImage")
        .classList.add("image-transition", "move-left");
      document
        .getElementById("rightImage")
        .classList.add("image-transition", "move-left");
      updateTextOnCorrectAnswer();
      setTimeout(() => {
        // Remove the transition classes after the animation completes
        document.getElementById("leftImage").classList.remove("move-left");
        document.getElementById("rightImage").classList.remove("move-left");

        score++;
        displayScore(score);
        displayScoreModal(score);
        console.log(score);
        rigtiglyd.play();

        //Rykker højre materiale til venstre og vælger et nyt tilfældigt materiale til højre.
        leftMaterial = rightMaterial;
        rightMaterial = getRandomMaterial(rightMaterial !== leftMaterial);

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
        document.getElementById("rightnedbrydning").innerHTML =
          "nedbrydingstid";
      }, 500);
    }
    //Udfaldet ved forkert svar
    else {
      // billeder til modalet der kommer alt efter hvor høj en score man har, her ændrer vi bare src til at være noget andet alt efter score.
      // vi starter med at lave en const der altid henter vores image med id under og så ændret vi den i vores if sætninger
      // vi gør det samme på teksten

      updateTextOnWrongAnswer();

      setTimeout(() => {
        const imageunder = document.getElementById("under");
        const tekstunder = document.getElementById("undertekst");

        if (score < 5) {
          imageunder.src =
            "https://media.giphy.com/media/JyGUoHu2my7Ze/giphy.gif";
          console.log("score under 5");
          tekstunder.innerHTML = "Godt forsøg! Husk at øvelse gør mester.";
        } else if (score < 10) {
          imageunder.src =
            "https://media.giphy.com/media/jp313yHGzTDBbw5Tg6/giphy.gif";
          console.log("score under 10");
          tekstunder.innerHTML =
            "Du klarede dig godt, men det kan stadig forbedres";
        } else if (score < 25) {
          imageunder.src =
            "https://media.giphy.com/media/szS3OL60OWuhmP82Mo/giphy.gif";
          console.log("score under 25");
          tekstunder.innerHTML =
            "WOW nu begynder det at ligne noget.... prøv at se om du kan nå 50?";
        } else if (score < 50) {
          imageunder.src =
            "https://media.giphy.com/media/2w6I6nCyf5rmy5SHBy/giphy.gif";
          console.log("score under 50");
          tekstunder.innerHTML = "Inponerende præstation!";
        } else if (score > 100) {
          imageunder.src =
            "https://media.giphy.com/media/xUn3Cuayeo8RTX23sI/giphy.gif";
          console.log("score over 100");
        }

        forkertlyd.play();
        modal.style.display = "block";
        //Score sættes til 0 og materialerne sættes på ny.
        score = 0;
        setMaterials();
        displayScore(score);
      }, 1000);
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

  displayScoreModal(score);

  // få modalen
  let modal = document.getElementById("myModal");

  // få span elementet der er et kryds i hjørnet
  let span = document.getElementsByClassName("close")[0];

  // når man trykker på span krydset i højre hjørne lukkes den
  span.onclick = function () {
    modal.style.display = "none";
  };

  // hvis man trykker udenfor vinduet lukker den
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // når man trykker restart gemmer den bare modalen
  restartspil.onclick = function () {
    modal.style.display = "none";
  };
  // funktion der viser scoren fra spiller i selve modalen, vi henter html elemmentet med id'et scoremodal og sætter det til at være "score" + vores score
  function displayScoreModal(score) {
    document.getElementById("scoremodal").innerText = `Score: ${score}`;
  }
});
