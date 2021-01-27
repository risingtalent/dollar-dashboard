import React from 'react';

import NumberBlock from "../common/NumberBlock";
import TextBlock from "../common/TextBlock";

type AccountPageHeaderProps = {
  epoch: number,
  epochTime: number,
  theme:string
};

function EpochPageHeader  ({
  epoch, epochTime, theme
}: AccountPageHeaderProps) {

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }
return(
  <div style={{ padding: '2%', display: 'flex', alignItems: 'center', backgroundColor:templatestart(), borderRadius:'6px' }}>
    <div style={{ width: '25%' }}>
      <NumberBlock title="Current" num={epoch} />
    </div>
    <div style={{ width: '25%' }}>
      <NumberBlock title="Available" num={epochTime} />
    </div>
    <div style={{ width: '25%' }}>
      <TextBlock label="Period" text={epoch < 106 ? "24 hours" : "8 hours"}/>
    </div>
  </div>
  )
}


export default EpochPageHeader;
