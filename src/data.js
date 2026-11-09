// Port of SiteCatalog.java — facts from the Marshall Tech card and service sheet.

export const company = {
    name: "Marshall Tech",
    tagline: "Inspiring Innovation",
    descriptor: "LEDs, Controllers, Sensors & Much More",
    email: "marshalltech13@gmail.com",
    websiteLabel: "marshallin.in",
    websiteUrl: "https://marshallin.in",
    phones: [
        { display: "94428 91189", tel: "+919442891189" },
        { display: "94430 22037", tel: "+919443022037" },
    ],
    studios: [
        {
            name: "Coimbatore",
            lines: "41/1 Murugan Nagar, 2nd Street, Rathinapuri, Coimbatore.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=41/1+Murugan+Nagar+2nd+Street+Rathinapuri+Coimbatore",
        },
        {
            name: "Coonoor, Nilgiris",
            lines: "67, Muthu Pillai Line, Grace Hill, Coonoor, Nilgiris.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=67+Muthu+Pillai+Line+Grace+Hill+Coonoor+Nilgiris",
        },
    ],
};

export const services = [
    { slug: "electrical", name: "Electrical & Plumbing Services", summary: "The points, pipes, and routes the rest of the house depends on. Planned so a later sensor or pump does not mean opening the same wall twice." },
    { slug: "whole-home", name: "Automation Products", summary: "Controllers, sensors, and the panels that tie a house together. Scenes are written for your rooms, not copied from a stock list." },
    { slug: "cameras", name: "Security Systems & CCTV", summary: "Cameras, a video door, and locks, with the recorder kept somewhere sensible. See the gate from the phone, and still keep a key." },
    { slug: "lighting", name: "LED Lights, LED TV & Panels", summary: "Cove light, panels, and screens, dimmed as the day changes. A room that is comfortable at noon and quiet at night." },
    { slug: "power", name: "Inverter (UPS) & Solar Products", summary: "The circuits you actually need stay on when the grid drops. Where the roof can take it, solar cuts the power you buy." },
    { slug: "water", name: "RO & UV Systems & Pumps", summary: "Purifiers, UV, and pumps that stop when the tank is full and hold when the sump runs dry." },
    { slug: "appliances", name: "Home Appliances", summary: "Kitchen, laundry, and utility chosen with the electrical plan, so the appliances and the automation belong to the same drawing." },
];

export const solutions = [
    {
        id: "whole-home", name: "Whole-home control", kicker: "One way to run the house",
        summary: "Lights, locks, shades, cameras, and the pump answer to the same scenes. A panel by the door. The phone when you are away.",
        includes: ["Goodnight, away, and arrive scenes written for your routine", "A wall panel and a phone view of the same house", "Room-by-room control where a whole-house scene is too much", "A handover that shows every scene, not only the wiring"],
    },
    {
        id: "lighting", name: "Lighting scenes", kicker: "LED light, panels, screens",
        summary: "Cove, task, and panel light on drivers sized for the room. Evening is a scene, not a row of switches left half on.",
        includes: ["Dimming per room, with a bright scene for work and a low scene for night", "LED panels and feature light where a false ceiling can take them", "Porch and passage light that can stay on after the hall sleeps", "TV and screen points planned with the viewing seat, not after the plaster"],
    },
    {
        id: "access", name: "Locks & video door", kicker: "Who comes in",
        summary: "A lock on the main door, a video door phone, and a scene that locks up when you leave. Mechanical entry stays in place.",
        includes: ["Smart lock with a key override", "Video door phone at the gate or the flat door", "A leaving scene that locks the doors you choose", "Codes for family, with a way to remove one later"],
    },
    {
        id: "cameras", name: "Cameras & recording", kicker: "See the gate",
        summary: "Cameras where they can actually see: gate, porch, parking, and the side that is dark. The recorder gets power and a proper spot.",
        includes: ["Outdoor cameras with a view that was checked on site", "Recording kept on the premises", "Phone viewing when you are away", "Cabling routes agreed before the walls close"],
    },
    {
        id: "shades", name: "Shades", kicker: "Light, without the glare",
        summary: "Motorized curtains for the rooms that take the afternoon sun. One control, instead of a cord in every window.",
        includes: ["Sheer and blackout where the room needs both", "A morning scene and an afternoon scene", "Manual override if the power is out", "Tracks chosen for the lintel you already have"],
    },
    {
        id: "water", name: "Water line", kicker: "Save water",
        summary: "The sump, the tank, the pump, and the purifier treated as one line. The pump stops when the tank is full. It does not run a dry sump.",
        includes: ["Overhead tank and sump sensing", "Dry-run protection on the pump", "RO and UV sized for the household", "A simple alert when the line needs a look"],
    },
    {
        id: "power", name: "Backup & solar", kicker: "Save energy",
        summary: "An inverter on the circuits that matter, and solar where the roof, the shade, and the bill justify it. The utility room is drawn, not improvised.",
        includes: ["Essential circuits listed before the inverter is chosen", "Battery and inverter mounted with clear cable routes", "Solar on roofs that can carry it", "A changeover you can explain to the next electrician"],
    },
    {
        id: "electrical", name: "Electrical & plumbing base", kicker: "Under the automation",
        summary: "Distribution, points, and pipes done so the automation has somewhere honest to live. This is the work a smart panel cannot replace.",
        includes: ["Distribution and circuit planning", "Points for light, fan, appliance, and data", "Pump and purifier plumbing", "Space left for a later controller"],
    },
];

