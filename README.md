# (website repo)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation and Setup](#installation-and-setup)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Available Scripts](#available-scripts)
8. [Tailwind CSS Theme Customization](#tailwind-css-theme-customization)
9. [Contributing](#contributing)
10. [License](#license)

---

## Project Overview

(website repo) is a Emulation Club OpenSourced website Repository. This project is built using **React** and **Vite** for fast development, and styled using **Tailwind CSS**.

### Key Goals:

-   Fast performance with Vite
-   Clean and minimal UI with Tailwind CSS
-   Scalable and maintainable codebase

---

## Features

-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A modern and fast build tool for frontend development.
-   **Tailwind CSS**: Utility-first CSS framework to style components.
-   **ESLint & Prettier**: Linting and code formatting for a consistent codebase.
-   **Theme Support**: Customizable themes with Tailwind’s configuration.

---

## Tech Stack

-   **Frontend**: React (JavaScript/TypeScript)
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **Linting & Formatting**: ESLint, Prettier
-   **Version Control**: Git & GitHub

---

## Installation and Setup

### Prerequisites

Before you start, make sure you have the following installed:

-   [Node.js](https://nodejs.org/en/) (v14 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Step 1: Clone the repository

First, clone this repository to your local machine:

`git clone https://github.com/your-username/[project-name].git cd [project-name]`

### Step 2: Install Dependencies

After cloning the repository, install the project dependencies:

`npm install # or yarn install`

### Step 3: Start the Development Server

Start the Vite development server:

`npm run dev # or yarn dev`

This will start a development server at `[http://localhost:5173](http://localhost:5173)` (or another port, if 5173 is unavailable).

### Step 4: Build for Production

To create an optimized production build, run:

`npm run build # or yarn build`

This will output static files into the `dist/` folder, ready for deployment.

---

## Project Structure

The project structure follows a standard layout for React applications using Vite and Tailwind CSS:

```
 ├── public/                 # Static assets
 ├── src/                    # Source code
 │   ├── assets/             # Image and media assets
 │   ├── components/         # React components
 │   ├── App.jsx             # Main application entry
 │   └── main.jsx            # Application entry point
 ├── tailwind.config.js      # Tailwind CSS configuration
 ├── vite.config.js          # Vite configuration
 ├── package.json            # Project metadata and scripts
 ├── CODE_OF_CONDUCT.md      # Code Of Conduct documentation
 ├── CONTRIBUTION.md         # Contribution documentation
 └── README.md               # Project documentation
```

---

## Usage

After setting up, you can start building features and pages by adding components inside the `src/` directory. Use **Tailwind CSS** classes to style components directly in your JSX files. For example:

```
const MyComponent = () => (
    <div className="bg-primary p-4 rounded-lg text-white">
        <h1 className="text-2xl font-bold">Hello, Tailwind!</h1>
        <p>Customize your theme in the Tailwind configuration file.</p>
    </div>
);
```

---

## Available Scripts

### Development

To run the project locally, use:

`npm run dev

# or yarn dev`

### Production Build

To create a production build, use:

`npm run build

# or yarn build`

### Linting

To check for linting errors, use:

`npm run lint

# or yarn lint`

---

## Tailwind CSS Theme Customization

This project uses **Tailwind CSS** for styling. You can customize the theme by editing the `tailwind.config.js` file.

```
// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        // Paths to purge unused styles
        ],
    theme: {
        extend: {
            colors: {
                primary: '#1D4ED8', // Customize primary color
                secondary: '#9333EA',
                accent: '#F59E0B',
                },
            fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            serif: ['Georgia', 'ui-serif'],
            },
        },
    },
    plugins: [],
};
```

To use the theme in your components, simply use Tailwind utility classes as shown below:

```
const Button = () => (
    <button className="bg-primary text-white p-3 rounded-lg">
        Click Me
    </button>
);
```

---

## Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting a pull request.

### Steps to Contribute:

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes and commit them
4. Push your changes to your fork
5. Create a pull request on the main repository
