import VarItem from "../components/VarItem";
import { CSSVAR_KEYS } from "../constants";

function Scheme() {
  const schemeIds = CSSVAR_KEYS.scheme.map((i) => i.id);

  return (
    <div>
      {schemeIds.map((schemeId) => {
        return <VarItem key={schemeId} id={schemeId} />;
      })}
    </div>
  );
}

export default Scheme;
