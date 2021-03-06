import './maps.html';

Template.Map.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('routeMap', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
    });
});

Template.Map.onRendered(function() {

    GoogleMaps.load({
        key: "AIzaSyCOzfISoah8IT6BVNBoq3rdEmboa9Hox98"
    });

})

Template.Map.helpers({
    routeMapHelpers: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(51.8877643, -8.4790343),
                zoom: 12
            };
        }
    }
});

Tracker.auto

