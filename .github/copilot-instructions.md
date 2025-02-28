# The Crepery Egypt - Food Delivery App

## Overview

Build a food delivery app for a crepe restaurant.

## Tech Stack

- Use Bun.js for the backend.
- Use Prisma as the ORM with SQLite in development and PostgreSQL in production.
- Define the database schema in `prisma/schema.prisma`.
- Implement the API with tRPC in `server/index.ts`.
- Use React.js with Vite for the frontend.
- Style with Tailwind CSS and ShadCN.

## Core Features

### 1. Ordering System

- Browse Menu: Users can view restaurant menus with categories, images, and descriptions.
- Customization: Add-ons, ingredient choices, and special instructions.
- Multiple Payment Options: Cash on delivery, credit/debit cards, and digital wallets.
- Scheduled Orders: Allow users to place orders for future delivery.

### 2. Discounts & Promotions

- Percentage-Based Discounts: On the total bill or specific items.
- Promo Codes & Coupons: Users can apply discount codes during checkout.
- Loyalty Program: Points-based system for discounts on future purchases.
- Happy Hours & Limited-Time Deals: Special discounts during certain hours.

### 3. Order Tracking & Status Updates

- Live Order Status: Track in real-time (Processing, Cooking, Out for Delivery, Delivered).
- Estimated Delivery Time: AI-powered time predictions based on traffic and restaurant queue.
- Delivery Partner Tracking: Real-time GPS tracking of the delivery driver.
- Notifications: Push, SMS, or email updates for order progress.
