# Restaurant Online Ordering System

This project is an Next.js application **designed for online food ordering** developed as part of a **thesis project**, with an intuitive user interface. It allows users to browse a variety of products, add items to the cart, and securely complete payments via Stripe. The system is powered by MongoDB for data storage, Clerk for user authentication, and Cloudinary for image management.

## Features

- **Product Catalog:** Browse a variety of food items and collections.
- **Cart Functionality:** Add products to your cart and manage them.
- **Stripe Integration:** Securely complete payments via Stripe.
- **User Authentication:** Integrated Clerk for user sign-up and login.
- **Image Management:** Uses Cloudinary for efficient image storage and retrieval.
- **Responsive Design:** Tailored for both desktop and mobile devices using Tailwind CSS.
- **State Management:** Zustand is used for managing global state.

## Technologies

- **Next.js** - Framework for server-side rendering and static site generation.
- **React** - JavaScript library for building user interfaces.
- **Stripe** - Payment processing platform for secure transactions.
- **Clerk** - Authentication system for user management.
- **Cloudinary** - Image management and storage.
- **MongoDB** - NoSQL database for data storage.
- **Tailwind CSS** - Utility-first CSS framework for building custom designs.
- **Framer Motion** - For smooth animations and transitions.

## Installation

To get started with the project, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- MongoDB account (for data storage)
- Stripe API keys (for payment processing)
- Clerk API keys (for authentication)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/restaurant.git
   
## Installation

### 1. Install Dependencies
```bash
cd restaurant
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the root of the project and add the following:

```env
NEXT_PUBLIC_CLOUDINARY_URL=your-cloudinary-url
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
CLERK_FRONTEND_API=your-clerk-frontend-api
CLERK_API_KEY=your-clerk-api-key
MONGODB_URI=your-mongodb-uri
```

### 3. Run the Development Server
```bash
npm run dev
```
Your app will be running at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the project for production.
- `npm run start` - Starts the production server.
- `npm run lint` - Runs ESLint to check for code quality issues.

## Dependencies

This project uses the following dependencies:

- `@clerk/nextjs` - Clerk authentication.
- `@stripe/stripe-js` - Stripe payment integration.
- `class-variance-authority` - Utility for class names.
- `clsx` - Utility for constructing className strings conditionally.
- `framer-motion` - Animations.
- `lucide-react` - Icons for React.
- `mongoose` - MongoDB data management.
- `next` - React-based framework for building applications.
- `react` and `react-dom` - UI development.
- `react-hot-toast` - Toast notifications.
- `react-icons` - Icons.
- `react-scroll` - Scroll-based navigation.
- `shadcn-ui` - UI component library.
- `stripe` - Stripe API library for payments.
- `tailwind-merge` - Tailwind class merging.
- `tailwindcss-animate` - Animation utilities for Tailwind CSS.
- `zustand` - State management.

## Acknowledgments

- [Next.js](https://nextjs.org/) for providing an excellent framework.
- [Stripe](https://stripe.com/) for making payment processing simple and secure.
- [Clerk](https://clerk.dev/) for user authentication and management.
- [Cloudinary](https://cloudinary.com/) for efficient image management.
- [MongoDB](https://www.mongodb.com/) for powerful NoSQL database solutions.
- [Tailwind CSS](https://tailwindcss.com/) for creating modern, responsive designs with ease.
