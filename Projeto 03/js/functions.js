window.onload = function(){
    var map

    function initMap() {
        var mapProp = {
            center: new google.maps.LatLng(-27.648598,-48.577423),
            scrollwheel: false,
            zoom: 12,
            MapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("map-js"), mapProp)
    }

    initMap()
}