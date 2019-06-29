
## Geographic paths with d3 and d3-geo

You previously saw how we can render simple paths in d3. A geographic path is no different, however the input data is not simple svg coordinates, but geographic coordinates. This means that each point, which is given as a longitude and latitude, needs to be translated into an svg coordinate. This translation happens with the help of a geographic projection.

### Getting started

To get started with this exercise clone this repo, and navigate into the `/exercises/2-d3-shapes-basic` directory.

```bash
git clone git@github.com:zcreativelabs/SfGZ-exercises.git
cd SfGZ-exercises/exercises/4-d3-shapes-geo
```

Once in the directory install the dependencies and start the server.

```bash
npm install
...
npm start
```

The main file of interest for you is the `visualization.js` file. Each example has a certain amount of boilerplate to help you along.

### Task

Use the `geojson` data provided in the `data` variable to render out a map of Switzerland using `projection` and `geoPath` from d3-geo.

### Hints

To create a projection, use a projection function from d3-geo (e.g. `geoAlbers`):

```js
const projection = d3.geoAlbers()
  // Make sure the projection is focused on the 0,0 coordinate
  .rotate([0,0,0])
  // Set the center of your map (in coordinates)
  .center([0,0])
  // Make sure the map is centered
  .translate([width/2, height/2])
  // Set the scale of your projection
  .scale(120)

```

To create a path generator in d3-geo use `d3.geoPath`:

```js
// Use the projection you previously created
const path = d3.geoPath().projection(projection)

```

You can use the path generator to output a country shape via the `d` attribute on your path:

```js
  ...
  .attr("d", d => path(d))
```

Use the provided geojson variable to render Switzerland.

### Notes

* The center for Switzerland is somewhere around `[8.3,46.8]`.
* Switzerland is a small country so you will need to use a large `scale` for your projection (~10000).
* If this is too easy for you, try to put the following cities on your map:
  * Zürich
  * Bern
  * Genf
  * Lugano
