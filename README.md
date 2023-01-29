# Static extraction CSS-in-JS libraries comparison
<img width="1710" alt="Zrzut ekranu 2023-01-29 o 18 57 08" src="https://user-images.githubusercontent.com/44495184/215346005-322b8dd5-37ff-43e9-bac0-5b994456edb1.png">


## Overview

> This comparison only features CSS in JS libraries that support static extraction.

The goal is to implement the same UI-Kit in each library (with no add-ons). My understanding of a UI-Kit is a set of components consuming a theme.

Each UI-Kit must include:

- a Button component with:
  - variants: `primary`, `secondary`
  - styles for pseudo-classes: `:hover`, `:disabled`
- a color palette with two colors
- a Stack component that:
  - displays children horizontally on desktop, and vertically on mobile
- utility function to create a gradient

I will make notice of:

- colocation of styles and components
- dynamic styles

## Comparison

### 1. [vanilla-extract](apps/vanilla-extract)
[Documentation 📖](https://vanilla-extract.style/)

Build:

> dist/index.html                   0.46 kB

> dist/assets/index-9e192c5d.css    2.09 kB │ gzip:  0.75 kB

> dist/assets/index-579ce850.js   145.26 kB │ gzip: 46.63 kB

### 2. [linaria](apps/vanilla-extract)
[Documentation 📖](https://github.com/callstack/linaria)

Build:

> dist/index.html                   0.45 kB

> dist/assets/index-f445d1b9.css    1.07 kB │ gzip:  0.48 kB

> dist/assets/index-1156f174.js   150.77 kB │ gzip: 49.60 kB

## Todo

- [ ] - add commentary in comparison
- [ ] - compare based on build size
- [ ] - turn apps into packages consumed by one app
