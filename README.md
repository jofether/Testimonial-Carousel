# Testimonial Carousel

A React component demonstrating a windowed carousel view with overflow-hidden content clipping. This tests the model's ability to handle DOM content that exists but is visually hidden.

## Features

- **Smooth carousel transitions** with CSS animations
- **Navigation controls** (previous/next buttons)
- **Indicator dots** showing the current slide
- **Responsive design** using Tailwind CSS
- **Color-coded testimonials** for visual variety

## How It Works

The carousel uses a `flex` container with `overflow-hidden` to create a window effect. Only one testimonial is visible at a time, while the others exist in the DOM but are clipped from view. The `translateX` transform moves the entire track to show different slides.

### Future Bug Investigation

Remove the `overflow-hidden` class to see all slides stacked horizontally spilling out of their container. This demonstrates how the model handles content that exists in the DOM but is visually hidden.

## Project Structure

```
├── src/
│   ├── App.jsx          # Main carousel component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
