

const w = 700;
const h = 300;
const padding = 40;



    d3.json("http://localhost:3000/skrald", "http://localhost:3000/farlighedsfaktor").then(function (d) {
      const svg = d3.select("body").append("svg").attr("width", w).attr("height", h).style("margin-top", "20px");
      console.log(d.skrald);
      
      const xScale = d3.scaleLinear()
        .domain([0, d3.max(d.skrald, d => d.nedbrydningstid)])
        .range([padding, w - padding]);
  
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(d.skrald, d => d.Farlighedsfaktor.Farlighedsniveau)])
        .range([h - padding, padding]);
  
      svg.selectAll("circle")
        .data(data.skrald)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.nedbrydningstid))
        .attr("cy", h - padding) // Startpunkt
        .attr("r", 2.5)
        .transition() // Start på transition
        .duration(1000)
        .delay((d, i) => i * 15)
        .attr("cy", d => yScale(d.Farlighedsfaktor.Farlighedsniveau)); // Slutpunkt
  
      // Rest of your code for axes, labels, and title...

      console.log(d.skrald);
  


    // Definere akserne 
    const xAxis = d3.axisBottom().scale(xScale).ticks(5);
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
    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", w)
        .attr("y", h - 50)
        .text("Song number");

    // Append y-axis label
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 50)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Times played");

    // Append title
    svg.append("text")
        .attr("x", w / 2)
        .attr("y", 30)
        .attr("text-anchor", "middle")
        .style("font-size", "24px")
        .text("Most played songs");



    });


