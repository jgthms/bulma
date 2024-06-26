import VarItem from "components/VarItem";
import { CSSVAR_KEYS } from "root/constants";

import cn from "root/App.module.css";

function Content() {
  const ids = CSSVAR_KEYS.content.map((i) => i.id);

  return (
    <div className={cn.items}>
      {ids.map((id) => {
        return <VarItem key={id} id={id} />;
      })}
    </div>
  );
}

export default Content;
