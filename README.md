# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with shadcn/ui components
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js 16
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🖼️ Profile image placeholder (ready for your photo)
- 📄 Resume/Bio section
- 💼 Projects showcase with links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### Replace Profile Image

1. Add your profile image to the `/public` folder (e.g., `profile.jpg`)
2. Update `components/hero.tsx`:
   - Uncomment the `Image` component
   - Update the `src` path to your image

### Update Personal Information

- **Name & Title**: Edit `components/hero.tsx`
- **Bio & Experience**: Edit `components/about.tsx`
- **Projects**: Edit `components/projects.tsx` - update the projects array with your own projects

### Update Navigation

Edit `components/navigation.tsx` to change your name and navigation links.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── navigation.tsx      # Navigation bar
│   ├── hero.tsx           # Hero section with profile
│   ├── about.tsx          # About/Resume section
│   └── projects.tsx       # Projects showcase
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets (add your images here)
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## License

MIT

## Deploy

Deploy easily with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
