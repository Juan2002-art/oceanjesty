import { drizzle } from "drizzle-orm/neon-http";
import { bookings, messages, reviews, type InsertBooking, type Booking, type InsertMessage, type Message, type InsertReview, type Review } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL || "");

export interface IStorage {
  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  getBookingById(id: string): Promise<Booking | undefined>;
  updateBookingStatus(id: string, status: string): Promise<Booking | undefined>;
  
  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
  
  // Reviews
  createReview(review: InsertReview): Promise<Review>;
  getReviews(): Promise<Review[]>;
}

export class DatabaseStorage implements IStorage {
  // Bookings
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const [result] = await db.insert(bookings).values(booking).returning();
    return result;
  }

  async getBookings(): Promise<Booking[]> {
    return db.select().from(bookings).orderBy(desc(bookings.createdAt));
  }

  async getBookingById(id: string): Promise<Booking | undefined> {
    const [result] = await db.select().from(bookings).where(eq(bookings.id, id));
    return result;
  }

  async updateBookingStatus(id: string, status: string): Promise<Booking | undefined> {
    const [result] = await db.update(bookings).set({ status }).where(eq(bookings.id, id)).returning();
    return result;
  }

  // Messages
  async createMessage(message: InsertMessage): Promise<Message> {
    const [result] = await db.insert(messages).values(message).returning();
    return result;
  }

  async getMessages(): Promise<Message[]> {
    return db.select().from(messages).orderBy(desc(messages.createdAt));
  }

  // Reviews
  async createReview(review: InsertReview): Promise<Review> {
    const [result] = await db.insert(reviews).values(review).returning();
    return result;
  }

  async getReviews(): Promise<Review[]> {
    return db.select().from(reviews).orderBy(desc(reviews.createdAt));
  }
}

export const storage = new DatabaseStorage();
