const w = 900;
const h = 450;
const padding = 40;

d3.json("http://localhost:3000/skraldfarlighed").then(function (d) {
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-top", "2.5%")
    .style("margin-left", "17%");

  let resultat = [];
  for (let i = 0; i < d.skraldfarlighed.length; i++) {
    resultat.push([
      parseInt(d.skraldfarlighed[i].nedbrydningstidværdi),
      parseInt(d.skraldfarlighed[i].farligfaktor_id),
      d.skraldfarlighed[i].navn,
      d.skraldfarlighed[i].nedbrydningstid,
      parseInt(d.skraldfarlighed[i].skralde_kat_id),
    ]);
  }

  const xScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(resultat, function (d) {
        return d[0];
      }),
    ])
    .range([padding, w - padding]);

  const yScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(resultat, function (d) {
        return d[1];
      }),
    ])
    .range([h - padding, padding]);

  // Definere akserne
  const xAxis = d3.axisBottom().scale(xScale).ticks(10);
  const yAxis = d3.axisLeft().scale(yScale).ticks(5);

  // Lægge akserne til SVG-elementet:
  svg
    .append("g")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

  svg
    .append("g")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

  // Append x-axis label
  svg
    .append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", w)
    .attr("y", h - 50)
    .text("Nedbrydningstid");

  // Append y-axis label
  svg
    .append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 50)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Farlighedsfaktor");

  // Append title
  svg
    .append("text")
    .attr("x", w / 2)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .style("font-size", "24px")
    .text("Farlighed");

  let color = d3
    .scaleOrdinal()
    .domain([1, 2, 3, 4, 5, 6, 7, 8, 9])
    .range([
      "#2ECC71",
      "#3498DB",
      "#FAD7A0",
      "#138D75 ",
      "#CCD1D1",
      "#A569BD",
      "#CA6F1E",
      "#E74C3C",
      "#17202A",
    ]);

  const circles = svg
    .selectAll("circle")
    .data(resultat)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d[0]))
    .attr("cy", h - padding) // Startpunkt
    .attr("r", 5)
    .style("fill", function (d) {
      return color(d[4]);
    })
    .transition() // Start på transition
    .duration(1000)
    .delay((d) => d[0] * 300)
    .attr("cy", (d) => yScale(d[1])); // Slutpunkt

  function handleMouseOver(d) {
    let xPosition = parseFloat(d3.select(this).attr("cx"));
    let yPosition = parseFloat(d3.select(this).attr("cy"));

    d3.select("#tooltip")
      .style("left", xPosition + 280 + "px")
      .style("top", yPosition + 180 + "px")
      .select("#value")
      .text("Navn: " + d[2]);
    d3.select("#tooltip")
      .select("#nedbrydningText")
      .text("Nedbrydningstid: " + d[3]);

    d3.select("#tooltip").classed("hidden", false);
  }

  // Function to handle mouseout event
  function handleMouseOut() {
    d3.select("#tooltip").classed("hidden", true);
  }

  // Attach event listeners using native JavaScript
  circles.each(function (d) {
    this.addEventListener("mouseover", function () {
      handleMouseOver.call(this, d);
    });
    this.addEventListener("mouseout", handleMouseOut);
  });

  const kategori = [
    "Maddaffald",
    "Papir",
    "Pap",
    "Glas",
    "Metal",
    "Plast",
    "Mad og Drikkekartoner",
    "Farligt affald",
    "Restaffald",
  ];
  const colors = [
    "#2ECC71",
    "#3498DB",
    "#FAD7A0",
    "#138D75",
    "#CCD1D1",
    "#A569BD",
    "#CA6F1E",
    "#E74C3C",
    "#17202A",
  ];
  let katBox = document.getElementById("katBox");
  for (let i = 0; i < kategori.length; i++) {
    let span = document.createElement("span");
    span.innerHTML += "- " + kategori[i] + "<br>";
    span.style.color = colors[i % colors.length];
    katBox.appendChild(span);
  }
});
