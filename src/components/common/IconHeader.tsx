import React from 'react';

import {
  Header,
} from '@aragon/ui';

type IconHeaderProps = {
  icon: any,
  text: string, 
  theme?: string
}

function IconHeader({ icon, text, theme }: IconHeaderProps) {
  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }

  return (
    <>
      <div style={{ padding: '1%', display: 'flex', alignItems: 'center', backgroundColor:templatestart() }}>
        <div style={{ marginRight: '2%', fontSize: 48 }}>
          {icon}
        </div>
        <div>
          <Header primary={text} />
        </div>
      </div>
    </>
  );
}

export default IconHeader;
