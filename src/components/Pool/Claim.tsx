import React, { useState } from 'react';
import {
  Box, Button, IconArrowDown
} from '@aragon/ui';
import BigNumber from 'bignumber.js';
import {
  BalanceBlock, MaxButton,
} from '../common/index';
import {claimPool} from '../../utils/web3';
import {isPos, toBaseUnitBN} from '../../utils/number';
import {ESD} from "../../constants/tokens";
import BigNumberInput from "../common/BigNumberInput";

type ClaimProps = {
  poolAddress: string
  claimable: BigNumber,
  status: number,
  theme: string
};

function Claim({
  poolAddress, claimable, status, theme
}: ClaimProps) {
  const [claimAmount, setClaimAmount] = useState(new BigNumber(0));

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }

  return (
    <>
    <h1 style={{paddingLeft:'24px', fontSize: '16px', height:'42px', backgroundColor: templatestart(), border:templatestart(), borderTopLeftRadius:'5px', borderTopRightRadius:'5px', display:'flex', alignItems:'flex-end', marginTop:'19px'}}>CLAIM</h1>
    <Box  style={{ backgroundColor: templatestart(), border: templatestart()}}>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {/* total Issued */}
        <div style={{flexBasis: '32%'}}>
          <BalanceBlock asset="Claimable" balance={claimable} suffix={" DAY"} />
        </div>
        {/* Deposit UNI-V2 into Pool */}
        <div style={{flexBasis: '35%'}}/>
        <div style={{flexBasis: '33%', paddingTop: '2%'}}>
          <div style={{display: 'flex'}}>
            <div style={{width: '60%', minWidth: '6em'}}>
              <>
              <div style={{position:'relative'}}>
                <BigNumberInput
                theme={theme}
                  
                  value={claimAmount}
                  setter={setClaimAmount}
                  disabled={status !== 0}
                />
                <div style={{display:'flex', position:"absolute", top:'12%', right:'2%'}}>DAY</div>
                <MaxButton
                  onClick={() => {
                    setClaimAmount(claimable);
                  }}
                />
                </div>
              </>
            </div>
            <div style={{width: '40%', minWidth: '6em'}}>
              <Button
                style={{backgroundColor:templatestart(), border:'1px solid #F40036', color:'#F40036'}}
                wide
                icon={<IconArrowDown style={{color:'#F40036'}}/>}
                label="Claim"
                onClick={() => {
                  claimPool(
                    poolAddress,
                    toBaseUnitBN(claimAmount, ESD.decimals),
                    (hash) => setClaimAmount(new BigNumber(0))
                  );
                }}
                disabled={poolAddress === '' || status !== 0 || !isPos(claimAmount)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{width: '100%', paddingTop: '2%', textAlign: 'center'}}>
        <span style={{ opacity: 0.5 }}> Unbond to make rewards claimable after your status is Unlocked </span>
      </div>
    </Box>
    </>
  );
}

export default Claim;
