// Crawford County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-11-09
//
// Every URL below was fetched and its content checked against the organization
// it claims to be. Sites that block automated fetching (the Telegraph-Forum and
// the Galion Inquirer) were checked in a browser.
//
// THINGS THAT CHANGED SINCE JULY
//
//   * The Board of Elections moved to crawfordcountyohioboe.gov.
//   * The Bucyrus and Galion-Crestline chambers merged into the Crawford County
//     Chamber of Commerce; galionchamber.org redirects to it.
//   * Community Counseling Services (Bucyrus) is now part of Third Street Family.
//   * The Galion Inquirer is now published by HD Media (2026); the Galion
//     Historical Society operates as the Galion History Center.
//   * Transit is North Central Area Transit (senecascat.org), serving Crawford and
//     Seneca.
//
// TRAPS
//
//   Crawford County PENNSYLVANIA (Meadville, Conneaut Lake), ARKANSAS, IOWA,
//   KANSAS; Crestline CA. WFXN-FM is licensed to Galion but is a Mansfield-market
//   station and is left out.
//
// GEOGRAPHY
//
//   * Two cities (Bucyrus; Galion, partly in Morrow and Marion), villages
//     Crestline (partly Richland), New Washington, Chatfield, Leesville, North
//     Robinson and Tiro, and sixteen townships (Polk, Liberty and Tod have sites;
//     the Township Association covers the rest).
//   * There is no separate Galion Municipal Court; the county court holds hours in
//     Galion. Crawford County Public Health covers the whole county.
//   * Two ESCs serve the county (Mid-Ohio in Mansfield, North Central Ohio in
//     Tiffin/Marion); Pioneer CTC (Shelby) is the career center.
//   * Regional bodies with confirmed Crawford service: United Way of North Central
//     Ohio, Ohio Heartland CAC, Second Harvest (Lorain), Habitat of Richland &
//     Crawford, Turning Point (Marion), the Crawford-Marion ADAMH Board.
//
// LEFT OUT rather than listed unverified: the Auditor's real-estate search (does
// not load), the land bank (blocked), Regional Planning and the CIC (no sites),
// the humane society, Galion Main Street and Crestline Historical Society (no
// own sites), and districts based in other counties (not researched).

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Crawford County Auditor Real Estate Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Crawford County, Ohio", category: "Government", subcategory: "County", url: "https://crawford-co.org/", description: "County portal linking to Crawford County, Ohio offices, courts, agencies, and municipalities." },
  { name: "Crawford County Board of Commissioners", category: "Government", subcategory: "County", url: "https://commissioners.crawford-co.org/", description: "Board of Commissioners, the county's general administrative body handling taxing, budgeting, appropriating and purchasing, at 112 E Mansfield St, Suite 304, Bucyrus." },
  { name: "Crawford County Elected Officials", category: "Government", subcategory: "County", url: "https://commissioners.crawford-co.org/elected-officials/", description: "Commissioners' list of Crawford County elected officials and judges with links to their office websites." },
  { name: "Crawford County Auditor", category: "Government", subcategory: "Auditor", url: "https://ccauditor.crawford-co.org/", description: "County Auditor's office at 112 E. Mansfield St., Bucyrus, with links to real estate, sales and Board of Revision searches, taxes, licenses, and weights and measures." },
  { name: "Crawford County Auditor - Real Estate", category: "Government", subcategory: "Auditor", url: "https://ccauditor.crawford-co.org/real-estate/", description: "Auditor's real estate page covering property valuation, Board of Revision appeals, CAUV, manufactured homes, and links to the property and sales searches." },
  { name: "Crawford County Auditor - GIS", category: "Government", subcategory: "GIS", url: "https://ccauditor.crawford-co.org/gis/", description: "Auditor's GIS page describing the county parcel map with ownership, district boundaries, aerials, floodplains and soils, linking to the online GIS/Map Search." },
  { name: "Crawford County Treasurer", category: "Government", subcategory: "Treasurer", url: "http://treasurer.crawford-co.org/", description: "County Treasurer's office at 112 E. Mansfield St., Suite 102, Bucyrus." },
  { name: "Crawford County Recorder", category: "Government", subcategory: "Recorder", url: "https://crawfordohrecorder.com/", description: "Recorder's Office, the official land records office for real estate in Crawford County, with recording standards and fee information." },
  { name: "Crawford County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://coclerk.crawford-co.org/", description: "Clerk of Courts office at 112 E. Mansfield St., Suite 204, Bucyrus, with online case inquiry, filing fees, e-filing and passports." },
  { name: "Crawford County Clerk of Courts - Auto Title Department", category: "Government", subcategory: "Courts", url: "https://coclerk.crawford-co.org/index.php/auto-title/", description: "Clerk of Courts title office at 2538 E Mansfield St, Bucyrus, issuing vehicle, boat and outboard motor titles, liens and duplicate titles." },
  { name: "Crawford County Court of Common Pleas", category: "Government", subcategory: "Courts", url: "https://www.crawfordcocpcourt.org/", description: "Common Pleas Court at 112 E. Mansfield Street, Suite 200, Bucyrus." },
  { name: "Crawford County Juvenile & Probate Court", category: "Government", subcategory: "Courts", url: "http://crawfordcountyprobate.org/", description: "Juvenile and Probate Court at 112 E. Mansfield Street, Bucyrus." },
  { name: "Crawford County Municipal Court", category: "Government", subcategory: "Courts", url: "http://crawfordcountymuni.org/", description: "Municipal Court at 112 E. Mansfield Street, Suite 100, Bucyrus, with a Galion office at 301 Harding Way East." },
  { name: "Crawford County Prosecutor", category: "Government", subcategory: "Courts", url: "https://crawfordprosecutor.com/", description: "Prosecuting Attorney's office at the Courthouse, 112 E Mansfield St, Suite 305, Bucyrus." },
  { name: "Crawford County Board of Elections", category: "Government", subcategory: "Elections", url: "https://crawfordcountyohioboe.gov/", description: "Board of Elections at 112 E. Mansfield St., Suite A, Bucyrus, handling voter registration, elections and results." },
  { name: "Crawford County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://crawfordcountysheriffohio.com/", description: "Sheriff's Office and jail at 3613 Stetzer Road, Bucyrus." },
  { name: "Crawford County Sheriff's Office - Communications (9-1-1 Dispatch)", category: "Government", subcategory: "Public Safety", url: "https://crawfordcountysheriffohio.com/communications/", description: "Sheriff's Communications Division at 3613 Stetzer Road, Bucyrus, staffed 24 hours to handle emergency and non-emergency calls and dispatch fire and ambulance services." },
  { name: "Crawford County Emergency Management Agency", category: "Government", subcategory: "Public Safety", url: "http://www.emacrawford-co.org/", description: "Emergency Management and Homeland Security agency at 112 East Mansfield St., Suite 302, Bucyrus." },
  { name: "Crawford County Dog Warden", category: "Government", subcategory: "Public Safety", url: "https://commissioners.crawford-co.org/dog-warden/", description: "Dog Warden's office in the Courthouse/Administration Building, 112 E. Mansfield St., Bucyrus, with dog licensing and lost-pet information." },
  { name: "Crawford County Engineer", category: "Government", subcategory: "Public Works", url: "http://crawfordcountyengineer.com/", description: "County Engineer's office at 815 Whetstone Street, Bucyrus." },
  { name: "Crawford County Engineer - County Map", category: "Government", subcategory: "Public Works", url: "https://crawfordcountyengineer.com/county-map/", description: "Engineer's downloadable county road map with detail views of each city and village and a street index." },
  { name: "Crawford County Solid Waste Management District", category: "Government", subcategory: "Public Works", url: "https://crawfordcountysolidwaste.com/", description: "Crawford County Solid Waste Management District and Recycling Center in Bucyrus, with recycling information and the district's solid waste plan." },
  { name: "Crawford Soil & Water Conservation District", category: "Government", subcategory: "Conservation", url: "http://crawfordswcd.org/", description: "Soil and Water Conservation District serving Crawford County from 3111 State Route 98, Bucyrus." },
  { name: "Crawford County Veterans Service Commission", category: "Government", subcategory: "Veterans", url: "https://crawfordcountyveteransohio.com/", description: "Veterans Service Commission assisting veterans living in Crawford County, in the Courthouse lower level, 112 East Mansfield Street, Suite 95, Bucyrus." },
  { name: "Crawford County Job and Family Services", category: "Government", subcategory: "County", url: "https://crawfordcountyjfs.org/", description: "Job and Family Services agency at 224 Norton Way, Bucyrus." },
  { name: "Crawford County JFS - Child/Adult Protective Services", category: "Government", subcategory: "County", url: "https://crawfordcountyjfs.org/child-protective-services/", description: "JFS protective services page covering child abuse and neglect reporting, kinship, ongoing case services and adult protective services." },
  { name: "Crawford County JFS - Child Support", category: "Government", subcategory: "County", url: "https://crawfordcountyjfs.org/child-support/", description: "JFS child support page covering paternity establishment, support orders, enforcement, order reviews and payment options." },
  { name: "Crawford County Board of Developmental Disabilities", category: "Government", subcategory: "County", url: "https://crawfordcbdd.org/", description: "County Board of Developmental Disabilities at 1630 E. Southern Ave, Suite 101, Bucyrus." },
  { name: "North Central Area Transit (NCAT)", category: "Government", subcategory: "Transit", url: "https://www.senecascat.org/", description: "Public transportation serving Crawford and Seneca counties, with a Crawford County office at 331 E. Railroad St., Galion." },
  { name: "City of Bucyrus", category: "Government", subcategory: "City", url: "https://www.cityofbucyrusoh.us/", description: "Official site of the City of Bucyrus, City Hall at 500 S. Sandusky Avenue." },
  { name: "Bucyrus Mayor's Office", category: "Government", subcategory: "City", url: "https://www.cityofbucyrusoh.us/mayor-bruce-truka", description: "City of Bucyrus page for the mayor with a greeting and city overview links." },
  { name: "Bucyrus City Council", category: "Government", subcategory: "City", url: "https://www.cityofbucyrusoh.us/bucyrus-city-council", description: "City Council page with members, committees, agendas and minutes; meetings are in Council Chambers at City Hall." },
  { name: "Bucyrus Police Department", category: "Government", subcategory: "Public Safety", url: "https://www.cityofbucyrusoh.us/police-department", description: "City of Bucyrus Police Department page with public records contact information." },
  { name: "Bucyrus City Fire Department", category: "Government", subcategory: "Public Safety", url: "https://www.cityofbucyrusoh.us/bucyrus-city-fire-department", description: "City of Bucyrus Fire Department page." },
  { name: "Bucyrus Utility Department", category: "Government", subcategory: "City", url: "https://www.cityofbucyrusoh.us/utility-department", description: "Bucyrus utility billing office at City Hall, 500 South Sandusky Avenue, for water, sewer, storm water and sanitation services." },
  { name: "Bucyrus Income Tax", category: "Government", subcategory: "City", url: "https://www.cityofbucyrusoh.us/income-tax", description: "City of Bucyrus income tax office page with online filing, payments, forms and Local Board of Tax Review appeals." },
  { name: "City of Galion", category: "Government", subcategory: "City", url: "https://galion.city/", description: "Official site of the City of Galion, City Hall at 301 Harding Way East." },
  { name: "City of Galion Departments", category: "Government", subcategory: "City", url: "https://galion.city/156/Departments", description: "Directory of Galion city departments including administration, auditor, electric, fire and EMS, health, law, police, service, utility office, wastewater and water." },
  { name: "Galion Parks & Recreation", category: "Government", subcategory: "City", url: "https://galion.city/159/Parks-Recreation", description: "Galion Service Department page for parks, shelter rentals, the Heise Park pool, splash park and Levant Dawson Trail." },
  { name: "Village of Crestline", category: "Government", subcategory: "Village", url: "https://crestlineoh.com/", description: "Official site of the Village of Crestline, 100 North Seltzer Street." },
  { name: "Crestline Police Department", category: "Government", subcategory: "Public Safety", url: "https://crestlineoh.com/police/", description: "Village of Crestline Police Department page with non-emergency contact number." },
  { name: "Crestline Mayor's Court", category: "Government", subcategory: "Courts", url: "https://crestlineoh.com/court/", description: "Village of Crestline Mayor's Court, hearing misdemeanors and traffic violations at 100 North Seltzer Street." },
  { name: "Crestline Tax Department", category: "Government", subcategory: "Village", url: "https://crestlineoh.com/tax/", description: "Village of Crestline income tax page explaining that the Regional Income Tax Agency (RITA) collects the village's income tax." },
  { name: "Crestline Water/Sewer Department", category: "Government", subcategory: "Village", url: "https://crestlineoh.com/utilities/", description: "Village of Crestline department operating the water treatment plant, well field and wastewater treatment plant." },
  { name: "Village of New Washington", category: "Government", subcategory: "Village", url: "https://newwashington.info/", description: "Site of the Village of New Washington in Cranberry Township, Crawford County." },
  { name: "Crawford County Township Association", category: "Government", subcategory: "Township", url: "https://www.crawfordcountyta.us/", description: "Township association site with a profile page for each of Crawford County's 16 townships listing trustees, fiscal officers, halls and meetings." },
  { name: "Polk Township", category: "Government", subcategory: "Township", url: "http://www.polktwp.net/index.html", description: "Polk Township, Crawford County, with offices at 7680 SR 309, Galion." },
  { name: "Liberty Township", category: "Government", subcategory: "Township", url: "http://libertytwp.cc/", description: "Liberty Township, one of the 16 townships of Crawford County." },
  { name: "Tod Township", category: "Government", subcategory: "Township", url: "http://todtownship.us/", description: "Tod Township in Crawford County, Ohio." },
  // ---------- Education ----------
  { name: "Bucyrus Public Library", category: "Education", subcategory: "Library", url: "https://bucyruslibrary.org", description: "Public library in Bucyrus whose catalog is connected with the SEO (Serving Every Ohioan) Service Center and materials from over 100 other Ohio libraries." },
  { name: "Galion Public Library", category: "Education", subcategory: "Library", url: "https://www.galionlibrary.org/", description: "Public library in Galion whose card gives access to the Ohio Digital Library, Libby, Ohio Web Library and LinkedIn Learning." },
  { name: "Crestline Public Library", category: "Education", subcategory: "Library", url: "https://www2.youseemore.com/crestline/default.asp", description: "Online catalog and home page of the Crestline Public Library at 324 Thoman Street, Crestline." },
  { name: "Bucyrus City Schools", category: "Education", subcategory: "K-12", url: "https://bucyrusschools.org", description: "Public school district with offices at 170 Plymouth Street, Bucyrus, organized into elementary and secondary schools." },
  { name: "Galion City Schools", category: "Education", subcategory: "K-12", url: "https://galionschools.org", description: "Public school district at 470 Portland Way North, Galion, operating a primary, intermediate, middle and high school." },
  { name: "Crestline Exempted Village School District", category: "Education", subcategory: "K-12", url: "https://www.crestlinebulldogs.org", description: "Public school district with offices at 401 Heiser Court, Crestline." },
  { name: "Colonel Crawford Local Schools", category: "Education", subcategory: "K-12", url: "https://www.cck12.org", description: "Public school district at 5444 Crestline Rd., Crestline, operating Colonel Crawford High School, William Crawford Intermediate and Hannah Crawford Elementary." },
  { name: "Wynford Local Schools", category: "Education", subcategory: "K-12", url: "https://www.wynfordroyals.org", description: "Public school district at 3288 Holmes Center Rd., Bucyrus, which includes Wynford Middle/High School." },
  { name: "Buckeye Central Local School District", category: "Education", subcategory: "K-12", url: "https://www.buckeye-central.org", description: "Public school district at 938 South Kibler Street, New Washington, operating Bitty Bucks Preschool, an Early Learning Center, an Intermediate School and a Junior High and High School." },
  { name: "Pioneer Career and Technology Center", category: "Education", subcategory: "Career Center", url: "https://www.pctc.k12.oh.us", description: "Career and technology center at 27 Ryan Rd., Shelby, providing career-technical education for its partner school districts." },
  { name: "Mid-Ohio Educational Service Center", category: "Education", subcategory: "ESC", url: "https://www.moesc.net", description: "Educational service center at 890 West Fourth Street, Mansfield, serving school districts in Crawford, Morrow and Richland counties." },
  { name: "North Central Ohio Educational Service Center", category: "Education", subcategory: "ESC", url: "https://northcentralohioesc.schoolinsites.com/memberschooldistricts", description: "Educational service center with campuses in Tiffin, Marion and Mansfield whose member districts in Crawford County are Colonel Crawford Local Schools and Wynford Local Schools." },
  { name: "North Central State College - Crawford Success Center", category: "Education", subcategory: "University", url: "https://ncstatecollege.edu/locations/", description: "Locations page of North Central State College, whose Mansfield-based college lists its Crawford Success Center at 130 North Walnut, Bucyrus." },
  { name: "St. Joseph Catholic School", category: "Education", subcategory: "Private School", url: "http://sjsaints.org/", description: "Catholic school described as the school of Holy Trinity, Bucyrus and St. Joseph, Galion, with a campus in Galion." },
  { name: "OHCAC Head Start", category: "Education", subcategory: "Preschool", url: "https://www.ohcacheadstart.org", description: "Head Start and Early Head Start program of Ohio Heartland Community Action Commission serving Crawford, Marion, Morrow and Richland counties, with a center-based Early Head Start option in Bucyrus." },
  // ---------- Health ----------
  { name: "Avita Health System", category: "Health", subcategory: "Hospital", url: "https://avitahealth.org", description: "Nonprofit health system in North Central Ohio operating Bucyrus Hospital, Galion Hospital and Ontario Hospital, plus a pharmacy in Crestline and an orthopedic and therapy center in Bucyrus." },
  { name: "Avita Health System - Bucyrus Hospital and Galion Hospital (Locations)", category: "Health", subcategory: "Hospital", url: "https://avitahealth.org/locations/", description: "Avita locations page listing Bucyrus Hospital at 629 N Sandusky Ave., Galion Hospital at 269 Portland Way S. and medical offices in Bucyrus, Galion, Crestline and New Washington." },
  { name: "Avita Home Health, Hospice and Palliative Care", category: "Health", subcategory: "Hospice", url: "https://avitahealth.org/services/oncology/home-health-hospice-palliative-care/", description: "Avita Health System page for home health, hospice and palliative care, listing oncology locations at 629 N. Sandusky Ave., Bucyrus and 269 Portland Way S., Galion." },
  { name: "Crawford County Public Health", category: "Health", subcategory: "Public Health", url: "https://crawfordhealth.org", description: "County health department at 1520 Isaac Beal Rd., Bucyrus, serving all of Crawford County with food safety inspections, immunizations, WIC, Help Me Grow, environmental programs and emergency preparedness." },
  { name: "Crawford-Marion ADAMH Board", category: "Health", subcategory: "Mental Health", url: "https://cmadamhoh.gov/", description: "Alcohol, drug addiction and mental health board for Crawford and Marion counties that plans, funds, coordinates and evaluates local services and lists crisis and treatment resources." },
  { name: "Third Street Family Health Services - Bucyrus Health & Wellness Center", category: "Health", subcategory: "Clinic", url: "https://thirdstreetfamily.org/campuses/bucyrus-health-and-wellness-center", description: "Third Street Family health center at 2458 Stetzer Road, Bucyrus, offering primary care and medication assisted treatment." },
  { name: "Community Counseling - Bucyrus (Third Street Family)", category: "Health", subcategory: "Mental Health", url: "https://thirdstreetfamily.org/campuses/community-counseling-bucyrus", description: "Third Street Family counseling center at 2458 Stetzer Rd., Bucyrus, offering case management, psychiatry, behavioral health and medication assisted treatment." },
  { name: "OhioHealth Physician Group - Crawford County", category: "Health", subcategory: "Clinic", url: "https://www.ohiohealth.com/locations/crawford-county", description: "OhioHealth page listing primary care offices at 745 Carter Drive, Galion and 725 North Sandusky Avenue, Bucyrus, along with urgent care and specialty services in the county." },
  // ---------- Business & Economy ----------
  { name: "Crawford County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.crawfordcountychamber.org/", description: "Countywide chamber of commerce with offices at 117 E. Mansfield St., Bucyrus, and 138 Harding Way W., Galion, serving businesses in Bucyrus, Galion, Crestline and the rest of Crawford County with networking events, workshops, a member directory, a Safety Council and an energy program." },
  { name: "Crawford Partnership for Education & Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://crawfordpartnership.org/", description: "Nonprofit at 117 E. Mansfield St., Bucyrus, that works on economic, community and workforce development in Crawford County, including the Crawford Business Exchange, the county Transportation Improvement District and the county's DORAs." },
  { name: "OhioMeansJobs Crawford County", category: "Business & Economy", subcategory: "Workforce", url: "https://ohiomeansjobs.ohio.gov/job-seekers/find-a-job/local-help/crawford-county", description: "State OhioMeansJobs listing for the Crawford County job center at 225 E. Mary St., Bucyrus." },
  { name: "OSU Extension Crawford County", category: "Business & Economy", subcategory: "Agriculture", url: "https://crawford.osu.edu/", description: "Ohio State University Extension office at 808 Whetstone St., Bucyrus, offering 4-H youth programs, livestock and agriculture education, pesticide and nutrient management training and Master Gardener programs." },
  { name: "Crawford County Farm Bureau", category: "Business & Economy", subcategory: "Agriculture", url: "https://ofbf.org/community/counties/crawford/", description: "Ohio Farm Bureau page for the Crawford County Farm Bureau, whose office is at 1495 W. Longview Ave., Suite 203, Mansfield, covering member resources, a county scholarship and Crawford County Fair sponsorships." },
  { name: "Crestline Community Improvement Corporation", category: "Business & Economy", subcategory: "Economic Development", url: "https://crestlineoh.com/crestline-community-improvement-corporation-inc/", description: "Nonprofit community improvement corporation, described on the Village of Crestline site, that promotes industrial, commercial and civic development in Crestline through low-interest loans, property acquisition, land banking and grant administration." },
  // ---------- Community & Social ----------
  { name: "Community Foundation for Crawford County", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.cfcrawford.org/", description: "Community foundation at 254 E. Mansfield St., Bucyrus, that provides financial assistance to Crawford County nonprofits and manages scholarships, school and agency endowments and donor funds." },
  { name: "United Way of North Central Ohio", category: "Community & Social", subcategory: "Nonprofit", url: "https://unitedwaynco.org/", description: "United Way serving Crawford, Marion, Morrow, Seneca and Wyandot counties from offices in Marion and Tiffin, with programs for children, families and communities, the 211 help line and the Imagination Library." },
  { name: "Ohio Heartland Community Action Commission", category: "Community & Social", subcategory: "Nonprofit", url: "http://www.ohcac.org/", description: "Community action agency at 372 E. Center St., Marion, serving Crawford, Marion and Morrow counties with HEAP and other utility assistance, weatherization, Head Start and food pantry resources." },
  { name: "Crawford County Council on Aging", category: "Community & Social", subcategory: "Seniors", url: "https://crawfordcountyaging.com/", description: "Senior services agency at 200 S. Spring St., Bucyrus, with services, activities, meal menus, a newsletter and volunteer opportunities for older adults." },
  { name: "Second Harvest Food Bank of North Central Ohio", category: "Community & Social", subcategory: "Food & Assistance", url: "https://secondharvestfoodbank.org/", description: "Regional food bank at 5510 Baumhart Rd., Lorain, serving Crawford, Erie, Huron and Lorain counties." },
  { name: "Habitat for Humanity of Richland & Crawford Counties", category: "Community & Social", subcategory: "Housing", url: "https://www.habitatofrcc.org/", description: "Habitat for Humanity affiliate at 99 Park Ave. W., Mansfield, providing affordable housing in Richland and Crawford counties." },
  { name: "Turning Point", category: "Community & Social", subcategory: "Nonprofit", url: "https://turningpoint6.org/about-us/", description: "Domestic violence agency based in Marion that serves Crawford, Delaware, Marion, Morrow, Union and Wyandot counties with shelter, victim rights advocacy, teen advocacy and counseling." },
  { name: "Bucyrus Area YMCA", category: "Community & Social", subcategory: "YMCA", url: "https://www.ymca.org/node/7607", description: "YMCA of the USA location page for the YMCA in Bucyrus at 1655 E. Southern Ave." },
  { name: "The Salvation Army Bucyrus Corps", category: "Community & Social", subcategory: "Food & Assistance", url: "https://www.salvationarmyusa.org/oh/bucyrus/e-rensselaer-st-corps/", description: "Salvation Army corps at 717 Rogers St., Bucyrus, with a food pantry by appointment, a weekly community meal, youth music and a kinship caregiver group." },
  // ---------- Recreation & Tourism ----------
  { name: "Bucyrus Tourism & Visitors Bureau (Visit Bucyrus)", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://visitbucyrus.org/", description: "Visitors bureau at 100 W. Rensselaer St., Suite B, Bucyrus, listing places to eat and drink, things to do, lodging and events in Bucyrus." },
  { name: "Bucyrus Bratwurst Festival", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.bucyrusbratwurstfestival.com/", description: "Annual festival held in downtown Bucyrus on the third weekend in August." },
  { name: "Crawford County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://crawfordcofair.com/", description: "Website of the Crawford County Fair, with fair dates, the fair book, entry forms, attractions, rentals and Agricultural Society membership tickets." },
  { name: "Crestline Harvest Festival", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.crestlineharvestfestival.org/", description: "Community harvest festival in Crestline with a parade, pageants, bands, a craft show, a car and motorcycle show, rides and a 5K color run." },
  { name: "Crawford Park District", category: "Recreation & Tourism", subcategory: "Parks", url: "https://crawfordparkdistrict.org/about.html", description: "County park district headquartered at 2401 SR 598, Crestline, managing Lowe-Volk Park, Sears Woods State Nature Preserve, Unger Park, Heckert Nature Preserve and other natural areas, plus the Colonel Crawford Bikeway." },
  { name: "Lowe-Volk Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://crawfordparkdistrict.org/lowe-volk-park.html", description: "Crawford Park District park at 2401 SR 598 near Crestline, at the headwaters of the Sandusky River, with trails, a boardwalk, a fishing dock, a nature center and a nature playscape." },
  { name: "Sears Woods State Nature Preserve", category: "Recreation & Tourism", subcategory: "Parks", url: "https://crawfordparkdistrict.org/sears-woods-state-nature-preserve.html", description: "State nature preserve at 1486 Mt. Zion Rd., Bucyrus, jointly owned by ODNR and the Crawford Park District, with a 1-mile loop trail through upland forest and bluffs above the Sandusky River." },
  { name: "Galion History Center", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.galionhistory.com/", description: "Historical organization in Galion operating Brownella Cottage, Historic Grace Church, the Koppe Skinner House, the Brownella Carriage House Museum and the Historic Union Schoolyard, with tours and events." },
  { name: "Bucyrus Historical Society", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.bucyrushistoricalsociety.org/", description: "Historical society that preserves the history of Bucyrus and adjacent townships and operates the Scroggs House Museum at 202 S. Walnut St., Bucyrus." },
  { name: "Crawford County Art Center", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.crawfordcountyartcenter.com/", description: "Art center run by the Crawford County Arts Council at 117 N. Sandusky Ave., Bucyrus, with a gallery, classes, open studio and art programs in Galion, Crestline and New Washington." },
  { name: "Galion Community Theatre", category: "Recreation & Tourism", subcategory: "Arts", url: "https://galiontheatre.org/", description: "Community theatre at 127 Harding Way West, Galion, producing dramas, musicals and other community productions." },
  { name: "Unger Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.crawfordparkdistrict.org/unger-park.html", description: "Crawford Park District park at 1303 Bucyrus-Nevada Rd., Bucyrus, with restored prairie, bottomland woods and about 3 miles of trails along the Sandusky River that connect to the city's Aumiller Park." },
  { name: "Heckert Nature Preserve", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.crawfordparkdistrict.org/heckert-nature-preserve.html", description: "Crawford Park District preserve at 1601 SR 19, Bucyrus, midway between Bucyrus and Galion, with a one-mile trail through upland forest, river bottom and old field habitat." },
  { name: "Daughmer Prairie Savannah State Nature Preserve", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.crawfordparkdistrict.org/daughmer-prairie-savannah-state-nature-preserve.html", description: "State nature preserve at 786 Marion-Melmore Rd., Bucyrus, managed for public use by the Crawford Park District, protecting a remnant of the Sandusky Plains tallgrass prairie and oak savannah." },
  { name: "Barb Dolch Memorial Bikeway", category: "Recreation & Tourism", subcategory: "Trails", url: "https://www.crawfordparkdistrict.org/bike-way.html", description: "Crawford Park District page for the bikeway formerly called the Colonel Crawford Bikeway, with county maps and turn-by-turn directions." },
  // ---------- News & Media ----------
  { name: "Crawford County Now", category: "News & Media", subcategory: "Online News", url: "https://crawfordcountynow.com/", description: "Local news, weather and events site for Bucyrus and Crawford County published by the Bucyrus Radio Group, 403 E. Rensselaer St., Bucyrus (Saga Communications)." },
  { name: "WQEL 92.7 FM", category: "News & Media", subcategory: "Radio", url: "https://wqel.com/", description: "Q92.7 WQEL, a Saga Communications radio station of the Bucyrus Radio Group, with local news and community stories." },
  { name: "WBCO 1540 AM", category: "News & Media", subcategory: "Radio", url: "https://wbco.com/", description: "AM 1540 WBCO, a Saga Communications radio station of the Bucyrus Radio Group, with local news and community stories." },
  { name: "Galion Inquirer", category: "News & Media", subcategory: "Newspaper", url: "https://www.galioninquirer.com/", description: "Newspaper covering Galion and Crawford County, now published by HD Media." },
  { name: "Crawford Source (Richland Source)", category: "News & Media", subcategory: "Online News", url: "https://www.richlandsource.com/category/crawford-source/", description: "Crawford County section of the Mansfield-based Richland Source news site, with stories from Bucyrus, Galion, Crestline and county schools and organizations." },
  { name: "Bucyrus Telegraph-Forum", category: "News & Media", subcategory: "Newspaper", url: "https://www.bucyrustelegraphforum.com/", description: "Bucyrus newspaper covering Crawford County news, sports and obituaries." },
];
