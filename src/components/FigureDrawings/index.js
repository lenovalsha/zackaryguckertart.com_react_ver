import { entry } from "./entry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function Image(props) {
  console.log(props.src);
  return (
    <div className="col-lg-4">
      <LazyLoadImage src={props.src} alt={props.src} effect="blur" />
    </div>
  );
}
function createImageComponents(e) {
  return <Image src={e.src} />;
}
export function FigureDrawing() {
  return (
    <div id="figDrawings" style={{ marginBottom: "100px" }}>
      <div className="row">
        <h1 className="title">Figure Drawings</h1>
        {entry.map(createImageComponents)}
      </div>
    </div>
  );
}
