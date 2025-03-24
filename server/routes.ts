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
    // For demonstration purposes, we'll check if the resume exists and serve it
    // In a real implementation, you'd have the actual file
    const resumePath = path.join(__dirname, "..", "public", "resume.pdf");
    
    // If resume doesn't exist (which it won't in the demo), send a mock response
    if (!fs.existsSync(resumePath)) {
      return res.status(200).json({
        message: "Resume download endpoint - this would serve the actual PDF file in production"
      });
    }
    
    // In a real implementation, this would serve the actual file
    res.sendFile(resumePath);
  });
  
  // Serve uploaded profile image (would be an actual image in production)
  app.get("/sabari-profile.jpg", (req: Request, res: Response) => {
    // For demonstration, we'll return a placeholder image or message
    const imagePath = path.join(__dirname, "..", "public", "sabari-profile.jpg");
    
    // If image doesn't exist, send a mock response
    if (!fs.existsSync(imagePath)) {
      return res.status(200).json({
        message: "Image endpoint - this would serve the actual profile image in production"
      });
    }
    
    // In a real implementation, this would serve the actual file
    res.sendFile(imagePath);
  });

  const httpServer = createServer(app);
  return httpServer;
}
