import React from 'react';
import BigNumber from 'bignumber.js';

import { BalanceBlock, AddressBlock } from '../common/index';

type TradePageHeaderProps = {
  pairBalanceESD: BigNumber,
  pairBalanceUSDC: BigNumber,
  uniswapPair: string,
  theme:string
};

const TradePageHeader = ({
  pairBalanceESD, pairBalanceUSDC, uniswapPair, theme
}: TradePageHeaderProps) => {
  const price = pairBalanceUSDC.dividedBy(pairBalanceESD);
  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }


  return (
    <div style={{ padding: '2%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', backgroundColor:templatestart(), borderRadius:'6px', marginBottom:'10px'}}>
      <div style={{ flexBasis: '25%' }}>
        <BalanceBlock asset=" DAY Price" balance={price} suffix={"DAI"}/>
      </div>
      <div style={{ flexBasis: '25%' }}>
        <BalanceBlock asset=" DAY Liquidity" balance={pairBalanceESD} suffix={" DAY"}/>
      </div>
      <div style={{ flexBasis: '25%' }}>
        <BalanceBlock asset="DAI Liquidity" balance={pairBalanceUSDC} suffix={"DAI"}/>
      </div>
      <div style={{ flexBasis: '25%' }}>
        <>
          <AddressBlock label="Uniswap Contract" address={uniswapPair} />
        </>
      </div>
    </div>
  );
}


export default TradePageHeader;
