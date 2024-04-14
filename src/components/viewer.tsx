import OpenSeadragon from "openseadragon";
import { onMount } from "solid-js";

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

export default function OsdViewer() {
  onMount(() => {
    OpenSeadragon({
      id: "osd-viewer",
      tileSources: duomo,
      showNavigationControl: false,
    });
  });
  return (
    <div
      id="osd-viewer"
      style={{
        width: "696px",
        height: "510px",
      }}
    ></div>
  );
}
