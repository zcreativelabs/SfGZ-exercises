
# Render a map with d3

In order to make a map, you will need a geojson file. You previously used a very small geojson dataset that fit into a variable. Now it's time to step up your game and load in a file using `d3.json`.

```js
d3.json("/path/to/your/file.json")
  //
  // ⏱️ wait until javascript loads your data
  //
  .then(function(world) {
    // 🌍 `world` is your geojson variable

    // 📏 Define the width and height of your svg node
    const width = 800
    const height = 400

    // 👌 Select the svg node and configure the width and height
    const svg = d3.select("svg")
      .attr("width", width)
      .attr("height", height)
    
    // 🌐 Create a new projection
    const projection = d3.geoEqualEarth()
      // 🎯 Place the projection in the center of the svg node
      .translate([width/2, height/2])
    
    // 🛠️ Create a path constructor based on the
    // projection you created
    const path = d3.geoPath().projection(projection)

    // ⛓️ Bind the world data to the DOM and render
    // out all the countries as paths using the
    // path constructor
    const countries = svg.selectAll("path")
      .data(world)
      .enter()
      .append("path")
        .attr("d", path)
    
    // 🎉 TADA! ;)

  })

```
