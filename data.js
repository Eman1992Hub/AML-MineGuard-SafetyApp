// ============================================
// MINEGUARD APP DATA
// All content stored locally for offline use
// 229 Mining Terms (A–Z)
// ============================================

const GLOSSARY_TERMS = [
  // A
  { term: "Adit", short: "Horizontal mine entry", definition: "A horizontal passage or tunnel driven into the side of a hill or mountain to access a mine. Unlike a shaft, an adit is driven at or near the surface level and does not require hoisting equipment.", category: "Mining Structures" },
  { term: "Alluvial Mining", short: "Mining from riverbeds/plains", definition: "The extraction of minerals deposited by water action in riverbeds, floodplains, or ancient water channels. Gold and diamond alluvial mining is common in West Africa.", category: "Mining Methods" },
  { term: "Angle of Repose", short: "Maximum stable slope angle", definition: "The steepest angle at which a material — such as waste rock or soil — can be piled without sliding. Exceeding the angle of repose causes slope failures and dangerous landslides.", category: "Geotechnical" },
  { term: "Artisanal Mining", short: "Small-scale informal mining", definition: "Small-scale, informal mining carried out by individuals or small groups using basic tools. Often unregulated, it poses significant safety and environmental risks.", category: "Mining Methods" },
  { term: "Assay", short: "Ore quality chemical test", definition: "A chemical analysis of ore or mineral samples to determine the content and grade of valuable metals or minerals present. Results guide mine planning and ore processing decisions.", category: "Testing & Analysis" },
  { term: "Authorized Person", short: "Certified mine worker", definition: "A person designated by the mine manager as competent and authorized to perform specific tasks or enter specific areas of the mine site.", category: "Safety & Personnel" },
  { term: "Aerial Tramway", short: "Overhead material transport", definition: "A cable-supported system used to transport ore, equipment, or personnel between different elevations on a mine site, particularly in mountainous or steep terrain.", category: "Mining Equipment" },
  { term: "Acid Mine Drainage (AMD)", short: "Toxic acidic mine water", definition: "Water that becomes acidic after reacting with sulfide minerals exposed during mining. AMD is one of the most serious environmental hazards in mining and can contaminate water supplies for decades.", category: "Environment" },
  { term: "Airleg", short: "Pneumatic drill support", definition: "A pneumatic device used to support and feed a rock drill during underground drilling operations. It allows the driller to control the thrust and direction of the drill bit.", category: "Mining Equipment" },

  // B
  { term: "Backfill", short: "Void filling material", definition: "Material used to refill excavated areas or voids in a mine. Backfill supports the surrounding rock, controls subsidence, and can be made from waste rock, tailings, or cemented paste.", category: "Ground Support" },
  { term: "Barren Zone", short: "Ore-free rock area", definition: "A section of rock within or around a mineral deposit that contains little or no economic mineral content. Barren zones must be identified and separated from ore during mining.", category: "Geology" },
  { term: "Bench", short: "Horizontal mine step/ledge", definition: "A horizontal ledge or step in an open pit mine. Benches are worked progressively downward and provide platforms for drilling, blasting, loading, and haulage operations.", category: "Open Pit Mining" },
  { term: "Bench Height", short: "Vertical step measurement", definition: "The vertical distance between two adjacent bench levels in an open pit mine. Bench height is determined by the type of equipment used and rock conditions, and directly affects slope stability.", category: "Open Pit Mining" },
  { term: "Blasting", short: "Controlled rock fragmentation", definition: "The controlled use of explosives to break rock or ore in mining operations. Requires strict safety protocols, licensed blasting personnel, exclusion zones, and formal blast notifications.", category: "Drilling & Blasting" },
  { term: "Blast Hole", short: "Hole drilled for explosives", definition: "A hole drilled into rock in which explosives are loaded for blasting. The diameter, depth, and pattern of blast holes are engineered based on rock properties and the desired fragmentation size.", category: "Drilling & Blasting" },
  { term: "Blast Pattern", short: "Drill hole layout design", definition: "The geometric arrangement of blast holes across a face or bench, including spacing, burden, and stagger. A well-designed blast pattern ensures effective fragmentation and minimizes flyrock.", category: "Drilling & Blasting" },
  { term: "Block Caving", short: "Underground mass mining method", definition: "An underground mining method where a large block of ore is undercut to allow it to collapse under gravity. One of the lowest-cost underground mining methods, used for large low-grade deposits.", category: "Mining Methods" },
  { term: "Borehole", short: "Drilled exploration hole", definition: "A narrow hole drilled into the ground for exploration, water supply, or geotechnical investigation. Borehole samples provide critical information about the geology and grade of a deposit.", category: "Exploration" },
  { term: "Bund / Berm", short: "Safety embankment", definition: "An earthen wall or embankment built at the edge of haul roads, pit crests, and dump edges to prevent vehicles from going over. Height must be at least half the wheel diameter of the largest operating vehicle.", category: "Safety Structures" },
  { term: "Burden", short: "Rock between hole and face", definition: "The distance between the front row of blast holes and the free face of the bench being blasted. Correct burden is critical for effective fragmentation and to prevent flyrock.", category: "Drilling & Blasting" },
  { term: "Bullion", short: "Refined precious metal bar", definition: "A bulk quantity of precious metal, typically gold or silver, that has been refined and cast into bars or ingots. Bullion is the final product of many gold mining operations.", category: "Processing" },

  // C
  { term: "Cage", short: "Underground personnel lift", definition: "An enclosed elevator used to transport workers and materials up and down a mine shaft. Must be maintained, tested regularly, and operated by a certified hoist operator.", category: "Mining Equipment" },
  { term: "Cap Rock", short: "Rock overlying ore body", definition: "Hard rock that sits directly above an ore body or softer formation. Cap rock must be drilled and blasted before the ore below can be accessed.", category: "Geology" },
  { term: "Carbon-in-Leach (CIL)", short: "Gold recovery process", definition: "A gold processing method where activated carbon is added to a cyanide leach slurry to simultaneously leach and adsorb gold. One of the most common gold recovery techniques.", category: "Processing" },
  { term: "Catch Berm", short: "Rockfall catch step", definition: "A wide, flat step cut into a pit wall to catch falling rock and debris, preventing material from reaching lower benches where workers and equipment are operating.", category: "Ground Support" },
  { term: "Cave-in", short: "Ground collapse event", definition: "The sudden and uncontrolled collapse of the roof, walls, or floor in a mine excavation. Cave-ins are among the most deadly hazards in underground mining and require immediate evacuation.", category: "Ground Hazards" },
  { term: "Cemented Paste Fill", short: "Engineered backfill mixture", definition: "A mixture of tailings, water, and cement used as underground backfill. It provides strong, stable support for underground voids and prevents collapse of mined-out areas.", category: "Ground Support" },
  { term: "Chain Pillar", short: "Rib of unmined support rock", definition: "A long, narrow pillar of unmined ore or rock left in place between adjacent excavations to provide roof support and prevent surface subsidence in underground mines.", category: "Ground Support" },
  { term: "Chalcopyrite", short: "Copper-iron sulfide mineral", definition: "A copper-iron sulfide mineral (CuFeS2) and the most important ore of copper. Brass-yellow in color, it is commonly found in many porphyry copper and volcanogenic massive sulfide deposits.", category: "Geology" },
  { term: "Collar", short: "Top of drill hole or shaft", definition: "The top or mouth of a drill hole or mine shaft. The collar must be properly cased and secured to prevent collapse and to support drilling or hoisting equipment.", category: "Mining Structures" },
  { term: "Competent Person", short: "Qualified safety supervisor", definition: "A person with appropriate qualifications, training, and experience to identify hazards in the workplace and who has the authority to take immediate corrective action.", category: "Safety & Personnel" },
  { term: "Confined Space", short: "Enclosed restricted area", definition: "An enclosed or partially enclosed space not designed for continuous human occupancy, which has restricted entry/exit and may have hazardous atmospheres. Entry requires a permit, gas testing, and a standby person.", category: "Mine Safety" },
  { term: "Contour Mining", short: "Hillside strip mining", definition: "A surface mining technique used on hilly or mountainous terrain where cuts are made along the natural contour lines of the land to access coal or mineral seams.", category: "Mining Methods" },
  { term: "Core Sample", short: "Cylindrical drill specimen", definition: "A cylindrical sample of rock extracted during diamond drilling for geological analysis. Core samples reveal the rock type, structure, mineral content, and grade of a deposit.", category: "Exploration" },
  { term: "Crusher", short: "Rock size reduction machine", definition: "A machine used to reduce the size of blasted rock or ore into smaller fragments for further processing. Types include jaw crushers, gyratory crushers, and cone crushers.", category: "Mining Equipment" },
  { term: "Cut-and-Fill", short: "Underground ore removal method", definition: "An underground mining method where ore is extracted in horizontal slices and the void is filled with waste rock or cemented paste before the next slice is mined above.", category: "Mining Methods" },
  { term: "Cyanide", short: "Gold leaching chemical", definition: "A toxic chemical compound (sodium cyanide or potassium cyanide) used in gold and silver processing to dissolve precious metals from ore. Requires strict handling procedures, storage protocols, and spill response plans.", category: "Processing" },
  { term: "Cut-off Grade", short: "Minimum economic ore grade", definition: "The minimum grade of mineral content at which it is economically viable to mine ore rather than treat it as waste. Material below the cut-off grade is stockpiled as waste.", category: "Grade Control" },

  // D
  { term: "Dead Ground", short: "Geologically barren zone", definition: "Rock or ground that contains no ore and is economically unproductive. Identifying dead ground early prevents wasted mining effort and reduces costs.", category: "Geology" },
  { term: "Decline", short: "Underground access ramp", definition: "An inclined tunnel driven underground at an angle to provide vehicle and equipment access between surface and underground workings. Also called a ramp.", category: "Mining Structures" },
  { term: "Detonator", short: "Explosive initiating device", definition: "A device used to initiate the detonation of an explosive charge. Detonators are extremely sensitive and must only be handled by licensed shot-firers following strict safety protocols.", category: "Drilling & Blasting" },
  { term: "Dewatering", short: "Water removal from mine", definition: "The process of removing water from a mine to maintain safe working conditions. Methods include submersible pumps, drainage galleries, and sumps. Uncontrolled flooding is a major mine safety hazard.", category: "Mine Safety" },
  { term: "Diamond Drilling", short: "Core sample drilling method", definition: "A drilling technique using a rotating bit tipped with industrial diamonds to cut cylindrical core samples from rock. Produces high-quality geological data for resource estimation.", category: "Exploration" },
  { term: "Dike / Dyke", short: "Intrusive rock formation", definition: "A sheet of igneous rock that has intruded into existing rock formations. Dykes can affect blast patterns, slope stability, and ore distribution in a mine.", category: "Geology" },
  { term: "Dilution", short: "Waste mixed with ore", definition: "The unintended mixing of waste rock or low-grade material with ore during the mining process, which reduces the average grade of material sent to the processing plant.", category: "Grade Control" },
  { term: "Dip", short: "Rock layer inclination angle", definition: "The angle at which a rock layer, ore body, or geological structure inclines below the horizontal surface. Understanding dip is critical for mine planning and slope stability analysis.", category: "Geology" },
  { term: "Dozer", short: "Bulldozer earthmover", definition: "A powerful tracked machine fitted with a front blade used for pushing waste rock, leveling haul roads, and constructing berms on mine sites. One of the most common pieces of mine equipment.", category: "Mining Equipment" },
  { term: "Drag Line", short: "Large surface excavator", definition: "A large surface mining excavator that uses a dragline bucket suspended from a long boom to scoop up and move large volumes of overburden or material.", category: "Mining Equipment" },
  { term: "Drift", short: "Horizontal underground tunnel", definition: "A horizontal tunnel driven underground, usually following the strike of an ore body. Drifts provide access for development, production, and ventilation in underground mines.", category: "Mining Structures" },
  { term: "Drilling", short: "Rock hole-making process", definition: "The process of creating holes in rock for exploration, blasting, or ground support purposes. Drilling is a core activity on every mine site and requires trained operators and regular equipment maintenance.", category: "Drilling & Blasting" },
  { term: "Dump", short: "Waste rock disposal area", definition: "A designated area where waste rock, overburden, or other non-ore material is permanently deposited. Dumps must be engineered for stability and managed to prevent environmental contamination.", category: "Waste Management" },
  { term: "Dust Suppression", short: "Airborne dust control method", definition: "Measures taken to reduce the amount of harmful dust in the air on a mine site, including water spraying, chemical suppressants, and enclosed processing facilities. Critical for preventing respiratory disease.", category: "Mine Safety" },
  { term: "Dynamic Load", short: "Impact force from movement", definition: "Forces generated by moving equipment, blasting, or rock mass movement that add to the static weight on structures and ground support systems. Dynamic loads are a key design consideration in underground mines.", category: "Engineering" },

  // E
  { term: "Earthing / Grounding", short: "Electrical safety connection", definition: "The connection of electrical equipment to the earth to prevent electric shock. All electrical equipment on mine sites must be properly earthed and regularly tested by a qualified electrician.", category: "Mine Safety" },
  { term: "Electrical Hazard", short: "Electricity-related danger", definition: "Any risk of injury, death, or equipment damage from electricity, including exposed wiring, overhead power lines, electrical storms, and energized equipment. Common cause of serious injuries in mining.", category: "Mine Safety" },
  { term: "Exclusion Zone", short: "No-entry danger area", definition: "A defined area around a hazard — such as a blast zone, unstable slope, or working machinery — where entry is strictly prohibited to unauthorized personnel. Must be clearly marked with signage and barriers.", category: "Mine Safety" },
  { term: "Exploration", short: "Searching for mineral deposits", definition: "The systematic investigation of an area to locate and evaluate mineral deposits. Includes geological mapping, soil sampling, geophysical surveys, and drilling to determine deposit size and grade.", category: "Exploration" },
  { term: "Explosive", short: "Controlled detonation material", definition: "A chemical compound or mixture that rapidly releases energy through detonation, used to fragment rock in mining. Explosives must be stored in licensed magazines and handled only by trained shot-firers.", category: "Drilling & Blasting" },
  { term: "Excavator", short: "Hydraulic digging machine", definition: "A hydraulic machine with a boom, arm, and bucket used to dig and load material in surface and underground mines. Includes face shovels, backhoe excavators, and rope shovels.", category: "Mining Equipment" },

  // F
  { term: "Face", short: "Active digging surface", definition: "The exposed working surface in a mine from which ore or waste is being actively excavated. The face is typically the highest-risk area on a mine site due to freshly exposed unstable rock and ongoing blasting.", category: "Mining Structures" },
  { term: "Fall of Ground (FOG)", short: "Uncontrolled rock collapse", definition: "The uncontrolled fall of rock, soil, or debris in a mine excavation. One of the leading causes of fatalities in mining worldwide. Prevention requires systematic scaling, ground support, and regular inspections.", category: "Ground Hazards" },
  { term: "Fault", short: "Rock fracture with movement", definition: "A fracture or zone of fractures in rock along which movement has occurred. Faults can create unstable ground conditions, unexpected water inflows, and complicate ore body interpretation.", category: "Geology" },
  { term: "Final Wall", short: "Permanent pit boundary slope", definition: "The last pit wall slope that will remain after mining is complete. Final walls are designed for long-term stability and are not subject to further blasting or disturbance.", category: "Open Pit Mining" },
  { term: "Fire Suppression System", short: "Automatic firefighting system", definition: "An automatic system installed on underground equipment and in processing facilities to detect and suppress fires. Must be regularly inspected and maintained to ensure operability.", category: "Mine Safety" },
  { term: "Floatation", short: "Mineral separation process", definition: "A mineral processing technique that uses air bubbles and chemical reagents to separate valuable mineral particles from gangue (waste rock) in a water slurry.", category: "Processing" },
  { term: "Flyrock", short: "Blast-ejected rock projectile", definition: "Rock fragments propelled beyond the intended blast zone during a blasting event. Flyrock is a leading cause of blast-related injuries and fatalities. Requires accurate burden calculation and proper exclusion zones.", category: "Drilling & Blasting" },
  { term: "Footwall", short: "Rock below ore body", definition: "The rock mass lying beneath an inclined ore body or vein. In underground mining, the footwall forms the floor of a stope or drive following the ore body.", category: "Geology" },
  { term: "Free Face", short: "Exposed rock blast surface", definition: "An exposed surface of rock towards which blasting energy is directed. Every effective blast requires at least one free face for material to move into during detonation.", category: "Drilling & Blasting" },
  { term: "Fugitive Dust", short: "Uncontrolled airborne dust", definition: "Dust that escapes into the atmosphere from unpaved haul roads, blasting, crushing, stockpiles, and wind erosion on mine sites. Requires control measures to protect worker health and community air quality.", category: "Environment" },

  // G
  { term: "Gangue", short: "Waste rock within ore", definition: "The commercially worthless rock or mineral material that surrounds or is mixed with valuable ore in a deposit. Gangue must be separated from the ore during processing.", category: "Geology" },
  { term: "Gas Detection", short: "Atmospheric hazard monitoring", definition: "The continuous or periodic monitoring of underground air for dangerous gases including carbon monoxide, methane, hydrogen sulfide, and oxygen deficiency using approved gas detectors.", category: "Mine Safety" },
  { term: "Geologist", short: "Rock and mineral scientist", definition: "A scientist who studies the earth's rock formations, mineral deposits, and geological structures. Mine geologists guide drilling programs, ore body interpretation, and grade control activities.", category: "Safety & Personnel" },
  { term: "Geotechnical", short: "Rock and soil engineering", definition: "The engineering discipline that studies the behavior of rock and soil under stress. In mining, geotechnical engineers design pit slopes, underground support systems, and tailings storage facilities.", category: "Engineering" },
  { term: "Gold Room", short: "Secure precious metal area", definition: "A secure, restricted-access room in a gold processing plant where gold is recovered from loaded carbon, smelted into doré bars, and stored before transport. Access is strictly controlled.", category: "Processing" },
  { term: "Grade", short: "Mineral concentration value", definition: "The concentration of a valuable mineral or metal in the ore, typically expressed as grams per tonne (g/t) for gold or percentage (%) for base metals such as copper and zinc.", category: "Grade Control" },
  { term: "Grade Control", short: "Ore quality management process", definition: "The systematic process of monitoring, sampling, and managing the quality and quantity of ore being mined to ensure it meets processing plant requirements and maximizes economic recovery.", category: "Grade Control" },
  { term: "Grinding Mill", short: "Ore particle size reducer", definition: "A large rotating drum containing steel balls or rods used to grind ore into fine particles for mineral processing. Includes ball mills, rod mills, and SAG mills.", category: "Mining Equipment" },
  { term: "Ground Control", short: "Rock mass stabilization", definition: "All measures taken to maintain the stability of excavations and prevent collapse, including rock bolting, shotcrete, mesh installation, and monitoring of ground movement.", category: "Ground Support" },
  { term: "Ground Support", short: "Rock reinforcement system", definition: "Systems installed to reinforce and stabilize the rock mass around mine excavations. Includes rock bolts, cable bolts, wire mesh, shotcrete, and timber sets.", category: "Ground Support" },

  // H
  { term: "Hangingwall", short: "Rock above ore body", definition: "The rock mass lying above an inclined ore body or vein. In underground mining, the hangingwall forms the roof of a stope. Hangingwall failures are a major cause of underground injuries.", category: "Geology" },
  { term: "Hardrock Mining", short: "Mining in solid rock", definition: "Mining that involves the extraction of metals and minerals from consolidated, solid rock formations using drilling, blasting, and excavation. Contrasted with soft-rock or placer mining.", category: "Mining Methods" },
  { term: "Haul Road", short: "Mine vehicle travel road", definition: "A road within the mine designed and maintained for heavy equipment and haul trucks. Must be properly graded, drained, watered for dust suppression, and have adequate berms on the outer edge.", category: "Infrastructure" },
  { term: "Haul Truck", short: "Large ore transport vehicle", definition: "A large off-highway truck used to transport ore and waste rock between the pit or underground workings and the processing plant or waste dump. Capacities range from 40 to over 400 tonnes.", category: "Mining Equipment" },
  { term: "Hazard", short: "Potential source of harm", definition: "Any condition, situation, substance, or practice that has the potential to cause harm, injury, illness, or death to a person, or damage to property or the environment.", category: "Mine Safety" },
  { term: "Hazard Identification", short: "Finding workplace dangers", definition: "The systematic process of identifying all potential hazards before commencing work, typically captured in a JSA or risk assessment. The first and most critical step in the risk management process.", category: "Mine Safety" },
  { term: "HazMat", short: "Hazardous materials", definition: "Hazardous materials — substances that are flammable, explosive, corrosive, oxidizing, toxic, or otherwise dangerous. Handling requires special training, appropriate PPE, and adherence to Safety Data Sheets.", category: "Mine Safety" },
  { term: "Headframe", short: "Shaft top support structure", definition: "The steel or concrete structure erected over a mine shaft to support the hoisting equipment and guide ropes. A headframe is the most recognizable symbol of an underground mine.", category: "Mining Structures" },
  { term: "High Wall", short: "Exposed vertical pit face", definition: "The unexcavated rock face remaining after overburden is removed in surface mining. High walls can be hundreds of metres tall and must be monitored continuously for slope instability.", category: "Open Pit Mining" },
  { term: "Hoisting", short: "Vertical shaft transport system", definition: "The system of equipment including the hoist, headframe, shaft, and conveyances used to move personnel, ore, and materials vertically in a mine shaft.", category: "Mining Equipment" },
  { term: "Hydraulic Mining", short: "Water-jet rock excavation", definition: "A mining technique using high-pressure water jets to dislodge and transport ore or overburden. Commonly used in placer gold mining and some surface operations.", category: "Mining Methods" },
  { term: "Hydrostatic Pressure", short: "Underground water pressure", definition: "The pressure exerted by a column of water underground. High hydrostatic pressure can destabilize pit walls, force water into excavations, and cause sudden inrushes — a dangerous underground hazard.", category: "Mine Safety" },

  // I
  { term: "Inclinometer", short: "Slope tilt monitoring device", definition: "An instrument installed in a borehole to measure the angle of inclination of a slope or structure over time, used to detect and monitor potential slope instability in pit walls and embankments.", category: "Monitoring" },
  { term: "Induction Training", short: "New worker safety briefing", definition: "Mandatory safety training provided to all new workers, contractors, and visitors before they enter a mine site. Covers site rules, emergency procedures, hazard awareness, and PPE requirements.", category: "Mine Safety" },
  { term: "Infrared Sensor", short: "Heat/motion detection device", definition: "A sensor that detects heat or motion, used on mine sites for fire detection, proximity warning systems on heavy equipment, and intruder detection in restricted areas.", category: "Monitoring" },
  { term: "Inrush", short: "Sudden water/material flood", definition: "A sudden and uncontrolled entry of water, mud, or other material into a mine excavation. Inrushes can be catastrophic and are typically caused by breaching underground water bodies or saturated tailings.", category: "Ground Hazards" },
  { term: "Inspector", short: "Mine safety regulator", definition: "A government-appointed official with authority to enter and inspect mine sites to ensure compliance with mining regulations, safety standards, and environmental requirements.", category: "Safety & Personnel" },
  { term: "Intrusive Rock", short: "Magma-solidified rock mass", definition: "Rock formed from magma that has intruded into existing formations and solidified underground. Intrusive bodies like granite and diorite are common hosts for many metal ore deposits.", category: "Geology" },

  // J
  { term: "JSA", short: "Job Safety Analysis", definition: "Job Safety Analysis — a systematic process for identifying hazards associated with a specific job or task before work begins, then determining appropriate controls to eliminate or minimize risk to workers. Mandatory before all high-risk tasks.", category: "Safety Planning" },
  { term: "Jumbo Drill", short: "Multi-arm underground drill", definition: "A self-propelled underground drilling machine with one or more drill arms (booms) used to drill blast holes in tunnel faces and development headings. The primary development tool in underground mines.", category: "Mining Equipment" },

  // K
  { term: "Kill Switch", short: "Emergency stop control", definition: "An emergency device that immediately cuts power to a machine or conveyor when activated. Must be clearly marked, easily accessible, and regularly tested to ensure it functions in an emergency.", category: "Mine Safety" },
  { term: "Kiln", short: "High-temperature ore processor", definition: "A rotating furnace used to heat ore or concentrate at high temperatures to drive off moisture, oxidize sulfides, or prepare material for smelting. A key piece of equipment in many metallurgical operations.", category: "Processing" },

  // L
  { term: "Leaching", short: "Chemical mineral extraction", definition: "The process of dissolving valuable minerals from ore using chemical solutions (typically cyanide for gold or sulfuric acid for copper). Can be done in heaps, tanks, or in-situ.", category: "Processing" },
  { term: "Lithology", short: "Rock type classification", definition: "The physical characteristics of a rock, including its color, texture, mineral composition, and grain size. Accurate lithological logging of drill core is essential for geological interpretation and mine planning.", category: "Geology" },
  { term: "Load and Haul", short: "Ore excavation and transport", definition: "The combined operations of loading broken ore or waste into trucks using excavators or loaders, and hauling it to the processing plant, waste dump, or stockpile.", category: "Operations" },
  { term: "Loader", short: "Front-end loading machine", definition: "A wheeled or tracked machine with a front bucket used to load blasted material into haul trucks. Also called a front-end loader (FEL) or wheel loader.", category: "Mining Equipment" },
  { term: "Lode", short: "Mineral-bearing rock vein", definition: "A vein or seam of metal-bearing ore embedded within rock. Lode mining involves extracting ore from these veins, as contrasted with placer mining of alluvial deposits.", category: "Geology" },
  { term: "LOTO", short: "Lockout / Tagout procedure", definition: "Lockout/Tagout — a critical safety procedure ensuring that dangerous energy sources (electrical, hydraulic, pneumatic) are isolated and cannot be re-energized while maintenance or repair work is in progress. Failure to apply LOTO is a common cause of serious injuries.", category: "Mine Safety" },

  // M
  { term: "Magazine", short: "Explosives storage facility", definition: "A secure, purpose-built storage facility for explosives, detonators, and blasting accessories. Must be licensed, maintained to strict standards, and located a safe distance from workings and facilities.", category: "Drilling & Blasting" },
  { term: "Manway", short: "Underground worker access way", definition: "A passage or ladder way in an underground mine used exclusively by workers for access and egress. Manways must be kept clear of obstruction and in safe condition at all times.", category: "Mining Structures" },
  { term: "Methane", short: "Explosive underground gas", definition: "A flammable and explosive gas (CH4) naturally occurring in coal and some metalliferous mines. Methane accumulations must be detected early and diluted through ventilation to prevent explosions.", category: "Ground Hazards" },
  { term: "Mill", short: "Ore processing facility", definition: "A facility where blasted ore is crushed, ground, and processed to extract valuable minerals. Also refers to the grinding machines (ball mills, rod mills) within the facility.", category: "Processing" },
  { term: "Mine Plan", short: "Operational mining blueprint", definition: "A comprehensive document specifying how a mine will be operated, including pit or underground design, production schedule, equipment requirements, and waste management strategies.", category: "Operations" },
  { term: "Mine Rescue", short: "Emergency underground team", definition: "A team of specially trained personnel equipped to respond to underground emergencies including fires, explosions, cave-ins, and flooding. All mines must have access to a mine rescue team.", category: "Emergency Procedures" },
  { term: "Misfired Shot", short: "Failed explosive detonation", definition: "An explosive charge that has failed to detonate as intended during a blast. Misfires are extremely dangerous and must only be investigated and dealt with by a licensed shot-firer following strict procedures.", category: "Drilling & Blasting" },
  { term: "Monitoring", short: "Ongoing safety measurement", definition: "The continuous or periodic measurement and recording of safety-critical parameters such as slope movement, gas levels, water pressure, and structural integrity to detect early signs of hazardous conditions.", category: "Mine Safety" },
  { term: "Motor Grader", short: "Road grading machine", definition: "A machine with a long adjustable blade used to create flat surfaces and maintain haul roads on mine sites. Proper road grading reduces vehicle accidents and equipment damage.", category: "Mining Equipment" },
  { term: "Mucking", short: "Loading blasted rock", definition: "The process of loading blasted or broken rock (muck) into trucks or other conveyances for transport. The term is commonly used in underground mining operations.", category: "Operations" },
  { term: "Muster Point", short: "Emergency assembly location", definition: "A pre-designated, safe location where all workers must assemble in the event of an emergency evacuation. Must be clearly marked, well-known to all site personnel, and practiced regularly in drills.", category: "Emergency Procedures" },

  // N
  { term: "Near Miss", short: "Close call safety event", definition: "An unplanned event that did not result in injury, illness, or damage — but had the potential to do so. Near misses must be reported and investigated immediately to prevent future accidents.", category: "Mine Safety" },
  { term: "Noise Induced Hearing Loss (NIHL)", short: "Work noise deafness", definition: "Permanent hearing damage caused by prolonged exposure to high levels of noise in the workplace. Mining is one of the highest-risk industries for NIHL. Prevention requires hearing protection and engineering noise controls.", category: "Health & Hygiene" },

  // O
  { term: "Open Pit", short: "Surface excavation mine", definition: "A type of surface mine in which rock or minerals are extracted from an open pit or borrow. Open pits are characterized by a series of descending benches and are suited to large, near-surface ore bodies.", category: "Mining Methods" },
  { term: "Ore", short: "Economically valuable rock", definition: "Rock or mineral that contains enough of a valuable substance (metal, mineral, or gemstone) to make it economically worthwhile to mine and process at the current market price.", category: "Geology" },
  { term: "Ore Body", short: "Concentrated mineral deposit", definition: "A mass of rock containing sufficient mineral content and extent to be economically mineable. Ore bodies can be tabular (flat), massive (large blob), or disseminated (spread throughout rock).", category: "Geology" },
  { term: "Ore Pass", short: "Underground ore drop shaft", definition: "A vertical or steeply inclined underground opening through which ore is dropped from an upper level to a lower level for collection and transport. Ore passes must be managed carefully to prevent blockages and hang-ups.", category: "Mining Structures" },
  { term: "Ore Reserve", short: "Mineable ore quantity estimate", definition: "The portion of a mineral resource that has been assessed as economically and technically mineable under defined conditions. Used to determine mine life and financial value.", category: "Operations" },
  { term: "Overburden", short: "Surface waste above ore", definition: "Rock, soil, and other material that overlies an ore deposit and must be removed during open pit mining before the ore can be accessed. Overburden is disposed of in waste dumps.", category: "Open Pit Mining" },
  { term: "Oxidation", short: "Chemical mineral weathering", definition: "A chemical process where minerals react with oxygen, often changing their properties. Oxidized ore near the surface can be easier to process than fresh sulfide ore deeper in a deposit.", category: "Geology" },

  // P
  { term: "Paste Fill", short: "Cemented tailings backfill", definition: "A thick mixture of tailings, water, and binder (cement) used to fill underground voids. Paste fill provides structural support and reduces the volume of tailings requiring surface storage.", category: "Ground Support" },
  { term: "Permit to Work", short: "Formal work authorization", definition: "A formal, written authorization required before commencing high-risk work such as confined space entry, hot work, working at heights, or electrical isolation. Ensures hazards are identified and controls are in place.", category: "Mine Safety" },
  { term: "Pillar", short: "Unmined rock support block", definition: "A block of unmined ore or rock left in place to support the roof and walls of underground excavations. Pillars must be sized correctly — premature extraction of pillars can cause catastrophic collapses.", category: "Ground Support" },
  { term: "Pit Dewatering", short: "Pit water removal", definition: "The ongoing process of removing groundwater and surface water from an open pit mine to maintain safe and workable conditions. Includes pumps, sumps, drains, and water diversion channels.", category: "Operations" },
  { term: "Pit Limit", short: "Economic pit boundary", definition: "The boundary of an open pit mine, defined by the point at which the cost of mining exceeds the revenue from the ore. Pit limits are calculated using optimization software considering ore grade, commodity price, and costs.", category: "Open Pit Mining" },
  { term: "Placer Mining", short: "Alluvial deposit extraction", definition: "The extraction of valuable minerals (typically gold, tin, or diamonds) from alluvial or placer deposits in riverbeds, beaches, or ancient water channels using washing and gravity separation.", category: "Mining Methods" },
  { term: "Portal", short: "Mine tunnel entrance", definition: "The entrance to a horizontal or inclined underground mine opening such as an adit, decline, or tunnel. Portals must be secured with concrete headwalls to prevent collapse and clearly marked with safety signage.", category: "Mining Structures" },
  { term: "PPE", short: "Personal Protective Equipment", definition: "Personal Protective Equipment — any device, clothing, or equipment worn by a worker to minimize exposure to specific occupational hazards. In mining, mandatory PPE includes hard hat, safety boots, hi-vis vest, safety glasses, and gloves.", category: "Mine Safety" },
  { term: "Pre-Shift Inspection", short: "Equipment safety check", definition: "A mandatory inspection of equipment and the work area performed by the operator before commencing each shift. Identifies defects, hazards, and unsafe conditions before work begins.", category: "Mine Safety" },
  { term: "Priming", short: "Explosive initiation setup", definition: "The process of inserting a detonator into a primer explosive to create an initiation assembly that will reliably detonate the main explosive charge in a blast hole.", category: "Drilling & Blasting" },
  { term: "Proximity Detection System", short: "Vehicle-worker collision alert", definition: "An electronic system that detects and alerts when a person enters the danger zone around operating heavy machinery, helping to prevent vehicle-pedestrian collisions — a leading cause of mine fatalities.", category: "Mine Safety" },
  { term: "Pyritic Ore", short: "Sulfide-bearing ore type", definition: "Ore containing significant amounts of iron sulfide (pyrite, FeS2). Pyritic ores can generate acid mine drainage when exposed to air and water, and may require special processing and environmental management.", category: "Geology" },

  // Q
  { term: "Quarry", short: "Surface rock extraction site", definition: "A type of open-pit mine from which construction materials such as limestone, granite, sand, and gravel are extracted. Quarries use drilling and blasting similar to metalliferous mining.", category: "Mining Methods" },
  { term: "Quartzite", short: "Hard metamorphic rock", definition: "A hard, metamorphic rock formed from sandstone. Quartzite is extremely abrasive and poses a significant silicosis risk when drilled or blasted, requiring respiratory protection and dust suppression.", category: "Geology" },

  // R
  { term: "Raise", short: "Vertical or inclined upward drive", definition: "A vertical or steeply inclined underground opening driven upward from one level to another. Raises are used for ventilation, ore passes, and access between levels.", category: "Mining Structures" },
  { term: "Reclamation", short: "Mine site restoration", definition: "The process of restoring a mined area to a stable, safe, and productive state after mining operations cease. Includes recontouring, revegetation, water management, and ongoing monitoring.", category: "Environment" },
  { term: "Resource", short: "Estimated ore deposit quantity", definition: "An estimate of the quantity and grade of mineralization in a deposit, classified into Inferred, Indicated, and Measured categories based on the level of geological confidence.", category: "Exploration" },
  { term: "Rib", short: "Underground sidewall", definition: "The side wall of an underground excavation such as a drive, drift, or tunnel. Ribs are subject to ground pressure and must be scaled and supported to prevent falls of ground.", category: "Mining Structures" },
  { term: "Risk", short: "Likelihood x consequence of harm", definition: "The combination of the likelihood that a hazard will cause harm and the severity of that harm. Risk = Likelihood × Consequence. Risk management involves reducing one or both of these factors.", category: "Mine Safety" },
  { term: "Risk Assessment", short: "Formal hazard evaluation", definition: "The systematic process of identifying hazards, evaluating the likelihood and consequence of harm, and determining appropriate control measures to reduce risk to an acceptable level.", category: "Safety Planning" },
  { term: "Rock Bolt", short: "Ground reinforcement bolt", definition: "A steel bolt installed into drilled holes in rock to reinforce and stabilize the surrounding rock mass. Rock bolts are the most widely used form of ground support in underground mining.", category: "Ground Support" },
  { term: "Rock Burst", short: "Sudden violent rock ejection", definition: "A sudden, violent failure of rock in a highly stressed underground environment, causing rock to be explosively ejected from walls or roof. A major hazard in deep underground mines.", category: "Ground Hazards" },
  { term: "Rock Mechanics", short: "Rock behavior under stress", definition: "The science of how rock behaves under applied loads and stresses. Rock mechanics principles underpin the design of underground excavations, pit slopes, and all ground support systems.", category: "Engineering" },
  { term: "ROM", short: "Run of Mine ore", definition: "Run of Mine — ore as it comes directly from the mining face, before any processing or sorting. ROM material is transported to a stockpile or directly to the crusher at the processing plant.", category: "Grade Control" },
  { term: "Roof Bolt", short: "Underground ceiling support", definition: "A rock bolt installed in the roof (back) of an underground excavation to bind and stabilize overhead rock layers. Roof bolting is essential in all underground mines to prevent falls of ground.", category: "Ground Support" },

  // S
  { term: "Safety Data Sheet (SDS)", short: "Chemical hazard document", definition: "A standardized document providing detailed information about a hazardous substance including its physical and health hazards, safe handling, storage, disposal, and emergency procedures. Formerly known as MSDS.", category: "Mine Safety" },
  { term: "Safety Officer", short: "Site safety manager", definition: "A trained professional responsible for developing, implementing, and monitoring safety systems on a mine site. The safety officer has the authority to stop unsafe work and must be consulted before high-risk tasks.", category: "Safety & Personnel" },
  { term: "Scaling", short: "Loose rock removal", definition: "The manual or mechanical removal of loose, cracked, or unstable rock from mine faces, walls, and ceilings before work commences in that area. Performed using a scaling bar or mechanical scaler.", category: "Ground Support" },
  { term: "Seismic Monitoring", short: "Ground vibration measurement", definition: "The continuous measurement of ground vibrations using seismographs to detect and monitor underground rock movements, blasting effects, and potential slope instability or rockburst activity.", category: "Monitoring" },
  { term: "Shaft", short: "Vertical mine access opening", definition: "A vertical or near-vertical underground opening used for access, ventilation, ore hoisting, and services in an underground mine. Shafts can reach depths of several kilometres in deep mines.", category: "Mining Structures" },
  { term: "Shotcrete", short: "Sprayed concrete lining", definition: "Concrete sprayed at high pressure onto rock surfaces to provide structural support and prevent deterioration of excavation walls and roof. Widely used in underground development and rehabilitation.", category: "Ground Support" },
  { term: "Shot-Firer", short: "Licensed explosives operator", definition: "A person who holds a license to handle, prepare, and detonate explosives on a mine site. Shot-firers are responsible for the safe execution of all blasting operations and management of misfires.", category: "Safety & Personnel" },
  { term: "Silica", short: "Lung disease-causing dust", definition: "Silicon dioxide (SiO2) — a mineral found in most rock types. Inhalation of fine silica dust causes silicosis, a serious, irreversible, and potentially fatal lung disease. Silica dust is the number one occupational health hazard in mining.", category: "Health & Hygiene" },
  { term: "Silicosis", short: "Silica dust lung disease", definition: "A progressive, incurable, and potentially fatal occupational lung disease caused by the inhalation of fine crystalline silica dust over time. Prevention requires dust control, respiratory PPE, and regular health monitoring.", category: "Health & Hygiene" },
  { term: "Sill Pillar", short: "Horizontal ore level support", definition: "A horizontal pillar of unmined ore left between stoping levels to provide roof support for lower workings. Sill pillar recovery is one of the highest-risk activities in underground mining.", category: "Ground Support" },
  { term: "Skip", short: "Shaft ore-hoisting bucket", definition: "A large bucket or container used to hoist ore and waste rock from underground to surface in a mine shaft. Skips are counterbalanced and guided by the shaft structure.", category: "Mining Equipment" },
  { term: "Slope Monitoring", short: "Wall movement tracking", definition: "The ongoing measurement of pit wall and dump face movement to detect early signs of instability. Methods include survey prisms, radar, inclinometers, and GPS systems.", category: "Monitoring" },
  { term: "Slope Stability", short: "Pit wall safety condition", definition: "The ability of a pit wall, underground excavation, or waste dump face to remain in place without failing. Depends on rock strength, geological structure, slope angle, water pressure, and blasting effects.", category: "Geotechnical" },
  { term: "Slurry", short: "Water and solids mixture", definition: "A semi-fluid mixture of finely ground solid particles and water, commonly found in mineral processing circuits. Slurry pipelines transport processed ore between facilities.", category: "Processing" },
  { term: "Smelting", short: "High-heat metal extraction", definition: "The process of extracting metal from ore by heating it to high temperatures in a furnace, causing chemical reduction and separation of the metal from impurities (slag).", category: "Processing" },
  { term: "Spoil", short: "Excavated waste material", definition: "Overburden, waste rock, or other material removed during mining that has no economic value. Spoil must be disposed of in designated waste dumps engineered for long-term stability.", category: "Waste Management" },
  { term: "Spontaneous Combustion", short: "Self-igniting material", definition: "The self-ignition of coal or sulfide-bearing waste rock when exposed to air without an external ignition source. Spontaneous combustion fires in waste dumps and coal mines are difficult to extinguish and can release toxic gases.", category: "Ground Hazards" },
  { term: "Stemming", short: "Blast hole top fill material", definition: "Inert material (usually drill cuttings or crushed rock) placed in the top portion of a blast hole above the explosive charge to contain blast energy and reduce flyrock and airblast.", category: "Drilling & Blasting" },
  { term: "Stockpile", short: "Ore or waste storage heap", definition: "A designated area where ore, waste rock, or low-grade material is temporarily stored before processing, treatment, or permanent disposal. Stockpile management includes grade tracking and stability monitoring.", category: "Operations" },
  { term: "Stope", short: "Underground ore excavation", definition: "The underground excavation from which ore is extracted after development. Stopes are the primary production areas in an underground mine and require careful ground support design.", category: "Mining Structures" },
  { term: "Strike", short: "Horizontal ore body direction", definition: "The horizontal direction of a rock layer, fault, or ore body, measured relative to north. Understanding the strike of an ore body is fundamental to mine planning and underground development.", category: "Geology" },
  { term: "Strip Ratio", short: "Waste to ore removal ratio", definition: "The ratio of waste material (overburden) to ore that must be mined. A strip ratio of 5:1 means 5 tonnes of waste are moved for every tonne of ore. Higher strip ratios increase mining costs.", category: "Open Pit Mining" },
  { term: "Sub-Level Caving", short: "Underground block cave method", definition: "An underground mining method where ore is drilled and blasted from sublevels and allowed to cave and flow to drawpoints below. A low-cost, high-production method suited to large ore bodies.", category: "Mining Methods" },
  { term: "Subsidence", short: "Surface ground sinking", definition: "The sinking or settlement of the ground surface above an underground mine caused by the collapse or closure of underground voids. Surface subsidence can damage infrastructure, roads, and buildings.", category: "Ground Hazards" },
  { term: "Sump", short: "Underground water collection pit", definition: "A pit or low point in an underground mine where water collects for pumping to surface. Sumps must be maintained and pumped regularly to prevent flooding of working areas.", category: "Mining Structures" },
  { term: "Surety Bond", short: "Environmental financial guarantee", definition: "A financial bond posted by a mining company to guarantee that it will fulfill environmental obligations including rehabilitation and closure when mining operations cease.", category: "Environment" },

  // T
  { term: "Tailings", short: "Ore processing waste material", definition: "Finely ground rock and processing waste remaining after valuable minerals have been extracted from ore. Tailings contain residual chemicals and must be stored in engineered Tailings Storage Facilities (TSFs).", category: "Waste Management" },
  { term: "Tailings Storage Facility (TSF)", short: "Tailings dam or storage", definition: "An engineered structure used to contain tailings from mineral processing. TSF failures can be catastrophic — causing loss of life and severe environmental damage. Requires constant monitoring and expert management.", category: "Waste Management" },
  { term: "TBM", short: "Tunnel Boring Machine", definition: "Tunnel Boring Machine — a large mechanical device used to excavate tunnels by grinding away rock with a rotating cutting head. TBMs produce smoother tunnels with less ground disturbance than drill-and-blast methods.", category: "Mining Equipment" },
  { term: "Tonne", short: "Metric unit of weight (1000kg)", definition: "The standard unit of mass used in mining, equal to 1,000 kilograms (2,205 pounds). Ore grades are typically expressed in grams per tonne (g/t), and production in tonnes per day (t/d) or per year (t/a).", category: "Operations" },
  { term: "Toolbox Talk", short: "Pre-shift safety briefing", definition: "A short, informal safety meeting held before a work shift or specific task to discuss hazards, safety procedures, and the work plan. Attendance is mandatory for all workers and must be documented.", category: "Safety Planning" },
  { term: "Topography", short: "Surface land shape map", definition: "The natural shape and features of the land surface, including hills, valleys, and drainage patterns. Topographic maps and surveys are essential for mine design, haul road planning, and water management.", category: "Engineering" },
  { term: "Tramp Metal", short: "Unwanted metal in ore", definition: "Pieces of metal such as broken drill steel, teeth from buckets, and cable fragments that find their way into the ore stream and can damage crushing and grinding equipment in the processing plant.", category: "Operations" },
  { term: "Tunnel", short: "Underground horizontal passage", definition: "A horizontal underground passage connecting two surface openings. Tunnels are driven for access, exploration, and transport in both surface and underground mining operations.", category: "Mining Structures" },

  // U
  { term: "Underground Mining", short: "Subsurface ore extraction", definition: "Mining conducted below the earth's surface, accessed via shafts, declines, or adits. Used when ore bodies are too deep for open pit mining. Underground mining poses unique hazards including falls of ground, fire, and poor ventilation.", category: "Mining Methods" },
  { term: "Uniaxial Compressive Strength (UCS)", short: "Rock strength measurement", definition: "A laboratory measurement of the maximum stress a cylindrical rock sample can withstand under axial loading before failure. UCS is a fundamental input for underground support design and slope stability analysis.", category: "Engineering" },
  { term: "Upcast Shaft", short: "Mine ventilation exhaust shaft", definition: "A mine shaft through which contaminated, heated air is drawn up and out of the underground workings by fans. The upcast shaft is a critical component of the mine ventilation system.", category: "Ventilation" },

  // V
  { term: "Ventilation", short: "Underground air circulation", definition: "The system of fans, shafts, raises, and ducts used to supply fresh air to underground workings and remove contaminated air, heat, dust, and blasting fumes. Inadequate ventilation is one of the most serious underground hazards.", category: "Ventilation" },
  { term: "Void", short: "Underground empty space", definition: "An empty underground space created by mining. Voids must be properly supported, backfilled, or fenced off to prevent collapse, surface subsidence, or accidental entry by workers.", category: "Ground Hazards" },
  { term: "Void Ratio", short: "Pore space to solid ratio", definition: "The ratio of the volume of voids (pores and spaces) to the volume of solid material in rock or soil. High void ratios indicate looser, potentially less stable ground conditions.", category: "Geotechnical" },

  // W
  { term: "Waste Rock", short: "Non-economic excavated rock", definition: "Rock that is excavated during mining but contains insufficient mineral content to be economically processed. Waste rock is permanently disposed of in engineered waste dumps.", category: "Waste Management" },
  { term: "Water Table", short: "Underground water level", definition: "The level below the earth's surface at which the ground is saturated with water. Mining below the water table requires dewatering and can affect local groundwater supplies.", category: "Hydrology" },
  { term: "Weathering", short: "Rock surface deterioration", definition: "The physical and chemical breakdown of rock at or near the earth's surface by exposure to weather, water, and biological processes. Weathered rock is generally weaker and more prone to slope instability.", category: "Geology" },
  { term: "Working Face", short: "Active excavation front", definition: "The area of the mine where active excavation, drilling, or blasting is currently taking place. This is typically the highest-risk area on a mine site requiring the most stringent hazard controls.", category: "Mining Structures" },
  { term: "Working Place", short: "Individual worker's area", definition: "The specific location where an individual miner or crew is working at any given time. Each working place must be inspected for hazards before work commences at the start of every shift.", category: "Mine Safety" },

  // X
  { term: "XRF Analyzer", short: "Portable ore grade scanner", definition: "X-Ray Fluorescence analyzer — a portable handheld device used to rapidly determine the elemental composition and grade of rock or ore samples on site without laboratory processing.", category: "Testing & Analysis" },

  // Additional A
  { term: "Anchor Bolt", short: "Rock tie-back support", definition: "A steel bolt grouted or mechanically anchored deep into rock to tie back unstable rock masses and reinforce pit walls or underground excavations against movement.", category: "Ground Support" },
  { term: "Autonomous Equipment", short: "Self-operating mine machinery", definition: "Mining equipment such as haul trucks and drills that operate without a human driver, controlled by onboard computers and remote monitoring systems. Reduces worker exposure to hazardous areas but requires strict exclusion zone management.", category: "Mining Equipment" },

  // Additional B
  { term: "Ball Mill", short: "Rotating ore grinding drum", definition: "A large steel drum partly filled with steel balls that rotates to grind ore into fine particles for mineral processing. Ball mills are one of the most energy-intensive pieces of equipment in a processing plant.", category: "Mining Equipment" },
  { term: "Bentonite", short: "Clay drilling fluid sealant", definition: "A highly absorbent clay mineral used as a drilling fluid additive to seal borehole walls, lubricate drill bits, and carry drill cuttings to the surface during exploration drilling.", category: "Exploration" },
  { term: "Blasthole Logging", short: "Drill chip ore sampling", definition: "The systematic sampling and recording of drill chips from blast holes to determine ore grade before blasting. Blasthole logging is a critical grade control tool in open pit operations.", category: "Grade Control" },

  // Additional C
  { term: "Cable Bolt", short: "Long flexible rock support", definition: "A flexible steel cable grouted into a long borehole to reinforce and stitch together large volumes of rock mass, providing support in areas of high stress or complex geology.", category: "Ground Support" },
  { term: "Carbon Monoxide (CO)", short: "Odourless toxic mine gas", definition: "A colourless, odourless, and highly toxic gas produced by incomplete combustion of fuel and by blasting. CO cannot be detected by smell — gas detectors are essential in all underground environments.", category: "Mine Safety" },
  { term: "Catchment Pond", short: "Surface water collection pit", definition: "An engineered pond designed to collect and contain runoff water from mine site areas, preventing contaminated water from flowing into natural water courses.", category: "Environment" },
  { term: "Controlled Blasting", short: "Precision wall protection blast", definition: "Blasting techniques such as pre-splitting and trim blasting used near final pit walls to minimize rock damage and produce a stable, clean slope face.", category: "Drilling & Blasting" },
  { term: "Conveyor Belt", short: "Continuous ore transport system", definition: "A continuous moving belt system used to transport ore, crushed rock, or waste over long distances on surface or underground. Must be fitted with emergency stop pulls, guards, and belt alignment switches.", category: "Mining Equipment" },

  // Additional D
  { term: "Downcast Shaft", short: "Fresh air intake shaft", definition: "A mine shaft through which fresh air is drawn down into underground workings. The downcast shaft is the inlet side of the underground ventilation circuit.", category: "Ventilation" },
  { term: "Draw Point", short: "Underground ore collection opening", definition: "The opening at the base of a stope or caving block through which broken ore flows under gravity for loading and transport. Draw point management is critical to ore recovery and dilution control.", category: "Mining Structures" },
  { term: "Drill and Blast", short: "Standard rock excavation method", definition: "The most widely used method of rock excavation in mining, involving drilling holes into rock, loading them with explosives, and blasting to fragment the rock for loading and hauling.", category: "Drilling & Blasting" },

  // Additional E
  { term: "Electrostatic Precipitator", short: "Dust collection device", definition: "An air pollution control device that uses electrical charges to remove fine dust and particulate matter from exhaust gases in processing plants and smelters.", category: "Environment" },
  { term: "Emergency Eyewash Station", short: "Chemical eye flush point", definition: "A dedicated water station designed to flush chemicals from the eyes in the event of a splash injury. Must be located within 10 seconds travel of any area where eye hazards exist and tested weekly.", category: "Mine Safety" },
  { term: "Environmental Impact Assessment (EIA)", short: "Mine environmental study", definition: "A formal study assessing the potential environmental effects of a mining project before it commences, including impacts on water, air, soil, biodiversity, and local communities.", category: "Environment" },
  { term: "Explosive Limit", short: "Gas explosion concentration range", definition: "The concentration range of a flammable gas in air within which it can ignite and explode. Below the Lower Explosive Limit (LEL) or above the Upper Explosive Limit (UEL) the gas will not ignite.", category: "Mine Safety" },

  // Additional F
  { term: "Fire Triangle", short: "Three fire elements", definition: "The three elements required for fire: fuel, heat, and oxygen. Removing any one element extinguishes the fire. Understanding the fire triangle is fundamental to fire prevention and suppression on mine sites.", category: "Mine Safety" },
  { term: "Free Cyanide", short: "Active dissolved cyanide", definition: "The dissolved cyanide fraction in a processing solution that is available to react with and dissolve gold. Free cyanide levels in tailings must be managed and monitored to protect the environment.", category: "Processing" },

  // Additional G
  { term: "Geomechanics", short: "Rock and soil force science", definition: "The study of the mechanical behavior of geological materials — rock and soil — under applied forces. Geomechanics principles govern the design of all mine excavations, support systems, and slopes.", category: "Engineering" },
  { term: "Gravity Recovery", short: "Density-based ore separation", definition: "A mineral processing method that separates valuable minerals from waste based on differences in specific gravity (density). Widely used for gold, tin, and diamond recovery.", category: "Processing" },

  // Additional H
  { term: "Heat Stress", short: "Body overheating hazard", definition: "A serious health risk caused by prolonged exposure to high temperatures and humidity in underground or open pit environments. Symptoms include dizziness, nausea, and loss of consciousness. Can be fatal if untreated.", category: "Health & Hygiene" },
  { term: "Highwall Mining", short: "Remote auger wall mining", definition: "A surface mining technique that uses a remotely controlled cutting machine to extract coal or minerals from exposed highwall faces without requiring workers to enter the highwall area.", category: "Mining Methods" },

  // Additional I
  { term: "In-Situ Leaching", short: "Underground chemical extraction", definition: "A mining technique where a leaching solution is injected directly into an ore body underground to dissolve minerals, which are then pumped to the surface for recovery — without physical excavation.", category: "Mining Methods" },
  { term: "Instrumentation", short: "Mine monitoring devices", definition: "The collection of sensors, gauges, and monitoring devices installed throughout a mine to measure and record conditions such as ground movement, water pressure, gas levels, and equipment performance.", category: "Monitoring" },

  // Additional L
  { term: "Level", short: "Horizontal underground access floor", definition: "A horizontal underground working connected to a shaft or decline at a specific depth. Levels provide access for development, production, and services and are typically spaced 20–60 metres apart vertically.", category: "Mining Structures" },
  { term: "Long Hole Stoping", short: "Deep uphole drill blasting method", definition: "An underground mining method where long blast holes are drilled upward or downward to blast large volumes of ore in a single blast. A productive and cost-effective method for large, well-defined ore bodies.", category: "Mining Methods" },

  // Additional M
  { term: "Material Safety Data Sheet (MSDS)", short: "Old chemical hazard form", definition: "The predecessor to the modern Safety Data Sheet (SDS). Contains information about the hazards, handling, and emergency response for a chemical substance. The term MSDS is still commonly used on older mine sites.", category: "Mine Safety" },
  { term: "Mesh / Wire Mesh", short: "Ground support surface lining", definition: "Steel wire mesh panels pinned to the rock surface with rock bolts to hold loose rock fragments in place and prevent minor falls of ground in underground excavations.", category: "Ground Support" },

  // Z
  { term: "Zero Harm", short: "No injuries safety goal", definition: "The philosophy and goal of achieving zero workplace injuries, illnesses, and fatalities on a mine site. Zero Harm is the foundation of modern mine safety culture and requires active commitment from all personnel.", category: "Mine Safety" },
  { term: "Zone of Influence", short: "Blast/excavation effect radius", definition: "The area around a blast, excavation, or heavy machinery operation that may be affected by its activity. All personnel and equipment must be cleared from the zone of influence before blasting or major earthworks commence.", category: "Mine Safety" },
];

