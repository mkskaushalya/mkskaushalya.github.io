# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Sahan Kaushalya - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases the work and skills of Sahan Kaushalya, a full-stack developer and software engineer.

## 🚀 Features

- **Modern React Architecture**: Built with React 19, TypeScript, and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with responsive design across all devices
- **Tailwind CSS**: Utility-first CSS framework for consistent and maintainable styling
- **Component-Based Structure**: Modular, reusable components for easy maintenance
- **Smooth Animations**: CSS animations including floating hero image and loading screen
- **Interactive Navigation**: Smooth scrolling navigation with mobile hamburger menu
- **SEO Optimized**: Meta tags, structured data, and semantic HTML for better search visibility
- **Accessible**: ARIA labels, semantic markup, and keyboard navigation support

## 🛠️ Technologies Used

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite 6
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript ESLint

## 📦 Project Structure

```
src/
├── components/
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── BackToTop.tsx
│   │   └── LoadingScreen.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Main.tsx
├── data/
│   └── skills.ts           # Skills data configuration
├── hooks/
│   └── useScrollPosition.ts # Custom React hooks
├── lib/
│   └── utils.ts            # Utility functions
└── index.css               # Global styles and Tailwind configuration
```

## 🎨 Design Features

- **Color Scheme**: Professional blue and gray palette
- **Typography**: Poppins font family for modern, clean appearance
- **Layout**: Container-based responsive layout with proper spacing
- **Cards**: Gradient backgrounds with custom shadows
- **Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mkskaushalya/mkskaushalya.github.io.git
cd mkskaushalya.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Sections

### Hero Section

- Professional introduction
- Call-to-action button
- Animated hero image

### About Section

- Detailed professional background
- Project highlights
- Programming skills grid with technology icons

### Contact Section

- Contact information
- Social media links
- Professional email contact

## 🌟 Features in Detail

### Interactive Elements

- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Back to Top Button**: Appears on scroll with smooth return to top
- **Mobile Navigation**: Hamburger menu with slide-in navigation
- **Loading Screen**: Animated loading screen on initial page load

### Performance Optimizations

- **Lazy Loading**: Images load as needed for better performance
- **WebP Images**: Modern image format for smaller file sizes
- **Code Splitting**: Efficient bundling with Vite

### SEO & Accessibility

- **Meta Tags**: Comprehensive Open Graph and Twitter Card meta tags
- **Structured Data**: JSON-LD schema markup for better search results
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **ARIA Labels**: Accessibility labels for screen readers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sahan Kaushalya**

- Website: [https://sahan.tute.lk](https://sahan.tute.lk)
- GitHub: [@mkskaushalya](https://github.com/mkskaushalya)
- LinkedIn: [sahankaushalya](https://linkedin.com/in/sahankaushalya)
- Email: mkskaushalya@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mkskaushalya/mkskaushalya.github.io/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
