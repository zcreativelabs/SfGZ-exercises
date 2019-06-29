
# d3 Karte

Um eine Karte zu erstellen, benötigen wir eine Geojson-Datei. Zuvor hast du mit einem sehr kleinen Geojson-Datensatz gearbeitet, der in eine Variable passt. Jetzt ist es an der Zeit eine Datei mit `d3.json` zu laden.

### Start

Klone dieses Repo und navigiere zu `/exercises/5-make-a-map`.

```bash
git clone git@github.com:zcreativelabs/SfGZ-exercises.git
cd SfGZ-exercises/exercises/5-make-a-map
```

Installiere die nötigen node modules und starte den Server.

```bash
npm install
...
npm start
```

Das Hauptdokument ist `visualization.js`.

### Aufgabe

Verwende die bereitgestellten `geojson` und `cities` Daten, die asynchron über `d3.json` und `d3.csv` geladen werden, um alle Länder der Welt zusammen mit den 30 größten Städtem der Welt anzuzeigen.

### Hinweise

In dieser Übung musst du zwei Datensätze an das DOM binden. Der erste Datensatz wird an eine Serie von `path` Elementen gebunden, der zweite wird an eine Serie von `circle` Elementen gebunden.

```js
d3.json("/path/to/your/file.json")
  //
  // ⏱️ Warte bis Javascript deine Daten lädt.
  //
  .then(function(world) {
    // 🌍 `world` ist deine geojson Variabel

    // 📏 Breite und Höhe der Visualisierung definieren
    const width = 800
    const height = 400

    // 👌 Container auswählen
    const container = d3.select("#viz")

    // SVG node an den container hängen und Breite/Höhe konfigurieren
    const svg = container.append("svg")
      .attr("width", width)
      .attr("height", height)
    
    // 🌐 Neue Projektion generieren.
    const projection = d3.geoEqualEarth()
      // 🎯 Projektion in die Mitte verschieben
      .translate([width/2, height/2])
    
    // 🛠️ Pfadgenerator definieren
    const path = d3.geoPath().projection(projection)

    // ⛓️ welt Daten an das DOM binden.
    const countries = svg.selectAll("path")
      .data(world.features)
      .enter()
      .append("path")
        .attr("d", d => path(d))
    
    // 🎉 TADA! ;)

  })

```

### Weiteres

Falls diese Übung zu einfach ist, versuche die Kartenprojektion so zu optimieren, dass sie schöner aussieht (experiementiere mit `rotate` oder `center` oder `scale`). Versuche die Kreise und Länder zu gestalten.
