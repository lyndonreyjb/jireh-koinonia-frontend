import { useState } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";

const MapBox = () => {
  const lng = -113.9547759;
  const lat = 51.0774905;
  const [showPopup, setShowPopup] = useState(true);

  const address = "5510 26 Ave NE, Calgary, AB T1Y 6S1";

  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  const link = "https://goo.gl/maps/qib55ppy5AEAKbdc7";
  return (
    <div className="h-96">
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9">
        <Marker longitude={lng} latitude={lat} color="#ca8a04" />
        {showPopup && (
          <Popup
            longitude={lng}
            latitude={lat}
            anchor="top"
            onClose={() => setShowPopup(false)}
            closeButton={false}
            preventScroll={true}
            className="mt-2">
            <h3 className="text-lg font-semibold">Jireh Koinonia Calgary</h3>
            <span
              className="text-gray-500 hover:text-yellow-600 cursor-pointer"
              onClick={() => window.open(link, "_blank")}>
              {address}
            </span>
          </Popup>
        )}
        <NavigationControl />
      </Map>
    </div>
  );
};

export default MapBox;
