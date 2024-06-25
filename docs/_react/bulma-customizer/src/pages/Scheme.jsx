import Slider from "../components/Slider";
import { CSSVAR_KEYS } from "../constants";

function Scheme() {
  const schemeIds = CSSVAR_KEYS.scheme;

  return (
    <div>
      {schemeIds.map((schemeId) => {
        return <Slider key={schemeId} id={schemeId} />;
      })}
    </div>
  );
}

export default Scheme;
