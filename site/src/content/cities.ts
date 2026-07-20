/**
 * Per-city content.
 *
 * IMPORTANT: every field here is hand-written per city. Do NOT convert this to a
 * template that interpolates a city name into shared sentences — pages that differ
 * only by a swapped city name get classified as doorway pages and dropped from the
 * index, which is the exact failure this file exists to avoid.
 *
 * `hauler` facts are sourced from village/hauler pages (see `sourceUrl`). Municipal
 * contracts change. Re-verify every field before publish and on a ~6-month cycle;
 * `verified` records when each was last checked.
 */

export type CityHauler = {
  /** Contracted residential hauler for the municipality. */
  name: string
  phone: string
  /** The town's actual bulk/oversize rule, stated plainly. */
  bulkRule: string
  /** Where that rule leaves a homeowner stuck — the honest reason to call Torvik. */
  gap: string
  /** Official village or hauler page documenting the rule. */
  sourceUrl: string
  /** ISO date this was last verified against the source. */
  verified: string
}

export type City = {
  name: string
  slug: string
  county: "Lake" | "Cook" | "McHenry"
  /** Approximate drive time from the Hawthorn Woods base. Keep as a band, not a promise. */
  driveTime: string
  /** Hand-written, specific to this town. No shared phrasing. */
  intro: string
  /** What the housing stock actually generates as work here. Must be factual. */
  localContext: string
  hauler: CityHauler
  /** Services that genuinely matter most in this town, most-relevant first. */
  priorityServices: string[]
  /** City-specific Q&As. Never reuse across cities. */
  faqs: { q: string; a: string }[]
}

