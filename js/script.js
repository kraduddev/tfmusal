var dataset = [];
var w=500;
var h=100;
var barPadding=1;

for (var i=0;i<25;i++){
  var numero = Math.floor(Math.random()*90);
  dataset.push(numero);
}

var svg = d3.select('body')
  .append('svg')
  .attr("width",w)
  .attr("height", h);

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr({
    x:function(d,i){return i*(w/dataset.length);},
    y:function(d){return h-d;},
    width:w/dataset.length-barPadding,
    height:function(d){return d*4;},
    fill:function(d){return "rgb(0,0,"+d*10+")"}
  });


  svg.selectAll("text")
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d){return d;})
    .attr({
      x: function(d, i) {return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
},
      y: function (d){return h-(d)+15;},
      "font-family": "sans-serif",
      "font-size":"11px",
      fill:"white",
      "text-anchor":"middle"
    });