export const patterns = [
    {
        title: "The evening house", place: "Coimbatore",
        summary: "A family home where the front door is the control. One scene for the end of the day.",
        image: "/images/hero.jpg", imageAlt: "A concept study of a villa at dusk.",
        points: ["Hall and rooms drop to a night scene", "Porch light stays on", "Main door locks", "Gate camera is live on the phone"],
    },
    {
        title: "The hill house", place: "Nilgiris",
        summary: "A house that has to respect the power cut and the water tank before it respects the mood lighting.",
        image: "/images/solar.jpg", imageAlt: "A concept study of rooftop solar above the hills.",
        points: ["Inverter covering lights, the router, and one fridge point", "Pump logic for a tank on an uneven supply", "Solar if the roof faces the right way", "Sensors that still make sense in a cooler, wetter season"],
    },
    {
        title: "The apartment", place: "A smaller plan",
        summary: "Less ceiling to open, and a door that is shared with a landing. The useful work is concentrated.",
        image: "/images/living.jpg", imageAlt: "A concept study of layered LED lighting in a living room.",
        points: ["Smart switches where a full rewire is not on the table", "Video door phone at the flat door", "RO under the sink", "Lighting scenes that do not need a new false ceiling everywhere"],
    },
    {
        title: "The utility room", place: "The room that keeps the house up",
        summary: "Inverter, pump, purifier, and distribution in one orderly corner, labeled for the next service visit.",
        image: "/images/water.jpg", imageAlt: "A concept study of a purifier and pump installation.",
        points: ["Cable routes in trunking, not loose loops", "Pump and tank logic with dry-run protection", "Inverter on a listed set of circuits", "Labels a stranger can read"],
    },
];

export const gallery = [
    { title: "Evening house", caption: "Concept study of a villa at dusk, with light along the path and in the rooms.", category: "Lighting", image: "/images/hero.jpg" },
    { title: "Door lock", caption: "Concept study of a smart lock on a timber door, with a key still part of the plan.", category: "Security", image: "/images/lock.jpg" },
    { title: "Dining light", caption: "Concept study of a linear LED pendant and cove light over a dining table.", category: "Lighting", image: "/images/dining.jpg" },
    { title: "Gate camera", caption: "Concept study of a camera under the eave, aimed at the approach to the house.", category: "Security", image: "/images/cctv.jpg" },
    { title: "Living room", caption: "Concept study of cove lighting in a living room after dark.", category: "Lighting", image: "/images/living.jpg" },
    { title: "Rooftop solar", caption: "Concept study of a solar array on a tiled roof, with hills behind it.", category: "Power", image: "/images/solar.jpg" },
    { title: "Water line", caption: "Concept study of a purifier and pump, piped and left accessible.", category: "Water", image: "/images/water.jpg" },
    { title: "Bedroom shades", caption: "Concept study of full-height curtains for a room that takes the morning sun.", category: "Comfort", image: "/images/shades.jpg" },
    { title: "Inverter wall", caption: "Concept study of an inverter and cabinet with the cables dressed.", category: "Power", image: "/images/inverter.jpg" },
    { title: "Wall panel", caption: "Concept study of a wall panel and a phone in the passage.", category: "Control", image: "/images/panel.jpg" },
];

export const galleryCategories = [...new Set(gallery.map((g) => g.category))];

export const interests = [...services.map((s) => s.name), "A whole-home plan", "Not sure yet"];

export const pins = ["Lights", "Shades", "Security panel", "Image sensor", "Thermostats", "Activity sensors", "Water valve", "Solar panels", "Video cameras", "Pet tracker", "Garage door", "Door locks"]
    .map((label, i) => ({ number: String(i + 1).padStart(2, "0"), label }));

export const steps = [
    { number: "01", title: "Listen", summary: "Rooms, routines, and what should stay manual. A plan or a few photos are enough to start." },
    { number: "02", title: "Draw", summary: "Scenes, circuits, and the utility corner. You see what is in the job before the walls close." },
    { number: "03", title: "Install", summary: "Electrical, plumbing, and the automation together, so one trade is not undoing another." },
    { number: "04", title: "Hand over", summary: "Every scene demonstrated. Labels in the utility room. A number to call when something needs a change." },
];

export const scenes = [
    { name: "Goodnight", summary: "Hall dims, bedrooms settle, the main door locks, the porch stays lit." },
    { name: "Away", summary: "Chosen lights off, locks on, cameras live, the pump left to its own logic." },
    { name: "Arrive", summary: "Passage and living room to an evening level. The video door is a glance, not a hunt." },
    { name: "Tank full", summary: "The pump stops. If the sump is dry, it does not keep trying." },
];
