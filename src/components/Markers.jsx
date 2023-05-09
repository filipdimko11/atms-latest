import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { markersData } from "./markersData";
import { yellowMarkersData } from "./yellowMarkersData";
import MapPopup from "./MapPopup";

const Markers = ({ viewport, id }) => {
  console.log(id);
  const [popupInfo, setPopupInfo] = useState(null);
  return (
    <div>
      {/* {popupInfo &&
        yellowMarkersData.map((marker, index) => (
          <MapPopup
            key={index}
            imgUrl={yellowMarkersData.imgUrl}
            latitude={yellowMarkersData.latitude}
            longitude={yellowMarkersData.longitude}
            id={id}
            onClose={() => setPopupInfo(null)}
          />
        ))} */}

      <div>
        {yellowMarkersData.map((marker, index) => (
          <React.Fragment key={index}>
            <Marker
              key={index}
              latitude={marker.latitude}
              longitude={marker.longitude}
              offsetLeft={-0.35 * viewport.zoom}
              onClick={() => setPopupInfo(index)}
              offsetTop={-7 * viewport.zoom}
              color="#FFF700"
              style={{
                cursor: "pointer",
              }}
            />
            {popupInfo === index && (
              <MapPopup
                key={index}
                name={marker.name}
                imgUrl={marker.imgUrl}
                latitude={marker.latitude}
                longitude={marker.longitude}
                id={id}
                onClose={() => setPopupInfo(null)}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {markersData.map((marker, index) => (
        <Marker
          key={index}
          latitude={marker.latitude}
          longitude={marker.longitude}
          offsetLeft={-0.35 * viewport.zoom}
          offsetTop={-7 * viewport.zoom}
          color="#808080"
          style={{
            cursor: "grab",
          }}
        />
      ))}
    </div>
  );
};

export default Markers;
