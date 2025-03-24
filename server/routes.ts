import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "All fields are required" 
        });
      }
      
      // In a real app, this would send an email or store in a database
      // For now, we'll just return success
      console.log("Contact form submission:", { name, email, subject, message });
      
      return res.status(200).json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Error handling contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Server error processing your request" 
      });
    }
  });

  // Serve the resume for download
  app.get("/resume.pdf", (req: Request, res: Response) => {
    const resumePath = path.join(__dirname, "..", "public", "resume.pdf");
    
    if (fs.existsSync(resumePath)) {
      return res.sendFile(resumePath);
    } else {
      console.error("Resume PDF not found at path:", resumePath);
      return res.status(404).send("Resume PDF not found");
    }
  });
  
  // Serve uploaded profile image
  app.get("/sabari-profile.jpg", (req: Request, res: Response) => {
    const imagePath = path.join(__dirname, "..", "public", "sabari-profile.jpg");
    
    if (fs.existsSync(imagePath)) {
      return res.sendFile(imagePath);
    } else {
      console.error("Profile image not found at path:", imagePath);
      return res.status(404).send("Profile image not found");
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
