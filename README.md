# Soar Dashboard

A modern financial dashboard application built with React and JSON Server.

## Overview

Soar Dashboard is a comprehensive financial management platform featuring transaction tracking, card management, and detailed financial analytics. The application is built with modern web technologies and follows responsive design principles.

## Features

- 📊 Interactive financial dashboard with real-time updates
- 📈 Detailed transaction tracking and analysis
- 📱 Fully responsive design for all devices
- 💌 Forms built with react-hook-form and validation with zod

## Technology Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Tanstack Query for data fetching
- Shadcn UI for component library
- Vite as build tool
- Zustand for state management

### Backend
- JSON Server for API mocking
- Express.js
- TypeScript
- Node.js

## Project Structure

```
soar-dashboard/
├── ui/               # React application
│   ├── src/          # Source files
│   └── README.md     # Frontend documentation
├── backend/          # JSON Server API
│   ├── api/          # API routes
│   └── README.md     # Backend documentation
├── README.md         # Root README
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ddboy19912/soar-dashboard.git
   cd soar-dashboard
   ```

2. Install dependencies:
   ```bash
   # Root dependencies
   npm install

   # Frontend dependencies
   cd ui
   npm install

   # Backend dependencies
   cd ../backend
   npm install
   ```

### Running the Application

- Run both frontend and backend:
  ```bash
  npm run dev
  ```

- Run frontend only:
  ```bash
  npm run dev:ui
  ```

- Run backend only:
  ```bash
  npm run dev:backend
  ```

## Environment Configuration

### Frontend (.env.development, .env.production)
```env
# Development
VITE_API_URL=http://localhost:3001

# Production
VITE_API_URL=https://soar-dashboard-backend.vercel.app
```

### Backend (.env)
```env
PORT=3001
NODE_ENV=development
```

## Deployment

### Frontend
- Platform: Vercel
- Production URL: [https://soar-dashboard-nu.vercel.app](https://soar-dashboard-nu.vercel.app)

### Backend
- Platform: Vercel
- Production URL: [https://soar-dashboard-backend.vercel.app](https://soar-dashboard-backend.vercel.app)

## Contributing

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [Soar Inc](https://www.soar.inc/) for the challenge
- [Shadcn UI](https://ui.shadcn.com/) for the comprehensive component library
- [JSON Server](https://github.com/typicode/json-server) for the mock backend functionality
