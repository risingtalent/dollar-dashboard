import React from 'react';

type EpochBlockProps = {
  epoch: string,
  theme:string
}

function EpochBlock({ epoch,theme }: EpochBlockProps) {

  function templatestart(){
    if (theme === 'light') return("rgba(0,0,0,0.3)") ;

    else return("rgba(255,255,255,0.3)")  ;
  }
  
  return (
    <>
      <div style={{ fontSize: '12px', padding: 3, color: templatestart() }}>Epoch</div>
      <div style={{ fontSize: '18px', padding: 3, fontWeight: 400, lineHeight: 1.5, fontFamily: 'aragon-ui-monospace, monospace'}}>{epoch}</div>
    </>
  );
}

export default EpochBlock;
