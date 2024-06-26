import VarItem from "components/VarItem";
import { CSSVAR_KEYS } from "root/constants";

function Hero() {
  const ids = CSSVAR_KEYS.hero.map((i) => i.id);

  return (
    <div>
      {ids.map((id) => {
        return <VarItem key={id} id={id} />;
      })}
    </div>
  );
}

export default Hero;
