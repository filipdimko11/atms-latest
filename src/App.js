import { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const TOKEN =
  "pk.eyJ1Ijoiam9mZmRhbWlkbyIsImEiOiJjbGhiMGszY3UwbXdvM2NsdDByNzk0aG81In0.7iFNWjEsz_Bom1GzXb_DuA";

function App() {
  const [newPlace, setNewPlace] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 39.077,
    longitude: -94.3436,
    zoom: 3.5,
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
        mapboxApiAccessToken={TOKEN}
        width="100%"
        height="100%"
        onViewportChange={setViewport}
        interactive={true}
        onDrag={handleViewportChange}
        scrollZoom={true}
        dragPan={true} // enable dragging
        dragRotate={false} // disable rotation
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
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={39.077}
            longitude={-94.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={39.077}
            longitude={-94.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={39.077}
            longitude={-94.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={45.077}
            longitude={-104.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={44.077}
            longitude={-72.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>

          <Marker
            latitude={42.077}
            longitude={-114.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#FFFF00"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={39.077}
            longitude={-104.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={36.077}
            longitude={-91.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={41.077}
            longitude={-105.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={31.077}
            longitude={-86.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#FFFF00"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={35.077}
            longitude={-92.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={33.077}
            longitude={-94.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={46.466}
            longitude={-89.7015}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={45.0356}
            longitude={-94.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#FFFF00"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={39.0356}
            longitude={-100.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={35.0356}
            longitude={-105.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#808080"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
          <Marker
            latitude={42.0356}
            longitude={-104.343}
            offsetLeft={-0.35 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            color="#FFFF00"
            style={{
              cursor: "pointer",
            }}
          ></Marker>
        </>
      </ReactMapGl>
    </div>
  );
}

export default App;
