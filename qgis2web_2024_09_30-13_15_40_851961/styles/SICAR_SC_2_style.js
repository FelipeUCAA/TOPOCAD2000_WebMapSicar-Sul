var style_SICAR_SC_2 = function(feature, resolution){
    var zoomLimit = 100;
    if (resolution > zoomLimit) {
        return [];
    }

    var labelText = "";
    var labelFont = "10px sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var placement = 'point';

    var style = [ 
        new ol.style.Style({
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', width: 0.988}),
            fill: new ol.style.Fill({color: 'rgba(255,255,0,0.5)'}), // Amarelo
            text: createTextStyle(feature, resolution, labelText, labelFont, labelFill, placement, bufferColor, bufferWidth)
        })
    ];
    

    return style;
};
