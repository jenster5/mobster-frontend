import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  <header>
  <h1>Mobster</h1>
</header>

<card>
  <h1>Rasmus</h1>
</card>
<card>
  <h1>Tetiana</h1>
</card>
<card>
  <h1>Izabela</h1>
</card>
<card>
  <h1>Jennifer</h1>
</card>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
