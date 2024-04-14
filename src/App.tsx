import "./App.css";

import osdLogo from "./assets/openseadragon.png";
import solidLogo from "./assets/solid.svg";
import OsdViewer from "./components/viewer";

function App() {
  return (
    <>
      <div class="logos">
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={osdLogo} class="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Solid.js + OpenSeadragon</h1>
      <div class="viewer-container">
        <OsdViewer />
      </div>
    </>
  );
}

export default App;
