import VarItem from "../components/VarItem";
import { CSSVAR_KEYS } from "../constants";

import cn from "root/App.module.css";

function Scheme() {
  const schemeIds = CSSVAR_KEYS.scheme.map((i) => i.id);

  return (
    <div className={cn.items}>
      {schemeIds.map((schemeId) => {
        return <VarItem key={schemeId} id={schemeId} />;
      })}
    </div>
  );
}

export default Scheme;
