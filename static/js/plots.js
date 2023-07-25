function clickListener() {

  let min_size = parseInt(document.getElementById('min_size').value);
  let max_size = parseInt(document.getElementById('max_size').value);
  let state = document.getElementById('state').value
  let url = `/api/v1.0/${min_size}/${max_size}/${state}`;

  // nuke map
  d3.select("#map_container").html("");
  d3.select("#map_container").html("<div id='map'></div>");

  d3.json(url).then(function (data) {
    console.log(data);

    makePlots(data.raw_data);
    createMap(data.raw_data);
  });
}
function makePlots(raw_data, min_size, max_size) {
    // Slice the first 10 objects for plotting
    let data_sub = raw_data.slice(0, 20);
    // Reverse the array to accommodate Plotly's defaults
    data_sub.reverse();
    // Trace for the wildfire Data
    let trace1 = {
      x: data_sub.map(row => row.counts),
      y: data_sub.map(row => row.fire_size),
      name: `wildfires`,
      type: 'bar',
      orientation: "h",
      marker: {color: 'firebrick'}
    };
    // Data array
    let data = [trace1];
    // Apply a title to the layout
    let layout = {
      "title": `wildfires - size ${min_size} - ${max_size}`,
      "yaxis": {'title': "fire-size"}
    }
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", data, layout);
  }
  function createMap(inp_data) {
    // STEP 1: CREATE THE BASE LAYERS
    // Create the base layers.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
    // STEP 2: CREATE THE OVERLAY LAYERS
    // Create an overlays object.
    let markers = L.markerClusterGroup();
    let coords = [];
    for (let i = 0; i < inp_data.length; i++){
      let wildfire = inp_data[i];
      let coord = [inp_data.latitude, inp_data.longitude];
      let marker = L.marker(coord).bindPopup(`${inp_data.fire_size}<hr>${inp_data.fire_size}`);
      markers.addLayer(marker);
      coords.push(coord);
    }
    // create heatmap layer
    let heatLayer = L.heatLayer(coords, {
      radius: 20,
      blur: 30
    });
    // STEP 3: Build the Layer Controls
    // Create a baseMaps object.
    let baseMaps = {
      "Street Map": street,
      "Topographic Map": topo
    };
    let overlayMaps = {
      "wildfires": markers,
      "Heat Map": heatLayer,
    };
    // STEP 4: Init the Map
    // Create a new map.
    // Edit the code to add the wildfire data to the layers.
    let myMap = L.map("map", {
      center: [40.7128, -74.0059],
      zoom: 15,
      layers: [street, markers]
    });
    // STEP 5: Add the Layer Controls/Legend to the map
    // Create a layer control that contains our baseMaps.
    // Be sure to add an overlay Layer that contains the wildfire GeoJSON.
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);
  }
  // on page load
  clickListener();