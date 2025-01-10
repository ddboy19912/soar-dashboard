# Soar Dashboard Frontend

React-based frontend for the Soar Dashboard application, featuring an interactive financial dashboard with modern UI components and robust state management.

## Features

- 📊 Interactive Dashboard with real-time data visualization
- 💳 Comprehensive Card Management system
- 📈 Detailed Transaction History tracking
- 👤 User Profile Update
- 📱 Responsive Design for all devices
- 💌 Forms built with react-hook-form and validation with zod
- ✨ Code formatting with Eslint and Prettier
- 🧸 State management with Zustand

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **State Management:** Tanstack Query
- **HTTP Client:** Axios
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **State Management:** Zustand

## Project Structure

```
src/
├── assets/       # Static assets
├── config/       # Configuration files
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and helpers
├── pages/        # Page components and routing
├── services/     # API services and data fetching
├── store/        # State management logic
└── types/        # TypeScript type definitions
```

## Getting Started

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
# Start development server
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Configuration

Create these files in the frontend directory:

**.env.development**:
```env
VITE_API_URL=http://localhost:3001
```

**.env.production**:
```env
VITE_API_URL=https://soar-dashboard-backend.vercel.app
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting
- `npm run format` - Format code using Prettier

## Deployment

The application is deployed on Vercel:

- **Production:** [https://soar-dashboard.vercel.app](https://soar-dashboard.vercel.app)
- **Preview:** Automatically generated for each Pull Request

## Development Guidelines

### Component Structure

- Use functional components with TypeScript
- Implement proper prop typing
- Follow the container/presenter pattern where applicable
- Use custom hooks for reusable logic

### Styling

- Use Tailwind CSS utility classes
- Follow the project's design system
- Maintain responsive design principles
- Use CSS modules for component-specific styles

### State Management

- Use Tanstack Query for server state
- Use Zustand for client state
- Implement proper error handling
- Follow React Query best practices for caching
- Use optimistic updates where appropriate

### Form Handling

- Use React Hook Form for form management
- Implement Zod schemas for validation
- Follow accessibility best practices
- Provide proper error feedback

## Best Practices

1. Follow React and TypeScript best practices
2. Write clean, maintainable code
3. Include proper error handling
4. Maintain code consistency
5. Write meaningful comments
6. Follow the project's coding standards