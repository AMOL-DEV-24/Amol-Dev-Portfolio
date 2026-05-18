# AMOL DEV

A modern and responsive portfolio web application built using Next.js, React.js, TypeScript, and SCSS.

---

## Overview

AMOL DEV is a professional portfolio web application developed to showcase:

* Personal Information
* Technical Skills
* Services
* Projects
* Experience
* Contact Information

The project was originally developed as a static website using HTML, CSS, and JavaScript and later converted into a modern scalable web application using Next.js.

---

## Problem Statement

The original portfolio project was developed as a static website using HTML, CSS, and JavaScript. Although the static version successfully displayed portfolio information, it had several limitations:

* Difficult to maintain and scale
* No reusable components
* Complex CSS management
* Difficult theme handling
* Poor project organization
* Repeated code structure
* Limited performance optimization

To overcome these limitations, the project was converted into a modern web application using Next.js and SCSS architecture.

The new implementation focuses on:

* Component-based architecture
* Better maintainability
* Reusable UI components
* Professional folder structure
* Centralized SCSS management
* Responsive modern UI design
* Improved scalability

---

## Tech Stack

* Next.js
* React.js
* TypeScript
* SCSS
* JavaScript
* HTML5
* CSS3
* Font Awesome
* GitHub
* Vercel

---

## Features

* Responsive Design
* Modern UI/UX
* Sidebar Navigation
* Theme Switching
* Reusable Components
* SCSS Architecture
* Projects Showcase
* Skills Showcase
* Services Section
* Contact Section
* Optimized Performance

---

## Project Structure

```txt id="0k45nn"
src/
│
├── app/
│   ├── globals.scss
│   ├── layout.tsx
│   └── page.tsx
│
├── pages/
│   ├── Home/
│   │   └── Home.tsx
│   │
│   ├── Profile/
│   │   └── Profile.tsx
│   │
│   ├── TechStack/
│   │   └── TechStack.tsx
│   │
│   ├── Services/
│   │   └── Services.tsx
│   │
│   ├── Projects/
│   │   └── Projects.tsx
│   │
│   └── Connect/
│       └── Connect.tsx
│
├── components/
│   ├── Sidebar/
│   │   └── Sidebar.tsx
│   │
│   ├── ThemeSwitcher/
│   │   └── ThemeSwitcher.tsx
│   │
│   ├── Cards/
│   ├── Buttons/
│   └── Loader/
│
├── scss/
│   │
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   │   └── _breakpoints.scss
│   │
│   ├── base/
│   │   ├── _reset.scss
│   │   ├── _global.scss
│   │   ├── _typography.scss
│   │   ├── _utilities.scss
│   │   └── _animations.scss
│   │
│   ├── layout/
│   │   ├── _sidebar.scss
│   │   ├── _navigation.scss
│   │   └── _container.scss
│   │
│   ├── pages/
│   │   ├── _home.scss
│   │   ├── _profile.scss
│   │   ├── _techstack.scss
│   │   ├── _services.scss
│   │   ├── _projects.scss
│   │   └── _connect.scss
│   │
│   ├── components/
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _loader.scss
│   │   └── _theme-switcher.scss
│   │
│   ├── themes/
│   │   ├── _dark.scss
│   │   ├── _light.scss
│   │   └── _colors.scss
│   │
└── types/
```

---

## Folder Architecture

### Pages

* Home
* Profile
* TechStack
* Services
* Projects
* Connect

### Components

* Sidebar
* ThemeSwitcher
* Cards
* Buttons
* Loader

### SCSS Architecture

* abstracts
* base
* layout
* pages
* components
* themes

---

## SCSS Architecture

The project follows centralized SCSS management for better scalability and maintainability.

### Advantages

* Reusable styling
* Better responsive handling
* Easier theme management
* Cleaner code organization
* Professional frontend architecture

---

## Responsive Design

The application is fully responsive for:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

Responsive techniques used:

* Flexbox
* CSS Grid
* Media Queries
* SCSS Breakpoints

---

## Performance Optimization

The project uses modern optimization techniques:

* Next.js Image Optimization
* Code Splitting
* Optimized Routing
* SEO-Friendly Structure
* Reusable Components
* Fast Rendering

---

## Installation

Clone the repository:

```bash id="h1gb8k"
git clone <your-repository-url>
```

Move into project directory:

```bash id="jlwmvq"
cd amol-dev
```

Install dependencies:

```bash id="1f5jbi"
npm install
```

Install SCSS:

```bash id="w3i5dw"
npm install sass
```

Run development server:

```bash id="yjkh4t"
npm run dev
```

Open:

```txt id="79m3hj"
http://localhost:3000
```

---

## Build for Production

```bash id="w2idqs"
npm run build
```

Start production server:

```bash id="7yd7pq"
npm run start
```

---

## Deployment

The application is deployed using Vercel.

### Deployment Workflow

1. Push code to GitHub
2. Connect repository with Vercel
3. Configure project settings
4. Deploy application

---

## Project Documentation

A detailed professional Project Report is included in this repository.

The report contains:

* Project Overview
* Problem Statement
* Existing System
* Proposed System
* Objectives
* Technology Stack
* Features
* Project Architecture
* Folder Structure
* SCSS Architecture
* Module Descriptions
* Responsive Design
* Performance Optimization
* Installation Steps
* Deployment Process
* Future Enhancements
* Conclusion

Documentation Path:

```txt id="lrmzkt"
docs/AMOL_DEV_Project_Report.docx
```

This documentation explains the complete development process of converting the portfolio from a static website into a modern Next.js web application using scalable architecture and centralized SCSS management.

---

## Future Enhancements

* Blog Section
* CMS Integration
* Framer Motion Animations
* Admin Dashboard
* API Integration
* Project Filtering

---

## Developer

### Amol Pawar

Frontend Developer

---

## License

This project is developed for educational and portfolio purposes.
