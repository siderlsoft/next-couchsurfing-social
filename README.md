# CouchSurfing Social Network

A simple social networking webapp built with Next.js that demonstrates basic social capabilities including user profiles, friend connections, and post sharing.

Try the app directly in: https://next-couchsurfing-social.vercel.app/

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 10+

### Installation & Setup

1. Clone the repository
```bash
git clone <repository-url>
cd next-couchsurfing-social
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧱 Tech Highlights

- **Next.js 15 (App Router)** — Server Components, SSR, and caching with `revalidate`
- **React 19 + TypeScript 5** — Modern hooks, strong typing, and predictable component boundaries
- **PrimeReact + Tailwind CSS v4** — Clean, responsive, and accessible UI components
- **Server + Client Composition** — Server Components for data-fetching & SEO; Client Components for interactivity
- **Mock APIs** — JSON-based data served via `/api` routes to simulate backend behavior
- **Caching & Pagination** — URL-based pagination with SSR and incremental static regeneration
- **Unit Testing Stack** — Jest + Testing Library configured with `next/jest` for component and utility tests
- **Accessibility & Responsiveness** — Semantic HTML, keyboard-friendly controls, and mobile-first design
- **Code Quality Tools** — ESLint 9 with Next.js rules for consistent and production-ready code


## 🏗️ Project Structure

```
app/
├── (components)/           # Reusable UI components
│   ├── PostCard.tsx       # Individual post display
│   ├── UserFriends.tsx    # Friends list component
│   └── ...
├── api/                   # Mock API endpoints
│   ├── posts/            # Posts CRUD operations
│   ├── users/            # User management
│   └── ...
├── profile/              # User profile page
├── posts/[id]/          # Individual post view
└── ...

lib/
├── api.ts               # API client functions
├── models.ts           # TypeScript interfaces
├── helper.ts          # Utility functions
└── __tests__/         # Unit tests

data/
├── users.json         # Mock user data
├── posts.json        # Mock posts data
└── friends.json      # Friend relationships
```

## ✨ Features

### Core Functionality
- **User Profile**: View personal profile with avatar, role, and location
- **Friends Network**: Display user's friends with avatars
- **Social Feed**: Shows posts from friends with pagination
- **Post Details**: Individual post view with full content
- **Mock APIs**: RESTful endpoints for data management

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Server Components**: Next.js 15+ App Router with RSC
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Component Library**: PrimeReact for consistent UI components
- **Unit Testing**: Jest with comprehensive test coverage
- **Caching**: Next.js built-in caching for optimal performance

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Test coverage includes:
- API functions with mocked HTTP calls
- Utility functions (date formatting)
- Error handling scenarios

## 🎯 Design Decisions & Assumptions

### Architecture Choices
1. **Next.js App Router**: Chosen for modern React patterns and built-in optimizations
2. **Server Components**: Leveraged for better performance and SEO
3. **Mock Data**: Used JSON files to simulate a real backend without complexity
4. **Component Composition**: Modular design for maintainability and reusability

### Data Structure Assumptions
- **Users**: Each user has a unique ID, name, role (Traveler/Host), and location
- **Posts**: Belong to a user (authorId) and include metadata like creation date and likes
- **Friends**: Bidirectional relationships stored as user ID arrays
- **Pagination**: Implemented for scalability as post counts grow

### UI/UX Decisions
- **Orange Theme**: Chosen to match CouchSurfing brand colors
- **Card Layout**: Clean, social media-inspired design for easy content consumption
- **Avatar Circles**: Consistent circular avatars throughout the app
- **Responsive Design**: Mobile-first approach with desktop enhancements

## 🔧 Implementation Challenges

### 1. **Image Handling**
- **Challenge**: Next.js Image component strict URL validation
- **Solution**: Proper path handling for local images and fallback states

### 2. **API Mocking**
- **Challenge**: Creating realistic API responses without a backend
- **Solution**: JSON data with proper relationships and Next.js API routes

### 3. **TypeScript Integration**
- **Challenge**: Ensuring type safety across components and APIs
- **Solution**: Comprehensive interfaces and proper type annotations

### 4. **Testing Setup**
- **Challenge**: Mocking Next.js specific features (Image, Navigation)
- **Solution**: Custom Jest setup with proper mocks for framework components

## 🚧 Future Enhancements

If this were a production application, next steps would include:

### Immediate Improvements
- Real authentication system
- Database integration (PostgreSQL/MongoDB)
- Image upload functionality
- Real-time notifications

### Advanced Features  
- Direct messaging between users
- Advanced post interactions (comments, shares)
- Location-based friend discovery
- Event creation and management

### Technical Improvements
- End-to-end testing with Playwright
- Performance monitoring
- Error boundary implementation
- Internationalization support

## 📦 Dependencies

### Core Framework
- **Next.js 14**: React framework with App Router
- **React 18**: UI library with latest features
- **TypeScript**: Type safety and developer experience

### UI & Styling
- **Tailwind CSS**: Utility-first styling
- **PrimeReact**: Component library for consistent UI
- **PrimeIcons**: Icon set for visual consistency

### Testing & Quality
- **Jest**: JavaScript testing framework
- **@testing-library/jest-dom**: Additional Jest matchers
- **ESLint**: Code quality and consistency

## 🕒 Development Timeline

This project was completed in approximately 2 hours with the following breakdown:

- **Setup & Architecture** (20 min): Project initialization and structure planning
- **Data Models & APIs** (30 min): JSON data creation and API route implementation  
- **UI Components** (45 min): Building reusable components with PrimeReact
- **Pages & Navigation** (20 min): Profile and feed pages with routing
- **Testing & Polish** (25 min): Unit tests and final refinements

---

**Note**: This project was built as a technical exercise to demonstrate Next.js proficiency, component architecture, and testing practices within a constrained timeframe.
