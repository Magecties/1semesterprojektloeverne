d3.json("http://localhost:3000/skrald").then(function(d){
    console.log(d.skrald[10]);

    console.log(d.skrald[10].nedbrydningstidværdi < d.skrald[11].nedbrydningstidværdi);
});


// d.skrald[10].navn fjern herfra
// kør både node main.js og liveserver i to terminaler
