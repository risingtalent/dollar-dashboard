import React from 'react';
import { Button, IconStarFilled, IconStar } from '@aragon/ui';
import ButtonDark from './ButtonDark'
import ButtonLight from './ButtonLight'


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
    style={{  height:'30px'}}
      icon={theme === 'dark' ? <ButtonDark /> : <ButtonLight />}
      onClick={handleChangeTheme}
      label=""
      disabled={!hasWeb3}
    />
  );
}


export default SwitchMode;
