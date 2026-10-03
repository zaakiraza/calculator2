# Calculator (React)

A simple & modern calculator built with React and Vite. Converted from the original
vanilla HTML/CSS/JS version with all functionality kept the same.

## Features

- Clickable buttons for digits, operators (`+ − × ÷ %`), decimal point, `AC` (clear),
  `DEL` (delete last character) and `=` (evaluate)
- Full keyboard support:
  - Numbers and `+ - * / . %` keys append to the display
  - `Enter` or `=` evaluates the expression
  - `Backspace` deletes the last character
  - `Escape` clears the display
- Shows `Error` for invalid or non-finite results

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (http://localhost:5173).

## Other scripts

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
index.html                  # Vite entry HTML
vite.config.js              # Vite configuration (React plugin)
src/
  main.jsx                  # React entry point
  App.jsx                   # Root component
  index.css                 # Global styles (same as original style.css)
  components/
    Calculator.jsx          # Calculator UI, state and keyboard handling
```
