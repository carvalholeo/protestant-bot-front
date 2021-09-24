import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";

function AnchorLink({children, ...rest}) {
  const {isDark} = useContext(DarkModeContext);
  const [darkClass, setDarkClass] = useState('');

  useEffect(() => {
    if(isDark) {
      setDarkClass('link-light');
      return;
    }
    setDarkClass('');
  }, [isDark])
  return (
    <a {...rest} className={rest.className + ' ' + darkClass} >{children}</a>
  );
}

export default AnchorLink;
