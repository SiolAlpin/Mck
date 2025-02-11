import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const historyItems = [
  {
    title: "Battle of Harlaw (1411)",
    description: "The Battle of Harlaw, fought between the forces of the Lord of the Isles and the Kingdom of Scotland",
    fullDescription: "The Battle of Harlaw, fought on July 24, 1411, near Inverurie, was a critical moment in Scotland's medieval history, with the MacDonald forces clashing against the Scottish Crown's army. As one of the prominent Highland clans in the region, Clan MacKinnon is believed to have fought alongside the MacDonalds in this bloody confrontation. The battle, which was over control of the northern territories of Scotland, saw fierce fighting and heavy casualties on both sides, though it ended in a stalemate. Clan MacKinnon's involvement in the battle highlights their longstanding alliance with the MacDonald family, particularly during the period of the Lordship of the Isles. This battle, and the fierce loyalty the MacKinnons exhibited toward the MacDonald cause, solidified their place in the complex power dynamics between the Highland clans and the Scottish Crown during the late Middle Ages.",
    coordinates: { lat: 57.307879, lng: -2.413615 },
  },
  {
    title: "Battle of Inverlochy (1431)",
    description: "The Battle of Inverlochy was a key victory for the forces of the Lord of the Isles",
    fullDescription:
      " The Battle of Inverlochy, fought on February 2, 1431, near the village of Inverlochy, was a decisive clash between the forces of Donald of Islay, Lord of the Isles, and the troops of the Scottish Crown, led by the Earl of Mar. Clan MacKinnon, a powerful Highland clan closely allied with the MacDonalds, is believed to have fought on the side of the Lord of the Isles during this engagement. The battle resulted in a resounding victory for the MacDonalds and their allies, with the Crown forces suffering significant losses. The MacKinnons’ involvement in the battle underscores their continued loyalty to the Lord of the Isles during this tumultuous period. This victory strengthened the MacDonald family's influence over the western Highlands, while highlighting the ongoing power struggles between the Highland clans and the Scottish Crown. The Battle of Inverlochy further solidified Clan MacKinnon’s reputation as a formidable force in the region.",
    coordinates: { lat: 56.8221, lng: -5.1077 }, 

  },
  {
    title: "Battle of Flodden (1513)",
    description: "The Battle of Flodden was a significant defeat for Scotland, where Clan MacKinnon, as part of the Scottish army, fought alongside King James IV but ultimately suffered heavy losses.",
    fullDescription:
      " The Battle of Flodden, fought on September 9, 1513, near Branxton, Northumberland, was a pivotal conflict between the Kingdom of Scotland and the Kingdom of England during the Wars of the Roses. Clan MacKinnon, along with other Scottish clans, fought under the command of King James IV. The Scots, seeking to assert their power and maintain territorial integrity, faced the English army led by Thomas Howard, who decisively defeated them. The battle ended in a catastrophic loss for the Scots, including the death of King James IV, marking one of Scotland’s worst military defeats. Clan MacKinnon’s involvement in the battle reflects their enduring loyalty to the Scottish Crown, though many clans, including the MacKinnons, suffered devastating losses. The defeat at Flodden had lasting repercussions for Scotland, with many of its clans facing weakened positions and diminished influence in the wake of the battle.",
    coordinates: { lat: 55.6309, lng: -2.1683 },
  },
  {
    title: "Battle of Pinkie Cleugh (1547)",
    description: " The Battle of Pinkie Cleugh saw Clan MacKinnon fighting for the Scottish forces, who suffered a decisive defeat at the hands of the English during the Anglo-Scottish wars.",
    fullDescription:
      "The Battle of Pinkie Cleugh, fought on September 10, 1547, near Musselburgh in East Lothian, was a major confrontation during the ongoing Anglo-Scottish wars. The Scottish army, under the command of Protector Somerset, faced off against the English forces, which were seeking to dominate Scotland following the death of King Henry VIII. Clan MacKinnon, along with other Scottish clans, fought for the Scottish cause. However, the Scots were decisively defeated by the better-equipped and more disciplined English forces. The battle marked a significant loss for Scotland, leading to further English influence and control over the country in the following years. Despite their defeat, Clan MacKinnon's participation in the battle demonstrated their continued role in defending Scotland's sovereignty. The aftermath of Pinkie Cleugh had lasting effects on Scottish power dynamics, with the nation experiencing further turmoil as the influence of England grew stronger in the region.",
    coordinates: { lat: 55.9304, lng: -3.0211 },
  },
  {
    title: "The Battle of Glen Shiel (1719)",
    description: "The Battle of Glen Shiel was a key conflict during the Jacobite Rising of 1719, in which Clan MacKinnon fought alongside other Highland clans in support of the Stuart cause but suffered a defeat to government forces.",
    fullDescription:
      "The Battle of Glen Shiel, fought on June 10, 1719, in the Scottish Highlands, was part of the wider Jacobite efforts to restore the Stuart monarchy. A force of Jacobite supporters, including members of Clan MacKinnon, gathered to oppose the British government’s control. The Jacobites, commanded by Viscount Strathallan, consisted of Scottish Highlanders and Spanish troops, who had been sent by the Spanish to support the cause. The government forces, led by General Hugh MacKay, engaged the Jacobites at Glen Shiel, defeating them after a fierce battle. Although Clan MacKinnon fought bravely, the Jacobites’ defeat marked the end of this particular phase of the Jacobite uprising. Following the battle, the Highland clans experienced further repression, with many leaders of the Jacobite forces facing execution or exile. Despite their defeat at Glen Shiel, the MacKinnons’ involvement in the fight for the Stuart cause reinforced their loyalty to the Jacobite movement, which had significant consequences for the clan and the wider Highland culture.",
    coordinates: { lat: 57.166389, lng: -5.317222 },
  },
  {
    title: "The Jacobite Risings (1689–1746)",
    description: " The Battle of Culloden was the final confrontation of the Jacobite Rising of 1745, where Clan MacKinnon, along with other Highland clans, fought for the Jacobite cause but suffered a devastating defeat.",
    fullDescription:
      "The Battle of Culloden, fought on April 16, 1746, near Inverness, was the last battle of the Jacobite Rising, a series of uprisings aimed at restoring the Stuart monarchy to the British throne. Led by Charles Edward Stuart, also known as Bonnie Prince Charlie, the Jacobite forces included several Highland clans, including Clan MacKinnon. However, the Scots faced a decisive defeat at the hands of the British government army, commanded by William, Duke of Cumberland. The battle, which was marked by the superior tactics and firepower of the British forces, resulted in heavy casualties for the Jacobites, with many Highlanders, including members of Clan MacKinnon, either killed or captured. The defeat at Culloden ended the Jacobite cause and led to harsh reprisals against the Highland clans, including the disarming of the clans and the destruction of their culture. Despite this, Clan MacKinnon, like many other Highland families, remained steadfast in their heritage, even as the consequences of Culloden reshaped the Scottish Highlands forever.",
    coordinates: { lat:  57.4745, lng:-4.2231 },
  },

];