export const cities: City[] = [
  {
    name: "Hawthorn Woods",
    slug: "hawthorn-woods",
    county: "Lake",
    driveTime: "This is our home base",
    intro:
      "Torvik Hauling is based in Hawthorn Woods. When you call from here, you are not calling a dispatch center that routes a truck from somewhere else. You are calling the owner, who lives in town.",
    localContext:
      "Hawthorn Woods sits on larger lots than most of Lake County, and a lot of that land came with a shed, a barn, a playset, or a pole building that has outlived its use. Big lots also mean brush, storm debris, and yard waste in volumes no curbside cart was built for.",
    hauler: {
      name: "Waste Management",
      phone: "(800) 964-8988",
      bulkRule:
        "Waste Management takes two free bulky items a week, plus white goods like water heaters, washers, dryers, stoves, and dishwashers on top of that limit. You have to call at least 24 hours before your regular pickup day to arrange it.",
      gap: "Two items a week works fine for a slow cleanout. It does not work when you are emptying a garage before a move, clearing a pole barn, or taking down a shed. There is also no version of that program that includes demolition debris.",
      sourceUrl: "https://vhw.org/610/Bulk-Trash-Pickup",
      verified: "2026-07-19",
    },
    priorityServices: ["yard-cleanup", "cleanouts", "light-demolition", "junk-removal"],
    faqs: [
      {
        q: "How fast can you get here from your base?",
        a: "We are based in Hawthorn Woods, so this is the shortest drive we make. Same-day pickup is realistic here more often than anywhere else we serve.",
      },
      {
        q: "Waste Management already takes two items a week. Why call you?",
        a: "For two items, do not call us. Use the program you already pay for. Call us when the count is twenty, when the item is too heavy for one person, or when it is a shed or deck that needs to come apart first.",
      },
      {
        q: "Do you handle the outbuildings on larger Hawthorn Woods lots?",
        a: "Yes. Sheds, pole barns, playsets, and fencing get dismantled and hauled in one visit. Larger acreage often means gate access and soft ground, so we walk the site before quoting.",
      },
    ],
  },
  {
    name: "Lake Zurich",
    slug: "lake-zurich",
    county: "Lake",
    driveTime: "Under 10 minutes from our base",
    intro:
      "Lake Zurich is our busiest service area and the shortest drive we make after our own town. Most Lake Zurich requests get a same-day or next-day slot.",
    localContext:
      "Housing here runs from older homes near the lake to subdivisions built through the 1990s and 2000s. The older lakefront properties generate basement and garage cleanouts; the newer subdivisions are now old enough that the original decks, hot tubs, and playsets are reaching the end of their lives.",
    hauler: {
      name: "LRS (Lakeshore Recycling Systems)",
      phone: "(847) 381-9300",
      bulkRule:
        "LRS handles Lake Zurich collection. On the unlimited 95-gallon plan you get one bulk item a week at no charge, but only if it weighs under 50 pounds and is shorter than 4 feet. On the 35- or 65-gallon plans, any bulk item costs 3 stickers. Construction debris is not accepted at all.",
      gap: "The 50-pound and 4-foot limits are where most real jobs fail. A sleeper sofa, a treadmill, a water heater, and a hot tub all blow past both. And if you are mid-renovation, construction debris is excluded outright, so there is no curbside option at any price.",
      sourceUrl: "https://lakezurich.org/547/Refuse-Recycling-Collection",
      verified: "2026-07-19",
    },
    priorityServices: ["junk-removal", "light-demolition", "cleanouts", "construction-debris"],
    faqs: [
      {
        q: "LRS says one bulk item a week is free. Is it?",
        a: "It is, if you are on the 95-gallon unlimited plan and the item is under 50 pounds and under 4 feet. Check the weight before you count on it. A typical three-seat sofa is over 50 pounds and over 4 feet, so it fails both tests.",
      },
      {
        q: "I am remodeling. Can LRS take the debris?",
        a: "No. Construction debris is excluded from Lake Zurich curbside collection. That is one of the most common reasons Lake Zurich homeowners call us.",
      },
      {
        q: "Can you do same-day pickup in Lake Zurich?",
        a: "Often, yes. It is a short drive from Hawthorn Woods, so Lake Zurich gets same-day slots more often than the outer edges of our area. Call early in the day for the best chance.",
      },
    ],
  },
  {
    name: "Arlington Heights",
    slug: "arlington-heights",
    county: "Cook",
    driveTime: "About 20 minutes from our base",
    intro:
      "Arlington Heights has the slowest municipal bulk pickup of anywhere we serve. If you are waiting on the village program, you are waiting weeks. That is usually why people call us here.",
    localContext:
      "Arlington Heights is one of the largest towns we cover, with dense postwar subdivisions, downtown condos near the Metra line, and a steady volume of rental turnovers and estate sales. Condo and downtown jobs come with their own constraint: elevators, loading docks, and building time windows.",
    hauler: {
      name: "Groot",
      phone: "(800) 244-1977",
      bulkRule:
        "Groot handles Arlington Heights collection. Unlike most towns nearby, bulk refuse here runs on a bi-weekly schedule rather than weekly, and reported wait times run two to three weeks with a fee per pickup. Electronics are separate, at up to two items a week.",
      gap: "Two to three weeks is a long time to live with a broken refrigerator in your garage, and it is far too long if you are closing on a house, turning a rental, or clearing an estate on a deadline. Speed is the entire reason Arlington Heights calls us.",
      sourceUrl: "https://www.vah.com/residents/refuse_recycle___landscape_waste/index.php",
      verified: "2026-07-19",
    },
    priorityServices: ["junk-removal", "property-cleanouts", "cleanouts", "construction-debris"],
    faqs: [
      {
        q: "The village will take it eventually. Why pay for removal?",
        a: "If you are not on a deadline, wait for the village program. It is cheaper. Call us when the timeline matters, like a closing date, a lease turnover, or a listing photo shoot that cannot move.",
      },
      {
        q: "Can you work in a downtown Arlington Heights condo building?",
        a: "Yes. Tell us the building when you call. Most require a reserved elevator and a delivery window, and we will schedule around whatever your association requires.",
      },
      {
        q: "Do you handle rental turnovers for property managers here?",
        a: "Regularly. We can clear a unit between tenants and leave it broom-swept for the next showing. We are licensed and insured, and can send documentation before we start.",
      },
    ],
  },
  {
    name: "Barrington",
    slug: "barrington",
    county: "Cook",
    driveTime: "About 15 minutes from our base",
    intro:
      "Barrington generates the largest cleanouts we do. Bigger, older homes on bigger lots hold decades more than a standard subdivision house, and the village's curbside limits were not built for that scale.",
    localContext:
      "Barrington and Barrington Hills have a deep stock of large, older homes, many on acreage with outbuildings, mature trees, and full basements and attics. That combination produces the estate and full-property cleanouts that make up much of our work here, along with serious storm and brush debris after weather.",
    hauler: {
      name: "Groot",
      phone: "(800) 244-1977",
      bulkRule:
        "Groot collects for the Village of Barrington. You get one large item per pickup, plus up to one cubic yard of miscellaneous debris or construction material each week at no extra charge, as long as it is bundled under 4 feet long and 2 feet in diameter. Appliances and anything unusually heavy require a paid special pickup you have to schedule ahead.",
      gap: "One cubic yard is roughly a few contractor bags. A full attic, a cleared basement, or a whole-house estate cleanout runs many cubic yards, and bundling everything to under 4 feet by hand is its own weekend of work.",
      sourceUrl: "https://www.barrington-il.gov/resources/services/recycling-refuse-services/",
      verified: "2026-07-19",
    },
    priorityServices: ["property-cleanouts", "cleanouts", "yard-cleanup", "light-demolition"],
    faqs: [
      {
        q: "How long does a full Barrington estate cleanout take?",
        a: "Most take one to three days depending on square footage, how full the basement and attic are, and whether outbuildings are included. We walk the property first and give you a firm number and a firm timeline before anything moves.",
      },
      {
        q: "Can you coordinate with an estate attorney or realtor?",
        a: "Yes. We work around closing dates and listing schedules, and can provide insurance documentation to executors and property managers before the job starts.",
      },
      {
        q: "What about acreage properties in Barrington Hills?",
        a: "Larger parcels usually mean outbuildings, fencing, and brush along the property line. We handle all of it, but access matters. Let us know about gates, soft ground, and turnaround space when you call.",
      },
    ],
  },
  {
    name: "Palatine",
    slug: "palatine",
    county: "Cook",
    driveTime: "About 15 minutes from our base",
    intro:
      "Palatine publishes the clearest bulk rules of any town we serve, which makes it easy to know exactly when you need us. Over 60 pounds or over 4 feet, and the village program stops being free.",
    localContext:
      "Palatine is one of the denser towns in our area, with a large mix of single-family subdivisions, townhomes, condos, and apartments near the downtown Metra station. High rental turnover means a steady stream of move-out cleanouts, and the aging subdivision stock produces hot tubs, sheds, and decks reaching end of life.",
    hauler: {
      name: "Groot",
      phone: "(800) 244-1977",
      bulkRule:
        "Groot collects for Palatine. One bulk item goes to the curb each week, and the village publishes exactly what qualifies: appliances, grills, bicycles, cabinets, countertops, furniture, mowers, mattresses, plumbing fixtures, snow blowers with the fuel removed, sofas, and swing sets cut to 4 feet or less. Anything over 60 pounds or over 4 feet may require a paid special pickup.",
      gap: "Read that list again and notice the work hidden in it. A swing set only qualifies if you have already cut it into 4-foot pieces. That is the part people call us about, along with everything over the 60-pound line: hot tubs, treadmills, safes, and full basement contents.",
      sourceUrl: "https://www.palatine.il.us/668/Bulk-Items",
      verified: "2026-07-19",
    },
    priorityServices: ["junk-removal", "light-demolition", "cleanouts", "property-cleanouts"],
    faqs: [
      {
        q: "Palatine says swing sets are accepted. Why would I call you?",
        a: "They are accepted cut to 4 feet or less. If you are willing to spend a Saturday with a reciprocating saw, the village program works. We do the cutting, loading, and hauling in one visit instead.",
      },
      {
        q: "What is the 60-pound rule about?",
        a: "Items over 60 pounds or longer than 4 feet may need a paid special pickup rather than standard weekly bulk service. Hot tubs, treadmills, large appliances, and safes all land on the wrong side of that line.",
      },
      {
        q: "Do you handle move-outs from Palatine apartments and townhomes?",
        a: "Yes, and often. Tell us the building and the floor when you call. Stairs and elevator access change the timing, and we would rather plan for it than discover it.",
      },
    ],
  },
  {
    name: "Buffalo Grove",
    slug: "buffalo-grove",
    county: "Lake",
    driveTime: "About 15 minutes from our base",
    intro:
      "Buffalo Grove is deep in the part of its housing cycle where the original backyard build-out is wearing out all at once. Decks, hot tubs, and playsets are the bulk of what we remove here.",
    localContext:
      "Most of Buffalo Grove was built out through the 1970s, 80s, and 90s. Those homes are now on their second or third owner, and the decks, sheds, fences, and hot tubs installed by the first owner are at end of life. Curbside collection has no answer for any of them.",
    hauler: {
      name: "Waste Management",
      phone: "(800) 964-8988",
      bulkRule:
        "Waste Management collects for Buffalo Grove, once a week for refuse, landscape waste, and recycling. Each household can put out one oversized item per week at no extra cost. Anything beyond that one item, you arrange and pay for directly with Waste Management. Yard waste needs a rigid container with an organics decal from Village Hall.",
      gap: "One oversized item a week is a fine rule for a worn-out recliner. It is not a rule that can absorb a demolished deck, a hot tub, or a fence line. Those are not oversized items, they are a truckload, and they arrive all at once.",
      sourceUrl: "https://www.vbg.org/227/Waste-and-recycling",
      verified: "2026-07-19",
    },
    priorityServices: ["light-demolition", "junk-removal", "cleanouts", "yard-cleanup"],
    faqs: [
      {
        q: "Do you remove hot tubs in Buffalo Grove?",
        a: "Yes, and it is one of the most common calls we get here. We dismantle the tub on site and haul the pieces, which is faster than trying to move a full tub through a gate or around a corner.",
      },
      {
        q: "Can you take down a deck and haul it the same day?",
        a: "For most residential decks, yes. One crew does the demolition and the haul-away in a single visit, so you are not renting a dumpster and waiting on a separate pickup.",
      },
      {
        q: "Do I need a permit to remove a deck or shed here?",
        a: "Requirements vary by village and by what you are removing. We flag anything we think needs a permit before we start, but confirm with Buffalo Grove Village Hall if you are unsure.",
      },
    ],
  },
  {
    name: "Long Grove",
    slug: "long-grove",
    county: "Lake",
    driveTime: "About 10 minutes from our base",
    intro:
      "Long Grove has the strictest single-item rule in our service area. If one person cannot safely lift it, curbside will not take it, and that covers most of what people actually need gone.",
    localContext:
      "Long Grove properties sit on large, heavily wooded lots, which produces serious brush, limb, and storm debris every season. The homes tend toward larger custom builds with full basements, outbuildings, and the kind of long-term storage that turns into a multi-day cleanout.",
    hauler: {
      name: "Groot",
      phone: "(847) 693-2700",
      bulkRule:
        "Groot serves Long Grove. Residents get one bulk item a week, under 50 pounds, and specifically one that a single Groot collector can safely handle alone. Anything past that first item costs extra. Yard waste and food scrap collection runs April 1 through November 30 on a sticker program.",
      gap: "Weight is only half of it. The rule is whether a single collector can lift the item alone, which rules out most furniture, appliances, and anything awkward. And with yard waste collection stopping November 30, December through March storm debris has nowhere to go.",
      sourceUrl: "https://www.longgroveil.gov/community/page/recycling-and-waste-services-0",
      verified: "2026-07-19",
    },
    priorityServices: ["yard-cleanup", "junk-removal", "cleanouts", "light-demolition"],
    faqs: [
      {
        q: "What happens to storm debris in Long Grove during the winter?",
        a: "Village yard waste collection runs April 1 through November 30, so a December or January limb drop has no curbside option. We haul brush and storm debris year round.",
      },
      {
        q: "What does the one-collector rule actually rule out?",
        a: "In practice, most of it. Sofas, mattresses, appliances, desks, and anything a single person cannot lift alone. If you and a friend would need to carry it together, curbside will not take it.",
      },
      {
        q: "Can you get a truck onto a wooded Long Grove lot?",
        a: "Usually. Long lanes, tree cover, and soft ground are normal here, so tell us about access when you call and we will bring the right setup rather than discovering the problem on site.",
      },
    ],
  },
  {
    name: "Libertyville",
    slug: "libertyville",
    county: "Lake",
    driveTime: "About 15 minutes from our base",
    intro:
      "Libertyville splits neatly into two kinds of jobs: century-old homes near downtown with full basements and attics, and newer subdivisions on the edges with aging decks and yards.",
    localContext:
      "The homes closest to downtown Libertyville are among the oldest we work in, which means real basements, real attics, and genuinely heavy legacy items, including the cast iron and steel that modern houses do not have. Newer subdivisions on the outskirts generate the standard deck, fence, and yard debris work.",
    hauler: {
      name: "Groot",
      phone: "(877) 404-7668",
      bulkRule:
        "Libertyville contracts with Groot for single-family and multi-family collection, and the residential service tiers include one bulk item a week. Pickup days run Monday, Tuesday, Thursday, and Friday depending on where in the village you are.",
      gap: "One item a week is a trickle. An old Libertyville basement is not a trickle, it is thirty years of accumulation plus whatever the previous two owners left, and much of it is heavier than anything a curbside crew will take.",
      sourceUrl: "https://www.libertyville.com/124/Waste-and-Recycling-Services",
      verified: "2026-07-19",
    },
    priorityServices: ["cleanouts", "junk-removal", "property-cleanouts", "light-demolition"],
    faqs: [
      {
        q: "Do you handle old basements with heavy legacy items?",
        a: "Yes, and it is some of our favorite work. We have removed a steel furnace drum original to a hundred-year-old house that other contractors had already turned down. Old cast iron, steel tanks, and built-in shelving are all in scope.",
      },
      {
        q: "Can you get equipment into a narrow older Libertyville lot?",
        a: "Usually. Homes near downtown sit on tighter lots with narrow drives and alley access. Tell us what the approach looks like and we will plan the load-out around it.",
      },
      {
        q: "How quickly can you reach Libertyville?",
        a: "It is about a 15 minute drive from our Hawthorn Woods base, and we respond to calls, texts, and form requests within 1 to 2 hours.",
      },
    ],
  },
  {
    name: "Mount Prospect",
    slug: "mount-prospect",
    county: "Cook",
    driveTime: "About 25 minutes from our base",
    intro:
      "Mount Prospect runs the strictest curbside rule of anywhere we serve. The village keeps an approved bulk item list, and anything not on it does not get collected. No negotiation at the curb.",
    localContext:
      "Mount Prospect is one of the largest towns in our area, built out heavily in the postwar decades, with a dense downtown around the Metra station and a large stock of 1950s and 60s houses. Those homes have small garages, full basements, and original built-ins, which is a reliable recipe for cleanout work.",
    hauler: {
      name: "Republic Services",
      phone: "(847) 981-0091",
      bulkRule:
        "Republic Services collects for Mount Prospect. Large items like furniture and bedding go beside the cart, but the village maintains an approved bulk item list and anything outside that list is left at the curb. If it does not fit and does not qualify, your options are to hold it until next week or pay Republic for a special pickup.",
      gap: "An approved list means the decision is made before the truck arrives. Renovation debris, hot tubs, sheds, and anything unusually heavy are not on it, and holding something until next week does not help when it is a whole basement rather than one chair.",
      sourceUrl:
        "https://www.mountprospect.org/departments/public-works/solid-waste/garbage-collection",
      verified: "2026-07-19",
    },
    priorityServices: ["cleanouts", "junk-removal", "property-cleanouts", "construction-debris"],
    faqs: [
      {
        q: "The village left my item at the curb. Why?",
        a: "Almost always because it is not on the approved bulk list. Mount Prospect enforces that list, so anything outside it stays where you put it. That is the most common reason we get called here.",
      },
      {
        q: "Do you handle older Mount Prospect basements?",
        a: "Yes. Houses from the 1950s and 60s tend to have full basements, built-in shelving, and workbenches assembled in place. We break those down and carry them out.",
      },
      {
        q: "Can you work near the downtown Metra area?",
        a: "Yes. Tighter lots and shared drives near downtown mean access matters, so tell us what the approach looks like when you call.",
      },
    ],
  },
  {
    name: "Wheeling",
    slug: "wheeling",
    county: "Cook",
    driveTime: "About 20 minutes from our base",
    intro:
      "Wheeling gets one bulk item a week, and that is the whole allowance. For a single chair it works fine. For anything that arrives as a load, it does not.",
    localContext:
      "Wheeling mixes a large multi-family and apartment stock with single-family subdivisions and a substantial industrial corridor. The apartment density means steady move-out and turnover work, and the industrial side means commercial clearing and construction debris alongside the residential jobs.",
    hauler: {
      name: "Waste Management",
      phone: "(800) 796-9696",
      bulkRule:
        "Waste Management is the exclusive residential hauler for Wheeling. Collection includes refuse, recycling, and one bulk item or a limited amount of carpeting per week.",
      gap: "One item a week is a slow drip against a move-out, a turnover, or a renovation. Carpeting is capped, and if you have just pulled carpet out of a whole house you are well past a limited amount.",
      sourceUrl: "https://www.wheelingil.gov/394/Bulk-Items",
      verified: "2026-07-19",
    },
    priorityServices: ["junk-removal", "property-cleanouts", "construction-debris", "cleanouts"],
    faqs: [
      {
        q: "Do you handle apartment and condo move-outs in Wheeling?",
        a: "Regularly. Tell us the building and floor when you call, since elevator access and building time windows change the schedule more than the volume does.",
      },
      {
        q: "Can you take carpet from a whole house?",
        a: "Yes. The village allowance covers a limited amount of carpeting, which does not cover a full tear-out. We take the lot in one visit.",
      },
      {
        q: "Do you work with businesses along the industrial corridor?",
        a: "Yes. Commercial clearing, warehouse cleanouts, and job-site debris are all in scope, and we can invoice the business directly.",
      },
    ],
  },
  {
    name: "Rolling Meadows",
    slug: "rolling-meadows",
    county: "Cook",
    driveTime: "About 20 minutes from our base",
    intro:
      "Rolling Meadows publishes the most precise curbside limits in our whole service area, down to how you have to cut up a garage door. Worth reading before you stack anything at the curb.",
    localContext:
      "Rolling Meadows was built largely as Kimball Hill subdivisions in the 1950s, which means thousands of similar homes now on their third or fourth owner. Original garages, sheds, and fencing across those subdivisions are all reaching end of life within a few years of each other.",
    hauler: {
      name: "City of Rolling Meadows program",
      phone: "(847) 963-0500",
      bulkRule:
        "The city sets hard limits at the curb. Items must be no larger than 4 feet by 4 feet, stacked neatly, and no more than 6 pieces per collection. Anything larger or beyond 6 pieces needs a special pickup, which carries a $50 minimum. Garage doors have their own rule: dismantled into sections, each cut to 4 feet, with a 6-door limit per pickup day.",
      gap: "Six pieces at 4 feet by 4 feet is a rule written for tidying up, not for clearing out. A garage cleanout is many multiples of that, and the $50 minimum special pickup is charged per collection rather than covering the whole job.",
      sourceUrl: "https://www.cityrm.org/984/Refuse-and-Recycling",
      verified: "2026-07-19",
    },
    priorityServices: ["cleanouts", "light-demolition", "junk-removal", "yard-cleanup"],
    faqs: [
      {
        q: "What is the 6-piece limit actually about?",
        a: "The city takes up to 6 pieces per collection day, none larger than 4 feet by 4 feet, stacked neatly. Past that you need a paid special pickup with a $50 minimum. A garage cleanout blows through it in the first load.",
      },
      {
        q: "Do you remove old garage doors?",
        a: "Yes. The city will take them, but only dismantled into 4-foot sections with a 6-door cap. We take them whole and handle the cutting ourselves.",
      },
      {
        q: "Are Rolling Meadows subdivision garages a common job for you?",
        a: "Very. The original 1950s garages and sheds across these subdivisions are aging out together, and they are a single-visit job for us.",
      },
    ],
  },
  {
    name: "Prospect Heights",
    slug: "prospect-heights",
    county: "Cook",
    driveTime: "About 20 minutes from our base",
    intro:
      "Prospect Heights has one of the better bulk programs around, with no extra charge as long as you call ahead. Use it when it fits, and call us for what it will not cover.",
    localContext:
      "Prospect Heights is a patchwork of incorporated village and unincorporated county pockets, with larger lots than its neighbors and some areas still on septic and private wells. Bigger lots produce more outbuildings, more brush, and more of the long-term storage that turns into a full cleanout.",
    hauler: {
      name: "Flood Brothers",
      phone: "(630) 261-0578",
      bulkRule:
        "Flood Brothers collects for Prospect Heights. Bulk items are picked up at no additional charge as long as you call at least 24 hours ahead of your collection day. White goods like refrigerators, water heaters, washers, and dryers are included on the same 24-hour notice. Overflow refuse must be in a bag or container no larger than 32 gallons or 50 pounds.",
      gap: "The program is genuinely good and you should use it for appliances and single items. Where it stops is volume and structures. A shed, a deck, a hot tub, or an entire garage is not a bulk item on 24 hours notice, it is a job.",
      sourceUrl: "https://www.prospect-heights.il.us/108/Refuse-Recycling",
      verified: "2026-07-19",
    },
    priorityServices: ["cleanouts", "light-demolition", "yard-cleanup", "junk-removal"],
    faqs: [
      {
        q: "Flood Brothers takes appliances free. Should I call you instead?",
        a: "For one appliance, no. Call Flood Brothers 24 hours ahead and it costs nothing. Call us when there are ten items, or when it is a structure rather than an appliance.",
      },
      {
        q: "Do you serve unincorporated pockets around Prospect Heights?",
        a: "Yes. Unincorporated areas often have different or individually contracted hauling, which is exactly when private removal is simplest.",
      },
      {
        q: "Can you handle larger lots with outbuildings?",
        a: "Yes. Sheds, detached garages, and fencing on the bigger Prospect Heights lots are routine. Tell us about gate width and ground conditions when you call.",
      },
    ],
  },
  {
    name: "Kildeer",
    slug: "kildeer",
    county: "Lake",
    driveTime: "Under 10 minutes from our base",
    intro:
      "Kildeer is one of our closest service areas, a few minutes from the shop. Small village, large properties, and the kind of jobs that come with acreage.",
    localContext:
      "Kildeer is a small, low-density village of large custom homes on sizeable lots, much of it built from the 1980s onward. Big lots mean private drives, mature landscaping, outbuildings, and brush along property lines, and the earliest homes are now old enough that their original decks, pools, and playsets are being replaced.",
    hauler: {
      name: "LRS (Lakeshore Recycling Systems)",
      phone: "(847) 381-9300",
      bulkRule:
        "Kildeer selected LRS as the exclusive provider for weekly residential garbage, recycling, and yard waste, collected on Fridays. Bulk items beyond the standard allowance are arranged directly with LRS.",
      gap: "Weekly curbside is built around carts, and very little of what a large Kildeer property generates fits in one. Deck teardowns, pool removals, and brush clearing along a long property line all arrive at once rather than one item at a time.",
      sourceUrl: "https://www.lrsrecycles.com/municipality/kildeer/",
      verified: "2026-07-19",
    },
    priorityServices: ["light-demolition", "yard-cleanup", "cleanouts", "junk-removal"],
    faqs: [
      {
        q: "How quickly can you reach Kildeer?",
        a: "Very quickly. It is one of the shortest drives we make, so same-day and next-day slots are realistic here.",
      },
      {
        q: "Do you work on larger Kildeer properties with long drives?",
        a: "Yes. Long private drives, gates, and soft ground are normal here. Tell us about access when you call so we bring the right setup.",
      },
      {
        q: "Can you take out a pool or deck?",
        a: "Yes. Above-ground pools, decks, and playsets are among the most common jobs on properties built in the 80s and 90s, which is much of Kildeer.",
      },
    ],
  },
  {
    name: "Deer Park",
    slug: "deer-park",
    county: "Lake",
    driveTime: "Under 10 minutes from our base",
    intro:
      "Deer Park is minutes from our base and splits neatly between large residential lots and the retail district around Deer Park Town Center. We work both sides of it.",
    localContext:
      "Deer Park is small and low-density on the residential side, with large lots and mature trees, alongside a substantial retail corridor. That mix means household cleanouts and yard work on one hand, and retail fixture removal, build-out debris, and commercial clearing on the other.",
    hauler: {
      name: "Varies by property",
      phone: "(224) 456-6607",
      bulkRule:
        "Deer Park does not have a single village-wide residential bulk program the way its larger neighbors do, and arrangements differ between subdivisions, homeowners associations, and individually contracted properties. Check with the village or your own hauler for what your address includes.",
      gap: "Where there is no uniform village program, there is no reliable free option to fall back on. That is the situation private removal is simplest for, and it is why a lot of Deer Park calls skip the curbside question entirely.",
      sourceUrl: "https://www.swalco.org/101/SERVICES",
      verified: "2026-07-19",
    },
    priorityServices: ["junk-removal", "cleanouts", "yard-cleanup", "property-cleanouts"],
    faqs: [
      {
        q: "Who is my hauler in Deer Park?",
        a: "It depends on your address and whether your subdivision or association arranges it. We would rather tell you to check with the village than guess on your behalf.",
      },
      {
        q: "Do you handle retail and commercial work near Deer Park Town Center?",
        a: "Yes. Fixture removal, build-out debris, and after-hours clearing are all in scope, and we can invoice the business directly.",
      },
      {
        q: "How fast can you get to Deer Park?",
        a: "It is one of our shortest drives. Same-day is often possible if you call early.",
      },
    ],
  },
  {
    name: "Barrington Hills",
    slug: "barrington-hills",
    county: "Cook",
    driveTime: "About 20 minutes from our base",
    intro:
      "Barrington Hills is acreage country. Five-acre minimum zoning, horse properties, and outbuildings that no curbside program was ever designed to deal with.",
    localContext:
      "Barrington Hills is defined by its large-lot zoning, with properties measured in acres rather than feet and a strong equestrian character. That means barns, run-in sheds, paddock fencing, and long wooded property lines. It also means the debris from any project here arrives in quantities a residential cart cannot absorb.",
    hauler: {
      name: "Individually contracted",
      phone: "(224) 456-6607",
      bulkRule:
        "Barrington Hills residents generally arrange hauling individually rather than through a single village-wide contract, so what you get depends on the hauler you signed with. There is no uniform bulk allowance to rely on across the village.",
      gap: "Without a village-wide program there is no free fallback, and the scale here would overwhelm one regardless. Barn cleanouts, fence line removal, and brush clearing across acreage are private-hauler work by default.",
      sourceUrl: "https://www.barringtonhills-il.gov/",
      verified: "2026-07-19",
    },
    priorityServices: ["property-cleanouts", "light-demolition", "yard-cleanup", "cleanouts"],
    faqs: [
      {
        q: "Do you handle barns and outbuildings?",
        a: "Yes. Barns, run-in sheds, and outbuildings get dismantled and hauled. Large structures may need a demolition permit, and we flag anything we think does before starting.",
      },
      {
        q: "Can you clear fence line and brush across acreage?",
        a: "Yes, and it is common here. Paddock fencing and wooded property lines are volume work, so we walk the property before quoting rather than pricing from a description.",
      },
      {
        q: "Will your truck damage the property?",
        a: "We plan for it. Acreage means soft ground, narrow lanes, and turf you care about. Tell us where we can and cannot drive and we will work to it.",
      },
    ],
  },
  {
    name: "Vernon Hills",
    slug: "vernon-hills",
    county: "Lake",
    driveTime: "About 15 minutes from our base",
    intro:
      "Vernon Hills enforces the container rule strictly. If it is not in the cart, it is not collected, or you are charged for it. That is the cleanest dividing line of any town we serve.",
    localContext:
      "Vernon Hills is a planned community built largely from the 1970s onward, with a large retail and commercial base around Hawthorn Mall and a big stock of townhomes and condos alongside single-family subdivisions. High townhome density means steady move-out and turnover work.",
    hauler: {
      name: "Waste Management",
      phone: "(800) 964-8988",
      bulkRule:
        "The village contracts village-wide with Waste Management. Waste must go in the WM-provided containers, and items left outside them are either not collected or charged an additional fee. Bulk items need a special pickup arranged and paid for directly with WM.",
      gap: "Everything larger than the cart is a paid arrangement, so there is no free bulk allowance to lean on the way there is in neighboring towns. Once you are paying either way, one visit that clears the whole thing usually beats scheduling items one at a time.",
      sourceUrl: "https://www.vernonhills.org/767/Trash-Recyling-Organics",
      verified: "2026-07-19",
    },
    priorityServices: ["junk-removal", "cleanouts", "property-cleanouts", "light-demolition"],
    faqs: [
      {
        q: "Why did WM leave the item next to my cart?",
        a: "Vernon Hills enforces the container rule. Anything outside the WM cart either does not get collected or gets billed, which surprises people the first time.",
      },
      {
        q: "Do you handle townhome and condo move-outs here?",
        a: "Yes, frequently. Vernon Hills has a lot of townhome stock, and turnovers are deadline work we schedule around.",
      },
      {
        q: "Can you work with the retail corridor businesses?",
        a: "Yes. Retail fixture removal and commercial clearing near the Hawthorn area are in scope, including after-hours scheduling.",
      },
    ],
  },
  {
    name: "Mundelein",
    slug: "mundelein",
    county: "Lake",
    driveTime: "About 15 minutes from our base",
    intro:
      "Mundelein runs an annual village-wide cleanup week that is genuinely worth using. The catch is that it happens once a year, and it excludes most of what people actually need gone.",
    localContext:
      "Mundelein has a broad mix of housing, from older homes near the original village core to subdivisions built through the 1990s and 2000s, plus a meaningful industrial base. The older stock generates basement and garage cleanouts; the newer subdivisions are into their deck and hot tub replacement years.",
    hauler: {
      name: "Groot",
      phone: "(847) 693-2700",
      bulkRule:
        "Groot serves Mundelein, and the village runs an annual spring cleanup week when residents can put bulk items at the curb on their normal collection day. That week accepts furniture, patio furniture, grills, drained mowers and snow blowers, bikes, and general household debris. It specifically excludes yard waste, electronics, tires, paint, chemicals, fuel, asbestos, railroad ties, and large quantities of construction debris. Appliances with refrigerant are refused unless the refrigerant has been removed and the unit tagged to prove it.",
      gap: "Once a year is not a schedule you can plan a move or a closing around. The exclusion list also removes most of the hard cases: electronics, construction debris, and any appliance still holding refrigerant, which is every fridge that has not been professionally evacuated.",
      sourceUrl: "https://www.mundelein.org/203/Garbage-Recycling",
      verified: "2026-07-19",
    },
    priorityServices: ["cleanouts", "junk-removal", "construction-debris", "light-demolition"],
    faqs: [
      {
        q: "Should I just wait for the spring cleanup week?",
        a: "If your timing lines up and your items are on the accepted list, yes, use it. It is free. Call us when it is the wrong month or your items are on the exclusion list.",
      },
      {
        q: "Why will they not take my refrigerator?",
        a: "Refrigerant. The village will not take appliances holding it unless it has been professionally removed and the unit tagged. We route fridges to a facility certified to recover it.",
      },
      {
        q: "Can you take construction debris in Mundelein?",
        a: "Yes. Large quantities of construction debris are excluded from the village cleanup, which is one of the more common reasons Mundelein calls us.",
      },
    ],
  },
  {
    name: "Wauconda",
    slug: "wauconda",
    county: "Lake",
    driveTime: "About 15 minutes from our base",
    intro:
      "Wauconda has a housing stock unlike its neighbors, because a lot of it started life as lake cottages. Those conversions produce some of the more interesting cleanouts we do.",
    localContext:
      "Wauconda sits around Bangs Lake, and much of the older housing near the water began as seasonal cottages later converted to year-round homes. Conversions mean odd additions, crawl spaces, tight lots, and decades of accumulation in places that were never designed for storage. Newer subdivisions on the edges of the village are more conventional.",
    hauler: {
      name: "LRS (Lakeshore Recycling Systems)",
      phone: "(847) 381-9300",
      bulkRule:
        "The village contracts with LRS for weekly single-family garbage and recycling, collected Thursdays and Fridays. Bulk items are handled as a special pickup arranged directly with LRS.",
      gap: "Bulk here is a call-and-arrange service rather than a standing weekly allowance, so there is no free item to count on. For a converted cottage being cleared out, the volume is well past what any weekly program covers regardless.",
      sourceUrl: "https://www.wauconda-il.gov/services/programs/refuse___recycling.php",
      verified: "2026-07-19",
    },
    priorityServices: ["cleanouts", "property-cleanouts", "junk-removal", "yard-cleanup"],
    faqs: [
      {
        q: "Do you work on the older homes near Bangs Lake?",
        a: "Yes, and they are some of our more interesting jobs. Converted cottages have crawl spaces, additions, and tight access that a standard subdivision house does not.",
      },
      {
        q: "Access near the lake is tight. Is that a problem?",
        a: "It changes the plan rather than stopping it. Narrow lots and shared drives near the water are normal, so tell us what the approach looks like when you call.",
      },
      {
        q: "Can you handle a seasonal property cleanout?",
        a: "Yes. Cottages and seasonal properties often hold decades of accumulated contents, and we clear them start to finish.",
      },
    ],
  },
  {
    name: "Grayslake",
    slug: "grayslake",
    county: "Lake",
    driveTime: "About 20 minutes from our base",
    intro:
      "Grayslake changed haulers recently, and the new rules name hot tubs specifically as something the village will not take. That is unusually direct, and it is accurate.",
    localContext:
      "Grayslake grew substantially through the 1990s and 2000s, with large subdivisions surrounding a historic downtown and the College of Lake County nearby. The subdivision stock is now reaching the age where original decks, hot tubs, fences, and playsets all need replacing at once.",
    hauler: {
      name: "Groot",
      phone: "(847) 693-2700",
      bulkRule:
        "Groot took over Grayslake residential collection on October 1, 2025. Residents get one bulk item a week, under 50 pounds, and specifically one a single Groot collector can lift safely alone. Items banned from landfill disposal, including appliances, tires, car batteries, televisions, and electronics, are excluded. The village guidance names a hot tub as the example of an oversized item requiring a paid special pickup.",
      gap: "The village itself uses a hot tub as the example of what it will not take, and adds that anything needing two or more people to lift falls in the same category. That is most furniture, every appliance, and every structure.",
      sourceUrl: "https://www.villageofgrayslake.com/150/Garbage-Recycling-Services",
      verified: "2026-07-19",
    },
    priorityServices: ["light-demolition", "junk-removal", "cleanouts", "yard-cleanup"],
    faqs: [
      {
        q: "The village says hot tubs need a special pickup. What do you charge?",
        a: "We quote hot tubs after seeing the access, since gate width and the path to the truck matter more than the tub itself. We dismantle on site so the pieces fit through a standard gate.",
      },
      {
        q: "Did Grayslake change haulers?",
        a: "Yes. Groot took over residential collection on October 1, 2025, so rules you remember from the previous hauler may no longer apply.",
      },
      {
        q: "Why will they not take my TV?",
        a: "Illinois bars electronics from landfills, so televisions and computers are excluded from curbside everywhere in the state. They have to go to a registered recycler.",
      },
    ],
  },
  {
    name: "Gurnee",
    slug: "gurnee",
    county: "Lake",
    driveTime: "About 25 minutes from our base",
    intro:
      "Gurnee is at the outer edge of our service area, and it is one of the few towns with a written rule about wrapping mattresses. Worth knowing before you put one out.",
    localContext:
      "Gurnee grew around its retail and entertainment corridor, with large subdivisions built through the 1990s and 2000s and a significant rental and multi-family population. Volume turnover work and standard subdivision-age replacements make up most of what we do out here.",
    hauler: {
      name: "LRS (Lakeshore Recycling Systems)",
      phone: "(844) 633-3577",
      bulkRule:
        "LRS took over Gurnee residential collection in June 2024. One bulk item a week goes beside your cart at no charge. Anything over 50 pounds needs to be scheduled with LRS so they bring proper equipment, and additional items the same day require prepayment and prescheduling. Mattresses have to be wrapped in plastic to be collected. Electronics, refrigerators, freezers, paint, chemicals, and oils are refused outright.",
      gap: "The 50-pound line catches most real items, and the plastic-wrap requirement on mattresses surprises people on moving day when they do not have wrap. Electronics and refrigerators being refused outright means the two things most likely to be sitting in a Gurnee garage are both excluded.",
      sourceUrl: "https://www.gurnee.il.us/residents/recycling/bulk-or-large-item-disposal",
      verified: "2026-07-19",
    },
    priorityServices: ["junk-removal", "property-cleanouts", "cleanouts", "light-demolition"],
    faqs: [
      {
        q: "Do mattresses really need to be wrapped in plastic?",
        a: "For LRS curbside collection in Gurnee, yes. We take them unwrapped, which is usually the point when someone calls us on moving day.",
      },
      {
        q: "Gurnee is at the edge of your area. Do you still come out?",
        a: "Yes. It is about a 25 minute drive, so same-day is less likely than it is closer in, but same-week is normal.",
      },
      {
        q: "Can you take the old refrigerator?",
        a: "Yes. LRS refuses refrigerators at the curb because of refrigerant. We route them to a facility certified to recover it.",
      },
    ],
  },
  {
    name: "Lindenhurst",
    slug: "lindenhurst",
    county: "Lake",
    driveTime: "About 25 minutes from our base",
    intro:
      "Lindenhurst allows one bulk item a week, and the qualifier is whether one person can handle it. That single condition is what sends most people looking for another option.",
    localContext:
      "Lindenhurst is a residential village of subdivisions built largely from the 1970s through the 1990s, near the Chain O'Lakes. Those homes are now well into their replacement cycle for decks, fences, sheds, and above-ground pools, and the earlier stock has full basements holding a couple of decades of storage.",
    hauler: {
      name: "Groot",
      phone: "(847) 693-2700",
      bulkRule:
        "The village contracts with Groot, with residential collection on Mondays. The contract covers garbage in the automated cart plus one bulk item a week that one person can handle. Anything beyond that you arrange directly with Groot, and they charge a separate fee for special pickups outside standard service.",
      gap: "The rule is not about size, it is about whether one person can handle it. That excludes most furniture, every appliance, and anything structural, and the fee for going past it is negotiated with the hauler case by case.",
      sourceUrl:
        "https://www.lindenhurstil.org/village_services/public_works/garbage_and_recycling_services.php",
      verified: "2026-07-19",
    },
    priorityServices: ["light-demolition", "cleanouts", "junk-removal", "yard-cleanup"],
    faqs: [
      {
        q: "What counts as something one person can handle?",
        a: "In practice, less than you would expect. If you would want a second person to help you carry it, it is outside the weekly allowance.",
      },
      {
        q: "Do you remove above-ground pools in Lindenhurst?",
        a: "Yes, and it is a common call in subdivisions of this era. That includes the liner, the wall, the pump, and grading out the sand base.",
      },
      {
        q: "How far out is Lindenhurst for you?",
        a: "About 25 minutes from our Hawthorn Woods base. Same-week scheduling is normal, and we still respond to calls within 1 to 2 hours.",
      },
    ],
  },
  {
    name: "Lake Villa",
    slug: "lake-villa",
    county: "Lake",
    driveTime: "About 25 minutes from our base",
    intro:
      "Lake Villa switched haulers in 2024, so if you are going on what a neighbor told you a couple of years ago, the rules have moved.",
    localContext:
      "Lake Villa sits among the lakes at the northern end of the county, with a mix of older homes near the water, some of them former seasonal properties, and newer subdivisions inland. Waterfront and near-water lots bring boat and dock debris and the storage problems that come with small older houses.",
    hauler: {
      name: "LRS (Lakeshore Recycling Systems)",
      phone: "(844) 633-3577",
      bulkRule:
        "LRS has provided garbage, recycling, yard waste, and fall leaf collection for Lake Villa since May 1, 2024. Bulk items and special pickups are arranged directly with LRS customer service.",
      gap: "Bulk here is arranged and paid rather than included, so there is no standing free item. For an older lake-area house being cleared out, the volume is past what a weekly program handles in any case.",
      sourceUrl: "https://www.lake-villa.org/department/division.php?structureid=80",
      verified: "2026-07-19",
    },
    priorityServices: ["cleanouts", "property-cleanouts", "junk-removal", "yard-cleanup"],
    faqs: [
      {
        q: "Did the hauler change in Lake Villa?",
        a: "Yes. LRS took over on May 1, 2024, so anything you remember from the previous hauler may no longer apply.",
      },
      {
        q: "Do you work on the older lake-area properties?",
        a: "Yes. Smaller older houses near the water hold a surprising amount, and access is usually the constraint rather than volume.",
      },
      {
        q: "Can you take boat and dock debris?",
        a: "Yes, provided it is non-hazardous and already out of the water. Tell us what it is when you call, since some materials are weight-priced.",
      },
    ],
  },
  {
    name: "Round Lake",
    slug: "round-lake",
    county: "Lake",
    driveTime: "About 20 minutes from our base",
    intro:
      "Round Lake runs an annual Groot cleanup week that is worth planning around if your timing allows. If it does not, the standard weekly allowance is thin.",
    localContext:
      "Round Lake grew quickly through the 2000s with large subdivisions of similar homes, alongside an older village core. The subdivision boom means a large number of properties hitting the same replacement cycle for decks, fences, and playsets at roughly the same time.",
    hauler: {
      name: "Groot",
      phone: "(847) 693-2700",
      bulkRule:
        "Groot has served the Village of Round Lake since January 1, 2021, providing residents with a 95 gallon refuse cart and a 65 gallon recycling cart. Groot runs an annual spring clean-up week when bulk items can go to the curb on your normal collection day.",
      gap: "A once-a-year window is not something you can schedule a move, a closing, or a renovation around. Outside that week, anything beyond the cart is a paid arrangement with the hauler.",
      sourceUrl: "https://www.roundlakeil.gov/pview.aspx?id=20953&catid=556",
      verified: "2026-07-19",
    },
    priorityServices: ["light-demolition", "junk-removal", "cleanouts", "yard-cleanup"],
    faqs: [
      {
        q: "When is the spring cleanup week?",
        a: "It moves year to year, so check the village site. If your timing lines up and your items qualify, use it, since it costs nothing.",
      },
      {
        q: "Do you handle the 2000s-era subdivisions here?",
        a: "Yes. Those homes are into their deck, fence, and playset replacement years, and that debris arrives all at once rather than one item a week.",
      },
      {
        q: "How fast can you get to Round Lake?",
        a: "About 20 minutes from Hawthorn Woods. Same-week is normal and we answer calls and texts within 1 to 2 hours.",
      },
    ],
  },
  {
    name: "Round Lake Beach",
    slug: "round-lake-beach",
    county: "Lake",
    driveTime: "About 20 minutes from our base",
    intro:
      "Round Lake Beach is the largest of the Round Lake communities and switched to Groot in 2023. It also has the densest housing of the group, which changes what the jobs look like.",
    localContext:
      "Round Lake Beach has a denser mix than its neighbors, with smaller lots, a significant rental population, and a lot of modest post-war and mid-century housing alongside later subdivisions. Smaller houses with limited storage and higher rental turnover mean frequent move-out and turnover cleanouts.",
    hauler: {
      name: "Groot",
      phone: "(847) 693-2700",
      bulkRule:
        "Groot has been the waste hauler for Round Lake Beach since July 1, 2023. Bulk collection beyond the standard cart service is arranged with Groot, and the village runs periodic clean-up periods announced through Village Hall.",
      gap: "Smaller houses with limited storage tend to hold less at any one time but turn over faster, and a rental turnover on a deadline does not wait for a periodic cleanup window.",
      sourceUrl:
        "https://roundlakebeachil.gov/departments_and_services/public_works/waste_disposal___recycling.php",
      verified: "2026-07-19",
    },
    priorityServices: ["property-cleanouts", "junk-removal", "cleanouts", "yard-cleanup"],
    faqs: [
      {
        q: "Do you work with landlords on turnovers here?",
        a: "Yes. Round Lake Beach has a substantial rental stock, and turnovers are deadline work we schedule around your vacancy window.",
      },
      {
        q: "Did the hauler change?",
        a: "Yes. Groot took over Round Lake Beach collection on July 1, 2023.",
      },
      {
        q: "Can you handle a small house with a full basement?",
        a: "Yes. Smaller houses here often have more packed into them than their square footage suggests, which is normal for us.",
      },
    ],
  },
  {
    name: "Round Lake Park",
    slug: "round-lake-park",
    county: "Lake",
    driveTime: "About 20 minutes from our base",
    intro:
      "Round Lake Park is the smallest of the Round Lake communities. Groot runs an annual spring clean-up week here, and outside of it the options are limited.",
    localContext:
      "Round Lake Park is a small village of mostly modest single-family homes on compact lots, with an older housing stock than the surrounding subdivisions. Smaller houses with small garages and limited storage mean cleanouts are more often about long accumulation in tight spaces than about volume.",
    hauler: {
      name: "Groot",
      phone: "(847) 693-2700",
      bulkRule:
        "Groot serves Round Lake Park and runs an annual spring clean-up week, during which residents may put bulk items at the curb on their regularly scheduled pickup day. The village publishes an approved item list for that week.",
      gap: "The clean-up week is genuinely useful and it is once a year against an approved list. Anything outside that window, or off that list, needs another route.",
      sourceUrl: "https://www.swalco.org/354/Round-Lake-Park---Neighborhood-Programs",
      verified: "2026-07-19",
    },
    priorityServices: ["junk-removal", "cleanouts", "property-cleanouts", "yard-cleanup"],
    faqs: [
      {
        q: "Is the spring clean-up week worth waiting for?",
        a: "If your timing works and your items are on the approved list, yes. It is free and you have already paid for it. Call us for the rest of the year.",
      },
      {
        q: "Do you take small jobs?",
        a: "Yes. Single items and small loads are normal, and most start around $125.",
      },
      {
        q: "Access is tight on my street. Is that a problem?",
        a: "Compact lots and narrow drives are common here. Tell us the approach when you call and we will plan the load-out around it.",
      },
    ],
  },
  {
    name: "Crystal Lake",
    slug: "crystal-lake",
    county: "McHenry",
    driveTime: "About 30 minutes from our base",
    intro:
      "Crystal Lake includes one bulk item a week in the base rate, which is more generous than most towns around here. It is also the furthest west we regularly work.",
    localContext:
      "Crystal Lake is the largest town we serve in McHenry County, with a historic downtown, older homes near the lake itself, and extensive subdivision growth through the 1990s and 2000s. The older lake-area houses produce basement and attic cleanouts; the newer subdivisions are into deck and pool replacement.",
    hauler: {
      name: "LRS (Lakeshore Recycling Systems)",
      phone: "(844) 633-3577",
      bulkRule:
        "The city contracts with a single hauler for residential collection, and LRS serves Crystal Lake proper. The base rate includes weekly refuse, recycling, yard waste, and one bulk item a week at no additional charge, such as a couch, chair, or table. By-the-bag refuse stickers are available for overflow.",
      gap: "One included item a week is genuinely useful for gradual clearing. It does not cover a deck teardown, a pool removal, or a whole-house cleanout, all of which arrive as a single load rather than a weekly trickle.",
      sourceUrl:
        "https://www.crystallake.org/our-community/garbage-recycling-and-yard-waste",
      verified: "2026-07-19",
    },
    priorityServices: ["light-demolition", "cleanouts", "junk-removal", "property-cleanouts"],
    faqs: [
      {
        q: "Crystal Lake is 30 minutes out. Do you still come?",
        a: "Yes, and it is the western edge of where we regularly work. Same-week scheduling is normal; same-day is less likely than closer in.",
      },
      {
        q: "Do you handle the older homes near the lake?",
        a: "Yes. Older Crystal Lake houses have real basements and attics, which is where most of the volume turns out to be.",
      },
      {
        q: "One bulk item is free. Why call you?",
        a: "For one item a week, do not. Use what is already in your base rate. Call us when it is a deck, a pool, or a whole house.",
      },
    ],
  },
  {
    name: "Algonquin",
    slug: "algonquin",
    county: "McHenry",
    driveTime: "About 30 minutes from our base",
    intro:
      "Algonquin prices bulk items by weight bracket using stickers. Under 50 pounds is one sticker, 50 to 75 is two, and past that you are into a special collection.",
    localContext:
      "Algonquin spans McHenry and Kane counties along the Fox River, with steep terrain in the older sections near the water and extensive subdivision development to the east. The river-side older homes have difficult access and full basements; the newer subdivisions are on their first round of deck and playset replacement.",
    hauler: {
      name: "Groot",
      phone: "(800) 244-1977",
      bulkRule:
        "Groot serves Algonquin, with residents choosing between a sticker program and a cart subscription. Large items that do not fit an approved container need one prepaid sticker each up to 50 pounds, and two stickers between 50 and 75 pounds. Anything the driver cannot safely lift, regardless of weight, may require a special collection quoted by Groot.",
      gap: "The bracket system is clear right up to the point where weight stops being the question. Once an item cannot be safely lifted by one driver, no number of stickers covers it, and that includes most appliances, all hot tubs, and anything structural.",
      sourceUrl: "https://www.groot.com/locations/groot-east/village-of-algonquin",
      verified: "2026-07-19",
    },
    priorityServices: ["light-demolition", "junk-removal", "cleanouts", "yard-cleanup"],
    faqs: [
      {
        q: "How many stickers do I need for a couch?",
        a: "Depends on its weight. Under 50 pounds is one sticker, 50 to 75 is two. A full three-seat sofa is often over 75, which puts it into special collection territory.",
      },
      {
        q: "Do you work the older streets near the river?",
        a: "Yes. Those blocks have steep drives and tight access, so tell us the approach when you call and we will bring the right setup.",
      },
      {
        q: "Is Algonquin within your service area?",
        a: "Yes, at about 30 minutes it is one of our furthest regular areas. Same-week scheduling is normal.",
      },
    ],
  },
  {
    name: "Cary",
    slug: "cary",
    county: "McHenry",
    driveTime: "About 25 minutes from our base",
    intro:
      "Cary sits on some of the most uneven ground we work on. Walk-out basements and hillside lots change how a cleanout actually gets carried out of the house.",
    localContext:
      "Cary is built across rolling terrain near the Fox River, with a historic downtown around the Metra station and subdivisions spreading into the hills. The topography means walk-out basements, split levels, long stair runs, and steep drives, all of which matter more to a cleanout than square footage does.",
    hauler: {
      name: "Check with the village",
      phone: "(224) 456-6607",
      bulkRule:
        "Residential collection in Cary is provided under the village's hauling arrangement, and the specifics of bulk allowances are best confirmed directly with the village or your hauler, since McHenry County contracts have changed hands in recent years. We would rather point you to the source than quote a rule that may have moved.",
      gap: "Whatever the current allowance is, it will be built around a cart at the curb. Carrying a basement's worth of contents up a walk-out stair run and down a steep drive is not a curbside problem, it is a labor problem.",
      sourceUrl: "https://www.caryillinois.com/",
      verified: "2026-07-19",
    },
    priorityServices: ["cleanouts", "junk-removal", "light-demolition", "yard-cleanup"],
    faqs: [
      {
        q: "My house is a split level on a hill. Does that change the price?",
        a: "Yes, more than the volume usually does. Stair runs and how far we carry to the truck are the main factors, so mention both when you call.",
      },
      {
        q: "Who is my hauler in Cary?",
        a: "Confirm with the village. McHenry County hauling contracts have changed hands recently and we would rather you check than take our word for it.",
      },
      {
        q: "Do you serve Cary regularly?",
        a: "Yes, about 25 minutes from our base. Same-week scheduling is normal.",
      },
    ],
  },
  {
    name: "Fox River Grove",
    slug: "fox-river-grove",
    county: "McHenry",
    driveTime: "About 25 minutes from our base",
    intro:
      "Fox River Grove is small, steep, and built into a bluff above the river. Access is the defining feature of almost every job here.",
    localContext:
      "Fox River Grove is a compact village on hilly ground above the Fox River, with narrow streets, older homes on small lots, and some genuinely steep driveways. The housing skews older than the surrounding subdivisions, which means more basements, more legacy items, and more houses that were never designed for a truck to get close to.",
    hauler: {
      name: "LRS (Lakeshore Recycling Systems)",
      phone: "(844) 633-3577",
      bulkRule:
        "The village contracts with LRS for weekly refuse and recycling and seasonal yard waste collection, covering single family homes, duplexes, and most multi-family properties up to six units. Bulk items beyond standard service are arranged with LRS directly.",
      gap: "The harder constraint here is not the allowance, it is the hill. Even items the hauler would accept still have to get from the house to the street, and on a steep Fox River Grove drive that is the actual work.",
      sourceUrl:
        "https://www.foxrivergrove.org/government/public_works/garbage___recycling___yardwaste/index.php",
      verified: "2026-07-19",
    },
    priorityServices: ["cleanouts", "junk-removal", "yard-cleanup", "light-demolition"],
    faqs: [
      {
        q: "My driveway is very steep. Can you still do the job?",
        a: "Almost always, but tell us before we quote. On the steepest Fox River Grove drives we park on the street and carry, which changes the time the job takes.",
      },
      {
        q: "Do you handle multi-family buildings?",
        a: "Yes. The LRS village contract covers buildings up to six units, and we handle turnovers and clearing in those buildings as well.",
      },
      {
        q: "Is Fox River Grove too small for you to bother with?",
        a: "No. Small villages are fine, and we take single items. Most start around $125.",
      },
    ],
  },
  {
    name: "Lake in the Hills",
    slug: "lake-in-the-hills",
    county: "McHenry",
    driveTime: "About 30 minutes from our base",
    intro:
      "Lake in the Hills grew faster than almost anywhere else in the region during the 1990s and 2000s. That means thousands of homes of the same age hitting the same replacement cycle together.",
    localContext:
      "Lake in the Hills went from a small village to one of McHenry County's larger communities in about two decades, built out mostly through the 1990s and 2000s. Those subdivisions are now 20 to 30 years old, which is precisely when original decks, fences, sheds, playsets, and above-ground pools reach the end of their lives.",
    hauler: {
      name: "Check with the village",
      phone: "(224) 456-6607",
      bulkRule:
        "Residential collection is provided under the village's hauling arrangement, and current bulk allowances are best confirmed with the village or your hauler. McHenry County contracts have shifted in recent years, and we would rather send you to the source than quote a rule that has changed.",
      gap: "Whatever the current allowance is, the pattern here works against it. When a whole subdivision replaces its decks and pools within a few years of each other, the debris arrives in loads rather than in single weekly items.",
      sourceUrl: "https://www.lith.org/",
      verified: "2026-07-19",
    },
    priorityServices: ["light-demolition", "junk-removal", "yard-cleanup", "cleanouts"],
    faqs: [
      {
        q: "Do you remove above-ground pools here?",
        a: "Yes, and it is one of the more common calls from Lake in the Hills. That covers the liner, wall, pump, surround deck if it is in scope, and grading out the sand base.",
      },
      {
        q: "Everyone on my street is replacing their deck. Do you do multiple?",
        a: "Yes, and neighboring jobs booked together usually price better, since we save a mobilization.",
      },
      {
        q: "Who is my hauler?",
        a: "Confirm with the village. McHenry County contracts have changed recently and we would rather you check than rely on us.",
      },
    ],
  },
]

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug)
}

export const citySlugs = cities.map((c) => c.slug)
