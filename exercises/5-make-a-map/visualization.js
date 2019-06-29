
document.addEventListener("DOMContentLoaded", () => {
  
  // Define the width and height of your visualization
  const width = 800
  const height = 400

  // Grab the container
  const container = d3.select("#viz")

  // Append an svg node and confiture its width and height
  const svg = container.append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid #000")
  
  // geographic data (geojson)
  d3.json("/world-110m.json").then(world => {
    // cities data (csv)
    d3.csv("/cities.csv").then(cities => {

      // array of countries is in `world.features`
      // array of cities is in `cities`

      // 1. Define and configure your projection
      
      // 2. Define and configure your path constructor

      // 3. Bind world.features to the DOM and render out the countries
      
      // 4. Add circles for the 30 biggest cities in the world
      // Hint: use `d.population_millions` for the radius.

    })
  })

})
