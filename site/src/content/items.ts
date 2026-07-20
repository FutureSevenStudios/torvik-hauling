/**
 * Item-specific removal pages.
 *
 * These exist because "hot tub removal" and "mattress removal" are different
 * searches, different jobs, and different disposal paths. Each entry is written
 * from the specifics of that item: what makes it physically hard, where it
 * legally and practically ends up, and what actually drives the price.
 *
 * Same rule as cities.ts — nothing here is interpolated from shared sentences.
 * If a field could be reused verbatim for another item, it is not specific enough.
 *
 * Regulatory claims (EPA refrigerant recovery, the Illinois electronics landfill
 * ban) are load-bearing and must be re-verified before launch.
 */

export type Item = {
  name: string
  slug: string
  /** Page H1. Written for the search, not for cleverness. */
  headline: string
  metaDescription: string
  /** Why this specific item is a problem worth paying to solve. */
  intro: string
  /** The concrete physical or logistical difficulty. Must be item-specific. */
  whyHard: string
  /** How we actually do this one, step by step. */
  process: string[]
  /** Where this item genuinely ends up. Differs per item. */
  disposalPath: string
  /** What moves the price for this item specifically. */
  pricingFactors: string[]
  /** Why curbside collection will not solve it. Ties to the municipal rules theme. */
  curbsideReality: string
  /** Real customer proof, only where we genuinely have it. */
  proof?: { quote: string; author: string }
  faqs: { q: string; a: string }[]
}

