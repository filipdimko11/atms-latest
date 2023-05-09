import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { useParams } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./components/Markers";
const TOKEN =
  "pk.eyJ1Ijoiam9mZmRhbWlkbyIsImEiOiJjbGhiNDNxN2UwbnF1M2xzMnp3cHc0NnoxIn0.djxhmC2hkS7Y_e18lAao4A";

function App() {
  const [newPlace, setNewPlace] = useState(null);
  const logo = "https://trbticket.com/wp-content/uploads/2023/03/l1.png";

  const searchParams = new URLSearchParams(window.location.search);
  const id = "melania21";

  const [viewport, setViewport] = useState({
    latitude: 39.077,
    longitude: -94.3436,
    zoom: 5.5,
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
      <header className="fixed w-full top-0 z-10 bg-white shadow-lg flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img className="h-12 my-auto" src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </header>
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
        <Markers viewport={viewport} id={id} />
      </ReactMapGl>
    </div>
  );
}

export default App;
