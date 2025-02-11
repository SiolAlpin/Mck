import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  {
    name: "Isle of Skye, Scotland",
    description: "The ancestral home of the Clan Mackinnon.",
    lat: 57.5000,
    lon: -5.0000,
  },
  {
    name: "Edinburgh Castle, Scotland",
    description: "A place of significance in Scottish history for many clans, including the Mackinnons.",
    lat: 55.9486,
    lon: -3.1999,
  },
  {
    name: "Mackinnon Clan Gathering, Australia",
    description: "The Clan Mackinnon has a global presence, including a prominent gathering in Australia.",
    lat: -33.8688,
    lon: 151.2093,
  },
];

const ResponsiveLeafletMap: React.FC = () => {
  const mapRef = useRef<any>(null);

  // Resize the map when the window size changes
  useEffect(() => {
    const map = mapRef.current;
    const handleResize = () => {
      if (map) {
        map.invalidateSize();
      }
    };

    // Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});


    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


};

export default ResponsiveLeafletMap;