export const items: Item[] = [
  {
    name: "Hot Tub Removal",
    slug: "hot-tub-removal",
    headline: "Hot tub removal in Lake County and NW Cook County",
    metaDescription:
      "Hot tub removal and disposal across Lake Zurich, Barrington, Buffalo Grove and the NW Chicago suburbs. We dismantle on site and haul it all. Free estimates.",
    intro:
      "A hot tub is the single most common thing homeowners call us about that no other service will touch. It is too heavy to move, too big for the gate, and no curbside program in the area will take it at any price.",
    whyHard:
      "An empty acrylic tub runs 500 to 900 pounds, and the cabinet, shell, frame, and insulation are built as one bonded unit. It cannot be tipped on its side and walked out. Most sit on a deck or patio behind a 36-inch gate, which is narrower than the tub. Anything still holding water is heavier again, and the pump and heater are wired to a dedicated 240-volt circuit that has to be dealt with before the tub moves.",
    process: [
      "Confirm the power is disconnected at the breaker before we touch anything",
      "Drain any remaining water and clear the surrounding deck or pad",
      "Cut the tub down on site into sections two people can carry",
      "Separate the shell, cabinet, frame, and the motor and heater components",
      "Carry the pieces out through the existing gate, no fence panel removal",
      "Sweep the pad and haul everything in one trip",
    ],
    disposalPath:
      "A hot tub splits three ways. The pump, heater, and any metal frame go to a scrap metal recycler. The acrylic shell and its bonded foam insulation cannot be recycled and go to a licensed disposal facility. Cedar or composite cabinet panels are separated out where the material allows.",
    pricingFactors: [
      "Distance from the tub to where the truck can park",
      "Gate width and whether there are stairs or a raised deck in the path",
      "Whether the tub is sunk into decking rather than free-standing",
      "Size, from a 2-person spa up to an 8-person tub",
      "Whether the surrounding deck is coming out at the same time",
    ],
    curbsideReality:
      "There is no village in our service area whose curbside program accepts a hot tub. Lake Zurich caps free bulk items at 50 pounds. Palatine flags anything over 60 pounds for a paid special pickup. Long Grove requires a single collector be able to lift the item alone. A hot tub fails every one of those tests by an order of magnitude.",
    proof: {
      quote:
        "Prompt, speedy, affordable and a pleasure to work with. Showed up and removed our hot tub and made sure the area was all cleaned up when he was done.",
      author: "Isabelle",
    },
    faqs: [
      {
        q: "Do I need an electrician before you come?",
        a: "Not usually. Shutting off the dedicated breaker is enough for us to work safely. If you want the wiring and disconnect box removed back to the panel, that is an electrician's job and we will tell you so rather than doing it ourselves.",
      },
      {
        q: "Do you have to take my fence apart to get it out?",
        a: "Almost never. We cut the tub down on site specifically so the pieces fit through a standard gate. Removing fence panels is the approach that leaves you with a repair bill.",
      },
      {
        q: "Can you take the deck out too?",
        a: "Yes, and it is often cheaper to do both at once than to book them separately. Sunken tubs usually mean cutting into the decking anyway, so combining the jobs saves a mobilization.",
      },
      {
        q: "What if the tub still has water in it?",
        a: "Tell us when you call and we will plan for it. A full tub can hold over 3,000 pounds of water, so it has to be drained before anything else happens.",
      },
    ],
  },
  {
    name: "Appliance Removal",
    slug: "appliance-removal",
    headline: "Appliance removal and disposal in the NW Chicago suburbs",
    metaDescription:
      "Refrigerator, washer, dryer, stove, and water heater removal across Lake County and NW Cook County. Certified refrigerant handling. Free estimates from $125.",
    intro:
      "Appliances are heavy, awkward, and in the case of anything that cools, legally regulated. A dead refrigerator in the garage is not something you can put at the curb and forget about.",
    whyHard:
      "A side-by-side refrigerator runs 250 to 350 pounds with a high center of gravity, which makes stairs genuinely dangerous for two untrained people. Front-load washers hold a concrete counterweight and weigh more than they look. Water heaters keep 40 to 50 gallons in them until drained, and older ones are often corroded into their connections.",
    process: [
      "Confirm the unit is unplugged, and that gas or water lines are shut off and disconnected",
      "Drain water heaters and washers before anything is moved",
      "Strap and dolly the unit rather than carrying it, especially on stairs",
      "Protect door frames and flooring on the path out",
      "Route refrigerant-bearing units to a facility certified to recover it",
      "Sweep the space, which after a decade under a fridge usually needs it",
    ],
    disposalPath:
      "Anything containing refrigerant, meaning refrigerators, freezers, air conditioners, and dehumidifiers, goes to a facility certified to recover it. Federal EPA rules require recovery by a certified technician before disposal, which is the main reason these cost more to handle than a sofa. Once recovered, the steel carcass goes to a scrap metal recycler, as do washers, dryers, stoves, and water heaters, which are largely steel by weight.",
    pricingFactors: [
      "Whether the unit contains refrigerant, which requires certified recovery",
      "Stairs, and specifically basement stairs with a turn in them",
      "Number of units, since a matched washer and dryer pair prices better together",
      "Whether disconnection from gas, water, or a hard-wired circuit is needed",
      "Built-in and cabinet-integrated units, which take longer to free",
    ],
    curbsideReality:
      "Village programs treat appliances differently from ordinary bulk. Barrington's Groot service requires a scheduled paid special pickup for appliances. Hawthorn Woods actually handles white goods well, taking them outside the two-item weekly limit through Waste Management, so if you are in Hawthorn Woods with one appliance and no deadline, use that. Call us for volume, for basement stairs, or when you need it gone before a closing.",
    faqs: [
      {
        q: "Why does a refrigerator cost more to remove than a couch?",
        a: "Refrigerant. Federal rules require a certified technician recover it before the unit can be scrapped, so there is a real processing cost attached to every fridge, freezer, AC unit, and dehumidifier that a sofa does not carry.",
      },
      {
        q: "Can you get a refrigerator up from the basement?",
        a: "Yes. Basement appliances are routine for us. We strap and dolly rather than carry, which is what makes a turning staircase manageable.",
      },
      {
        q: "Do you disconnect the gas line on a stove?",
        a: "We can shut off and disconnect a standard flexible gas connector. If the line is rigid, corroded, or the shutoff will not hold, we stop and tell you to get a plumber. That is not a corner worth cutting.",
      },
      {
        q: "Will you take an appliance that still works?",
        a: "Yes, and tell us if it does. Working appliances go to donation where a center will take them, which keeps a usable machine out of the scrap stream.",
      },
    ],
  },
  {
    name: "Electronics and TV Removal",
    slug: "e-waste-removal",
    headline: "E-waste and TV removal in Lake County, IL",
    metaDescription:
      "TV, computer, and electronics disposal across the NW Chicago suburbs. Illinois bans e-waste from landfills. We route it to certified recyclers. Free estimates.",
    intro:
      "In Illinois you cannot legally put a television or a computer in the trash. The state banned electronics from landfills, which is why that old TV has been sitting in the basement since you replaced it.",
    whyHard:
      "The problem with e-waste is legal rather than physical. Illinois prohibits disposing of covered electronic devices in landfills, so a hauler who shrugs and throws your TV in with the household debris is breaking the law on your behalf. Old CRT televisions add a real physical problem too, since a 32-inch tube set runs over 100 pounds and the tube contains leaded glass that must go to a recycler equipped for it.",
    process: [
      "Identify which items fall under the Illinois covered-device rules",
      "Keep electronics separated from general debris during loading, not mixed in",
      "Handle CRT televisions and monitors as their own category",
      "Deliver to a registered electronics recycler rather than a transfer station",
      "Tell you plainly which items we cannot accept and where those go instead",
    ],
    disposalPath:
      "Covered electronics go to a registered Illinois electronics recycler, where they are broken down for the metals, plastics, and glass they contain. CRT tubes go to recyclers specifically equipped for leaded glass. This stream never goes to a landfill, both because it is illegal and because a modern TV holds recoverable material worth processing.",
    pricingFactors: [
      "Number of devices, since e-waste prices by piece rather than by volume",
      "CRT televisions and monitors, which cost more to process than flat panels",
      "Screen size on tube sets, where weight climbs fast",
      "Whether the electronics come as part of a larger cleanout, which prices better",
    ],
    curbsideReality:
      "Some villages run their own e-waste programs, and where they exist they are worth using. Arlington Heights takes up to two electronic items a week. Libertyville runs a curbside electronics program of its own. Those are free and you already pay for them. Call us when you have a basement full of old equipment, a CRT nobody can lift, or an office being cleared out.",
    faqs: [
      {
        q: "Is it really illegal to throw away a TV in Illinois?",
        a: "Yes. Illinois prohibits covered electronic devices, including televisions, monitors, computers, and printers, from being disposed of in landfills. That is why haulers handle them as a separate stream.",
      },
      {
        q: "Why do old tube TVs cost more?",
        a: "A CRT tube contains leaded glass and has to go to a recycler equipped to handle it, and a large tube set weighs over 100 pounds. Both the processing and the lifting cost more than a flat panel.",
      },
      {
        q: "Will you wipe my hard drive?",
        a: "No, and do not rely on anyone who says they will. Remove or destroy drives yourself before we take a computer. We are a hauling company, not a data destruction service, and we would rather tell you that than have you assume.",
      },
      {
        q: "Can I just use the village program?",
        a: "If your village runs one and you have a couple of items, yes, use it. Arlington Heights and Libertyville both have programs. Call us for volume or for anything too heavy to carry out.",
      },
    ],
  },
  {
    name: "Mattress Removal",
    slug: "mattress-removal",
    headline: "Mattress and box spring removal in the NW Chicago suburbs",
    metaDescription:
      "Mattress and box spring removal across Lake Zurich, Palatine, Libertyville and the NW Chicago suburbs. Same-week pickup, free estimates from $125.",
    intro:
      "Mattresses are the item people most often assume will be easy and most often find is not. They are light enough to feel manageable and bulky enough to be genuinely miserable to move alone.",
    whyHard:
      "A queen mattress is not heavy, it is unwieldy. It folds in the middle, catches on stair rails, and will not make a tight turn in a hallway. Modern memory foam is worse than spring, since it weighs more and offers nothing rigid to grip. Box springs do not fold at all, which is why they routinely will not come back down a staircase they were carried up before the railing went in.",
    process: [
      "Check the stairwell and hallway turns before anything moves",
      "Bag the mattress where required, particularly in multi-unit buildings",
      "Carry with two people rather than dragging, which protects walls and trim",
      "Take box springs out through the largest available opening",
      "Remove frames and headboards at the same time when you want them gone",
    ],
    disposalPath:
      "Mattresses are difficult to recycle and Illinois has no statewide mattress recycling program, so most go to a licensed disposal facility. Where a recycler is available and accepting, the steel springs, foam, and fiber can be separated and recovered. We will not tell you a mattress was recycled when it was not.",
    pricingFactors: [
      "Number of pieces, counting each mattress and box spring separately",
      "Floor level and whether an elevator is available",
      "Whether bed frames and headboards go at the same time",
      "Size, since a king set is two box springs and a much larger mattress",
    ],
    curbsideReality:
      "Most villages will take one mattress as the weekly bulk item, which works if you have exactly one and can wait for collection day. Lake Zurich's 50-pound and 4-foot limits are the catch, since a queen mattress exceeds the length limit outright. Clearing a whole house, or a set of bunk beds and three bedrooms, is past what any weekly program absorbs.",
    faqs: [
      {
        q: "Do you take just one mattress?",
        a: "Yes. Single-item pickup is a normal job for us, and most single items start around $125. If you can wait for your village bulk day and it is one mattress, that is cheaper and we will say so.",
      },
      {
        q: "My box spring will not fit back down the stairs. Now what?",
        a: "That is common in older homes and finished basements. Box springs do not flex, and railings often go in after the bed. We cut the box spring down in place and carry it out in pieces.",
      },
      {
        q: "Are mattresses recycled?",
        a: "Sometimes, but not reliably. Illinois has no statewide mattress recycling program, so most go to licensed disposal. Where a recycler will take them, springs and foam get separated. We would rather be straight with you than claim otherwise.",
      },
      {
        q: "What about a mattress with bed bugs?",
        a: "Tell us before we arrive. It has to be sealed and handled separately so nothing spreads to the truck or another customer's job, and that changes how we schedule it.",
      },
    ],
  },
  {
    name: "Shed Removal",
    slug: "shed-removal",
    headline: "Shed demolition and removal in Lake County, IL",
    metaDescription:
      "Shed teardown and haul-away across Hawthorn Woods, Barrington, Long Grove and the NW Chicago suburbs. Demo and disposal in one visit. Free on-site estimates.",
    intro:
      "A shed is a small building, and taking one down is demolition rather than junk removal. One crew doing the teardown and the haul-away in a single visit is the difference between a morning and a month of weekends.",
    whyHard:
      "Sheds are built to stay put. Wood sheds sit on a skid or slab and are usually held with framing nails that have been weathering for fifteen years. Metal sheds come apart into sheet panels with edges sharp enough to require real care. Anything with a shingled roof means tear-off first, and asphalt shingles are heavy, which puts the load into weight-priced disposal. Sheds also tend to be full, and what is inside frequently includes fuel, paint, and pesticide that we cannot legally haul.",
    process: [
      "Walk the shed with you and confirm what is staying and what is going",
      "Empty the contents, flagging anything hazardous for you to dispose of separately",
      "Strip the roof, then the siding, then the framing",
      "Break down the floor and remove the skids or slab if it is in scope",
      "Rake and sweep the footprint so it is ready to seed or build on",
      "Haul the structure and the contents in the same visit",
    ],
    disposalPath:
      "Metal sheds go almost entirely to a scrap metal recycler. Wood sheds split, with clean dimensional lumber separated where it is worth doing and asphalt shingles, treated wood, and composite going to a licensed disposal facility. Concrete slabs, when they come out, are weight-priced separately because concrete disposal is charged by the ton.",
    pricingFactors: [
      "Size, with a 8x10 garden shed a very different job from a 12x20 barn",
      "Whether the roof is shingled, since tear-off adds heavy weight-priced debris",
      "Whether a concrete slab or footings are coming out",
      "How full the shed is, and whether contents are included",
      "Truck access to the shed, which on large lots is often the real constraint",
    ],
    curbsideReality:
      "No curbside program takes a building. Palatine's rules illustrate the point precisely: swing sets are accepted only if cut into 4-foot lengths, and a shed is a much larger version of that same problem. You would be cutting and bundling an entire structure into 4-foot pieces across many weeks of collection days.",
    faqs: [
      {
        q: "Do I need a permit to tear down a shed?",
        a: "It depends on the village and the size of the structure. Many treat small accessory buildings as exempt while others want a demolition permit. We flag anything we believe needs one before starting, but confirm with your village.",
      },
      {
        q: "Can you take the concrete slab too?",
        a: "Yes. Concrete is priced separately by weight because disposal is charged by the ton, so we quote the slab as its own line rather than burying it in the total.",
      },
      {
        q: "What about the paint and gas cans inside?",
        a: "We cannot take liquid paint, fuel, pesticides, or propane. Lake County runs household chemical waste collection for exactly this, and we will point you to it. Everything else in the shed we handle.",
      },
      {
        q: "Can you do it in one day?",
        a: "Most residential sheds come down and get hauled in a single visit. Larger outbuildings with slabs or full contents can run into a second day, and we tell you which it is when we quote.",
      },
    ],
  },
  {
    name: "Deck Removal",
    slug: "deck-removal",
    headline: "Deck removal and demolition in the NW Chicago suburbs",
    metaDescription:
      "Deck teardown and haul-away across Buffalo Grove, Palatine, Lake Zurich and Lake County. Demolition and disposal in one visit. Free on-site estimates.",
    intro:
      "Most decks in this area were built in the 1980s and 1990s, which means a lot of them are reaching the end of their lives at the same time. A rotting deck is a liability, and taking one apart is heavier work than it looks from the patio door.",
    whyHard:
      "Decks are structural and they are attached to your house. The ledger board is bolted or nailed into the framing, and pulling it carelessly damages siding, sheathing, and sometimes the rim joist. Footings run below the frost line, which in northern Illinois means 42 inches of concrete pier per post. Older decks are pressure-treated lumber that has been absorbing water for thirty years, and wet treated lumber is far heavier than the same board was when new.",
    process: [
      "Confirm what is coming out: surface boards only, full frame, or footings as well",
      "Remove railings and stairs first",
      "Strip decking, then joists, then beams",
      "Detach the ledger from the house carefully and flash or seal the scar",
      "Pull or cut posts and footings if they are in scope",
      "Grade and rake the footprint so it is ready for whatever comes next",
    ],
    disposalPath:
      "Pressure-treated lumber cannot be recycled or burned and goes to a licensed disposal facility. Composite decking goes the same way. Deck screws, joist hangers, and railing hardware are pulled for scrap metal where volume makes it worthwhile. Concrete footings, when removed, are weight-priced and go to a concrete recycler where one will take them.",
    pricingFactors: [
      "Square footage and height off the ground, since second-story decks cost more",
      "Whether footings and posts come out or get cut at grade",
      "Wet, rotted treated lumber, which is heavier and prices by weight",
      "Whether the ledger detachment needs care around siding you are keeping",
      "Stairs, railings, and built-in benches or planters",
    ],
    curbsideReality:
      "A demolished deck arrives all at once as several tons of treated lumber, and no weekly program absorbs that. Buffalo Grove allows one oversized item a week through Waste Management, which is a fine rule for a recliner and useless for a deck. Barrington's one-cubic-yard weekly debris allowance is roughly a few contractor bags against a load measured in tons.",
    faqs: [
      {
        q: "Will removing the deck damage my siding?",
        a: "The ledger board is the risk, and that is exactly why it comes off carefully rather than with a pry bar and enthusiasm. We seal the scar so water does not get behind the siding before your next step.",
      },
      {
        q: "Do the footings have to come out?",
        a: "It depends what is going in the space. If you are rebuilding, existing footings may be reusable. If you are putting in lawn or a patio, they usually need to come out. We quote it both ways so you can choose.",
      },
      {
        q: "Can you remove the hot tub on the deck at the same time?",
        a: "Yes, and doing both together is usually cheaper than two separate visits. Sunken tubs mean cutting into the decking regardless, so the jobs overlap naturally.",
      },
      {
        q: "How long does a deck take?",
        a: "Most residential decks come down and get hauled in one day. Large multi-level decks, or ones with footings coming out, can run into a second.",
      },
    ],
  },
  {
    name: "Fence Removal",
    slug: "fence-removal",
    headline: "Fence removal and haul-away in Lake County, IL",
    metaDescription:
      "Old fence teardown and disposal across the NW Chicago suburbs. Wood, chain link, and vinyl, posts and concrete included. Free on-site estimates.",
    intro:
      "Fence removal is priced by the linear foot and complicated almost entirely by what is underground. The panels come down quickly. The posts are the job.",
    whyHard:
      "Nearly every fence post in this area is set in a concrete collar below the frost line, which means each post is an 8 to 12 inch diameter plug of concrete running 3 feet down. A 100-foot fence has roughly a dozen of them. Pulling posts leaves holes that need backfilling, and cutting them at grade leaves concrete in the ground that will interfere with anything built there later. Chain link adds tensioned wire that is dangerous to release carelessly, and old wood fences are often shared with a neighbor, which makes the property line a conversation before it is a job.",
    process: [
      "Confirm the property line and, where the fence is shared, that the neighbor knows",
      "Call JULIE for utility locates before any digging, which is required in Illinois",
      "Release tension on chain link before cutting anything",
      "Take down panels or fabric section by section",
      "Pull posts with their concrete collars, or cut at grade where you prefer",
      "Backfill the holes and rake the line so it is level and safe to mow",
    ],
    disposalPath:
      "Chain link fabric, posts, and rails are almost entirely steel and go to a scrap metal recycler. Wood fencing is usually pressure-treated or cedar and goes to licensed disposal. Vinyl fencing goes to disposal as well. Concrete post collars are weight-priced separately and go to a concrete recycler.",
    pricingFactors: [
      "Linear footage, which is the primary driver",
      "Whether posts come out with their concrete or get cut at grade",
      "Fence height, since 6-foot privacy panels are heavier than 4-foot picket",
      "Material, as chain link scraps out while wood and vinyl cost to dispose",
      "Access along the fence line, particularly between houses on tight lots",
    ],
    curbsideReality:
      "A fence line generates a long, heavy, awkward load in a single day, and bundling requirements make curbside impractical. Barrington requires debris bundled under 4 feet long and 2 feet in diameter, which means cutting every panel down and tying it into bundles, at one cubic yard a week. A 100-foot fence would take you most of a year.",
    faqs: [
      {
        q: "Do you call for utility locates?",
        a: "Yes. Illinois requires JULIE locates before digging, and pulling fence posts is digging. It is free and it is not optional, so we schedule around it.",
      },
      {
        q: "What if the fence is shared with my neighbor?",
        a: "Make sure they know before we arrive. We will not take down a fence on a disputed line. Sorting it out first is much easier than sorting it out after.",
      },
      {
        q: "Should the concrete come out or get cut at grade?",
        a: "If you are putting in a new fence on the same line, or planting, pull them. If you are just clearing the line and seeding lawn, cutting at grade is cheaper and fine. We quote both.",
      },
      {
        q: "Do you fill the post holes?",
        a: "Yes. We backfill and rake so you are not left with a line of ankle-breakers across the yard.",
      },
    ],
  },
  {
    name: "Playset and Swing Set Removal",
    slug: "playset-removal",
    headline: "Playset and swing set removal in the NW Chicago suburbs",
    metaDescription:
      "Swing set and playset dismantling and haul-away across Lake County and NW Cook County. We cut it down and take it away same visit. Free estimates.",
    intro:
      "The kids outgrew it years ago and it has been quietly rotting in the corner of the yard since. Playsets are the most common thing we remove that has been sitting unused the longest.",
    whyHard:
      "Wooden playsets are built like small structures, with 4x4 posts often set in concrete and lag bolts that have been weathering for a decade. The bolts seize and the wood around them softens, so they neither unbolt cleanly nor break apart predictably. That combination is what makes them genuinely hazardous to dismantle by yourself. Older sets also mean rotted climbing structures that fail without warning under weight.",
    process: [
      "Check whether posts are set in concrete or on ground anchors",
      "Remove swings, slides, and accessories first",
      "Take down the roof and upper deck before the frame",
      "Cut the frame into sections rather than fighting seized lag bolts",
      "Pull posts and concrete footings, or cut at grade",
      "Rake the footprint, including the pea gravel or mulch bed underneath",
    ],
    disposalPath:
      "Wooden playsets are pressure-treated and go to licensed disposal, since treated lumber cannot be recycled or burned. Metal swing sets go almost entirely to a scrap metal recycler. Plastic slides and climbing components go to disposal. If the set is genuinely in good condition, say so and we will point you at a resale or donation route before we cut it up.",
    pricingFactors: [
      "Size, from a simple A-frame swing set to a full tower with slides and a fort",
      "Whether posts are set in concrete",
      "Wood versus metal, since metal scraps out and treated wood costs to dispose",
      "Whether the pea gravel or rubber mulch bed underneath is also coming out",
      "Backyard access and gate width",
    ],
    curbsideReality:
      "Palatine is the clearest illustration in our whole service area. The village will accept a swing set, but only cut into 4-foot lengths or shorter. That is technically free and practically a full weekend with a reciprocating saw and a pile of blades. Long Grove's rule is even tighter, requiring one collector be able to lift the item alone.",
    faqs: [
      {
        q: "Palatine says they will take swing sets. Why call you?",
        a: "They will, cut to 4 feet or less. The village program is free and the cutting is yours. We do the cutting, loading, and hauling in one visit. If you have the weekend and a saw, use the village program.",
      },
      {
        q: "Can you take the pea gravel underneath too?",
        a: "Yes. Gravel and rubber mulch are weight-priced because disposal is charged by the ton, so we quote it as a separate line rather than hiding it in the total.",
      },
      {
        q: "My set is still in decent shape. Should I donate it?",
        a: "If it is genuinely sound, try. Large wooden sets are hard to rehome because the buyer has to dismantle and transport it, but it is worth an attempt before we cut it up. We would rather you get something for it.",
      },
      {
        q: "Are the posts set in concrete?",
        a: "Usually on larger tower sets, and usually not on simple A-frames. Check by digging a few inches at the base. Either way we handle it, but it changes the quote.",
      },
    ],
  },
  {
    name: "Above-Ground Pool Removal",
    slug: "pool-removal",
    headline: "Above-ground pool removal in Lake County, IL",
    metaDescription:
      "Above-ground pool teardown, disposal, and yard restoration across the NW Chicago suburbs. Liner, wall, deck, and base. Free on-site estimates.",
    intro:
      "An above-ground pool that has stopped being used becomes a liability fast. It holds water, it attracts mosquitos, and in most villages an unfenced or unmaintained pool is a code problem as well as an eyesore.",
    whyHard:
      "The pool itself comes apart reasonably well. What people underestimate is everything around it. There are often thousands of gallons still in it, and you cannot simply push it over, since dumping that volume at once floods your yard and potentially your neighbor's. Sand or stone base underneath runs several tons. There is usually a surround deck, and the ring of dead compacted ground left behind needs grading and seeding before it looks like a yard again.",
    process: [
      "Drain the pool at a controlled rate, respecting where the water goes",
      "Cut and remove the liner",
      "Disassemble the wall, uprights, and top rails",
      "Remove the pump, filter, and any heater",
      "Take out the surround deck if it is in scope",
      "Remove or grade out the sand base and rake the footprint for seeding",
    ],
    disposalPath:
      "The wall, uprights, rails, and pump assembly are steel or aluminum and go to a scrap metal recycler, which offsets part of the job. The vinyl liner goes to licensed disposal, as does any composite decking. Sand base is either graded into the yard on site, which is usually the cheaper option, or hauled at weight-based pricing.",
    pricingFactors: [
      "Pool diameter, since an 18-foot round is a different job from a 24-foot",
      "Whether there is still water in it and how it can be discharged",
      "Whether the surround deck comes out at the same time",
      "Whether the sand base is graded on site or hauled away",
      "Backyard access, particularly gate width for getting the wall out",
    ],
    curbsideReality:
      "Nothing about a pool teardown fits a curbside program. It arrives as one large load of mixed metal, vinyl, and several tons of sand, all in a single day. There is no village in our area with a weekly allowance that accommodates any part of that.",
    faqs: [
      {
        q: "Where does all the water go?",
        a: "That is the first thing we work out, and it matters more than people expect. Draining thousands of gallons at once floods yards and can push water into a neighbor's basement, so we discharge at a controlled rate to an appropriate place.",
      },
      {
        q: "Do I have to take the sand away?",
        a: "No, and usually you should not. Grading it into the yard is cheaper than hauling several tons and often improves the low spot the pool was sitting in anyway.",
      },
      {
        q: "Will the yard be usable right after?",
        a: "It will be level and raked, but the ground under a pool has been compacted and dark for years. Plan on seeding or sod. We leave it ready for that, not looking like established lawn.",
      },
      {
        q: "What about in-ground pools?",
        a: "In-ground removal is a bigger job involving heavy equipment, engineered backfill, and usually permits. That is outside what we do, and we will tell you that rather than take it on.",
      },
    ],
  },
  {
    name: "Furniture Removal",
    slug: "furniture-removal",
    headline: "Furniture removal in Lake Zurich and the NW Chicago suburbs",
    metaDescription:
      "Sofa, sectional, and furniture removal across Lake County and NW Cook County. Same-day and next-day pickup available. Free estimates from $125.",
    intro:
      "Furniture is the most common single-item call we get, and the one most often needed on a deadline. New furniture is arriving Thursday and the old sectional has to be gone before it does.",
    whyHard:
      "The difficulty with furniture is geometry rather than weight. A sectional that was carried in before a stair railing went up may not come back out the same way. Sleeper sofas hide a steel frame that pushes them past 200 pounds and stops them flexing around a turn. Older solid wood pieces, particularly armoires and entertainment centers, are far heavier than their modern equivalents and do not come apart.",
    process: [
      "Measure the exit path before lifting, since the doorway is the constraint",
      "Protect door frames, walls, and stair treads on the route out",
      "Disassemble where a piece will not make the turn intact",
      "Set aside anything you want donated rather than disposed",
      "Load and sweep the space, which after a decade under a sofa needs it",
    ],
    disposalPath:
      "Furniture in genuinely usable condition goes to local donation centers first, which is both better and cheaper than disposal. Upholstered pieces that are worn, stained, or damaged go to a licensed disposal facility, since donation centers will not accept them and pretending otherwise wastes everyone's time. Metal bed frames and the steel in sleeper sofas are pulled for scrap.",
    pricingFactors: [
      "Number of pieces, with volume pricing rather than hourly",
      "Floor level and elevator availability",
      "Whether pieces need disassembly to get out",
      "Weight, particularly sleeper sofas and solid wood case goods",
    ],
    curbsideReality:
      "Furniture is exactly what weekly bulk programs are designed for, so if you have one chair and can wait for collection day, use it. The limits are where it breaks down. Lake Zurich caps free bulk at 50 pounds and 4 feet, and a three-seat sofa exceeds both. Long Grove requires one collector be able to lift it alone, which rules out most furniture outright.",
    proof: {
      quote:
        "They helped me move two sofas and were incredibly professional, timely, and efficient from start to finish. I needed the sofas removed within 24 hours, and he made it happen seamlessly.",
      author: "Hajira Mohammed",
    },
    faqs: [
      {
        q: "Can you come tomorrow?",
        a: "Often, yes. Furniture is our most common same-day and next-day job. We have turned around two-sofa removals inside 24 hours. Call early in the day for the best chance.",
      },
      {
        q: "Will you donate it instead of dumping it?",
        a: "If it is in usable condition, yes, and tell us so we route it that way. If it is stained, torn, or has been in a damp basement, donation centers will refuse it and we will say so rather than pretend.",
      },
      {
        q: "My sectional will not fit through the door.",
        a: "It came in somehow, but stair railings and remodeled doorways change that. We disassemble what will not make the turn rather than forcing it past your trim.",
      },
      {
        q: "Do you take just one piece?",
        a: "Yes. Single items are normal and most start around $125.",
      },
    ],
  },
  {
    name: "Piano Removal",
    slug: "piano-removal",
    headline: "Piano removal and disposal in the NW Chicago suburbs",
    metaDescription:
      "Upright and grand piano removal across Lake County and NW Cook County. Heavy, awkward, and stairs included. Free on-site estimates.",
    intro:
      "A piano is the heaviest thing in most houses and the one item where trying to save money by doing it yourself most often ends in an injury or a hole in a wall.",
    whyHard:
      "An upright piano runs 400 to 800 pounds concentrated over a small footprint, with a cast iron plate inside carrying the string tension. The weight sits high and toward the back, so a piano tips far more easily than its bulk suggests, and once it goes it does not stop. Baby grands are heavier again and require the legs and lyre come off, which has to be done supported or the case is damaged. Stairs multiply every one of these problems.",
    process: [
      "Assess the route out, and the stairs specifically, before committing to a price",
      "Remove legs and lyre on grands, with the case properly supported",
      "Use a piano board and straps rather than a standard dolly",
      "Crew the job to the weight, since this is not a two-person item on stairs",
      "Protect floors, trim, and door frames along the entire route",
    ],
    disposalPath:
      "Playable pianos are worth an attempt at rehoming, though the market is genuinely poor and most schools and churches already have one. Beyond that, a piano breaks down usefully: the cast iron plate and strings are substantial scrap metal, and the case and soundboard go to licensed disposal. Much of a piano's weight is recoverable metal.",
    pricingFactors: [
      "Upright versus baby grand versus full grand",
      "Stairs, which is the single largest factor",
      "Distance from the piano to the truck",
      "Whether tight turns or narrow doorways are in the path",
    ],
    curbsideReality:
      "No village program in our service area will take a piano. It exceeds every weight limit that exists locally by several times over, and it is not an item any curbside crew is equipped or insured to handle.",
    faqs: [
      {
        q: "Is my piano worth anything?",
        a: "Usually less than people hope. The used piano market is weak, and most institutions that would want one already have one. If yours is a quality instrument in tune and good condition, try selling first. We will tell you honestly if we think it is worth the attempt.",
      },
      {
        q: "Can two people move a piano?",
        a: "On a flat route with proper equipment, sometimes. On stairs, no, and that is where people get hurt. We crew the job to the actual weight.",
      },
      {
        q: "Do you take pianos from basements and second floors?",
        a: "Yes. Stairs are the main pricing factor rather than a disqualifier. Tell us how many and whether there is a turn.",
      },
      {
        q: "What happens to it?",
        a: "If it cannot be rehomed, we break it down. The cast iron plate and strings are real scrap metal weight, and the wooden case and soundboard go to licensed disposal.",
      },
    ],
  },
  {
    name: "Exercise Equipment Removal",
    slug: "exercise-equipment-removal",
    headline: "Treadmill and exercise equipment removal in Lake County, IL",
    metaDescription:
      "Treadmill, elliptical, and home gym removal across the NW Chicago suburbs. Basement stairs included. Free estimates from $125.",
    intro:
      "The treadmill in the basement has been a clothes rack for three years. Getting it out is harder than getting it in was, because it arrived in a box and it is not going to leave in one.",
    whyHard:
      "A motorized treadmill runs 200 to 350 pounds, and the weight sits in the motor housing at one end, which makes it awkward on stairs in a way an evenly weighted item is not. Ellipticals are worse, being tall, top-heavy, and easy to tip. Home gyms and Smith machines were assembled in the room they sit in and genuinely cannot leave without coming apart, which means fasteners that have not moved in a decade. Almost all of it lives in a basement.",
    process: [
      "Unplug and, on folding treadmills, secure the deck so it cannot swing",
      "Break down home gyms and racks into carryable sections",
      "Strap to a dolly rather than carrying, particularly on stairs",
      "Protect stair treads, walls, and the door frame at the top",
      "Pull cast iron weights and plates separately, since they are dense and load better on their own",
    ],
    disposalPath:
      "Exercise equipment is largely steel, so most of it goes to a scrap metal recycler. Cast iron weight plates and dumbbells are dense scrap and route the same way. Electronic consoles and motors are separated, and the plastic shrouds and running belts go to licensed disposal.",
    pricingFactors: [
      "Weight and type, from a folding treadmill up to a full Smith machine",
      "Basement stairs, and specifically whether there is a turn",
      "Whether the equipment needs disassembly to leave the room",
      "Quantity of free weights and plates, which price by weight",
    ],
    curbsideReality:
      "This is the category the weight limits were written to exclude. Lake Zurich's free bulk item stops at 50 pounds. Palatine flags anything over 60 pounds for a paid special pickup. A treadmill is three to six times either limit, which puts it outside every free weekly program in our area.",
    faqs: [
      {
        q: "Can you get a treadmill up basement stairs?",
        a: "Yes, and it is one of the most common calls we get. Straps and a dolly rather than carrying, which is what makes a turning staircase workable.",
      },
      {
        q: "Do I need to take my home gym apart first?",
        a: "No. Disassembly is part of the job. Most home gyms cannot leave the room intact regardless, so we plan on it.",
      },
      {
        q: "Will you take free weights and plates?",
        a: "Yes. Cast iron plates are dense scrap and route to a metal recycler. Tell us roughly how much weight so we load the truck properly.",
      },
      {
        q: "Is my treadmill worth selling?",
        a: "If it runs and is a known brand, possibly. Used treadmills sell slowly because the buyer has to move it, which is the same problem you have. If it does not run, it is scrap.",
      },
    ],
  },
]

export function getItem(slug: string) {
  return items.find((i) => i.slug === slug)
}

export const itemSlugs = items.map((i) => i.slug)