const PPE_ITEMS = [
  {
    emoji: "⛑️",
    name: "Hard Hat (Safety Helmet)",
    description: "Protects the head from falling objects, bumps, and impacts. Must comply with relevant safety standards. Replace immediately if damaged or after any significant impact.",
    when: "Required at all times on site",
    mandatory: "always"
  },
  {
    emoji: "👟",
    name: "Steel-Toe Safety Boots",
    description: "Protects feet from crushing injuries, punctures, and slipping. Must have steel toe cap and puncture-resistant midsole. Anti-static or electrical-hazard rated boots required in specific areas.",
    when: "Required at all times on site",
    mandatory: "always"
  },
  {
    emoji: "🦺",
    name: "Hi-Visibility (Hi-Vis) Vest",
    description: "Bright orange or yellow vest with reflective strips to make workers visible to equipment operators and vehicle drivers, especially in dusty or low-light conditions.",
    when: "Required at all times on site",
    mandatory: "always"
  },
  {
    emoji: "🥽",
    name: "Safety Glasses / Goggles",
    description: "Protects eyes from dust, flying debris, chemical splashes, and UV radiation. Clear lenses for indoor/underground use; tinted for outdoor work in bright sunlight.",
    when: "Required at all times on site",
    mandatory: "always"
  },
  {
    emoji: "🧤",
    name: "Safety Gloves",
    description: "Protects hands from cuts, abrasions, chemicals, heat, and vibration. Different glove types are required for different tasks — chemical-resistant, cut-resistant, or heat-resistant.",
    when: "Required when handling materials, equipment, or chemicals",
    mandatory: "task"
  },
  {
    emoji: "😷",
    name: "Dust Mask / Respirator",
    description: "Protects the respiratory system from dust, silica, fumes, and chemical vapors. P2/N95 mask for dust; full-face respirator for chemical handling or confined spaces.",
    when: "Required during drilling, blasting, crushing, or chemical handling",
    mandatory: "task"
  },
  {
    emoji: "🔇",
    name: "Hearing Protection",
    description: "Earplugs or earmuffs to protect against noise-induced hearing loss. Required where noise levels exceed 85 dB(A). Many areas around drills, crushers, and blast zones exceed this threshold.",
    when: "Required in high-noise areas — drills, crushers, blast zones",
    mandatory: "task"
  },
  {
    emoji: "🧥",
    name: "High-Visibility Coveralls",
    description: "Full-body protective coveralls that provide visibility, protect the skin from abrasion, UV radiation, and minor chemical splashes. Fire-resistant (FR) coveralls required near explosives or fuel.",
    when: "Required in active work zones and underground",
    mandatory: "task"
  },
  {
    emoji: "🔦",
    name: "Cap Lamp (Headlamp)",
    description: "Battery-powered lamp attached to the hard hat to provide hands-free lighting underground or in dark areas. Must be checked and charged before each shift. Intrinsically safe models required underground.",
    when: "Required for all underground and low-light work",
    mandatory: "task"
  },
  {
    emoji: "🪢",
    name: "Safety Harness & Lanyard",
    description: "Full-body harness with an attached lanyard used for fall protection when working at heights or near open voids. Must be properly fitted, inspected before use, and anchored to a rated anchor point.",
    when: "Required when working at height (>1.8m) or near open voids",
    mandatory: "task"
  },
  {
    emoji: "🛡️",
    name: "Face Shield",
    description: "A full-face transparent shield that protects the entire face from chemical splashes, molten metal, grinding sparks, and high-velocity particles. Worn in addition to safety glasses, not instead of them.",
    when: "Required during angle grinding, welding, and chemical handling",
    mandatory: "task"
  },
  {
    emoji: "💪",
    name: "Chemical-Resistant Apron",
    description: "A protective apron made from rubber or PVC to protect the body from chemical splashes during reagent handling, laboratory work, or processing plant operations.",
    when: "Required when handling acids, reagents, or hazardous chemicals",
    mandatory: "task"
  },
];

