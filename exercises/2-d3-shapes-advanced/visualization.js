
document.addEventListener("DOMContentLoaded", () => {
  
  // Define the width and height of your visualization
  const width = 800
  const height = 400

  // Grab the container
  const container = d3.select("#viz")

  // Append an svg node and confiture its width and height
  const svg = container.append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid #000")
  
  // Shape codified in an svg path string
  const shapePath = "M255,341 L160,195 L303,78 L451,111 L516,40 L640,204 L609,338 L491,360 L438,307 L352,307 Z"

  // ========================================
  // Render your shape here

  // ...

  // ========================================

})
