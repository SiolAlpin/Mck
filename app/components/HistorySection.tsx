import React from "react";



const HistorySection = () => {
  return (
    <section
      style={{
        padding: "62xpx 20px 60px", // Adjusted top and bottom padding for better fitting
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        textAlign: "center",
      }}
    >
      



      {/* Early Inhabitants Section */}
      <section className="early-inhabitants">
        <h2 className="section-title">Legacy</h2>
        <div className="section-content">
          <div className="text-block">
          <p>
          {"The legacy of Clan MacKinnon is deeply rooted in their bravery and loyalty throughout Scotland's turbulent history. Their unwavering support for Robert the Bruce during the Wars of Independence and participation in pivotal conflicts like the Battles of Harlaw and Inverlochy (1431) underscore their crucial role in shaping Scotland’s story. They made great sacrifices at Flodden (1513) and remained steadfast during the Jacobite risings, fighting valiantly at Glen Shiel (1719) and Culloden (1746), even in the face of devastating losses. These battles, though often marked by hardship, showcased their resilience and commitment to their principles. The MacKinnons’ actions not only defended their lands and kin but also secured their place in the annals of Scottish history, embodying the indomitable spirit of the Highland clans. Their story endures as a testament to courage, loyalty, and an unyielding dedication to their heritage."}
           </p>
          </div>
          <div className="image-block">
            <img src="/images/legacy1.jpg" alt="Pictish Stone" />
          </div>
        </div>
      </section>


    </section>






  );
};

export default HistorySection;
