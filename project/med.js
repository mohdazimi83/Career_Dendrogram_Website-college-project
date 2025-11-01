var dendrogram = {
  "name": "MEDICAL",
  "children": [
    {
     "name": "UG medical degrees", 
     "children": [
       {"name": "MBBS-Bachelor of Medicine,Bachelor of Surgery"},
       {"name": "BDS-Bachelor of Dental Surgery"},
       {"name": "BAMS-Bachelor of Ayurvedic Medicine andSurgery"},
       {"name": "BUMS-Bachelor of Unani Medicine andSurgery"},
       {"name": "BHMS- Bachelor of Homeopathy Medicine andSurgery"},
       {"name": "BYNS-Bachelor of Yoga andNaturopathy Sciences"},
       {"name": "B.V.Sc & AH-Bachelor of Veterinary Sciences andAnimal Husbandry"}
     ]
    },{
     "name": "Medical courses without NEET",
     "children": [
       {"name": "Bachelor of Occupational Therapy"},
       {"name": "Bachelor of Science in Biotechnology"},
       {"name": "Bachelor of Technology in Biomedical Engineering"},
       {"name": "Bachelor of Science in Microbiology (Non-Clinical)"},
       {"name": "Bachelor of Science in Cardiac or Cardiovascular Technology"},
       {"name": "Bachelor of Perfusion Technology or Bachelor of Science in Cardio-Pulmonary Perfusion Technology"},
       {"name": "Bachelor of Respiratory Therapy"},
       {"name": "Bachelor of Science in Nutrition and Dietetics"},
       {"name": "Bachelor of Science in Genetics"}
     ]
    },{
      "name": "PG-Doctor of medicine(MD)",
      "children": [
        {"name": "Anaesthesiology"},
        {"name": "Biochemistry"},
        {"name": "Dermatology"},
        {"name": "Forensic Medicine"},
        {"name": "General Medicine"},
        {"name": "Microbiology"},
        {"name": "Paediatrics"},
        {"name": "Skin and Venereal diseases"},
        {"name": "Tuberculosis and Respiratory diseases"},
        {"name": "Pharmacology"},
        {"name": "Radio-Therapy"}
      ]
     },{
      "name": "PG-Master of Surgery(MS)",
      "children": [
        {"name": "Ear, Nose and Throat"},
        {"name": "General Surgery"},
        {"name": "Ophthalmology"},
        {"name": "Obstetrics and Gynaecology"},
        {"name": "Orthopaedics"},
        {"name": "Dermatology, Venerology and Leprosy"}
      ]
     },{
      "name": "Diplomate of National Board(DNB) ",
      "children": [
        {"name": "Anaesthesiology"},
        {"name": "Anatomy"},
        {"name": "Emergency Medicine"},
        {"name": "Field Epidemiology"},
        {"name": "Health Administration"},
        {"name": "Immunohematology and transfusion medicine"},
        {"name": "Ophthalmology"},
        {"name": "Obstetric and Gynecology"},
        {"name": "Microbiology"},
        {"name": "Physical Medicine and Rehabilitation"},
        {"name": "Oto-Rhino Laryngology"},
        {"name": "Orthopaedic Surgery"},
        {"name": "Respiratory diseases"}

      ]
     },{
      "name": "Super Specialty Medical Degree",
      "children": [
        {"name": "Psychiatry"},
        {"name": "Cardiac-Anaesthesiology"},
        {"name": "Cardiology"},
        {"name": "Haematology"},
        {"name": "Anaesthesiology, Pain Medicine and Critical Care"},
        {"name": "Gastroenterology"},
        {"name": "Endocrinology"},
        {"name": "Onco-Anesthesiology and Palliative Medicine"},
        {"name": "Neurology"},
        {"name": "Cardiac-Radiology"},
        {"name": "Obstetrics and Gynecology"},
        {"name": "Pulmonary and Sleep disorders"},
        {"name": "Paediatrics"}

      ]
     },{
      "name": "Specialties in master of Chirurgiae(M.Ch)",
      "children": [
        {"name": "Surgery"},
        {"name": "Cardiothoracic and Vascular Surgery"},
        {"name": "Gastrointestinal Surgery"},
        {"name": "Obstetrics and Gynaecology"},
        {"name": "ENT"},
        {"name": "Neuro Surgery"},
        {"name": "Pediatric Surgery"},
        {"name": "Plastic and Reconstructive Surgery"},
        {"name": "Surgical Oncology"},
        {"name": "Surgery Trauma Centre"},
        {"name": "Pulmonary and Sleep disorders"},
        {"name": "Urology"}

      ]
     }
  ]
}

var width = 1200; 
var height = 1200; 
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
