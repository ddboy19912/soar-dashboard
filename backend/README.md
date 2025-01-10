# Soar Dashboard Backend

JSON Server-based API for the Soar Dashboard application, providing endpoints for user management, financial transactions, and analytics.

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

## API Endpoints

### Users
- `GET /users` - Retrieve all users
- `GET /users/:id` - Retrieve specific user by ID
- `PATCH /users/:id` - Update user information

### Financial Data
- `GET /cards` - Retrieve all cards
- `GET /transactions` - Retrieve all transactions
- `GET /expenseCategories` - Retrieve expense categories
- `GET /dailyExpenses` - Retrieve daily expenses

### Analytics
- `GET /monthlyBalances` - Retrieve monthly balance data

### Contacts
- `GET /contacts` - Retrieve user contacts

## Environment Configuration

Create `.env` in the backend directory:

```env
PORT=3001
NODE_ENV=development
```

## Tech Stack

- **Server:** JSON Server for mock API
- **Language:** TypeScript
- **Runtime:** Node.js
- **CORS:** Enabled for cross-origin requests during development

## Project Structure

```
api/
├── index.ts    # Server entry point and configuration
└── db.json     # JSON database file
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm start` - Start the production server
- `npm run build` - Build TypeScript files (not required for deployment)

## Deployment

The backend is deployed on Vercel:

- **Production URL:** [https://soar-dashboard-backend.vercel.app](https://soar-dashboard-backend.vercel.app)
- **Preview Deployments:** Automatically generated for each Pull Request

## Important Notes

### Development Considerations
- The server uses an in-memory JSON database
- All changes are temporary and reset on server restart
- Perfect for prototyping and development

### Production Limitations
- Vercel's filesystem is read-only
- Data persistence is not available
- Good enough for Mock purposes
- **NB: Because of this limitations, the backend is deployed on a separate Vercel project (https://soar-dashboard-backend.vercel.app)**

### Security Considerations
- No authentication implemented
- CORS is enabled for development
- Not suitable for sensitive data in current form

## API Testing

You can test the API endpoints using tools like:
- Postman
- cURL
- Thunder Client
- Frontend application

Example cURL request:
```bash
curl https://soar-dashboard-backend.vercel.app/users
```