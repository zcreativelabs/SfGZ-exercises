
# Render a map with d3

In order to make a map, you will need a geojson file. You previously used a very small geojson dataset that fit into a variable. Now it's time to step up your game and load in a file using `d3.json`.

### Getting started

To get started with this exercise clone this repo, and navigate into the `/exercises/2-d3-shapes-basic` directory.

```bash
git clone git@github.com:zcreativelabs/SfGZ-exercises.git
cd SfGZ-exercises/exercises/6-make-a-map
```

Once in the directory install the dependencies and start the server.

```bash
npm install
...
npm start
```

The main file of interest for you is the `visualization.js` file. Each example has a certain amount of boilerplate to help you along.

### Task

Use the provided `geojson` and `cities` data loaded asynchronously via `d3.json` and `d3.csv` to render out all countries of the world and the 30 biggest cities in the world.

### Hints

You have to bind two datasets ih this exercise. The first dataset is bound to `paths` and the second one is bound to `circles`.

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
      // You can further customize your projection here...
    
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

### Notes

If this exercise is too easy for you, try tweaking the map projection to look nicer (experiment with `rotate` or `center`, or `scale`). Try to style the circles and the countries. You can also use the provided `styles.css` file to get the job done. Remember, svg is also part fo the DOM and therefore accessible to css for styling.
