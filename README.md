# Cherry Hour Digital Clock

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?logo=vercel&logoColor=white)](https://digital-clock-app-woad.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A premium, responsive digital clock built with React and Tailwind CSS. It displays the live local time over a cherry blossom background with a 12/24-hour format switch, date, and weekday details.

## Live Demo

[Open Cherry Hour Digital Clock](https://digital-clock-app-woad.vercel.app/)

## Features

- Live clock that updates every second
- 12-hour and 24-hour format toggle
- Current date and day of the week
- Responsive desktop, tablet, and mobile layout
- Cherry blossom background from `src/assets/pngwing.com.png`
- Tailwind CSS utility-based styling
- ESLint configuration for code quality

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | User interface and state management |
| Vite 8 | Development server and production build |
| Tailwind CSS 4 | Responsive styling |
| JavaScript | Clock and date logic |
| ESLint | Code quality checks |

## Getting Started

### Clone the repository

```bash
git clone https://github.com/danish-devx/Digital-Clock-App.git
cd Digital-Clock-App
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
├── App.jsx
├── index.css
├── main.jsx
├── assets/
│   └── pngwing.com.png
└── components/
    └── DigitalClock/
        └── DigitalClock.jsx
```

## How It Works

The `DigitalClock` component stores the current time in React state. A one-second interval updates that state, while JavaScript `Date` methods provide the hours, minutes, seconds, date, and weekday. The format button switches between 12-hour and 24-hour display modes.

## Deployment

The application is deployed with Vercel:

[View the deployed website](https://digital-clock-app-woad.vercel.app/)

## Future Ideas

- Multiple timezone support
- Alarm functionality
- Custom clock themes
- Multiple background options
- Dark and light mode
- Saved user preferences

## Author

M Danish, Frontend Web Developer and React Developer.
