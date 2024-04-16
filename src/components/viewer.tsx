import OpenSeadragon from "openseadragon";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";

const duomo = {
  Image: {
    xmlns: "http://schemas.microsoft.com/deepzoom/2008",
    Url: "//openseadragon.github.io/example-images/duomo/duomo_files/",
    Format: "jpg",
    Overlap: "2",
    TileSize: "256",
    Size: {
      Width: "13920",
      Height: "10200",
    },
  },
};

const INITIAL_OVERLAYS = [
  {
    id: "overlay1",
    x: 0.1,
    y: 0.1,
    width: 0.2,
    height: 0.2,
    className: "highlight",
  },
];

export default function OsdViewer() {
  const [overlays, setOverlays] = createSignal(INITIAL_OVERLAYS);

  let viewer: OpenSeadragon.Viewer | null = null;

  onMount(() => {
    viewer = OpenSeadragon({
      id: "osd-viewer",
      tileSources: duomo,
      showNavigationControl: false,
    });
  });

  createEffect(() => {
    overlays().forEach((overlay) => {
      if (viewer) {
        const element = document.createElement("div");
        element.className = overlay.className;
        viewer.addOverlay({
          element: element,
          location: new OpenSeadragon.Rect(
            overlay.x,
            overlay.y,
            overlay.width,
            overlay.height
          ),
        });
      }
    });

    onCleanup(() => {
      if (viewer) {
        viewer.clearOverlays();
      }
    });
  });

  return (
    <>
      <div
        id="osd-viewer"
        style={{
          width: "696px",
          height: "510px",
          position: "relative",
        }}
      >
        <button
          onClick={() => {
            if (overlays().length === 0) {
              setOverlays(INITIAL_OVERLAYS);
            } else {
              setOverlays([]);
            }
          }}
          style={{
            position: "absolute",

            top: "10px",
            right: "10px",

            "z-index": 1000,
          }}
        >
          {overlays().length === 0 ? "Add Overlay" : "Remove Overlay"}
        </button>
      </div>
    </>
  );
}
