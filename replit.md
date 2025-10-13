# Hello World Typography Website

## Overview

A minimalist single-page web application that showcases "Hello World" in beautiful, oversized typography. The project demonstrates clean design principles with a focus on typography, whitespace, and responsive scaling. Built as a full-stack application using React and Express, with support for both light and dark themes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (alternative to React Router)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **Shadcn/ui** component library with Radix UI primitives, providing accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **New York** style variant from shadcn/ui for consistent component aesthetics
- Custom theming system supporting light/dark modes with CSS variables

**Design System**
- Typography-focused design with responsive text scaling (9xl desktop → 5xl mobile)
- Color palette using HSL values for both light and dark modes
- Minimalist approach with generous whitespace and subtle animations
- Custom CSS variables for theming (`--background`, `--foreground`, `--accent`, etc.)
- Hover and active state elevation effects for interactive elements

**State Management**
- Theme state managed via Context API with localStorage persistence
- Query state managed by TanStack Query with infinite stale time (static content)
- Form validation using React Hook Form with Zod schemas (if needed for future features)

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for type-safe API development
- Modular route registration system via `registerRoutes` function
- Custom request/response logging middleware for API endpoints
- Error handling middleware with consistent error responses

**Development Experience**
- **Vite middleware mode** for seamless frontend integration during development
- SSR-ready template rendering with HTML transformation
- Hot module replacement (HMR) support via Vite's WebSocket server
- Replit-specific plugins for error overlays and development banners

**API Architecture**
- RESTful API design with `/api` prefix for all backend routes
- Centralized storage interface pattern (`IStorage`) for data operations
- Response logging truncated to 80 characters for readability
- Credentials-based session handling (`credentials: 'include'`)

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL with type-safe schema definitions
- Schema location: `shared/schema.ts` for code sharing between client and server
- Migration system using `drizzle-kit` with output to `./migrations` directory
- **Neon Database** serverless PostgreSQL as the recommended provider

**Current Implementation**
- In-memory storage (`MemStorage`) for development/demo purposes
- User entity with username/password fields and UUID primary keys
- Zod schema validation using `drizzle-zod` for runtime type checking
- Abstracted storage interface allows swapping implementations without code changes

**Session Management**
- `connect-pg-simple` configured for PostgreSQL-backed session storage
- Session data persisted across server restarts when database is connected

### External Dependencies

**Core UI Libraries**
- **Radix UI** components (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **Lucide React** for consistent iconography
- **Embla Carousel** for carousel/slider functionality
- **cmdk** for command palette interfaces
- **vaul** for drawer components
- **date-fns** for date manipulation and formatting

**Development Tools**
- **TypeScript** with strict mode and path aliases (`@/`, `@shared/`, `@assets/`)
- **ESBuild** for server-side bundling in production
- **PostCSS** with Tailwind CSS and Autoprefixer
- **TSX** for running TypeScript in development mode

**Replit Integration**
- `@replit/vite-plugin-runtime-error-modal` for enhanced error display
- `@replit/vite-plugin-cartographer` for code mapping
- `@replit/vite-plugin-dev-banner` for development environment indicators

**Form & Validation**
- **React Hook Form** for form state management
- **Zod** for schema validation with `@hookform/resolvers` integration
- **class-variance-authority** for component variant management
- **clsx** and **tailwind-merge** for conditional className composition

**Database & API**
- **@neondatabase/serverless** for serverless PostgreSQL connections
- **drizzle-orm** and **drizzle-zod** for type-safe database operations
- Built-in fetch API for client-server communication with custom error handling