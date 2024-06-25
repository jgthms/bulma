import Color from "../components/Color";

const COLORS = ["primary", "link", "info", "success", "warning", "danger"];

function Colors() {
  return (
    <div>
      {COLORS.map((color) => {
        return <Color key={color} color={color} />;
      })}
    </div>
  );
}

export default Colors;
