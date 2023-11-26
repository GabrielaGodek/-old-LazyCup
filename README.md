# LazyCup
Single Page Application that allows you to buy your favorite coffee without waiting in long line at coffee house.

With this project, I became more comfortable with Vue, managing state with Pinia, and delivering props through components. I also developed automated unit tests with Vitest.

## Installation
1. Clone the repository `git clone https://github.com/GabrielaGodek/LazyCup.git`
2. Change directory `cd lazycup`
3. Install dependencies `npm install`
4. At the terminal run the command `npm run dev`
5. It will open localhost at `http://127.0.0.1:5173/`

### Structure
- `/src` - Source code.
- `/public` - Public resources.
- `/src/components` - Vue's components.
- `/src/store` - Pinia assets.

## Dependencies
- Vue.js: `^3.3.4`
- Pinia: `^2.0.36`
- Vite: `^4.3.5`
- Vitest: `^0.34.6`
- Vitest/coverage-v8: `^^0.34.6`
- Sass: `^1.63.3`
- Fontawesome: `^3.0.3`

## Unit Tests
This project uses [Vitest](https://github.com/vitejs/vitest) for unit testing. Unit tests are essential to ensure the correctness and reliability of individual components within the application.

### Running Unit Tests
To run the unit tests locally, follow these steps:
1. Make sure you have Node.js and npm installed on your machine.
2. Install project dependencies by running:

```bash
npm install
```

3. Execute the following command to run the unit tests:

```bash
npm run test:unit
```
### Test Coverage
Use [Vitest's built-in coverage reporting](https://vitest.dev/guide/coverage) to monitor the test coverage of codebase. After running the unit tests, you can view the coverage report in the terminal.

```bash
npm run test:coverage
```


## Design
With this project I was able to get friendly with new tool like Figma and with the whole concept of Mobile Design.
[View on Figma <img height="15" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma" />](https://www.figma.com/file/mRftKP3EVAnQN22cLKDYcR/LazyCup?type=design&node-id=0%3A1&mode=design&t=6zMBIfF7ng3Vk8bF-1)

## Lighthouse report
![lighthouse report](public/lazycup_lighthouse.png)

### License
This project is available for use under the MIT License.

### Authors
Gabriela Godek
