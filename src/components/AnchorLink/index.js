import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";

function AnchorHTML({children, ...rest}) {
  const {isDark} = useContext(DarkModeContext);
  const [darkClass, setDarkClass] = useState('');

  useEffect(() => {
    if(isDark) {
      setDarkClass('link-light');
      return;
    }
    setDarkClass('');
  }, [isDark]);

  return (
    <Link {...rest} className={rest.className + ' ' + darkClass}>{children}</Link>
  );
}

export default AnchorHTML;
