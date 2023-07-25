function clickListener() {

  let min_size = parseInt(document.getElementById('min_size').value);
  let max_size = parseInt(document.getElementById('max_size').value);
  let url = `/api/v1.0/${min_size}/${max_size}`;

  // nuke map
  d3.select("#map_container").html("");
  d3.select("#map_container").html("<div id='map'></div>");

  d3.json(url).then(function (data) {
    console.log(data);

    makePlots(data.raw_data, min_size, max_size);
    createMap(data.raw_data);
  });
}