# Amalfi Guide

A modern, curated travel guide for the Amalfi Coast, focusing on authentic experiences, hidden gems, and expert recommendations. This project provides a visually stunning and responsive interface to explore the best spots in Atrani, Amalfi, and the surrounding areas.

## 🌟 Features

-   **Curated Content**: Expertly selected locations including photo spots, hidden beaches, historical landmarks, and authentic dining experiences.
-   **Interactive Cards**:
    -   **Toggle View**: Click on any card to switch between "Gregory's Take" (personal expert advice) and a full detailed description.
    -   **Rich Metadata**: Each card displays categories, TripAdvisor ratings, review counts, and quick tags.
-   **Responsive Design**:
    -   **Mobile-First**: Optimized for all devices, from mobile phones to large desktop screens.
    -   **Adaptive Typography**: Section headers and text scale smoothly across viewports.
-   **Dark Mode**: Fully supported dark theme inspired by macOS Tahoe (Deep Purple/Black aesthetics).
-   **Performance**: Built with Vite for lightning-fast development and production builds.

## 🛠 Tech Stack

-   **Framework**: [React](https://reactjs.org/) (v18)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**:
    -   [Tailwind CSS](https://tailwindcss.com/) (v3.4) for utility-first styling.
    -   Custom CSS variables for theming.
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth transitions and interactions.
-   **Icons**: [Lucide React](https://lucide.dev/) and custom SVG icons.
-   **Fonts**:
    -   *Merriweather* for elegant headings.
    -   *Outfit* for clean body text.
    -   *Nunito* for readable descriptions.

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/ungattocinereo/AmalfiGuide.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd AmalfiGuide
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎨 Design System

-   **Colors**:
    -   Primary Brand: Warm Orange / Terracotta (`#e67e22`)
    -   Dark Mode Background: `#22212f`
    -   Dark Mode Card: `#2d2b3b`
-   **Typography**:
    -   Headings: *Merriweather* (Serif)
    -   UI Elements: *Outfit* (Sans-serif)
    -   Content: *Nunito* (Sans-serif)

## 📂 Project Structure

```
src/
├── components/        # Reusable UI components (Hero, PlaceCardNew, etc.)
├── data/             # Static data files (places_new.js)
├── styles/           # Global styles and Tailwind directives
├── App.jsx           # Main application component
└── main.jsx          # Entry point
```

## 📝 License

This project is licensed under the MIT License.