const EMERGENCY_CONTACTS = [
  { name: "Mine Emergency Control", number: "Emergency: 112" },
  { name: "Site Safety Officer", number: "Contact site management" },
  { name: "Ambulance / Medical", number: "National Emergency: 112" },
];

const FIRST_AID_GUIDES = [
  {
    emoji: "🩸",
    title: "Severe Bleeding",
    steps: [
      "Call for medical help immediately",
      "Apply firm, direct pressure to the wound using a clean cloth or bandage",
      "Do not remove the material — add more on top if blood soaks through",
      "Elevate the injured area above heart level if possible",
      "Keep the person warm and lying down",
      "Monitor breathing until medical help arrives"
    ]
  },
  {
    emoji: "🦴",
    title: "Suspected Fracture / Broken Bone",
    steps: [
      "Do not move the person unless they are in immediate danger",
      "Immobilize the injured area in the position found — do not try to straighten",
      "Apply a splint using available materials if trained to do so",
      "Control any bleeding with gentle pressure",
      "Treat for shock — keep warm, calm, and lying down",
      "Call for medical evacuation and wait"
    ]
  },
  {
    emoji: "🔥",
    title: "Burns",
    steps: [
      "Remove the person from the heat source safely",
      "Cool the burn with cool (not cold) running water for at least 20 minutes",
      "Do NOT use ice, butter, or toothpaste",
      "Remove jewelry/clothing near the burn — unless stuck to the skin",
      "Cover loosely with a clean, non-fluffy dressing",
      "Seek medical attention — do not pop blisters"
    ]
  },
  {
    emoji: "💨",
    title: "Unconscious / Not Breathing (CPR)",
    steps: [
      "Check for safety — do not put yourself at risk",
      "Call for help immediately — shout for someone to call emergency services",
      "Check for a response — tap shoulders, shout",
      "Tilt head back, lift chin, check for breathing (10 seconds)",
      "Begin chest compressions: 30 compressions at the center of the chest",
      "Give 2 rescue breaths if trained. Repeat 30:2 until help arrives"
    ]
  },
  {
    emoji: "⚡",
    title: "Electric Shock",
    steps: [
      "DO NOT touch the person if they are still in contact with the electrical source",
      "Switch off the power at the source or circuit breaker first",
      "Only when safe — call for emergency help",
      "Check for breathing and begin CPR if needed and trained",
      "Treat any burns with cool water",
      "All electric shock victims must be seen by a doctor even if they appear fine"
    ]
  },
  {
    emoji: "☠️",
    title: "Chemical Exposure / Poisoning",
    steps: [
      "Move the person to fresh air immediately — away from the chemical source",
      "Remove contaminated clothing carefully — protect yourself from exposure",
      "Flush affected skin or eyes with large amounts of water for 15-20 minutes",
      "Check the Safety Data Sheet (SDS) for the specific chemical",
      "Call emergency services and report the chemical name",
      "Do NOT induce vomiting unless instructed by medical personnel"
    ]
  },
];

