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
  county: "Lake" | "Cook"
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
]

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug)
}

export const citySlugs = cities.map((c) => c.slug)
