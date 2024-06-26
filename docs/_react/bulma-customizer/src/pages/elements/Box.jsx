import VarItem from "components/VarItem";
import { CSSVAR_KEYS } from "root/constants";

function Box() {
  const ids = CSSVAR_KEYS.box.map((i) => i.id);

  return (
    <div>
      <div className="box">I am in a box</div>

      {ids.map((id) => {
        return <VarItem key={id} id={id} />;
      })}
    </div>
  );
}

export default Box;
