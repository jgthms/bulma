import VarItem from "components/VarItem";
import { CSSVAR_KEYS } from "root/constants";

function Footer() {
  const ids = CSSVAR_KEYS.footer.map((i) => i.id);

  return (
    <div>
      {ids.map((id) => {
        return <VarItem key={id} id={id} />;
      })}
    </div>
  );
}

export default Footer;
