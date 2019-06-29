
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
  
  // Shape data
  const data = [
    {
      id: "1",
      name: "Shape 1",
      geometry: "M255,321 L160,175 L303,58 L451,91 L516,20 L640,184 L609,318 L491,340 L438,287 L352,287 Z",
    },
    {
      id: "2",
      name: "Shape 2",
      geometry: "M549,348 L603,344 L585,380 Z",
    },
  ]

  // ========================================
  // Render your shapes here

  // ...

  // ========================================

})
