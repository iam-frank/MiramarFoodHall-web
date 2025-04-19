import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { 
  insertContactSubmissionSchema, 
  insertNewsletterSubscriptionSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  const apiRouter = express.Router();

  // Get all vendors
  apiRouter.get("/vendors", async (req, res) => {
    try {
      const vendors = await storage.getAllVendors();
      res.json(vendors);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch vendors" });
    }
  });

  // Get vendors by cuisine type
  apiRouter.get("/vendors/cuisine/:cuisineType", async (req, res) => {
    try {
      const { cuisineType } = req.params;
      const vendors = await storage.getVendorsByCuisine(cuisineType);
      res.json(vendors);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch vendors by cuisine" });
    }
  });

  // Get vendor by ID
  apiRouter.get("/vendors/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid vendor ID" });
      }
      
      const vendor = await storage.getVendorById(id);
      if (!vendor) {
        return res.status(404).json({ error: "Vendor not found" });
      }
      
      res.json(vendor);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch vendor" });
    }
  });

  // Get all events
  apiRouter.get("/events", async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });

  // Get event by ID
  apiRouter.get("/events/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid event ID" });
      }
      
      const event = await storage.getEventById(id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch event" });
    }
  });

  // Get featured events
  apiRouter.get("/events/featured", async (req, res) => {
    try {
      const events = await storage.getFeaturedEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured events" });
    }
  });

  // Submit contact form
  apiRouter.post("/contact", async (req, res) => {
    try {
      const formData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.submitContactForm(formData);
      res.status(201).json({ 
        success: true, 
        message: "Form submitted successfully",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Invalid form data", 
          details: error.errors 
        });
      }
      res.status(500).json({ error: "Failed to submit form" });
    }
  });

  // Subscribe to newsletter
  apiRouter.post("/newsletter", async (req, res) => {
    try {
      const subscriptionData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.subscribeToNewsletter(subscriptionData);
      res.status(201).json({ 
        success: true, 
        message: "Subscribed to newsletter successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Invalid subscription data", 
          details: error.errors 
        });
      }
      if (error instanceof Error && error.message === "Email already subscribed") {
        return res.status(409).json({ error: "Email already subscribed" });
      }
      res.status(500).json({ error: "Failed to subscribe to newsletter" });
    }
  });

  // Register API routes
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
