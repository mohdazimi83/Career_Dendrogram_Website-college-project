console.log("hello");
// Data for the dendrogram
var data = {
name: "Career Paths",
children: [
 {
   name: "Marketing",
   children: [
     { name: "Marketing Manager" },
     { name: "Social Media Manager" },
     { name: "Market Research Analyst" },
     { name: "Copywriter" },
   ],
 },
 {
   name: "Finance",
   children: [
     { name: "Financial Analyst" },
     { name: "Investment Banker" },
     { name: "Financial Advisor" },
     { name: "Accountant" },
   ],
 },
 {
   name: "Technology",
   children: [
     { name: "Software Developer" },
     { name: "Data Analyst" },
     { name: "IT Manager" },
     { name: "Web Designer" },
   ],
 },
],
};

// Set the dimensions and margins of the diagram
var margin = { top: 20, right: 90, bottom: 30, left: 90 },
 width = 960 - margin.left - margin.right,
 height = 500 - margin.top - margin.bottom;

// Append the svg object to the body of the page
var svg = d3.select("#dendrogram").append("svg")
 .attr("width", width + margin.right + margin.left)
 .attr("height", height + margin.top + margin.bottom)
.append("g")
 .attr("transform",
       "translate(" + margin.left + "," + margin.top + ")");

// Create a hierarchy layout
var hierarchy = d3.hierarchy(data, function(d) { return d.children; })
 .sum(function(d) { return 1; });

// Create a tree layout
var tree = d3.tree()
 .size([height, width]);

// Compute the layout
var nodes = tree(hierarchy);

// Create links between nodes
svg.selectAll(".link")
 .data(nodes.descendants().slice(1))
.enter().append("path")
 .attr("class", "link")
 .attr("d", function(d) {
   return "M" + d.y + "," + d.x
       + "C" + (d.parent.y + 100) + "," + d.x
       + " " + (d.parent.y + 100) + "," + d.parent.x
       + " " + d.parent.y + "," + d.parent.x;
 });

// Create nodes
var node = svg.selectAll(".node")
 .data(nodes.descendants())
.enter().append("g")
 .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
 .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

// Add circles to leaf nodes
node.filter(function(d) { return !d.children; })
 .append("circle")
 .attr("r", 2.5);

// Add text to nodes
node.append("text")
 .attr("dy", 3)
 .attr("x", function(d) { return d.children ? -8 : 8; })
 .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
 .text(function(d) { return d.data.name; }); 