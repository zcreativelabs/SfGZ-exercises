
# Einfache Formen mit d3

D3 is a powerful tool that can handle data transformation, data binding, and visualisation styling. All beginnings are humble though, so you have to start somewhere simple. In this exercise you will practice how to render out basic shapes into an svg node with d3.

### Start

Klone dieses Repo und navigiere zu `/exercises/1-d3-shapes-basic`.

```bash
git clone git@github.com:zcreativelabs/SfGZ-exercises.git
cd SfGZ-exercises/exercises/1-d3-shapes-basic
```

Installiere die nötigen node modules und starte den Server.

```bash
npm install
...
npm start
```

Das Hauptdokument ist `visualization.js`.

### Aufgabe

Rendern Sie die folgenden Formen mit `append`:

- `<circle cx="400" cy="200" r="15" />`
- `<rect x="200" y="145" width="40" height="30" />`
- `<line x1="100" y1="100" x2="700" y2="300" stroke="#000" />`
- `<text x="50" y="50" />`

### Hinweise

Die für dieses Projekt vorgesehene Grundstruktur kümmert sich bereits um einige Dinge.

```js
// ⏱️ 1. Auf DOM warten
document.addEventListener("DOMContentLoaded", () => {
  
  // 📏 Breite und Höhe definieren
  const width = 800
  const height = 400

  // 👌 Container ergreifen und der `container`-variabel zuordnen
  const container = d3.select("#viz")

  // ➕ SVG node dem container hinzufügen.
  const svg = container.append("svg")
    .attr("width", width)
    .attr("height", height)

  // Formen rendern

})
```

Um ein svg-Element hinzuzufügen, kann `.append` verwendet werden.

```js
const circle = svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 20)

```

### Weiteres

Wenn diese Aufgabe zu einfach ist, versuche die Formen mit d3 zu gestalten. Dafür kannst du `.attr()` order `.style()` benutzen.
