
# Data-driven shapes in d3

Rendering basic shapes and paths can get you a long way, but if you really want to get into data visualization, you have to bring data into the game at some point. In d3 we use data binding to bind an array of data points to DOM elements.

### Start

Klone dieses Repo und navigiere zu `/exercises/3-d3-shapes-with-data`.

```bash
git clone git@github.com:zcreativelabs/SfGZ-exercises.git
cd SfGZ-exercises/exercises/3-d3-shapes-with-data
```

Installiere die nötigen node modules und starte den Server.

```bash
npm install
...
npm start
```

Das Hauptdokument ist `visualization.js`.

### Aufgabe

Du wirst mit einer Reihe von Formen versorgt. Dieses Array muss an das DOM gebunden werden und ein `path` muss für jedes Element dem svg container hinzugefügt werden.

### Hinweise

Um Daten an DOM-Elemente zu binden, wähle zunächst die Elemente aus. Im ersten Durchlauf bedeutet dies, dass nicht vorhandene Elemente ausgewählt und in das DOM eingetragen werden.

```js
// Alle `circle` Elemente auswählen
const circles = svg.selectAll("circle")
  // Array an DOM binden
  .data(data)
  // Alle neuen Elemente eintragen
  .enter()
  // `<circle />` für jeden Datenpunkt hinzufügen
  .append("circle")
    // Alle nötigen Attribute konfigurieren
    .attr("cx", d => d.x)
    /// ...
```

Vergiss nicht, dass die Funktion `.attr` für jedes Element im Array ausgeführt wird und die Daten für jedes Element im `d` prop enthalten sind.

### Weiteres

Wenn dir das zu einfach ist, versuche, die Formen zu gestalten, entweder mit `.attr` oder `style`.
