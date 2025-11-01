var dendrogram = {
    "name": " B.TECH",
    "children": [
      {
       "name": " CSE", 
       "children": [
         {"name": "Computer Engineer"},
         {"name": "Computer Programmer"},
         {"name": "Computer system Analyst"},
         {"name": "Computer support Specialist"},
         {"name": "Software Application Developers"},
         {"name": "Web Developer"}
       ]
      },{
       "name": "AERONAUTICAL",
       "children": [
         {"name": "Racing car Designer"},
         {"name": "Flight mechanics Engineer"},
         {"name": "Asst. Aircraft engineer"},
         {"name": "Asst. Technical officers"},
         {"name": "Graduate Engineer trainee"}
       ]
      },{
        "name": "AUTOMOBILE",
        "children": [
          {"name": "Sales Officer"},
          {"name": "Professor"},
          {"name": "Automobile engineer"},
          {"name": "Design engineer"},
          {"name": "Product development engineer"}
        ]
       },{
        "name": "CIVIL ENGINEERING",
        "children": [
          {"name": "Site Supervisior"},
          {"name": "Site enginerr"},
          {"name": "Civil engineer"},
          {"name": "Surveyor"},
          {"name": "Project manager"},
          {"name": "Sales engineer"},
          {"name": "Design engineer"}
        ]
       },{
        "name": "MECHANICAL ENGINEERING",
        "children": [
          {"name": "Aerospace engineer"},
          {"name": "Maintenance engineer"},
          {"name": "Automotive engineer"},
          {"name": "Control & Instrumentation engineer"},
          {"name": "Contracting Civil engineer"},
          {"name": "Nuclear Engineer"},
          {"name": "Mechanical engineer"}
        ]
       },{
        "name": "AGRICULTURAL ENGINEERING ",
        "children": [
          {"name": "Agricultural engineer"},
          {"name": "Agricultural Inspector"},
          {"name": "Agricultural Specialist"},
          {"name": "Farm Shop manager"},
          {"name": "Food & beverage supervisor"},
          {"name": "Survey Research Agricultural Engineer"},
          {"name": "Agronomist"}
        ]
       },{
        "name": "PETROLEUM ENGINEERING",
        "children": [
          {"name": "Reservoir Engineer"},
          {"name": "Drilling Engineer"},
          {"name": "Production Engineer"},
          {"name": "Completion Engineer"}
        ]
       },{
        "name": "CHEMICAL ENGINEERING",
        "children": [
          {"name": "Analytical chemist"},
          {"name": "Energy Manager"},
          {"name": "Environmental engineer"},
          {"name": "Manufacturing engineer"},
          {"name": "Material engineer"},
          {"name": "Mining engineer"},
          {"name": "Production manager"},
          {"name": "lecturer"}
        ]
       },{
        "name": "ELECTRICAL ENGINEERING",
        "children": [
          {"name": "Micro Electrical engineer"},
          {"name": "Electrical engineer"},
          {"name": "Power engineer"},
          {"name": "Instrumentation engineer"},
          {"name": "Telecommunication engineer"},
          {"name": "Electrical Design Engineer"}
        ]
       },{
        "name": "MARINE ENGINEERING",
        "children": [
          {"name": "Chief engineer"},
          {"name": "Chief electric tech officer"},
          {"name": "Design engineer"},
          {"name": "Navy personnel"},
          {"name": "Maintenance engineer"},
          {"name": "Chief Security officer"}
        ]
       },{
        "name": "MATERIAL ENGINEER/    METAlLURGY",
        "children": [
          {"name": "Process Metallurgist"},
          {"name": "Metallurgical engineer"},
          {"name": "Chemical Metallurgist"},
          {"name": "Physical Metallurgist"}
        ]
       },{
        "name": "ENVIRONMENTAL ENGINEERING",
        "children": [
          {"name": "Biologist"},
          {"name": "Agricultural engineer"},
          {"name": "Geologists"},
          {"name": "Ecologists"},
          {"name": "Chemical engineer"}
        ]
       },{
        "name": "INDUSTRIAL & PRODUCTION ENGINEERING",
        "children": [
          {"name": "Industrial designer"},
          {"name": "Industrial engineer"},
          {"name": "Quality control engineer"},
          {"name": "Manufacturing engineer"},
          {"name": "Process engineer"},
          {"name": "Project engineer"},
          {"name": "Field engineer"}
        ]
       },{
        "name": "PLASTIC ENGINEERING",
        "children": [
          {"name": "Plastic engineer"},
          {"name": "design technician"},
          {"name": "Mould maker& desginer"},
          {"name": "Optic fibre engineer"}
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
