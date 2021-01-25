import React from 'react';
import { Button, IconStarFilled, IconStar } from '@aragon/ui';

type switchThemeProps = {
  hasWeb3: boolean,
  theme: string,
  updateTheme: Function
}


function SwitchMode({ hasWeb3, theme, updateTheme }: switchThemeProps) {
  const handleChangeTheme = () => {
    if (theme === 'light') updateTheme('dark', document.body.style.backgroundColor = "#000000", document.body.style.color = "#ffffff") ;
    else updateTheme('light', document.body.style.backgroundColor = "#ffffff", document.body.style.color = "#000000"  );
  };

  return (
    <Button
      icon={theme === 'dark' ? <IconStar /> : <IconStarFilled />}
      onClick={handleChangeTheme}
      label=""
      disabled={!hasWeb3}
    />
  );
}


export default SwitchMode;
