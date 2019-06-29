
## Paths mit Geografischen Daten

Du hast schon einmal gesehen, wie wir einen einfachen `path` in d3 rendern können. Ein geografischer Pfad ist nicht anders, aber die Eingabedaten sind keine einfachen SVG-Koordinaten, sondern geografische Koordinaten. Das bedeutet, dass jeder Punkt, der als Längen- und Breitengrad angegeben ist, in eine svg-Koordinate übersetzt werden muss. Diese Übersetzung erfolgt mit Hilfe einer geografischen Projektion.

## Start

Klone dieses Repo und navigiere zu `/exercises/4-d3-shapes-geo`.

```bash
git clone git@github.com:zcreativelabs/SfGZ-exercises.git
cd SfGZ-exercises/exercises/4-d3-shapes-geo
```

Installiere die nötigen node modules und starte den Server.

```bash
npm install
...
npm start
```

Das Hauptdokument ist `visualization.js`.

### Aufgabe

Verwend die Daten von `geojson`, die in der Variabel `data` enthalten sind, um eine Karte der Schweiz mithilfe von `projection` und `geoPath` aus d3-geo darzustellen.

### Inweise

To create a projection, use a projection function from d3-geo (e.g. `geoAlbers`):

```js
const projection = d3.geoAlbers()
  // Stelle sicher, dass die Projektion auf die 0,0-Koordinate fokussiert ist.
  .rotate([0,0,0])
  // Verschieben Sie die Mitte der Karte (in Grad).
  .center([0,0])
  // Stelle sicher, dass die Karte zentriert ist.
  .translate([width/2, height/2])
  // Stelle den Maßstab der Kartenprojektion ein
  .scale(120)

```

Verwende `d3.geoPath` um einen Pfadgenerator in d3-geo zu erstellen.

```js
// Verwende die zuvor generierte Projektion
const path = d3.geoPath().projection(projection)

```

Du kannst den Pfadgenerator verwenden, um eine Länderform über das Attribut `d` zu rendern.

```js
  ...
  .attr("d", d => path(d))
```

Verwende die bereits vorhandene Variabel `data` um die Schweiz zu erstellen.

### Notes

* Der Mittelpunkt der Schweiz ist etwa `[8.3,46.8]`.
* Die Schweiz ist ein kleines Land, daher muss die Projektion eine grosse `scale` verwenden (~10000).
* Wenn das zu einfach ist, versuche die folgenden Städte auf deiner Karte hinzuzufügen:
  * Zürich
  * Bern
  * Genf
  * Lugano
