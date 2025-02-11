import React from "react";

const History: React.FC = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "62vh",
          width: "100vw",
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
            backgroundImage: "url(/images/kells.jpg)",
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
            Clan History
          </h1>
          <p
            style={{
              fontSize: "1.5rem", // Larger font size for the paragraph
              lineHeight: "1.6", // Better line spacing for readability
            }}
          >
            
          </p>
        </div>
      </section>

       {/* Arrival of Christianity Section */}
       <section className="arrival-of-christianity">
        <h2 className="section-title">Origin of Clan Mackinnon</h2>
        <div className="section-content">
          <div className="image-block">
            <img src="/images/macpic.jpg" alt="Iona Abbey" />
          </div>
          <div className="text-block">
          <p>
          The origins of Clan MacKinnon trace back to the early medieval period in Scotland, with the clan’s roots firmly planted in the Gaelic culture of the Highlands. The MacKinnons are believed to be descendants of the ancient Gaelic kings of Scotland, specifically hailing from the MacNeill family. Early records suggest that they were a significant family within the Kingdom of Dalriada, which spanned parts of what are now Scotland and Ireland. Over time, the MacKinnons established themselves as a powerful and influential clan, holding lands primarily on the islands of Mull and Skye.
            </p>
          </div>
        </div>
      </section>


      {/* Early Inhabitants Section */}
      <section className="early-inhabitants">
        <h2 className="section-title">Viking Invasions</h2>
        <div className="section-content">
          <div className="text-block">
            <p>
            During the Viking Age (8th–11th centuries), Mull and Skye faced Norse raids that reshaped their history. These islands, rich in resources and strategically located, attracted Viking raiders who initially plundered coastal settlements and sacred sites. Notably, Iona Abbey, off the coast of Mull, a key Christian center, was raided multiple times between 795 and 825 AD, marking a period of upheaval for the region.

Over time, the Norse transitioned from raiders to settlers, establishing control over the Hebrides as part of the Kingdom of the Isles. Their influence is still evident in place names and the cultural blending of Norse and Gaelic traditions. Despite the initial devastation, the synthesis of these cultures helped shape the unique identity of Mull, Skye, and the broader Hebridean region.
</p>
          </div>
          <div className="image-block">
            <img src="/images/vikingra.png" alt="Pictish Stone" />
          </div>
        </div>
      </section>



      {/* Arrival of Christianity Section */}
      <section className="arrival-of-christianity">
        <h2 className="section-title">Clan Mackinnon & Robert the Bruce</h2>
        <div className="section-content">
          <div className="image-block">
            <img src="/images/robertbruce.jpg" alt="Iona Abbey" />
          </div>
          <div className="text-block">
          <p>
            Clan MacKinnon is celebrated for its steadfast loyalty to Robert the Bruce during Scotland’s struggle for independence. After Bruce’s defeat at the Battle of Methven in 1306, the MacKinnons provided him with shelter and support in the Highlands, aiding his survival and recovery.

This crucial assistance allowed Bruce to regroup and eventually secure his legendary victory at the Battle of Bannockburn in 1314. In gratitude, Robert the Bruce granted the MacKinnons lands on Skye, significantly enhancing their influence in the region. This reward not only solidified the clan's status as loyal supporters but also ensured their prominent place in the history of the Highlands and Scotland’s fight for sovereignty. The MacKinnons’ role in these events is an enduring symbol of their commitment to the nation’s cause.
           </p>
          </div>
        </div>
      </section>






      {/* Sacred Sites and Monuments Section */}
      <section className="sacred-sites">
        <h2 className="section-title">Ranald Mackinnon</h2>
        <div className="section-content">
          <div className="text-block">
          <p>
            Born on the Isle of Skye, Scotland, in 1737, Ranald hailed from a lineage connected to the MacKinnon clan. In 1758, he was commissioned as a lieutenant in the 77th Regiment of Foot, known as Montgomerie's Highlanders. During the French and Indian War, he participated in several key campaigns, including General John Forbes's expedition against Fort Duquesne in 1758. In 1760, MacKinnon sustained injuries during the Anglo-Cherokee War in North Carolina but recovered to join the expedition to retake St. John's, Newfoundland, from the French in 1762.
            After retiring from military service in 1783, MacKinnon continued to influence the development of his community. He passed away on April 28, 1805, in Shelburne, Nova Scotia, and was buried in Christchurch Anglican Cemetery. His legacy includes the naming of the Municipality of the District of Argyle, reflecting his efforts to transplant Scottish heritage to Nova Scotia. 

MacKinnon's life exemplifies the experiences of Scottish emigrants who played pivotal roles in the military and colonial history of North America during the 18th century.
            </p>
          </div>
          <div className="/images/ranald.jpg">
            <img src="/images/ranald.jpg" alt="Skye Sacred Ruins" />
          </div>
        </div>
      </section>

       {/* Arrival of Christianity Section */}
       <section className="arrival-of-christianity">
        <h2 className="section-title">MacKinnon Emigration</h2>
        <div className="section-content">
          <div className="image-block">
            <img src="/images/mulgravemm.png" alt="Iona Abbey" />
          </div>
          <div className="text-block">
          <p>
            In the 18th and 19th centuries, many members of Clan MacKinnon, including my ancestors, left the Hebrides in search of new opportunities. While my family settled in Mulgrave, Nova Scotia, other MacKinnons emigrated to Australia, New Zealand, and various parts of Canada, such as Ontario and British Columbia, and the United States.

Nova Scotia holds a special place as the only region outside the UK where Gaelic signs are still displayed, reflecting the strong Scottish heritage maintained by families like mine. My ancestors brought their traditions with them, contributing to the vibrant Highland culture in Nova Scotia. Today, the MacKinnon name continues to be honored across the globe, as descendants like myself preserve the clan's legacy.
           </p>
          </div>
        </div>
      </section>










    </div>
  );
};

export default History;
