
# Data-driven shapes in d3

Rendering basic shapes and paths can get you a long way, but if you really want to get into data visualization, you have to bring data into the game at some point. In d3 we use data binding to bind an array of data points to DOM elements.

### Getting started

To get started with this exercise clone this repo, and navigate into the `/exercises/2-d3-shapes-basic` directory.

```bash
git clone git@github.com:zcreativelabs/SfGZ-exercises.git
cd SfGZ-exercises/exercises/3-d3-shapes-with-data
```

Once in the directory install the dependencies and start the server.

```bash
npm install
...
npm start
```

The main file of interest for you is the `visualization.js` file. Each example has a certain amount of boilerplate to help you along.

### Task

You are provided with an array of shapes. You need to bind this array to the DOM and render out a path for each one of the items in the array.

### Hint

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

Remember that the `.attr` function runs for each item in the array, and the data for each item is contained in the `d` prop.

### Notes

If this is too easy for you, try styling the shapes, using either `.attr` or `.style`.
