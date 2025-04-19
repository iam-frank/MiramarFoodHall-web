import { 
  vendors, type Vendor, type InsertVendor,
  events, type Event, type InsertEvent,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  newsletterSubscriptions, type NewsletterSubscription, type InsertNewsletterSubscription
} from "@shared/schema";

export interface IStorage {
  // Vendor methods
  getAllVendors(): Promise<Vendor[]>;
  getVendorById(id: number): Promise<Vendor | undefined>;
  getVendorsByCuisine(cuisineType: string): Promise<Vendor[]>;
  createVendor(vendor: InsertVendor): Promise<Vendor>;

  // Event methods
  getAllEvents(): Promise<Event[]>;
  getEventById(id: number): Promise<Event | undefined>;
  getFeaturedEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;

  // Contact form methods
  submitContactForm(submission: InsertContactSubmission): Promise<ContactSubmission>;

  // Newsletter methods
  subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
}

export class MemStorage implements IStorage {
  private vendors: Map<number, Vendor>;
  private events: Map<number, Event>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private vendorId: number;
  private eventId: number;
  private contactSubmissionId: number;
  private newsletterSubscriptionId: number;

  constructor() {
    this.vendors = new Map();
    this.events = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    this.vendorId = 1;
    this.eventId = 1;
    this.contactSubmissionId = 1;
    this.newsletterSubscriptionId = 1;

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Initialize vendors
    const sampleVendors: InsertVendor[] = [
      {
        name: "Pacific Taco",
        description: "Fresh Baja-style tacos featuring locally caught seafood and traditional recipes with a California twist.",
        logoUrl: "",
        websiteUrl: "https://example.com/pacifictaco",
        cuisineType: "Mexican",
        locationNumber: 1,
        floorPlanX: 25,
        floorPlanY: 25,
      },
      {
        name: "Coastal Pizza",
        description: "Wood-fired artisan pizzas made with locally sourced ingredients and traditional Italian techniques.",
        logoUrl: "",
        websiteUrl: "https://example.com/coastalpizza",
        cuisineType: "Italian",
        locationNumber: 2,
        floorPlanX: 50,
        floorPlanY: 33,
      },
      {
        name: "Sunset Bar",
        description: "Craft cocktails and local brews with a perfect view of San Clemente's famous sunsets over the Pacific.",
        logoUrl: "",
        websiteUrl: "https://example.com/sunsetbar",
        cuisineType: "Bars",
        locationNumber: 3,
        floorPlanX: 75,
        floorPlanY: 25,
      },
      {
        name: "Miso Ramen",
        description: "Authentic Japanese ramen with house-made noodles and broths simmered for 48 hours.",
        logoUrl: "",
        websiteUrl: "https://example.com/misoramen",
        cuisineType: "Asian",
        locationNumber: 4,
        floorPlanX: 30,
        floorPlanY: 60,
      },
      {
        name: "Sweet Waves",
        description: "Handcrafted gelato and desserts inspired by California's fresh fruits and international flavors.",
        logoUrl: "",
        websiteUrl: "https://example.com/sweetwaves",
        cuisineType: "Desserts",
        locationNumber: 5,
        floorPlanX: 50,
        floorPlanY: 70,
      },
      {
        name: "Fresh Catch",
        description: "Sustainable seafood sourced directly from local fishermen, prepared with simple, fresh ingredients.",
        logoUrl: "",
        websiteUrl: "https://example.com/freshcatch",
        cuisineType: "Seafood",
        locationNumber: 6,
        floorPlanX: 70,
        floorPlanY: 60,
      }
    ];

    sampleVendors.forEach(vendor => this.createVendor(vendor));

    // Initialize events
    const nextYear = new Date().getFullYear() + 1;
    const sampleEvents: InsertEvent[] = [
      {
        name: "Grand Opening Celebration",
        description: "Join us for the grand opening of Miramar Food Hall! Experience all 15 vendors, enjoy live music, special tastings, activities for kids, and more.",
        date: new Date(`July 1, ${nextYear}`),
        startTime: "11:00 AM",
        endTime: "10:00 PM",
        location: "Entire Food Hall",
        featured: true,
        imageUrl: "",
      },
      {
        name: "Live Music - The Waves",
        description: "Enjoy live music from local band The Waves while dining at our oceanfront patio.",
        date: new Date(`July 5, ${nextYear}`),
        startTime: "6:00 PM",
        endTime: "9:00 PM",
        location: "Oceanfront Patio",
        featured: false,
        imageUrl: "",
      },
      {
        name: "Taco Tuesday Special",
        description: "Special discounts on all tacos at Pacific Taco every Tuesday.",
        date: new Date(`July 8, ${nextYear}`),
        startTime: "5:00 PM",
        endTime: "9:00 PM",
        location: "Pacific Taco",
        featured: false,
        imageUrl: "",
      },
      {
        name: "Sunset Cocktail Tasting",
        description: "Sample our signature cocktails while enjoying the beautiful San Clemente sunset.",
        date: new Date(`July 12, ${nextYear}`),
        startTime: "7:00 PM",
        endTime: "9:00 PM",
        location: "Sunset Bar",
        featured: false,
        imageUrl: "",
      }
    ];

    sampleEvents.forEach(event => this.createEvent(event));
  }

  // Vendor methods
  async getAllVendors(): Promise<Vendor[]> {
    return Array.from(this.vendors.values());
  }

  async getVendorById(id: number): Promise<Vendor | undefined> {
    return this.vendors.get(id);
  }

  async getVendorsByCuisine(cuisineType: string): Promise<Vendor[]> {
    if (cuisineType === "All") {
      return this.getAllVendors();
    }
    return Array.from(this.vendors.values()).filter(
      vendor => vendor.cuisineType === cuisineType
    );
  }

  async createVendor(vendor: InsertVendor): Promise<Vendor> {
    const id = this.vendorId++;
    const newVendor: Vendor = { ...vendor, id };
    this.vendors.set(id, newVendor);
    return newVendor;
  }

  // Event methods
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEventById(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async getFeaturedEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).filter(
      event => event.featured
    );
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const id = this.eventId++;
    const newEvent: Event = { ...event, id };
    this.events.set(id, newEvent);
    return newEvent;
  }

  // Contact form methods
  async submitContactForm(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionId++;
    const newSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      submittedAt: new Date() 
    };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  // Newsletter methods
  async subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const emailExists = Array.from(this.newsletterSubscriptions.values()).some(
      sub => sub.email === subscription.email
    );

    if (emailExists) {
      throw new Error("Email already subscribed");
    }

    const id = this.newsletterSubscriptionId++;
    const newSubscription: NewsletterSubscription = { 
      ...subscription, 
      id, 
      subscribedAt: new Date() 
    };
    this.newsletterSubscriptions.set(id, newSubscription);
    return newSubscription;
  }
}

export const storage = new MemStorage();
