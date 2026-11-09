/* ============================================================
   events.js : YOUR CONTENT LIVES HERE

   This is the only file you need to edit for your own content:
   events, photos, camera info, About text, Contact links.

   When I send you an updated site, I will only give you a new
   index.html. You replace index.html and leave THIS file alone,
   so nothing you typed here is ever wiped.

   Three things in this file:
     SITE         your name, logo, About text and Contact links
     SETTINGS     a few speed / size knobs
     COLLECTIONS  your events (the big list further down)
   ============================================================ */


/* ---------- SITE ---------- */
const SITE = {
  name: "Allwood Archives",
  logo: "images/allwood.png",      // your logo file, uploaded to the images folder

  about: [
    "archival location for any and all products.",
    "Find what you love, and let it destroy you."
  ],

  contact: {
    email: "aidan.allwood@gmail.com",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/4llwood/" },
      { label: "Letterboxd",  url: "https://letterboxd.com/allwoody/" },
      { label: "Youtube",  url: "https://www.youtube.com/@allwoody" }
      // add more like:  { label: "YouTube", url: "https://youtube.com/..." },
    ]
  }
};


/* ---------- SETTINGS ---------- */
const SETTINGS = {
  marqueeSpeed: 40,    // how fast the Home row drifts, pixels per second (lower = slower)
  peekDelay: 2500,     // how long the cursor rests on a photo before it goes fullscreen (1000 = 1 second)
  globeSpin: 4,        // how fast the globe turns by itself, degrees per second (0 = it stays still)
  logoWidth: 150       // width of your logo in the top left, in pixels
};


/* ============================================================
   COLLECTIONS : your events

   Each event becomes:
     - one cover photo in the Home marquee
     - a link in the left menu under PROJECTS
     - its own page of photos
     - a pin on the Globe

   EVENT FIELDS
     id           short lowercase name, no spaces
     title        name shown on the site
     date         shown on the page and in the info window
     location     place name shown on the page and on the globe pin
     coords       [latitude, longitude] for the globe pin.
                  Easy way to get it: in Google Maps, right-click the
                  spot and click the two numbers at the top of the menu
                  (they copy). Paste them as  coords: [40.7128, -74.0060]
                  Latitude first. Minus = south / west.
                  Events with the SAME coords share one pin, and the
                  pin's popup becomes a little menu of those events.
                  An event with no coords is just left off the globe.
     description  a sentence or two about the event
     latest       put  latest: true,  on ONE event and the "Latest" link
                  under Home opens it. (If none is marked, the last
                  event in the list is used.)
     layout       how the photos are arranged:
                    "grid"    3 across, all cropped to the same shape
                    "square"  4 across, square tiles
                    "wide"    2 across, large widescreen tiles
                    "masonry" 3 columns, photos keep their own shape
     gear         camera + lens used for the whole event (optional).
                  It shows in the info window for every photo, unless
                  a photo has its own camera or lens.
     cover        the single photo shown on Home.
                  Leave "" to use the first photo in the list.
     photos       the photos, in the order you want them on the grid.

   PHOTO FIELDS (all optional except src)
     A photo can be just a path:      "images/event-one/01.jpg"
     or a path plus info:
       { src: "images/event-one/01.jpg",
         caption: "Opening night",
         focal: "35mm", aperture: "f/2.8", shutter: "1/250s", iso: "400",
         camera: "...", lens: "..." }          <- only if different from gear
     Anything you leave out is simply hidden in the info window.
     Leave src as "" to show a grey placeholder.

   Put your images in the "images" folder in your repo, one
   sub-folder per event (images/event-one/, images/event-two/ ...).

   NOTE: the places and coordinates below are just examples so the
   globe has something on it. Replace them with your real ones.
   Event One and Event Two share a location on purpose, to show
   how a pin with several events looks.
   ============================================================ */
const COLLECTIONS = [
  {
    id: "event-one",
    title: "Event One",
    date: "January 2026",
    location: "New York, NY",
    coords: [40.7128, -74.0060],
    description: "A short description of this event. What it was, who was there, what you shot.",
    layout: "grid",
    gear: { camera: "Camera model", lens: "Lens" },
    cover: "",
    photos: [
      { src: "", caption: "Optional note about this photo", focal: "35mm", aperture: "f/2.8", shutter: "1/250s", iso: "400" },
      { src: "", focal: "50mm", aperture: "f/1.8", shutter: "1/500s", iso: "200" },
      { src: "", focal: "35mm", aperture: "f/4", shutter: "1/125s", iso: "800" },
      "", "", "", "", "", ""
    ]
  },
  {
    id: "event-two",
    title: "Event Two",
    date: "February 2026",
    location: "New York, NY",
    coords: [40.7128, -74.0060],
    description: "A short description of this event.",
    layout: "masonry",
    gear: { camera: "Camera model", lens: "Lens" },
    cover: "",
    photos: ["", "", "", "", "", "", "", ""]
  },
  {
    id: "event-three",
    title: "Event Three",
    date: "March 2026",
    location: "London, United Kingdom",
    coords: [51.5074, -0.1278],
    description: "A short description of this event.",
    layout: "square",
    gear: { camera: "Camera model", lens: "Lens" },
    cover: "",
    photos: ["", "", "", "", "", "", "", ""]
  },
  {
    id: "event-four",
    title: "Event Four",
    date: "April 2026",
    location: "Tokyo, Japan",
    coords: [35.6762, 139.6503],
    description: "A short description of this event.",
    layout: "wide",
    gear: { camera: "Camera model", lens: "Lens" },
    cover: "",
    photos: ["", "", "", "", "", ""]
  },
  {
    id: "event-five",
    title: "Event Five",
    date: "May 2026",
    location: "Los Angeles, CA",
    coords: [34.0522, -118.2437],
    latest: true,
    description: "A short description of this event.",
    layout: "grid",
    gear: { camera: "Camera model", lens: "Lens" },
    cover: "",
    photos: ["", "", "", "", "", ""]
  }
];
