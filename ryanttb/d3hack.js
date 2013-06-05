function ohai( which ) {
  switch ( which ) {
    case "createp":
      // original
      // always deletes all p elements and adds all new ones
      // below is better
      d3.selectAll("p").data(twitter).enter().append("p").html(function(d) {
        return d.properties.tweet;
      });
      break;

    case "enterexitp":
      // update (store reference to updated p elements)
      var p = d3.selectAll("p").data(twitter).html(function(d) {
        return d.properties.tweet;
      });
      
      // enter (add anything new from data, use previously stored p elements)
      p.enter().append("p").html(function(d) {
        return d.properties.tweet;
      });

      // exit (remove unused p elements)
      p.exit().remove();
      break;

    case "geo":
      // from http://hashbang.co.nz/blog/2013/2/25/d3_js_geo_fun
      var width = 256, height = 256;

      /*
      var projection = d3.geo.equirectangular()
        .scale(75)
        .translate([width/2, height/2])
        .rotate([-180,0]);

      var path = d3.geo.path()
        .projection( projection );
      */

      var svg = d3.select("#geo")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      svg.selectAll("circle").data(twitter)
        .enter()
        .append("circle")
        .attr("r", 2)
        .attr("cx", function(d) {
          return d.geometry && d.geometry.coordinates ? (90 + parseInt(d.geometry.coordinates[0])) * 360/256 : 0;
        })
        .attr("cy", function(d) {
          return d.geometry && d.geometry.coordinates ? (45 + parseInt(d.geometry.coordinates[1])) * 180/256 : 0;
        });

      break;
  }
}