// Custom Leaflet icon
const customIcon = new Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon that corresponds to marker's location
  popupAnchor: [1, -34], // Popup position relative to the icon
});

const MapUpdater: React.FC<{ center: LatLngExpression }> = ({ center }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, 7.1, { animate: true });
  }, [center, map]);
  return null;
};

const InfoCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % historyItems.length);
    setIsOpen(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + historyItems.length) % historyItems.length
    );
    setIsOpen(false);
  };

  const currentLocation = historyItems[currentSlide];

  return (
    <div
      className="map-section"
      style={{
     
        margin: "40px auto",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {currentLocation.title}
        </h3>
        <p>{currentLocation.description}</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isOpen ? "Read Less" : "Read More"}
        </button>
        {isOpen && (
          <div
            style={{
              marginTop: "20px",
              fontSize: "1.1em",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            <p>{currentLocation.fullDescription}</p>
          </div>
        )}
      </div>

      <MapContainer
        center={currentLocation.coordinates as LatLngExpression}
        zoom={3}
        style={{ width: "100%", height: "40vh", borderRadius: "10px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         
        />
        <MapUpdater center={currentLocation.coordinates as LatLngExpression} />
        <Marker
          position={currentLocation.coordinates as LatLngExpression}
          icon={customIcon}
        >
          <Popup>{currentLocation.title}</Popup>
        </Marker>

      {/* Stadia Alidade Satellite Layer */}
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
      
        maxZoom={20}
        minZoom={0}
        ext="jpg"
      />
        
      </MapContainer>

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "10px",
          top: "71px",
          transform: "translateY(-50%)",
          fontSize: "1.5rem",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          color: "#333",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "10px",
          top: "71px",
          transform: "translateY(-50%)",
          fontSize: "1.5rem",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          color: "#333",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        &#8594;
      </button>


      
    </div>
    
  );
};

export default InfoCarousel;
