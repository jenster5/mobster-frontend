import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
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
