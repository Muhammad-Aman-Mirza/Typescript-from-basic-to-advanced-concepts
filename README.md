# TypeScript Project Setup

This guide will walk you through setting up a TypeScript project using npm, configuring TypeScript with a `tsconfig.json` file, and compiling the code.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Steps to Set Up TypeScript Project

### 1. Initialize npm Project

First, initialize a new npm project by running the following command. This will create a `package.json` file in your project directory:

```bash
npm init -y
npm install --save-dev typescript
npx tsc --init
{
  "compilerOptions": {
    "target": "es5",          // Target ECMAScript version
    "module": "commonjs",     // Module system
    "strict": true,           // Enable strict type-checking options
    "outDir": "./dist",       // Directory for compiled JavaScript files
    "rootDir": "./src"        // Directory for source TypeScript files
  },
  "exclude": ["node_modules"]  // Exclude node_modules from compilation,
  "include": ["src/**/*"],
}
npx tsc
npx tsc ./src/index.ts or npx tsc-node ./src/index.ts
npx tsc --watch

```

### Summary of Commands:

- **Initialize npm project**: `npm init -y`
- **Install TypeScript**: `npm install --save-dev typescript`
- **Create `tsconfig.json`**: `npx tsc --init` or manually create the file
- **Compile TypeScript project**: `npx tsc`
- **Compile individual file**: `npx tsc ./src/index.ts`
- **Watch for changes**: `npx tsc --watch`
- **Run compiled JavaScript**: `node dist/index.js`
- **Clean up generated files**: `rm -rf dist`
- **Nodemon watch mode**: `npm install --save-dev nodemon  && npx nodemon ./src/index.ts"
`
  `npm install -g nodemon browser-sync
`

This `README.md` file should provide everything you need to get started with TypeScript in your project, including all the necessary commands for installation, configuration, and compilation.
