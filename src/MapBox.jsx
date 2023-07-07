import { useState } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";

const MapBox = () => {
  const [lng, setLng] = useState(-113.9547759);
  const [lat, setLat] = useState(51.0774905);
  const [showPopup, setShowPopup] = useState(true);

  const address = "5510 26 Ave NE, Calgary, AB T1Y 6S1";

  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  return (
    <div className="bg-neutral-50" style={{ height: "50vh" }}>
      <div className="h-full relative">
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
              className="mt-2">
              <div>
                <h3 className="text-lg font-semibold">
                  Jireh Koinonia Calgary
                </h3>
                <a
                  href="https://goo.gl/maps/qib55ppy5AEAKbdc7"
                  className=" text-gray-500 hover:text-yellow-600">
                  {address}
                </a>
              </div>
            </Popup>
          )}
          <NavigationControl />
        </Map>
      </div>
    </div>
  );
};

export default MapBox;
