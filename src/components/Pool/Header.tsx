import React from 'react';
import BigNumber from 'bignumber.js';

import { BalanceBlock } from '../common/index';
import TextBlock from "../common/TextBlock";
import {ownership} from "../../utils/number";

type PoolPageHeaderProps = {
  accountUNIBalance: BigNumber,
  accountBondedBalance: BigNumber,
  accountRewardedESDBalance: BigNumber,
  accountClaimableESDBalance: BigNumber,
  poolTotalBonded: BigNumber,
  accountPoolStatus: number,
  unlocked: number,
  theme:string
};

const STATUS_MAP = ["Unlocked", "Locked"];

function status(accountStatus, unlocked) {
  return STATUS_MAP[accountStatus] + (accountStatus === 0 ? "" : " until " + unlocked)
}

function PoolPageHeader  ({
  accountUNIBalance, accountBondedBalance, accountRewardedESDBalance, accountClaimableESDBalance, poolTotalBonded, accountPoolStatus, unlocked, theme
}: PoolPageHeaderProps) {

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }
  return (
    <div style={{ padding: '2%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', backgroundColor:templatestart(),borderRadius:'6px', marginBottom:'19px' }}>
    <div style={{ flexBasis: '20%' }}>
      <BalanceBlock asset="Balance" balance={accountUNIBalance}  suffix={" UNI-V2"}/>
    </div>
    <div style={{ flexBasis: '20%' }}>
      <BalanceBlock asset="Rewarded" balance={accountRewardedESDBalance} suffix={" DAY"} />
    </div>
    <div style={{ flexBasis: '20%' }}>
      <BalanceBlock asset="Claimable" balance={accountClaimableESDBalance} suffix={" DAY"} />
    </div>
    <div style={{ flexBasis: '20%' }}>
      <BalanceBlock asset="Pool Ownership" balance={ownership(accountBondedBalance, poolTotalBonded)}  suffix={"%"}/>
    </div>
    <div style={{ flexBasis: '20%' }}>
      <TextBlock label="Pool Status" text={status(accountPoolStatus, unlocked)}/>
    </div>
  </div>
  )
}


export default PoolPageHeader;
