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

  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <ReactMapGl
        {...viewport}
        width="100%"
        height="100%"
        mapboxAccessToken={TOKEN}
        scrollZoom={true}
        interactive={true}
        onDrag={handleViewportChange}
        dragPan={true}
        onViewportChange={handleViewportChange}
        dragRotate={false}
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
          <Marker
            latitude={42.077}
            longitude={-110.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#FFFF00"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={31.304}
            longitude={-87.806}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={36.4}
            longitude={-91.43}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={29.78}
            longitude={-90.74}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={33.304}
            longitude={-84.394}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={32.52}
            longitude={-80.68}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={31.48}
            longitude={-82.39}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={29.511}
            longitude={-82.03}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={47.077}
            longitude={-105.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={41.077}
            longitude={-110.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={38.077}
            longitude={-107.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={34.077}
            longitude={-105.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={29.077}
            longitude={-95.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={34.077}
            longitude={-110.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "default",
            }}
          ></Marker>
          <Marker
            latitude={42.077}
            longitude={-89.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#FFFF00"
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
