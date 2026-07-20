/**
 * Cleanout-type pages.
 *
 * These are separated not by what gets hauled (it is broadly similar) but by
 * WHO is calling and what they are under pressure from. An executor settling
 * an estate, a property manager turning a unit, and an adult child worried
 * about a parent are three different customers with three different anxieties,
 * timelines, and decision paths.
 *
 * Same rule as cities.ts and items.ts: nothing interpolated from shared
 * sentences. The customer, the pressure, and the process must be specific.
 */

export type Cleanout = {
  name: string
  slug: string
  headline: string
  metaDescription: string
  /** Who actually picks up the phone for this job. */
  customer: string
  /** Opening. Speaks to that customer's situation, not to "you have junk." */
  intro: string
  /** What genuinely makes this type hard. Emotional, legal, or logistical. */
  theHardPart: string
  process: string[]
  /** What this customer is actually worried about, answered plainly. */
  concerns: { concern: string; answer: string }[]
  /** Typical timeline, stated honestly. */
  timeline: string
  faqs: { q: string; a: string }[]
}

export const cleanouts: Cleanout[] = [
  {
    name: "Estate Cleanouts",
    slug: "estate-cleanouts",
    headline: "Estate cleanouts in Lake County and NW Cook County",
    metaDescription:
      "Estate and probate cleanouts across Barrington, Libertyville, Lake Zurich and the NW Chicago suburbs. We work around closing dates and coordinate with executors and realtors.",
    customer: "Executors, adult children, and the realtors helping them",
    intro:
      "Most people handling an estate cleanout are doing it for the first time, while grieving, on a deadline set by a probate court or a closing date. It is the hardest kind of cleanout, and almost none of the difficulty is about the hauling.",
    theHardPart:
      "The house holds fifty years of a person's life, and somebody has to decide what happens to each piece of it. Families are usually spread across states and do not agree. There is often a will that references specific items, an attorney with a timeline, and a realtor who needs the house photo-ready by a date nobody chose. The physical work is a day or two. The deciding is what takes weeks, and rushing that part is how families end up regretting the whole thing.",
    process: [
      "Walk the property with you before quoting, room by room",
      "Agree what is staying, what is going to family, and what is being donated",
      "Give you time to remove keepsakes before we touch anything",
      "Flag documents, photographs, and anything that looks financial or legal rather than discarding it",
      "Route usable furniture and household goods to donation",
      "Clear the remainder and broom-sweep so the house is ready to list",
    ],
    concerns: [
      {
        concern: "What if we throw away something that mattered?",
        answer:
          "This is the fear that keeps people from starting. We do not work fast through unsorted rooms. Anything that looks like a document, a photograph, jewelry, or a financial record gets set aside for you rather than binned, even when the instruction was to clear everything.",
      },
      {
        concern: "The family is not in agreement yet.",
        answer:
          "Then do not book the cleanout yet. Book the walkthrough. We will quote it and hold the date while you sort out the family conversation, because a cleanout done before that conversation cannot be undone.",
      },
      {
        concern: "We are out of state and cannot be there.",
        answer:
          "That is common and workable. We can walk the property on video with you, send photos of anything questionable before it moves, and coordinate access with the realtor or attorney.",
      },
    ],
    timeline:
      "A typical two or three bedroom home is one day of clearing once decisions are made. Larger homes, full basements, or outbuildings run two to three days. The sorting beforehand is usually the longer part, and that pace is yours to set.",
    faqs: [
      {
        q: "Can you work around a closing date?",
        a: "Yes, and tell us the date at the walkthrough so we build the schedule backward from it. Realtors in Barrington and Libertyville book us specifically because listing photos cannot slip.",
      },
      {
        q: "Do you provide documentation for probate?",
        a: "We can provide a written scope and invoice suitable for estate accounting, plus proof of insurance for the attorney or executor. Ask at the walkthrough so we format it correctly the first time.",
      },
      {
        q: "What happens to items that could be sold?",
        a: "If there is genuine value, an estate sale before the cleanout usually nets more than we could. We will tell you when we think that is worth doing rather than hauling away something you should have sold.",
      },
      {
        q: "Do you handle donations?",
        a: "Yes. Usable furniture, clothing, and household goods are routed to local donation centers, which keeps volume out of disposal and can matter for the estate's records.",
      },
    ],
  },
  {
    name: "Foreclosure and REO Cleanouts",
    slug: "foreclosure-cleanouts",
    headline: "Foreclosure and REO cleanouts in the NW Chicago suburbs",
    metaDescription:
      "Foreclosure, REO, and bank-owned property cleanouts across Lake and NW Cook County. Fast turnaround, documented scope, insured. Free estimates.",
    customer: "Asset managers, REO agents, and investors",
    intro:
      "Foreclosure cleanouts run on deadlines and documentation. You need the property cleared, you need it on a date, and you need paperwork that satisfies whoever is holding the asset.",
    theHardPart:
      "You rarely know what is inside until the door opens. Properties sit vacant for months, so there can be spoiled food in a dead refrigerator, water damage, pest activity, or a garage nobody has opened since the previous owner left. Occasionally there is more personal property left behind than expected, which raises questions about abandoned property that are worth answering before rather than after. The scope you quoted from a drive-by is often not the scope inside.",
    process: [
      "Inspect and photograph the property before anything is touched",
      "Flag anything that changes scope, before we start rather than after",
      "Clear all interior contents, including appliances and window treatments if specified",
      "Handle garage, shed, and yard debris as part of the same scope",
      "Separate anything that appears to be personal records rather than discarding it",
      "Broom-sweep, and photograph the finished property for your file",
    ],
    concerns: [
      {
        concern: "I need documentation for the file.",
        answer:
          "Before and after photographs and an itemized scope come standard. Tell us the format your asset manager wants and we will match it.",
      },
      {
        concern: "The scope might be bigger than it looks.",
        answer:
          "It often is. We photograph and flag before starting rather than presenting a surprise invoice afterward. If the inside is worse than the drive-by suggested, you will hear it from us before we load anything.",
      },
      {
        concern: "I need it done this week.",
        answer:
          "Usually workable. Vacant properties have no occupant to schedule around, which is the one thing that makes these faster than an occupied cleanout.",
      },
    ],
    timeline:
      "Most single-family foreclosure cleanouts finish in one day. Properties with heavy volume, extensive garage or yard debris, or water damage can run two. We give you a firm number after the walkthrough.",
    faqs: [
      {
        q: "Are you insured for bank-owned property work?",
        a: "Yes, fully licensed and insured, and we can send a certificate before the job. Asset managers usually need it on file first, so ask early.",
      },
      {
        q: "What about personal property left behind?",
        a: "Illinois has rules about abandoned personal property, and they are worth confirming with your attorney before the clear-out rather than after. We will set aside anything that looks like documents or records regardless of the instruction.",
      },
      {
        q: "Do you take the appliances?",
        a: "If they are in scope, yes. Note that a refrigerator that has been off in a vacant house for months is a different job from a working one, so flag it when you call.",
      },
      {
        q: "Can you invoice a company rather than an individual?",
        a: "Yes. We invoice asset management companies and brokerages directly, and can work to your PO or work-order process.",
      },
    ],
  },
  {
    name: "Hoarding Cleanouts",
    slug: "hoarding-cleanouts",
    headline: "Hoarding cleanouts in Lake County, handled without judgment",
    metaDescription:
      "Compassionate hoarding cleanout help across the NW Chicago suburbs. We work at a pace that respects the person, not just the property. Free confidential walkthrough.",
    customer: "Adult children, spouses, social workers, and sometimes the person themselves",
    intro:
      "If you are reading this, you are probably worried about someone. Hoarding cleanouts are the jobs where how we work matters far more than how fast we work.",
    theHardPart:
      "The physical clearing is straightforward. The hard part is that the person living there formed a genuine attachment to the things being removed, and a cleanout done to them rather than with them tends not to hold. Homes often revert within a year when the underlying situation was not addressed. There are practical complications too: blocked exits, floors that cannot be assessed until they are cleared, and sometimes conditions that need a remediation specialist rather than a hauling company.",
    process: [
      "A private walkthrough first, with no pressure and no timeline attached",
      "Agree on a pace and a scope with whoever is living there, wherever that is possible",
      "Work room by room rather than clearing everything at once",
      "Stop and ask rather than assume, every time something looks like it might matter",
      "Set aside documents, photographs, and financial records without exception",
      "Clear, clean, and leave the space genuinely usable rather than just empty",
    ],
    concerns: [
      {
        concern: "I do not want my parent humiliated.",
        answer:
          "Understood, and it shapes how we show up. Unmarked approach where you want it, no comments, no reactions, no photographs beyond what the job requires. Neighbors see a clean truck and a crew working.",
      },
      {
        concern: "Other companies turned us down.",
        answer:
          "We have taken jobs that others declined. Tell us honestly what the situation is when you call, including the parts that are hard to say, so we can tell you truthfully whether we are the right call.",
      },
      {
        concern: "They are not ready.",
        answer:
          "Then we are not ready either. A cleanout forced on someone who has not agreed to it rarely lasts, and it can damage your relationship with them. We would rather walk through with you now and come back when the time is right.",
      },
    ],
    timeline:
      "These run longer than any other cleanout, and they should. Some are a single long day. Many are staged over several visits across weeks, which gives the person time to adjust and makes the result far more likely to hold.",
    faqs: [
      {
        q: "Is this confidential?",
        a: "Yes. We do not use these jobs in photos, marketing, or reviews. What we see stays with us.",
      },
      {
        q: "What if there are biohazard conditions?",
        a: "There is a line we do not cross. Human or animal waste, mold remediation, and similar conditions need a licensed remediation company, not a hauling company. We will tell you plainly and point you toward who does handle it.",
      },
      {
        q: "Can we do it in stages?",
        a: "Yes, and often you should. Staged cleanouts across several visits work better than one overwhelming day, both for the person and for how long the result lasts.",
      },
      {
        q: "Will you find things that matter?",
        a: "Frequently. Cash, documents, jewelry, and photographs turn up inside things that look like trash. That is exactly why we do not work fast through unsorted rooms.",
      },
    ],
  },
  {
    name: "Rental Turnover Cleanouts",
    slug: "rental-turnover-cleanouts",
    headline: "Rental turnover and move-out cleanouts in the NW Chicago suburbs",
    metaDescription:
      "Fast rental turnover cleanouts for landlords and property managers across Lake and NW Cook County. Cleared and broom-swept between tenants. Free estimates.",
    customer: "Landlords and property managers",
    intro:
      "Every day between tenants costs you rent. Turnover cleanouts are priced and scheduled around that single fact.",
    theHardPart:
      "The constraint is the calendar. You often cannot get in until the tenant is out, and the next tenant is already scheduled, which leaves a narrow window with no slack. Abandoned property adds a legal wrinkle worth clarifying before disposal. In multi-unit buildings there are elevator reservations, loading dock hours, and association rules that turn a two-hour job into a full afternoon if nobody planned for them.",
    process: [
      "Schedule against your turnover date, not our convenience",
      "Confirm building access, elevator, and dock requirements before the day",
      "Clear everything left behind, including inside closets, cabinets, and the balcony",
      "Remove appliances only if they are in scope, since many stay with the unit",
      "Broom-sweep so your cleaners or painters can start immediately",
    ],
    concerns: [
      {
        concern: "I have a narrow window between tenants.",
        answer:
          "Tell us the window when you book and we schedule to it. Turnovers are the jobs we most often move other work around, because the cost of missing your date is measured in rent.",
      },
      {
        concern: "The tenant left personal property.",
        answer:
          "Illinois has notice requirements around abandoned tenant property. Confirm with your attorney that you have satisfied them before we dispose of anything, because that protection is yours, not ours.",
      },
      {
        concern: "I manage multiple units.",
        answer:
          "We work with property managers on repeat turnovers and can invoice per unit or per property. Repeat work gets scheduling priority and better pricing.",
      },
    ],
    timeline:
      "Most apartment and townhome turnovers are a half day. A heavily loaded unit or a single-family rental runs a full day. Same-week scheduling is normal, and same-day is often possible.",
    faqs: [
      {
        q: "Can you come the same day the tenant leaves?",
        a: "Often, yes. Give us the date as early as you can and we will hold it. Turnovers are deadline work and we schedule them that way.",
      },
      {
        q: "Do you work in condo and apartment buildings?",
        a: "Regularly, including downtown Arlington Heights and Palatine buildings near the Metra. Tell us the building when you call, since most require a reserved elevator and a delivery window.",
      },
      {
        q: "Do you clean, or just clear?",
        a: "We clear and broom-sweep. We are not a cleaning service, so your cleaners still come after us, but they arrive to an empty swept unit rather than a full one.",
      },
      {
        q: "Can you handle several units at once?",
        a: "Yes, and it prices better than booking them separately. Tell us how many and where and we will build a schedule.",
      },
    ],
  },
  {
    name: "Garage Cleanouts",
    slug: "garage-cleanouts",
    headline: "Garage cleanouts in Lake Zurich and the NW Chicago suburbs",
    metaDescription:
      "Garage cleanouts across Lake County and NW Cook County. One visit, sorted, swept, and you park inside again. Free estimates from $125.",
    customer: "Homeowners who have not parked in their own garage for years",
    intro:
      "The garage is where things go when you have not decided about them yet. Most of ours are one-day jobs that end with a car fitting inside for the first time in years.",
    theHardPart:
      "Garages are less about volume than about decisions, and about the specific set of things garages accumulate that nothing else will take. Half-used paint, old fuel, pesticides, and propane tanks are genuinely hazardous and cannot go in our truck at any price. Shelving is usually anchored to the wall. And there is nearly always a category of item that is not junk but is not staying either, which needs a donation route rather than a landfill.",
    process: [
      "Walk it with you and agree the keep, donate, and dispose piles",
      "Pull everything out to the driveway so you can actually see it",
      "Set aside hazardous items for you, since we cannot legally take them",
      "Break down and remove shelving and cabinets if they are going",
      "Load the disposal pile and route donations separately",
      "Sweep the floor, which after years under boxes usually needs it",
    ],
    concerns: [
      {
        concern: "I do not want to throw away things I need.",
        answer:
          "Nothing moves without your say. Pulling it all into the driveway first is the part people find most useful, because deciding is much easier when you can see it rather than dig through it.",
      },
      {
        concern: "There is old paint and gas out there.",
        answer:
          "We cannot take those, and no legitimate hauler can. Lake County runs household chemical waste collection specifically for this. We separate it out and point you there so the rest of the job is not held up.",
      },
      {
        concern: "Can it be done in one day?",
        answer:
          "Nearly always. A one-car garage is a few hours, a three-car with heavy accumulation is most of a day.",
      },
    ],
    timeline:
      "Most garage cleanouts finish in a single visit, between two hours and a full day depending on size and how full it is.",
    faqs: [
      {
        q: "What can you not take from a garage?",
        a: "Liquid paint, motor oil, fuel, pesticides, pool chemicals, propane tanks, and asbestos. Lake County's household chemical waste program takes most of it, and we will point you to the drop-off.",
      },
      {
        q: "Will you take the shelving and cabinets?",
        a: "Yes. Wall-anchored shelving and old cabinets come out as part of the job, and we patch nothing but we do not leave anchors sticking out either.",
      },
      {
        q: "Do I need to sort before you arrive?",
        a: "No. Sorting alongside you is part of the job, and most people find it easier with us pulling things out than trying to pre-sort in a full garage.",
      },
      {
        q: "What about the old refrigerator in the corner?",
        a: "We take it, and note that refrigerant recovery makes appliances price differently from general junk. Mention it when you call so the quote is right.",
      },
    ],
  },
  {
    name: "Basement Cleanouts",
    slug: "basement-cleanouts",
    headline: "Basement cleanouts in Libertyville, Barrington and Lake County",
    metaDescription:
      "Basement cleanouts across the NW Chicago suburbs. Stairs, heavy legacy items, and water-damaged storage handled. Free estimates from $125.",
    customer: "Homeowners, and often the second or third owner of an older house",
    intro:
      "Basements collect what the people before you left, plus everything you have added since. In the older parts of Libertyville and Barrington, that can mean three generations of storage.",
    theHardPart:
      "Everything has to come up a staircase, and basement stairs are frequently narrow with a turn at the top. That alone changes what is possible. Older basements add genuinely heavy legacy items that modern houses simply do not have, including cast iron, steel tanks, workbenches built in place, and shelving assembled in the room. Moisture is the other factor: cardboard that has sat on a damp floor for a decade fails when lifted, and anything paper or fabric may be mold-affected rather than salvageable.",
    process: [
      "Check the staircase and the turn at the top before quoting",
      "Sort with you, keeping in mind that water-damaged goods are rarely worth saving",
      "Break down built-in workbenches and shelving assembled in place",
      "Carry out with straps and dollies rather than by hand",
      "Protect stair treads, railings, and the door frame at the top",
      "Sweep the floor so you can see what condition the slab is actually in",
    ],
    concerns: [
      {
        concern: "Some of it is too heavy to move.",
        answer:
          "That is usually why the call happens. We have removed a steel furnace drum original to a hundred-year-old house from a basement after other contractors declined the job. Heavy and awkward is the normal case down there.",
      },
      {
        concern: "There might be mold on the boxes.",
        answer:
          "Common in basements, and it changes what is worth keeping. We can remove mold-affected contents, but if there is mold on the structure itself, that is a remediation company's job and we will say so.",
      },
      {
        concern: "The stairs are narrow with a turn.",
        answer:
          "Tell us before the quote. It is the single biggest factor in how long a basement takes, and we would rather plan for it than discover it.",
      },
    ],
    timeline:
      "A moderately full basement is a single day. Older homes with heavy legacy items, built-in storage, or many decades of accumulation can run two.",
    faqs: [
      {
        q: "Can you get a furnace or water heater out?",
        a: "Yes, provided it is already disconnected. Old cast iron and steel units are heavy but very much in scope, and much of the weight is recoverable scrap metal.",
      },
      {
        q: "What about a basement that flooded?",
        a: "We remove water-damaged contents. If the structure needs drying or mold remediation, that is a specialist's work, and we will tell you rather than take it on.",
      },
      {
        q: "Will you take the built-in workbench?",
        a: "Yes. Workbenches and shelving assembled in the room get broken down and carried out in sections.",
      },
      {
        q: "Do you protect the stairs and walls?",
        a: "Yes. Everything comes up the same staircase, so protecting the treads, railing, and the door frame at the top is part of doing the job properly.",
      },
    ],
  },
  {
    name: "Storage Unit Cleanouts",
    slug: "storage-unit-cleanouts",
    headline: "Storage unit cleanouts across Lake and NW Cook County",
    metaDescription:
      "Storage unit cleanouts in the NW Chicago suburbs. We meet you at the facility, clear the unit, and you stop paying rent. Free estimates.",
    customer: "People paying monthly for things they no longer want",
    intro:
      "Most storage unit cleanouts start with the same realization: the rent has quietly added up to more than the contents are worth. Clearing it stops the bleeding.",
    theHardPart:
      "The constraints belong to the facility rather than the unit. Gate hours limit when we can work, and many facilities close earlier than you would expect. Access is often down a narrow indoor corridor requiring the facility's own flat carts, sometimes with a freight elevator on a booking system. Drive-up units are far easier. And people frequently have not opened the unit in years, so the contents are genuinely unknown at the time of quoting.",
    process: [
      "Confirm the facility's gate hours, access rules, and elevator booking if there is one",
      "Meet you at the unit, since most facilities require the renter present",
      "Open and assess before committing, given contents are often unknown",
      "Sort anything you want to keep before the rest is loaded",
      "Clear the unit completely and sweep it out",
      "Leave it ready for you to hand back the lock and stop the rent",
    ],
    concerns: [
      {
        concern: "I do not know what is in there anymore.",
        answer:
          "Very common. We open it and look with you before committing to a number, rather than quoting blind and adjusting later.",
      },
      {
        concern: "Do I have to be there?",
        answer:
          "Usually yes, because most facilities require the renter for access. If you cannot be, some facilities accept written authorization, so check with their office first.",
      },
      {
        concern: "There might be something valuable in there.",
        answer:
          "Then look before we load. We sort as we go and set aside anything you flag, but you know what matters and we do not.",
      },
    ],
    timeline:
      "Most units clear in a single visit of two to four hours. Larger units or difficult indoor access with a shared elevator take longer, and gate hours sometimes force a second visit.",
    faqs: [
      {
        q: "Can you meet me at the facility?",
        a: "Yes, that is how nearly all of these work. Give us the facility, the unit number, and the gate hours and we will schedule inside their window.",
      },
      {
        q: "What if the unit is going to auction?",
        a: "Once a lien process starts, the contents are governed by the facility's process and Illinois self-storage lien law. Talk to the facility first, since what you are allowed to remove may be restricted.",
      },
      {
        q: "Do you sweep the unit out?",
        a: "Yes. Most facilities require it be broom-clean before they close the account, so we leave it that way.",
      },
      {
        q: "Can you handle indoor units on upper floors?",
        a: "Yes, though it takes longer. Tell us the floor and whether there is a freight elevator, because some facilities require it be reserved.",
      },
    ],
  },
  {
    name: "Office and Commercial Cleanouts",
    slug: "commercial-cleanouts",
    headline: "Office and commercial cleanouts in the NW Chicago suburbs",
    metaDescription:
      "Office, retail, and commercial cleanouts across Lake and NW Cook County. After-hours scheduling, COI provided, invoiced to the business. Free estimates.",
    customer: "Business owners, office managers, and commercial property managers",
    intro:
      "Commercial cleanouts are scheduled around your operations rather than ours. Most of what we do for businesses happens evenings and weekends, because clearing an office during business hours is not realistic.",
    theHardPart:
      "The building usually imposes more constraints than the contents do. Certificates of insurance, designated freight elevators, dock hours, and union building rules all need sorting before the day. Volume comes in bursts, since twenty identical workstations arrive as one enormous load. Electronics are their own problem: office equipment is barred from Illinois landfills, and anything that stored data needs handling decided in advance rather than improvised on the dock.",
    process: [
      "Confirm building requirements, COI, dock access, and elevator booking first",
      "Schedule after hours or weekends where operations require it",
      "Break down workstations, cubicles, and modular furniture",
      "Separate electronics for certified recycling, since they cannot be landfilled",
      "Set aside anything holding data for your own destruction process",
      "Clear, sweep, and leave the space ready for the next tenant or build-out",
    ],
    concerns: [
      {
        concern: "The building needs a certificate of insurance.",
        answer:
          "Standard, and we provide it. Send us the building's requirements early, since some want to be named as additional insured and that takes a day to arrange.",
      },
      {
        concern: "We cannot shut down during business hours.",
        answer:
          "Then we work evenings or weekends. Most commercial jobs we do are after hours, and it is priced as normal work rather than as a premium.",
      },
      {
        concern: "There is data on those computers.",
        answer:
          "Handle that before we arrive. We are a hauling company, not a data destruction service, and we will not claim otherwise. Pull the drives or bring in a shredding vendor, then we take the hardware.",
      },
    ],
    timeline:
      "A small office suite is typically one evening. Full floors, retail build-out removal, or warehouse clearing runs multiple days and gets scheduled in phases around your operations.",
    faqs: [
      {
        q: "Do you provide a certificate of insurance?",
        a: "Yes. Send the building's requirements when you book, since additional-insured endorsements take a day or two to arrange.",
      },
      {
        q: "Can you invoice the business directly?",
        a: "Yes. We invoice businesses and property managers directly and can work with your PO or work-order process.",
      },
      {
        q: "What happens to the office electronics?",
        a: "They go to a registered Illinois electronics recycler. Covered electronic devices cannot legally go to landfill in Illinois, so this is a separate stream from the furniture.",
      },
      {
        q: "Do you handle retail fixtures and build-out?",
        a: "Yes. Shelving, display fixtures, counters, and non-structural build-out come out as light demolition with the haul-away included.",
      },
    ],
  },
]

export function getCleanout(slug: string) {
  return cleanouts.find((c) => c.slug === slug)
}
