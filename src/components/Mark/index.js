import { useContext, useEffect, useState } from 'react';

import { DarkModeContext } from '../../contexts/DarkModeContext';

import css from './index.module.css';

function Mark({ children }) {
  const { isDark } = useContext(DarkModeContext);
  const [className, setClassName] = useState('');

  useEffect(() => {
    if(!isDark) {
      setClassName(css.markLight);
      return;
    }
    setClassName('');
  }, [isDark]);

  return (
    <mark className={className}>{children}</mark>
  );
}

export default Mark;