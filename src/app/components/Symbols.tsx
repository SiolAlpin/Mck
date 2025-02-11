import React from "react";

const Symbols: React.FC = () => {
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
            backgroundImage: "url(/images/symbolsp.jpg)",
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
            Symbols
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
        <h2 className="section-title">Coat of Arms</h2>
        <div className="section-content">
          <div className="image-block">
            <img src="/images/favicon.jpg" alt="Iona Abbey" />
          </div>
          <div className="text-block">
          <p>
          Scottish coats of arms are a testament to identity, heritage, and allegiance. First emerging in the medieval era, they served as unique visual markers for individuals, families, or clans, distinguishing them in battle, diplomacy, and ceremonial contexts. Regulated by the Lyon Court, these heraldic designs adhere to traditions that ensure their singularity and authenticity.

Every element in a coat of arms carries deep meaning, symbolizing values, achievements, or lineage. Beyond their symbolic elements, coats of arms promoted clan unity, reinforced authority, and safeguarded cultural legacies. Today, these historic emblems continue to be enduring icons of Scotland's storied past and proud traditions. For Clan MacKinnon, their motto, "Adventus Fortuna Juvat" (Fortune Favors the Bold), reinforces their legacy of courage and resilience in the face of adversity.
</p>
          </div>
        </div>
      </section>


      {/* Sacred Sites and Monuments Section */}
      <section className="sacred-sites">
        <h2 className="section-title">Boar</h2>
        <div className="section-content">
          <div className="text-block">
          <p>
          The boar’s head in Clan MacKinnon’s heraldry is a powerful symbol of bravery, resilience, and resourcefulness. According to legend, a MacKinnon chief found refuge in a cave on the Isle of Mull during a time of conflict. While hiding, he was confronted by a wild boar—a fierce and dangerous creature. With no weapon at hand, the chief fought and killed the boar using only a bone, an act of sheer courage and ingenuity.

This daring event not only secured the chief’s survival but also cemented the boar as a symbol of the clan’s strength and unyielding spirit. The boar’s head became a central feature of the MacKinnon coat of arms, serving as a reminder of their fortitude and the wild, untamed nature of their ancestral lands. The emblem encapsulates the clan’s legacy of facing adversity with courage and determination.
            </p>
          </div>
          <div className="/images/favicon.jpg">
            <img src="/images/boar4201.png" alt="Skye Sacred Ruins" />
          </div>
        </div>
      </section>
    


            {/* Arrival of Christianity Section */}
            <section className="arrival-of-christianity">
        <h2 className="section-title">Castle</h2>
        <div className="section-content">
          <div className="image-block">
            <img src="/images/castle420.png" alt="Iona Abbey" />
          </div>
          <div className="text-block">
          <p>
          The castle in the MacKinnon coat of arms symbolizes strength, resilience, and territorial authority, reflecting the clan’s historical influence. It is believed to represent Dunakin Castle (Castle Maol) on the Isle of Skye, a key stronghold once controlled by the MacKinnons. Originally a Norse fort, Dunakin became a MacKinnon seat of power after the Treaty of Perth in 1266 ended Norse rule in the Hebrides.

In heraldry, castles signify protection and enduring heritage. For Clan MacKinnon, this emblem honors their role as defenders of their lands and their contributions to Scottish history, making it a lasting symbol of their legacy.
            </p>
          </div>
        </div>
      </section>




            {/* Sacred Sites and Monuments Section */}
            <section className="sacred-sites">
        <h2 className="section-title">Boat</h2>
        <div className="section-content">
          <div className="text-block">
          <p>
          The boat symbol in Clan MacKinnon's heritage represents their deep connection to seafaring and migration. The MacKinnons, like many Scottish clans, were part of the early Gaelic migrations across the Scottish Highlands and Islands. The boat not only symbolized their ability to navigate the rugged coastline but also their cultural exchange and resilience. It reflects their legacy as a clan shaped by the seas, enabling them to traverse, settle, and establish their influence in the region. The symbol stands as a testament to their maritime culture and their enduring presence in Scottish history.
            </p>
          </div>
          <div className="/images/favicon.jpg">
            <img src="/images/boat420.png" alt="Skye Sacred Ruins" />
          </div>
        </div>
      </section>



            {/* Arrival of Christianity Section */}
            <section className="arrival-of-christianity">
        <h2 className="section-title">Cross</h2>
        <div className="section-content">
          <div className="image-block">
            <img src="/images/cross420.png" alt="Iona Abbey" />
          </div>
          <div className="text-block">
          <p>
The Clan MacKinnon coat of arms prominently features a cross, emphasizing their profound connection to Saint Columba, a pivotal figure in Scotland's Christian heritage. Saint Columba, who founded Iona Abbey in the 6th century, played a crucial role in spreading Christianity throughout Scotland and beyond.

The MacKinnons, as hereditary custodians of Iona Abbey, maintained this spiritual legacy for centuries, guarding the sacred site and upholding its significance. The cross on their arms reflects this bond with Columba and their role as stewards of faith and tradition. It also symbolizes the clan’s enduring commitment to the Christian principles introduced by Columba, anchoring their legacy in Scotland’s religious and cultural history.
</p>
          </div>
        </div>
      </section>




      {/* Sacred Sites and Monuments Section */}
      <section className="sacred-sites">
        <h2 className="section-title">Traditional Tartan</h2>
        <div className="section-content">
          <div className="text-block">
          <p>
          The traditional MacKinnon tartan is a striking pattern that consists primarily of green, with bold red stripes intersecting it, complemented by white lines that add balance and contrast. This distinctive combination of colors has long been associated with Clan MacKinnon, reflecting its Highland roots. The tartan is deeply tied to the clan’s identity, symbolizing both its connection to the land and its proud history. It remains an important emblem of the MacKinnon heritage, widely recognized for its simplicity and timeless design.
          </p>
          </div>
          <div className="/images/favicon.jpg">
            <img src="/images/tartan.png" alt="Skye Sacred Ruins" />
          </div>
        </div>
      </section>


            {/* Arrival of Christianity Section */}
            <section className="arrival-of-christianity">
        <h2 className="section-title">Ancient Hunting Tartan</h2>
        <div className="section-content">
          <div className="image-block">
            <img src="/images/antart.png" alt="Iona Abbey" />
          </div>
          <div className="text-block">
          <p>
          The MacKinnon Hunting Ancient tartan features a brown-based pattern with shades of green and red. This design was registered with the Lyon Court in 1960, reflecting the clan's historical connection to the highlands. 
            </p>
          </div>
        </div>
      </section>





            {/* Sacred Sites and Monuments Section */}
            <section className="sacred-sites">
        <h2 className="section-title">Modern Hunting Tartan</h2>
        <div className="section-content">
          <div className="text-block">
          <p>
          The MacKinnon Hunting Modern tartan is a dark brown-based pattern with shades of green and white. This design offers a more contemporary interpretation of the traditional hunting tartan, incorporating modern color elements while maintaining the clan's heritage. 

Both tartans serve as a testament to Clan MacKinnon's rich history and enduring legacy.
            </p>
          </div>
          <div className="/images/antart.png">
            <img src="/images/mtart.png" alt="Skye Sacred Ruins" />
          </div>
        </div>
      </section>





 
      




    </div>
  );
};

export default Symbols;
