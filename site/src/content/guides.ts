/**
 * Guide / resource pages.
 *
 * These target informational searches ("how much does junk removal cost",
 * "do I need a permit to tear down a shed") that the service and city pages
 * don't. Each is written to be genuinely useful and honest, including where the
 * honest answer is "you might not need us."
 *
 * The bulk-pickup-rules directory is its own bespoke page (it renders a table),
 * so it is not in this list — but it is linked from the guides index.
 *
 * No fabricated prices. The only figure stated is the real ~$125 starting point;
 * everything else is framed by the factors that move a quote.
 */

export type GuideSection = { heading: string; body: string[] }

export type Guide = {
  title: string
  slug: string
  /** Page H1. */
  headline: string
  metaDescription: string
  /** One or two sentence intro under the H1. */
  intro: string
  sections: GuideSection[]
  faqs: { q: string; a: string }[]
}

export const guides: Guide[] = [
  {
    title: "What Junk Removal Costs",
    slug: "junk-removal-cost",
    headline: "What junk removal costs in the Northwest Chicago suburbs",
    metaDescription:
      "How junk removal pricing actually works in Lake and NW Cook County: what drives the price, where the ~$125 starting point comes from, and how to get a firm quote.",
    intro:
      "The honest answer to 'what does it cost' is 'it depends on volume,' but that is not helpful on its own. Here is what actually moves the number, so you can estimate before you call.",
    sections: [
      {
        heading: "Pricing is by volume, not by hour",
        body: [
          "Reputable junk removal is priced by how much space your stuff takes in the truck, not by how long it takes us. That matters to you: it means the price is fixed before we start, so a job that turns out heavier or trickier than expected does not cost you more once we have quoted it.",
          "Most single items and small loads start around $125. From there the price climbs with volume, in rough steps: a few items, a quarter load, a half load, a full truck. We give you the firm number after a quick look, in person or from photos, before anything gets loaded.",
        ],
      },
      {
        heading: "What moves the price up",
        body: [
          "Weight, for specific materials. Standard household junk is volume-priced, but concrete, brick, dirt, and roofing shingles are priced by weight because the disposal facility charges us by the ton. Those are quoted separately so you are not surprised.",
          "Access and labor. A curbside pile is cheaper than the same volume carried up from a basement with a turn in the stairs, or down a long driveway. Stairs, tight doorways, and distance to where the truck can park all add labor.",
          "Disposal fees on regulated items. Appliances with refrigerant, tires, mattresses, and electronics carry their own disposal or recycling costs, so they price differently from a couch.",
        ],
      },
      {
        heading: "How to get an accurate quote fast",
        body: [
          "Send photos. A few pictures of the pile, the item, or the room gets you a firm number in 1 to 2 hours without anyone scheduling a visit. Include a shot of the path out if there are stairs or a tight doorway.",
          "For larger or messier jobs, a quick on-site walk-through is free and gets the most accurate number. Either way, the quote is firm before we load, with no drive-time charges or while-we-are-here add-ons.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you charge by the hour?",
        a: "No. Pricing is by volume, the space your items take in the truck, so the number is fixed before we start. A job that takes longer than expected does not cost you more once it is quoted.",
      },
      {
        q: "What is the minimum?",
        a: "Most single items and small loads start around $125. Below that it is rarely worth a dedicated trip, though we can fold a small item into a larger job.",
      },
      {
        q: "Why are concrete and dirt priced differently?",
        a: "Heavy materials are charged by weight at the disposal facility, by the ton, so we price them by weight too. We quote them as a separate line rather than burying them in a volume price.",
      },
      {
        q: "Is a dumpster cheaper?",
        a: "For small and mid-sized jobs, usually not, once you count rental days and the permit some towns require. For very large, continuous projects a dumpster can win. We will tell you honestly which way makes sense for your job.",
      },
    ],
  },
  {
    title: "What We Take and What We Don't",
    slug: "what-we-take",
    headline: "What we take, and what we can't",
    metaDescription:
      "A plain list of what Torvik Hauling removes across the NW Chicago suburbs, the few things no hauler can legally take, and where to bring those instead.",
    intro:
      "We take almost anything that is not hazardous. Here is the honest breakdown, including the short list of things we cannot legally haul and where those go instead.",
    sections: [
      {
        heading: "What we take",
        body: [
          "Furniture and household: couches, sectionals, mattresses, box springs, dressers, tables, and anything else that will not fit in your cart.",
          "Appliances: refrigerators, freezers, washers, dryers, stoves, dishwashers, and water heaters. Anything with refrigerant is routed to a facility certified to recover it.",
          "Electronics: televisions, computers, monitors, and printers, which Illinois bars from landfills, so they go to a registered recycler.",
          "Outdoor and structural: hot tubs, above-ground pools, sheds, decks, fences, and playsets, which we dismantle and haul in one visit.",
          "Yard and construction: brush, storm debris, dirt, rock, concrete, and renovation debris including drywall, flooring, and scrap metal.",
          "Whole spaces: full garage, basement, attic, estate, foreclosure, and rental-turnover cleanouts.",
        ],
      },
      {
        heading: "What we can't take",
        body: [
          "Some things are hazardous and no legitimate hauler can put them in a truck: liquid paint, motor oil, gasoline and other fuels, pesticides and lawn chemicals, pool chemicals, propane tanks, and asbestos.",
          "This is not us being picky. These require specialized handling and it is illegal to dispose of them with regular waste.",
        ],
      },
      {
        heading: "Where the things we can't take go",
        body: [
          "Lake County residents can bring paint, chemicals, fuel, and similar household hazardous waste to SWALCO's household chemical waste collection. Cook and McHenry counties run their own programs.",
          "Tell us what you have when you call. We will separate the hazardous items out, point you to the right drop-off, and haul everything else so the job is not held up.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take paint?",
        a: "Not liquid paint, no hauler legally can. Dried-out latex paint is sometimes accepted as regular trash, but wet paint and all chemicals go to household hazardous waste collection. We will point you to the nearest drop-off.",
      },
      {
        q: "Can you take a refrigerator or freezer?",
        a: "Yes. Anything with refrigerant goes to a facility certified to recover it before the metal is recycled, which is why appliances price differently from furniture.",
      },
      {
        q: "What about a propane tank from my grill?",
        a: "We cannot haul propane tanks. Many hardware stores and propane exchanges take them back, and it is worth asking wherever you refill.",
      },
      {
        q: "Do you take old tires?",
        a: "In limited numbers, yes, though tires carry a per-tire disposal fee. Large quantities are better handled through a tire retailer or a county collection event.",
      },
    ],
  },
  {
    title: "Do You Need a Permit for Demolition",
    slug: "demolition-permit-guide",
    headline: "Do you need a permit to tear down a deck, shed, or fence?",
    metaDescription:
      "When light demolition needs a permit in the NW Chicago suburbs, when it doesn't, and how Torvik Hauling flags it before starting. Deck, shed, fence, hot tub, and pool.",
    intro:
      "Permit rules for demolition vary by municipality, and getting it wrong can mean a stop-work order. Here is the general lay of the land, with the honest caveat that your village has the final say.",
    sections: [
      {
        heading: "The general pattern",
        body: [
          "Most small residential demolition, a garden shed, a standard deck, a fence, a hot tub, or an above-ground pool, does not require a permit in much of Lake and NW Cook County. But rules differ village to village, and some require a permit for any structure over a certain size or on a permanent foundation.",
          "The clearest dividing lines are size and foundation. A large outbuilding, anything on a poured foundation, and anything involving utility disconnection is more likely to need a permit than a free-standing garden shed or a ground-level deck.",
        ],
      },
      {
        heading: "Where permits are more likely",
        body: [
          "Larger structures: barns, big detached garages, and outbuildings above the village's size threshold.",
          "Anything with utilities: a shed with power run to it, a hot tub still wired to a dedicated circuit, or a structure with plumbing. The electrical or plumbing disconnect itself is licensed work.",
          "Acreage and estate zoning: towns like Barrington Hills and Kildeer often have their own requirements for larger properties.",
        ],
      },
      {
        heading: "How we handle it",
        body: [
          "When we walk a demolition job with you, we flag anything we believe needs a permit before we start, rather than discovering it halfway through. We do not pull permits for you, that is the homeowner's or a general contractor's responsibility, but we will tell you plainly when we think one is needed so you can check with your village.",
          "For anything involving live electrical or gas, we stop at the disconnect and tell you to bring in a licensed electrician or plumber. That is not a corner worth cutting.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a permit to remove a hot tub?",
        a: "Usually not for the removal itself in most area towns, since it is not a permanent structure. The electrical disconnect back to the panel is licensed work, but shutting off the breaker is enough for us to remove the tub safely.",
      },
      {
        q: "What about a deck attached to the house?",
        a: "Ground-level and standard residential decks often do not require a permit to remove, but villages differ, especially for large or elevated decks. We flag it before starting and you confirm with your village.",
      },
      {
        q: "Will you pull the permit for me?",
        a: "No. Permits are the homeowner's or general contractor's responsibility. We tell you when we think one is needed, but we do not file it on your behalf.",
      },
      {
        q: "What happens if a permit is needed and I skip it?",
        a: "The village can issue a stop-work order and fines, and it can complicate a future home sale. It is worth a quick call to your village before a larger teardown.",
      },
    ],
  },
  {
    title: "Junk Removal vs Dumpster Rental",
    slug: "junk-removal-vs-dumpster",
    headline: "Junk removal vs. dumpster rental: which is cheaper?",
    metaDescription:
      "An honest comparison of full-service junk removal and a rented dumpster for NW Chicago suburb projects, including when each one actually saves you money.",
    intro:
      "Both clear out junk. They win in different situations, and we will tell you honestly which fits your job, even when the answer is the dumpster.",
    sections: [
      {
        heading: "When junk removal wins",
        body: [
          "One-time cleanouts and single loads. If you have a garage, a basement, an estate, or a pile of specific items, full-service removal is usually cheaper and far less work. You do no lifting, nothing sits in your driveway, and you pay once for what actually gets hauled.",
          "Jobs where you do not want to do the labor. A dumpster is an empty box, you still fill it. With removal, we carry everything out, including the heavy and awkward pieces, and sweep up after.",
          "Permit-sensitive situations. Some towns require a permit to place a dumpster on the street or even in a driveway for an extended period. Removal skips that entirely.",
        ],
      },
      {
        heading: "When a dumpster wins",
        body: [
          "Long, continuous projects. If you are gutting a house over several weeks and generating debris every day, a dumpster you fill at your own pace is usually more economical than repeated removal trips.",
          "DIY demolition where you control the timeline. If you are doing the tear-out yourself and want a container sitting there for a month, a dumpster fits that rhythm.",
        ],
      },
      {
        heading: "The honest rule of thumb",
        body: [
          "For most homeowners clearing out a space or finishing a small-to-mid renovation, junk removal is cheaper once you count dumpster rental days, the permit some towns require, and the fact that you are the one filling it.",
          "For large, continuous, multi-week output, a dumpster usually wins. We would rather tell you that and lose the job than talk you into the wrong one. For phased projects, we also do repeat-load pickups, so you get removal's convenience without a container in the driveway.",
        ],
      },
    ],
    faqs: [
      {
        q: "Isn't a dumpster always cheaper?",
        a: "No. For a one-time cleanout you often pay less with removal once you factor in rental days, disposal weight limits on the dumpster, permits, and your own labor filling it.",
      },
      {
        q: "Do I need a permit for a dumpster?",
        a: "Some towns require one to place a dumpster on the street or in a driveway past a certain number of days. Check with your village. Full-service removal avoids the question.",
      },
      {
        q: "Can you come back multiple times during my renovation?",
        a: "Yes. For phased projects we do repeat-load pickups, you call when a load is ready and we come get it, which gives you removal's convenience across a longer job.",
      },
      {
        q: "What if my dumpster is full and I still have more?",
        a: "That is a common reason people call us mid-project, to clear the overflow a dumpster could not hold. We can take the extra in one visit.",
      },
    ],
  },
]

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug)
}
