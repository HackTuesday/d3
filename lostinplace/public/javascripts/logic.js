$.getJSON('data', function(data){
    var svgContainer = d3.select("svg");
    var dat= [150,
        200,
        350,
        500,
        10];

    var path;
    var output={};
    for (var key in data) {
        path=key.split('/');

        function traversePath(arr){
            var tmp={};
            if(typeof(arr)==="object")
            {
                var keyName=arr[0];
                tmp[keyName]=traversePath(arr.shift());
                return tmp;
            } 
            else {
                return data[key];  
            }
        }
        var tmpout =traversePath(path);
        output=_.extend(output,tmpout);
    }
    console.log(output);
    var circles = svgContainer.selectAll()
        .data(dat)
        .enter()
        .append("circle")
        .attr({
            fill:"purple",
            cx:function(x){return x;},
            cy:function(x){return x;},
            r:35
        });
});