const SAFETY_TIPS = [
  "Always attend the daily Toolbox Talk before starting work. It takes 5 minutes and could save your life.",
  "Inspect your PPE before every shift. Damaged equipment provides no protection — replace it immediately.",
  "Never walk under suspended loads. Always maintain a safe distance from crane and lifting operations.",
  "If you see an unsafe condition, report it immediately. You have the right — and responsibility — to stop unsafe work.",
  "Maintain three points of contact when climbing on or off equipment. Slips and falls cause serious injuries.",
  "Stay hydrated on site. Dehydration impairs judgment and increases the risk of accidents, especially in hot climates.",
  "Know where your nearest muster point is. Practice the route, don't just read it.",
  "Never bypass a safety interlock or guard. They exist to protect you — bypassing them puts everyone at risk.",
  "Keep your work area clean and tidy. Housekeeping prevents trips, slips, and fire hazards.",
  "Communicate clearly with equipment operators. Make eye contact before approaching any heavy machinery.",
  "Complete a JSA before any non-routine task. Taking 10 minutes to think through hazards prevents hours of injury.",
  "Never enter a confined space without a permit, gas testing, and a trained standby person outside.",
  "Report all near misses, not just accidents. A near miss today could be a fatality tomorrow.",
  "Lock Out Tag Out (LOTO) must be applied before any maintenance work on plant or equipment.",
  "Check for overhead powerlines before operating elevated equipment or machinery with a high reach.",
];
