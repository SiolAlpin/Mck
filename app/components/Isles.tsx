import React from "react";

const MullSkyePage: React.FC = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "62vh",
          textAlign: "center",
          overflow: "hidden", // Prevents any unwanted overflow
  
        }}
      >
        {/* Fixed Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/islestop.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed", // Keeps the background fixed
            zIndex: -1, // Places the background behind the text
          }}
        />
        <div
          style={{
            position: "relative", // Keeps the text content above the background
            zIndex: 1, // Ensures the text is on top of the image
            color: "#fff",
            padding: "20px",
            display: "inline-block", // Keeps the border around the text itself
            boxSizing: "border-box", // Ensures padding doesn't push the border out
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
            borderRadius: "10px", // Optional: adds rounded corners to the box
          }}
        >
          {/* Enlarged Text */}
          <h1
            style={{
              fontSize: "2.8rem", // Larger font size for the main heading
            }}
          >
            The Isles of Mull and Skye
          </h1>

        </div>
      </section>


 



      {/* about the isles */}
      <section className="early-inhabitants">
        <h2 className="section-title">About the Isles</h2>
        <div className="section-content">
          <div className="text-block">
            <p>
            {"The Hebrides, particularly the Isles of Mull and Skye, hold immense significance in the cultural and historical fabric of Scotland. Known for their rugged landscapes, towering cliffs, and windswept moors, these islands have been central to the history of the Scottish isles for centuries. They were key centers of power, trade, and settlement, with clans like the MacKinnons deeply rooted in their history. The dramatic terrain of Mull and Skye provided natural fortifications, while their strategic coastal positions allowed for control of maritime routes. These islands have witnessed countless events, from ancient Norse influence to the rise of Gaelic clans, cementing their role as a cornerstone of Scotland's storied past"}

            </p>
          
          </div>
          <div className="image-block">
            <img src="/images/innerheb.png"  alt="Iona Abbey" />
          </div>
        </div>
      </section>


          {/* Arrival of Christianity Section */}
      <section className="arrival-of-christianity">
        <h2 className="section-title">Isle of Mull</h2>
        <div className="section-content">
          <div className="image-block">
            <img src="/images/tobermory.jpg" alt="Iona Abbey" />
              </div>
          <div className="text-block">
          <p>
        
        {"The Isle of Mull, located near the historically significant island of Iona, holds a vital place in the story of Clan MacKinnon. As a stronghold and cultural heartland for the clan, Mull played a central role in shaping their identity and influence in the Hebrides. The island’s proximity to Iona, a sacred site of early Christianization in Scotland, highlights its spiritual and historical importance. Mull’s connection to Iona reflects the clan’s deep ties to the Christian heritage that shaped the region, while its rugged landscapes and strategic position in the Hebrides made it an enduring symbol of MacKinnon strength and legacy."}
            </p>
          </div>
        </div>
      </section>


      {/* Early Inhabitants Section */}
      <section className="early-inhabitants">
        <h2 className="section-title">Isle of Skye</h2>
        <div className="section-content">
          <div className="text-block">
            <p>
            {"The Isle of Skye, particularly Castle Moil at its southern tip, is deeply connected to Clan MacKinnon’s history. Perched above the Sea of the Hebrides, the castle served as both a strategic stronghold and a center for maritime control. The MacKinnons used its position to dominate key sea routes between Skye and the mainland, charging tolls, or customs, to passing ships. This practice, common among Highland clans in the 15th and 16th centuries, provided vital income to fund military endeavors and support the clan’s activities. Castle Moil also allowed the MacKinnons to monitor trade, assert authority over the surrounding waters, and defend against rivals. Though the castle now lies in ruins, its role in fostering the clan’s power and influence remains a significant part of their legacy."}
            </p>
          </div>
          <div className="image-block">
            <img src="/images/castlema.jpg" alt="Pictish Stone" />

          </div>
        </div>
      </section>

      {/* Arrival of Christianity Section */}
      <section className="arrival-of-christianity">
        <h2 className="section-title">The Arrival of Christianity</h2>
        <div className="section-content">
          <div className="image-block">
            <img src="/images/ionabby.jpg" alt="Iona Abbey" />
          </div>
          <div className="text-block">
            <p>
            {"The Isles of Mull and Skye, with their rugged beauty and rich history, were once part of the Pictish territories and played a pivotal role in Scotland’s cultural evolution. Mull, near the sacred isle of Iona, became a key center for Christianity's spread during the 6th century, led by St. Columba and his followers. These islands, marked by ancient strongholds and dramatic landscapes, reflect the Hebrides’ vital role in Scotland’s transition from paganism to Christian faith."}
            </p>
          </div>
        </div>
      </section>

      {/* Sacred Sites and Monuments Section */}
      <section className="sacred-sites">
        <h2 className="section-title">Sacred Sites and Monuments</h2>
        <div className="section-content">
          <div className="text-block">
            <p>

            {"The Isles of Skye and Mull are home to numerous sacred sites that reflect their deep spiritual and historical heritage."}

{"On Mull, MacKinnon’s Cave is steeped in clan legend and may also have served as a place of refuge and worship for early Christians. Nearby, Iona Abbey, founded by Saint Columba, became a vital center for spreading Christianity throughout Scotland. The island also features St. Oran’s Chapel, an ancient site predating the abbey, adding layers of historical intrigue to the region."}

{"On Skye, St. Maelrubha’s Church, named after a 7th-century Irish monk, and the medieval Cill Chriosd near Broadford, stand as testaments to the island’s early Christian communities. These ruins, surrounded by the island’s dramatic landscapes, offer a tangible connection to its spiritual past. Together, these sacred sites embody the unique blend of history, faith, and legend that defines the Hebrides."}
</p>
          </div>
          <div className="/images/image1.jpg">
            <img src="/images/skyechap.jpg" alt="Skye Sacred Ruins" />
          </div>
        </div>
      </section>



      {/* Image Gallery Section */}
      <section className="image-gallery">
        <h2 className="section-title">Gallery of Sacred Sites and History</h2>
        <div className="gallery">
          <div className="gallery-item">
            <a href="https://www.historicenvironment.scot/archives-and-research/archives-and-collections/properties-in-care-collections/object/cross-shaft-mackinnons-cross-1489-medieval-iona-abbey-124">
            <img src="/images/mackinnoncross.jpg" alt="Mull Landscape" />
            <p className="image-caption">Mackinnon Cross Dedicated to the last Benedictine Abbot of Iona</p>
            </a>
          </div>
          <div className="gallery-item">
             <a href="https://registry.gsg.org.uk/sr/sitedetails.php?id=2557">
            <img src="/images/mackincave.jpg" alt="Skye Panorama" />
            {<p className="image-caption">{"Mackinnon's Cave on Mull"}</p>}
            </a>
          </div>
          <div className="gallery-item">
             <a href="https://www.historicenvironment.scot/archives-and-research/archives-and-collections/properties-in-care-collections/object/grave-slab-gilbride-mackinnon-14th-century-medieval-iona-abbey-27038">
            <img src="/images/mackinnongrave.jpg" alt="Pictish Carving" />
            <p className="image-caption">Mackinnon Graveslab from Iona</p>
          </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MullSkyePage;
