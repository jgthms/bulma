import VarItem from "../components/VarItem";
import { CSSVAR_KEYS } from "../constants";

function Generic() {
  const ids = CSSVAR_KEYS.generic.map((i) => i.id);

  return (
    <div>
      {ids.map((id) => {
        return <VarItem key={id} id={id} />;
      })}
    </div>
  );
}

export default Generic;
