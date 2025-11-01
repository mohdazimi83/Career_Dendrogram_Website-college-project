var dendrogram = {
    "name": " B.TECH",
    "children": [
      {
       "name": " IAS", 
       "children": [
         {"name": "Indian administrative service"}
         
       ]
      },{
       "name": "IPS",
       "children": [
         {"name": "Indian Police Service"}
       ]
      },{
        "name": "IFoS",
        "children": [
          {"name": "Indian Forest Service"}
        ]
       },{
        "name": "IFS",
        "children": [
          {"name": "Indian Foreign Service"}
        ]
       },{
        "name": "IAAS",
        "children": [
          {"name": "Indian audit and accounts service"}
          
        ]
       },{
        "name": "ICAS",
        "children": [
          {"name": "Indian Civil Accounts service"}
        ]
       },{
        "name": "ICLS",
        "children": [
          {"name": "Indian Corporate law services"}
        ]
       },{
        "name": "IDAS",
        "children": [
          {"name": "Indian defence accounts service"}
        ]
       },{
        "name": "IDES",
        "children": [
          {"name": "Indian defence estates service"}
        ]
       },{
        "name": "IIS",
        "children": [
          {"name": "Indian Information Service"}
        ]
       },{
        "name": "IOFS",
        "children": [
          {"name": "Indian Ordinance Factories service"}
        ]
       },{
        "name": "ICFS",
        "children": [
          {"name": "Indian Communication Finance services"}
        ]
       },{
        "name": "IPoS",
        "children": [
          {"name": "Indian Postal service"}
        ]
       },{
        "name": "IRAS",
        "children": [
          {"name": "Indian railway accounts service"}
        ]
       }
    ]
  }
  
  var width = 900; 
  var height = 1000; 
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
