import { useSelector, useDispatch } from "react-redux";

import { langs } from "src/app.config.json";
import { langSelector, setLang } from "src/state/meta";

export default function useLang() {
  const lang: string | undefined = useSelector(langSelector);
  const dispatch = useDispatch();
  return {
    lang,
    langs: langs as any,
    setLang: (l: string) => dispatch(setLang(l)),
  };
}
