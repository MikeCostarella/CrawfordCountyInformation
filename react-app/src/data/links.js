// Crawford County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-22

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "News & Media",
];

// The platform that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Crawford County Auditor";

export const LINKS = [
  // ---------- Government ----------
  { name: "Crawford County (Official Site)", category: "Government", subcategory: "County", url: "https://crawford-co.org/", description: "Official government portal for Crawford County, Ohio (county seat: Bucyrus)." },
  { name: "Crawford County Auditor", category: "Government", subcategory: "Auditor", url: "https://ccauditor.crawford-co.org/", description: "Property records, valuations, and the real-estate/parcel search." },
  { name: "Crawford County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/crawford/", description: "Voter registration, polling locations, and election administration." },
  // ---------- Education ----------
  { name: "Bucyrus Public Library", category: "Education", subcategory: "Library", url: "http://bucyruslibrary.org/", description: "Public library in Bucyrus serving Crawford County." },
  { name: "Bucyrus City Schools", category: "Education", subcategory: "K-12", url: "https://www.bucyrusschools.org/", description: "The county seat's public school district." },
  { name: "North Central State College", category: "Education", subcategory: "Higher Ed", url: "https://www.ncstatecollege.edu/", description: "Regional two-year college (Mansfield) serving Crawford County and the area." },
  // ---------- Health ----------
  { name: "Avita Health System", category: "Health", subcategory: "Hospital", url: "https://avitahealth.org/", description: "Regional health system operating the Bucyrus and Galion hospitals." },
  // ---------- Business & Economy ----------
  { name: "Crawford Partnership", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.crawfordpartnership.org/", description: "Crawford Partnership for Education & Economic Development — countywide development and workforce." },
  // ---------- News & Media ----------
  { name: "Crawford County Now", category: "News & Media", subcategory: "News", url: "https://crawfordcountynow.com/", description: "Local news, weather, and events across Crawford County." },
];
