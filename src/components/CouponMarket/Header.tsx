import React from 'react';

import BigNumber from "bignumber.js";
import { BalanceBlock } from "../common";
import {ownership} from "../../utils/number";

type CouponMarketHeaderProps = {
  debt: BigNumber,
  supply: BigNumber,
  coupons: BigNumber,
  premium: BigNumber,
  redeemable: BigNumber,
  theme: string
};

function CouponMarketHeader ({
  debt, supply, coupons, premium, redeemable, theme
}: CouponMarketHeaderProps) {

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }
  return(
  <div style={{ padding: '2%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', borderRadius:'6px', backgroundColor:templatestart() }}>
    <div style={{ flexBasis: '20%' }}>
      <BalanceBlock asset="Debt Ratio" balance={ownership(debt, supply)} suffix={"%"}/>
    </div>
    <div style={{ flexBasis: '20%' }}>
      <BalanceBlock asset="Total Debt" balance={debt} suffix={" DAY"}/>
    </div>
    <div style={{ flexBasis: '20%' }}>
      <BalanceBlock asset="Coupons" balance={coupons} />
    </div>
    <div style={{ flexBasis: '20%' }}>
      <BalanceBlock asset="Premium" balance={premium.multipliedBy(100)} suffix={"%"}/>
    </div>
    <div style={{ flexBasis: '20%' }}>
      <BalanceBlock asset="Redeemable" balance={redeemable}/>
    </div>
  </div>
)
}


export default CouponMarketHeader;
