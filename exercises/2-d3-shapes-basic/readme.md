
# Rendering basic shapes with d3

D3 is a powerful tool that can handle data transformation, data binding, and visualisation styling. All beginnings are humble though, so you have to start somewhere simple. In this exercise you will practice how to render out basic shapes into an svg node with d3.

### Getting started

To get started with this exercise clone this repo, and navigate into the `/exercises/2-d3-shapes-basic` directory.

```bash
git clone git...
cd SfGZ-exercises/exercises/2-d3-shapes-basic
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

- `<circle cx="10" cy="10" r="15" />`
- `<rect x="100" y="45" width="40" height="30" />`
- `<line x0="0" y0="0" x1="100" y1="20" />`
- `<text x="20" y="30" />`

### Notes

If this is too easy for you, try to style your shapes with d3. You can add attributes to the individual elements using the `.attr()` method.
