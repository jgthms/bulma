import VarItem from "../components/VarItem";
import { CSSVAR_KEYS } from "../constants";

function Typography() {
  const ids = CSSVAR_KEYS.typography.map((i) => i.id);

  return (
    <div>
      {ids.map((id) => {
        return <VarItem key={id} id={id} />;
      })}
    </div>
  );
}

export default Typography;
