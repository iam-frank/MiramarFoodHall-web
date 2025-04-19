export const COLORS = {
  primary: {
    navy: '#0054AA',
    blue: '#0677BA',
    lightBlue: '#0094D4'
  },
  secondary: {
    teal: '#00A9DD',
    periwinkle: '#7BADD7'
  },
  background: {
    light: '#E8F1F8',
    lighter: '#E9F6FB'
  },
  accent: {
    aqua: '#6FCCEA',
    sky: '#C7EBF8',
    cloud: '#CADEEF'
  }
};

export const CUISINES = [
  "All",
  "Mexican", 
  "Italian", 
  "Asian",
  "Seafood",
  "Desserts",
  "Bars"
];

export const GRAND_OPENING_DATE = new Date("July 1, 2025 11:00:00").getTime();

export const NAVIGATION_LINKS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "VENDORS", path: "/vendors", dropdown: true, items: CUISINES },
  { name: "VISIT", path: "/visit" },
  { name: "EVENTS", path: "/events" },
  { name: "CONTACT", path: "/contact" }
];

export const FOOTER_INFO = {
  address: "123 Oceanfront Drive, San Clemente, CA 92672",
  phone: "(949) 555-1234",
  email: "info@miramarfoodhall.com",
  hours: [
    { days: "Monday - Thursday", time: "11am - 9pm" },
    { days: "Friday - Saturday", time: "11am - 11pm" },
    { days: "Sunday", time: "11am - 8pm" }
  ],
  socialLinks: [
    { name: "Facebook", url: "#", icon: "facebook-f" },
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "Twitter", url: "#", icon: "twitter" },
    { name: "Yelp", url: "#", icon: "yelp" }
  ]
};
