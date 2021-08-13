# ts-js-for-developers
algorithms and data structure in JavaScript - TypeScript

## Installation

```sh
npm install -g typescript
```

### TypeScript

After installing typescript, create a .ts file, for example, tsJsLove.ts as given below:

```sh
let message: string = 'I love JavaScript and TypeScript'; 
console.log(message); 
// save the file as tsJsLove.ts 
```

## Usage

```typescript
tsc tsJsLove.ts --target 'es2017' --outDir 'js' && node tsJsLove.js
```

```sh
Output should be I love JavaScript and TypeScript
```