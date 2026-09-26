# Cherry Hour Digital Clock

A premium, responsive digital clock built with React and Tailwind CSS. The interface uses a cherry blossom background, live local time, a 12/24-hour toggle, and a warm editorial visual style.

## Features

- Live clock that updates every second
- 12-hour and 24-hour display toggle
- Current date and day of the week
- Responsive desktop and mobile layout
- Cherry blossom background image from `src/assets/pngwing.com.png`
- Tailwind CSS utility-based styling
- ESLint configuration for code quality

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- JavaScript

## Getting Started

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

The `DigitalClock` component stores the current time in React state. A one-second interval updates the state, and JavaScript `Date` methods format the hours, minutes, seconds, date, and weekday for display.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
