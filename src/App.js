import { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const TOKEN =
  "pk.eyJ1Ijoiam9mZmRhbWlkbyIsImEiOiJjbGhiNDNxN2UwbnF1M2xzMnp3cHc0NnoxIn0.djxhmC2hkS7Y_e18lAao4A";

function App() {
  const [newPlace, setNewPlace] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 39.077,
    longitude: -94.3436,
    zoom: 4,
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <ReactMapGl
        {...viewport}
        mapboxAccessToken={TOKEN}
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/joffdamido/clhb0yvqr012801pg7snja9cz"
      >
        <>
          <Marker
            latitude={39.077}
            longitude={-94.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={48.077}
            longitude={-102.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={32.077}
            longitude={-94.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={40.077}
            longitude={-120.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
        </>
      </ReactMapGl>
    </div>
  );
}

export default App;
