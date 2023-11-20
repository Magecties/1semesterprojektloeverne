d3.json("http://localhost:3000/skrald").then(function(d){
    console.log(d.skrald[10]);
});