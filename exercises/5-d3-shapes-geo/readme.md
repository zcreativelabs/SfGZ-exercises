
## Geographic paths with d3 and d3-geo

You previously saw how we can render simple paths in d3. A geographic path is no different, however the input data is not simple svg coordinates, but geographic coordinates. This means that each point, which is given as a longitude and latitude, needs to be translated into an svg coordinate. This translation happens with the help of a geographic projection.

```js
const data = [
  {
    ...
  }
]

const width = 800
const height = 400

// Create your projection (here we use the equal earth projection)
const projection = d3.geoEqualEarth()
  // Place your projection in the center of the svg element
  .translate([width / 2, height / 2])
  // Configure the rotation
  .rotate([0,0,0])
  // Configure the center
  .center([0,0])
  // Configure the scale
  .scale(120)

const path = d3.geoPath().projection(projection)

```

Use the provided geojson variable to render a simple outline of the world
