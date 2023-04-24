import { entry } from "./entry";

function Image(props) {
  console.log(props.src);
  return (
    <div className="col-lg-4">
      <img src={props.src} alt={props.src} />
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
