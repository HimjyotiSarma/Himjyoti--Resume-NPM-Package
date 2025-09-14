# @himjyoti-sarma-aa3b2719a/cv

A simple **CLI resume** for LinkedIn handle `@himjyoti-sarma-aa3b2719a`.
View your resume directly in the terminal using multiple command aliases.

---

## Features

- Display your resume in the terminal with a single command.
- Supports multiple command aliases: `cv`, `resume`, `himjyoti`, `himjyoti-sarma-aa3b2719a`.
- Styled output using [chalk](https://www.npmjs.com/package/chalk) and boxed layout with [boxen](https://www.npmjs.com/package/boxen).
- Works in Node.js environments (v18+).

---

## Installation

You can run directly via `npx`:

```bash
npx @himjyoti-sarma-aa3b2719a/cv
```

Or install globally:

```bash
npm install -g @himjyoti-sarma-aa3b2719a/cv
```

---

## Usage

After installation or using `npx`:

```bash
# Using any alias
cv
resume
himjyoti
himjyoti-sarma-aa3b2719a
```

The CLI will display your resume in a clean, readable format in the terminal.

---

## Development

If you want to contribute or test locally:

1. Clone the repository:

```bash
git clone https://github.com/HimjyotiSarma/Himjyoti--Resume-NPM-Package.git
cd Himjyoti--Resume-NPM-Package
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Run locally:

```bash
node dist/cli.js
```

---

## Build & Package

To create a `.tgz` package for `npx` testing:

```bash
npm run build
npm pack
npx ./himjyoti-sarma-aa3b2719a-cv-1.0.0.tgz
```

---

## Scripts

- `npm run build` — Compiles TypeScript to JavaScript (`dist/` folder).
- `npm start` — Runs CLI using `ts-node` (development only).

---

## Dependencies

- [boxen](https://www.npmjs.com/package/boxen) — For boxed terminal output.
- [chalk](https://www.npmjs.com/package/chalk) — For colorful terminal output.
- [terminal-link](https://www.npmjs.com/package/terminal-link) — For clickable links in supported terminals.

---

## License

MIT © Himjyoti Sarma
