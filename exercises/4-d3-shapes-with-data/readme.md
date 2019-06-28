
# Data-driven shapes in d3

Rendering basic shapes and paths can get you a long way, but if you really want to get into data visualization, you have to bring data into the game at some point. In d3 we use data binding to bind an array of data points to DOM elements.

In order to bind data to DOM elements, first select the elements you want to target. During the first run, this means selecting non-existent elements and entering them into the DOM.

```js
// target all elements of type `circle`
const circles = svg.selectAll("circle")
  // bind an array of data points
  .data(data)
  // enter them into the DOM
  .enter()
  // append a <circle /> node for each one
  .append("circle")
    // add all the necessary attributes based on the data
    .attr("cx", d => d.x)
    /// ...
```
