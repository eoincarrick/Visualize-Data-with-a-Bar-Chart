const width = 900;
const height = 500;
const scale = d3.scaleLinear();
const url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
const xScale = [];
const yScale = [];
datasets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const svg = d3
  .select("body")
  .append("svg")
  .attr("class", "container")
  .attr("width", width)
  .attr("height", height);

const rect = svg
  .selectAll("rect")
  .data(datasets)
  .enter()
  .append("rect")
  .attr("class", "rectContainer")
  .attr("width", 50)
  .attr("height", (d) => d * 10)
  .attr("x", (d, i) => i * 80)
  .attr("y", (d) => height - 10 * d)
  .attr("fill", "#000");
