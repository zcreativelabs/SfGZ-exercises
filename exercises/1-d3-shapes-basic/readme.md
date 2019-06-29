
# Rendering basic shapes with d3

D3 is a powerful tool that can handle data transformation, data binding, and visualisation styling. All beginnings are humble though, so you have to start somewhere simple. In this exercise you will practice how to render out basic shapes into an svg node with d3.

### Getting started

To get started with this exercise clone this repo, and navigate into the `/exercises/2-d3-shapes-basic` directory.

```bash
git clone git@github.com:zcreativelabs/SfGZ-exercises.git
cd SfGZ-exercises/exercises/1-d3-shapes-basic
```

Once in the directory install the dependencies and start the server.

```bash
npm install
...
npm start
```

The main file of interest for you is the `visualization.js` file. Each example has a certain amount of boilerplate to help you along.

### Task

Render out the following shapes using `append`:

- `<circle cx="400" cy="200" r="15" />`
- `<rect x="200" y="145" width="40" height="30" />`
- `<line x1="100" y1="100" x2="700" y2="300" stroke="#000" />`
- `<text x="50" y="50" />`

### Hints

The basic structure provided for this project already takes care of some things for you.

```js
// ⏱️ 1. Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  
  // 📏 Define the width and height of your visualization
  const width = 800
  const height = 400

  // 👌 Grab the container
  const container = d3.select("#viz")

  // ➕ Append an svg node and confiture its width and height
  const svg = container.append("svg")
    .attr("width", width)
    .attr("height", height)

  // Render your shapes here...

})
```

To append an svg element you can use the `append` method.

```js
const circle = svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 20)

```

### Notes

If this is too easy for you, try to style your shapes with d3. You can add attributes to the individual elements using the `.attr()` method. Styling is also possible via the `.style()` method.
