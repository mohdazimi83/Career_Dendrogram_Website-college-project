// Set the dimensions and margins of the diagram
/*var margin = { top: 20, right: 90, bottom: 30, left: 90 },
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
    .text(function(d) { return d.data.name; })*/

//-------------------------------------
var dendrogram = {
    "name": " B.TECH",
    "children": [
      {
       "name": "Bachelor of commerce(B.Com)", 
       "children": [
         {"name": "Business Development"},
         {"name": "Customer care Executive"},
         {"name": "Computer system Analyst"},
         {"name": "account assistant"},
         {"name": "Graduate Trainee"},
         {"name": "sales and marketing"}
       ]
      },{
       "name": "Bachelor of Laws(LLB)",
       "children": [
         {"name": "Consultant"},
         {"name": "Economic development advisory analyst"},
         {"name": "teacher"},
         {"name": "Company Secetary"},
         {"name": "banking support service"},
         {"name": "Regional Legal manager"}
       ]
      },{
        "name": "Cost& Management Accountant(CMA)",
        "children": [
          {"name": "Chief Financial Officer(CFO)"},
          {"name": "Financial Analyst"},
          {"name": "Corporate Controller"},
          {"name": "Financial Controller"},
          {"name": "Chief Investment officer"}
        ]
       },{
        "name": "Chartered Accountancy(CA)",
        "children": [
          {"name": "Auditor"},
          {"name": "Accounts Clerk"},
          {"name": "Business Services Accountant"},
          {"name": "Chief Financial officer"},
          {"name": "Cost accountants"},
          {"name": "Financial Controller"},
          {"name": "Tax accountant"}
        ]
       },{
        "name": "Bachelor of Business administration(BBA)",
        "children": [
          {"name": "Business development"},
          {"name": "Marketing & sales"},
          {"name": "Presales executive"},
          {"name": "Customer Relationship Executive"},
          {"name": "Marketing Manager"},
          {"name": "market Reserach analyst"},
          {"name": "Campus ambassador"},
          {"name": "Customer Service Team Leader/supervisor"}

        ]
       },{
        "name": "Company Secretary(CS) ",
        "children": [
          {"name": "Company Register"},
          {"name": "Legal Advisor"},
          {"name": "Chief administrative officer"},
          {"name": "Corporate Planner"},
          {"name": "Principal Secretary"},
          {"name": "Corporate Policymaker"},
          {"name": "member of board of directors"},
          {"name": "Miscellaneous Responsibilities"}
        ]
       },{
        "name": "Certified Financial Planner",
        "children": [
          {"name": "Identify the client"},
          {"name": "Assessing the financial status"},
          {"name": "Make a financial plan"},
          {"name": "Implementation and reviewing"}
        ]
       },{
        "name": "Bachelor of Economics",
        "children": [
          {"name": "Investment Analyst"},
          {"name": "Financial service Manager"},
          {"name": "Economist"},
          {"name": "Investment Administrator"},
          {"name": "Economic Researcher"},
          {"name": "Sales Analyst"},
          {"name": "Securities Analyst trainee"},
          {"name": "Cost estimator"},
          {"name": "Fixed income portfolio manager"},
          {"name": "Customer profit analyst"},
          {"name": "Market Research analyst"}
        ]
       }
    ]
  }
  
  var width = 1200; 
  var height = 1500; 
  var cluster = d3.layout.cluster()    
     .size([height, width-500]); 
  var diagonal = d3.svg.diagonal()    
     .projection (function(d) { return [d.y, d.x];}); 
  var svg = d3.select("body").append("svg")    
     .attr("width",width)    
     .attr("height",height)    
     .append("g")    
     .attr("transform","translate(100,0)");
  
  
  var nodes = cluster.nodes(dendrogram);    
  console.log(nodes);
  var links = cluster.links(nodes);    
  var link = svg.selectAll(".link")       
    .data(links)       
    .enter().append("path")       
    .attr("class","link")       
    .attr("d", diagonal);     
  var node = svg.selectAll(".node")       
    .data(nodes)       
    .enter().append("g")       
    .attr("class","node")       
    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });    
  node.append("circle")       
    .attr("r", 4.5);    
  node.append("text")       
    .attr("dx", function(d) { return d.children ? -10 : 10; })       
    .attr("dy", 3)       
    .style("text-anchor", function(d) { return d.children ? "end" : "start"; }) 
    .text( function(d){ return d.name;}); 