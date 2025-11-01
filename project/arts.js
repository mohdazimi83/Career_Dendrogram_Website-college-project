var dendrogram = {
    "name": " ARTS",
    "children": [
      {
       "name": " BFA", 
       "children": [
         {"name": "Bachelor of Fine Arts"}
         
       ]
      },{
       "name": "BEM",
       "children": [
         {"name": "Bachelor of Event Management"}
       ]
      },{
        "name": "BA+LL.B",
        "children": [
          {"name": "Integrated Law course"}
        ]
       },{
        "name": "BSW",
        "children": [
          {"name": "Bachelor of Social work"}
        ]
       },{
        "name": "BFD",
        "children": [
          {"name": "Bachelor of Fashion Designing"}
          
        ]
       },{
        "name": "BTTM",
        "children": [
          {"name": "Bachelor of Travel and tourism management"}
        ]
       },{
        "name": "B.Sc",
        "children": [
          {"name": "Interior Design"}
        ]
       },{
        "name": "BPA",
        "children": [
          {"name": "Bachelor of performing arts"}
        ]
       },{
        "name": "B.Sc",
        "children": [
          {"name": "Hospitality and Hotel Administration"}
        ]
       },{
        "name": "BA",
        "children": [
          {"name": "BA in History"}
        ]
       },{
        "name": "B.design",
        "children": [
          {"name": "Bachelor of Design"}
        ]
       },{
        "name": "BMS",
        "children": [
          {"name": "Bachelor of Management Science"}
        ]
       },{
        "name": "BBA",
        "children": [
          {"name": "Aviation Courses"}
        ]
       },{
        "name": "BJMC",
        "children": [
          {"name": "Bachelor of Journalism and Mass communication"}
        ]
       }
    ]
  }
  
  var width = 800; 
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
