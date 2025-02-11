import React, { useState } from "react";

const Footer = () => {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources((prev) => !prev);
  };

  return (
    <footer style={{ padding: "10px", boxShadow: "none", }}>


      <button
        onClick={toggleSources}
        style={{
          cursor: "pointer",
          background: "none",
          border: "none",
          color: "#007acc",
          textDecoration: "underline",
          fontSize: "14px",
          padding: "0",
          marginBottom: "10px",
        }}
      >
        {showSources ? "Hide Credits" : "Image Credits"}
      </button>

      {showSources && (
        <div
          style={{
            marginTop: "10px",
            fontSize: "14px",
            lineHeight: "1.6",
            backgroundColor: "#e9ecef",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        >
          <p>
            <strong>Sources:</strong>
          </p>
         
                                 
                                    <p className="attribution">
   Castle Maol by <a href="https://commons.wikimedia.org/wiki/User:Schwerdf" target="_blank" rel="noopener noreferrer">August Schwerdfeger</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:Castle_Moil,_Skye_2017-05-20.jpg" target="_blank" rel="noopener noreferrer">
      Wikimedia Commons
    </a>.
  </p>

                             
                                    <p className="attribution">
    Bagpipe Player by <a href="https://www.pexels.com/@gene-taylor-257856/" target="_blank" rel="noopener noreferrer">Gene Taylor</a>, 
    licensed under{' '}
    <a>
      Free use
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:Castle_Moil,_Skye_2017-05-20.jpg" target="_blank" rel="noopener noreferrer">
     Pexels
    </a>.
  </p>



                                 
                                    <p className="attribution">
    Fingals Cave by <a href="https://www.flickr.com/people/60006733@N05" target="_blank" rel="noopener noreferrer">dun_deagh</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 2.0
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:Fingal%27s_Cave_Staffa_(6169337354).jpg" target="_blank" rel="noopener noreferrer">
      Wikimedia Commons
    </a>.
  </p>


                                     
                                      <p className="attribution">
    Neist Point Lighthouse by <a href="https://www.pexels.com/@ken-cheung-3355734/" target="_blank" rel="noopener noreferrer">Ken Cheung</a>, 
    licensed under{' '}
    <a>
      Free Use
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:Castle_Moil,_Skye_2017-05-20.jpg" target="_blank" rel="noopener noreferrer">
     Pexels
    </a>.
  </p>




                               
                                    <p className="attribution">
    Inner Hebrides Map by <a href="https://commons.wikimedia.org/wiki/User:Barryob" target="_blank" rel="noopener noreferrer">Barryob </a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 3.0
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:Inner_Hebrides.png" target="_blank" rel="noopener noreferrer">
      Wikimedia Commons
    </a>.
  </p>




           
            <p className="attribution">
    Tobermory waterfront by <a href="https://commons.wikimedia.org/wiki/User:DeFacto" target="_blank" rel="noopener noreferrer">DeFacto</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:Tobermory_waterfront.jpg" target="_blank" rel="noopener noreferrer">
      Wikimedia Commons
    </a>.
  </p>
                             
  <p className="attribution">
    Catle Maol by <a href="https://www.geograph.org.uk/profile/5309" target="_blank" rel="noopener noreferrer">Lisa Jarvis</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 2.0
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:Castle_Maol,_Kyleakin,_Skye_-_geograph.org.uk_-_560573.jpg" target="_blank" rel="noopener noreferrer">
      Wikimedia Commons
    </a>.
  </p>

                            
                                  <p className="attribution">
    Iona Abby by <a href="https://www.geograph.org.uk/profile/28779" target="_blank" rel="noopener noreferrer">Andrew Wood</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 2.0
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:Iona_Abbey_-_geograph.org.uk_-_5960307.jpg" target="_blank" rel="noopener noreferrer">
      Wikimedia Commons
    </a>.
  </p>

                             
                                    <p className="attribution">
    {"St Maelrubha's Church"} by <a href="https://www.geograph.org.uk/profile/9148" target="_blank" rel="noopener noreferrer">Ian Taylor</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 2.0
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:St_Maelrubha%27s_Church,_Kilmelford_-_geograph.org.uk_-_2067900.jpg" target="_blank" rel="noopener noreferrer">
      Wikimedia Commons
    </a>.
  </p>

                                 
                                    <p className="attribution">
    Mackinnon Cross by <a href="https://www.historicenvironment.scot/archives-and-research/archives-and-collections/properties-in-care-collections/object/cross-shaft-mackinnons-cross-1489-medieval-iona-abbey-124" target="_blank" rel="noopener noreferrer">Historic Environment Scotland </a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Fair_use" target="_blank" rel="noopener noreferrer">
      Fair Use
    </a>

  </p>
  


                                 
                                    <p className="attribution">
    Mackinnon Cave Entrance by <a href="https://www.geograph.org.uk/profile/37389" target="_blank" rel="noopener noreferrer">Karl and Ali</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 2.0
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:The_entrance_porch_to_Mackinnon%27s_Cave_-_geograph.org.uk_-_3374919.jpg" target="_blank" rel="noopener noreferrer">
      Wikimedia Commons
    </a>.
  </p>


                                
                                    <p className="attribution">
    Mackinnon Graveslab by <a href="https://www.historicenvironment.scot/archives-and-research/archives-and-collections/properties-in-care-collections/object/grave-slab-gilbride-mackinnon-14th-century-medieval-iona-abbey-27038" target="_blank" rel="noopener noreferrer">Historic Environment Scotland </a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Fair_use" target="_blank" rel="noopener noreferrer">
      Fair Use
    </a>

  </p>















                            
                                    <p className="attribution">
   {"Book of Kells"} by <a target="_blank" rel="noopener noreferrer">Unattributed </a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank" rel="noopener noreferrer">
      Public Domain
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:KellsFol032vChristEnthroned.jpg" target="_blank" rel="noopener noreferrer">
      Wikimedia Commons
    </a>.
  </p>


                              
                                    <p className="attribution">
    {"Mackinnon Member Painting"} by <a target="_blank" rel="noopener noreferrer">Robert Ronald McIan (1803-1856).</a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank" rel="noopener noreferrer">
     Public Domain
    </a>
    <a href="https://commons.wikimedia.org/wiki/File:MacKinnon_(R._R._McIan).jpg" target="_blank" rel="noopener noreferrer">
   
    </a>.
  </p>


                               
                                    <p className="attribution">
    {"Viking Raid Lindisfarne"} by <a target="_blank" rel="noopener noreferrer">Tom Lovell.</a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Fair_use" target="_blank" rel="noopener noreferrer">
     Fair Use
    </a>
    <a href="https://en.wikipedia.org/wiki/Tom_Lovell" target="_blank" rel="noopener noreferrer">
      
    </a>.
  </p>




                              
                                    <p className="attribution">
      {"Robert the Bruce"} by <a target="_blank" rel="noopener noreferrer">Edward Harding  (1755–1840)</a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank" rel="noopener noreferrer">
     Public Domain
    </a>
    <a href="https://www.wikidata.org/wiki/Q18671041" target="_blank" rel="noopener noreferrer">
      
    </a>.
  </p>

                        
                                    <p className="attribution">
    {"Ranald Mackinnon"} by <a target="_blank" rel="noopener noreferrer">Unkown</a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank" rel="noopener noreferrer">
     Public Domain
    </a>
    <a href="https://en.wikipedia.org/wiki/File:Ranald_MacKinnon_portrait_in_84th_Reg%27t._uniform.jpg" target="_blank" rel="noopener noreferrer">
      
    </a>.
  </p>


                                 
                                      <p className="attribution">
    {"Mulgrave Photo"} by <a target="_blank" rel="noopener noreferrer">Me</a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/All_rights_reserved" target="_blank" rel="noopener noreferrer">
     All rights Reserved
    </a>
    <a href="https://ClanMackinnon.ca" target="_blank" rel="noopener noreferrer">
      
    </a>.
  </p>


                                 
                                    <p className="attribution">
    {"1746 Battle of Culloden"} by <a target="_blank" rel="noopener noreferrer">David Morier </a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank" rel="noopener noreferrer">
     Public Domain
    </a>
    <a href="https://commons.wikimedia.org/wiki/File:The_Battle_of_Culloden.jpg" target="_blank" rel="noopener noreferrer">

    </a>.
  </p>


                               
                                      <p className="attribution">
    {"Cleric-Knight-Workman"} by <a target="_blank" rel="noopener noreferrer">Unkown </a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank" rel="noopener noreferrer">
     Public Domain
    </a>
    <a href="https://commons.wikimedia.org/wiki/File:Cleric-Knight-Workman.jpg" target="_blank" rel="noopener noreferrer">

    </a>.
  </p>

                                 
                                      <p className="attribution">
    {"Buckingham Palace Gates"} by <a target="_blank" rel="noopener noreferrer">Unkown </a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
    CC BY-SA 3.0
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:Buckingham_Gate_1_db.jpg" target="_blank" rel="noopener noreferrer">
    Wikimedia Commons
    </a>.
  </p>


                                   
                                      <p className="attribution">
    {"Mackinnon Arms"} by <a href= "https://en.wikipedia.org/wiki/User:Bryanmackinnon" target="_blank" rel="noopener noreferrer">Bryan Mackinnon </a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
    CC BY-SA 3.0
    </a>, via{' '}
    <a href="https://en.wikipedia.org/wiki/File:MacKinnon_Arms.jpg" target="_blank" rel="noopener noreferrer">
    Wikimedia Commons
    </a>.
  </p>

                                 
                                        <p className="attribution">
    {"Traditional Tartan"} by <a target="_blank" rel="noopener noreferrer">Celtus</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/2.5/" target="_blank" rel="noopener noreferrer">
    CC BY-SA 2.5
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:MacKinnon_tartan_(Vestiarium_Scoticum).png" target="_blank" rel="noopener noreferrer">
    Wikimedia Commons
    </a>.
  </p>

                                
                                       <p className="attribution">
    {"Ancient Hunting Tartan"} by <a target="_blank" rel="noopener noreferrer">Celtus</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/2.5/" target="_blank" rel="noopener noreferrer">
    CC BY-SA 2.5
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:MacKinnon_Hunting_tartan_(Lyon_Court).jpg" target="_blank" rel="noopener noreferrer">
    Wikimedia Commons
    </a>.
  </p>


                                   
                                       <p className="attribution">
    {"Modern Hunting Tartan"} by <a target="_blank" rel="noopener noreferrer">The Scottish Register of Tartans</a>, 
    licensed under{' '}
    <a href="https://creativecommons.org/licenses/by-sa/2.5/" target="_blank" rel="noopener noreferrer">
    CC BY-SA 2.5
    </a>, via{' '}
    <a href="https://commons.wikimedia.org/wiki/File:MacKinnon_Hunting_Modern_tartan.jpg" target="_blank" rel="noopener noreferrer">
    Wikimedia Commons
    </a>.
  </p>

                                      
                                         <p className="attribution">
    {"Kenneth Macalpin"} by <a target="_blank" rel="noopener noreferrer">Jacob de Wet II</a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank" rel="noopener noreferrer">
    Public Domain
    </a>
    <a href="https://commons.wikimedia.org/wiki/File:Kenneth_MacAlpin.jpg" target="_blank" rel="noopener noreferrer">

    </a>.
  </p>


                                  
                                         <p className="attribution">
    {"Alpin Tree"} by <a href="https://en.wikipedia.org/wiki/User:TheDanman11" target="_blank" rel="noopener noreferrer">TheDanman11</a>, 
    licensed under{' '}
    <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank" rel="noopener noreferrer">
    Public Domain
    </a>
    <a href="https://en.wikipedia.org/wiki/File:Siol_Alpin_Family_Tree.jpg" target="_blank" rel="noopener noreferrer">

    </a>.
  </p>


        </div>
      )}
    </footer>
  );
};

export default Footer;
