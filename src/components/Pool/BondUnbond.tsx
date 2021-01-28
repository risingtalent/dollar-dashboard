import React, { useState } from 'react';
import {
  Box, Button, IconCirclePlus, IconCircleMinus, IconCaution
} from '@aragon/ui';
import BigNumber from 'bignumber.js';
import {
  BalanceBlock, MaxButton,
} from '../common/index';
import {bondPool, unbondPool} from '../../utils/web3';
import {isPos, toBaseUnitBN} from '../../utils/number';
import {UNI} from "../../constants/tokens";
import BigNumberInput from "../common/BigNumberInput";
import TextBlock from "../common/TextBlock";

type BondUnbondProps = {
  poolAddress: string,
  staged: BigNumber,
  bonded: BigNumber,
  status: number,
  lockup: number,
  theme:string
};
 
function BondUnbond({
  poolAddress, staged, bonded, status, lockup, theme
}: BondUnbondProps) {
  const [bondAmount, setBondAmount] = useState(new BigNumber(0));
  const [unbondAmount, setUnbondAmount] = useState(new BigNumber(0));

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }
 
  return (
    <>
    <h1 style={{paddingLeft:'24px', fontSize: '16px', height:'42px', backgroundColor: templatestart(), border:templatestart(), borderTopLeftRadius:'5px', borderTopRightRadius:'5px', display:'flex', alignItems:'flex-end', marginTop:'19px'}}>BOND</h1>
    <Box style={{ backgroundColor: templatestart(), border: templatestart()}}>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {/* Total bonded */}
        <div style={{flexBasis: '16%'}}>
          <BalanceBlock asset="Bonded" balance={bonded} suffix={"UNI-V2"} />
        </div>
        {/* Exit lockup */}
        <div style={{flexBasis: '16%'}}>
          <TextBlock label="Exit Lockup" text={lockup === 0 ? "" : lockup === 1 ? "1 epoch" : `${lockup} epochs`}/>
        </div>
        {/* Bond UNI-V2 within Pool */}
        <div style={{flexBasis: '33%', paddingTop: '2%'}}>
          <div style={{display: 'flex'}}>
            <div style={{width: '60%', minWidth: '6em',position:'relative'}}>
              <>
            
                <BigNumberInput
                  
                  value={bondAmount}
                  setter={setBondAmount}
                  theme={theme}
                />
                <div style={{display:'flex', position:"absolute", top:'12%', right:'2%'}}>UNI-V2</div>
                <MaxButton
                
                  onClick={() => {
                    setBondAmount(staged);
                  }}
                />
              </>
            </div>
            <div style={{width: '40%', minWidth: '7em'}}>
              <Button
               style={{backgroundColor:templatestart(), border:'1px solid #F40036', color:'#F40036'}}
                wide
                icon={status === 0 ? <IconCirclePlus style={{color:'#F40036'}}/> : <IconCaution style={{color:'#F40036'}}/>}
                label="Bond"
                onClick={() => {
                  bondPool(
                    poolAddress,
                    toBaseUnitBN(bondAmount, UNI.decimals),
                    (hash) => setBondAmount(new BigNumber(0))
                  );
                }}
                disabled={poolAddress === '' || !isPos(bondAmount)}
              />
            </div>
          </div>
        </div>
        <div style={{flexBasis: '2%'}}/>
        {/* Unbond UNI-V2 within Pool */}
        <div style={{flexBasis: '33%', paddingTop: '2%'}}>
          <div style={{display: 'flex'}}>
            <div style={{width: '60%', minWidth: '6em', position:'relative'}}>
              <>
                <BigNumberInput
                theme={theme}
                 
                  value={unbondAmount}
                  setter={setUnbondAmount}
                />
                <div style={{display:'flex', position:"absolute", top:'12%', right:'2%'}}>UNI-V2</div>
                <MaxButton
                  onClick={() => {
                    setUnbondAmount(bonded);
                  }}
                />
              </>
            </div>
            <div style={{width: '40%', minWidth: '7em'}}>
              <Button
               style={{backgroundColor:templatestart(), border:'1px solid #F40036', color:'#F40036'}}
                wide
                icon={status === 0 ? <IconCircleMinus style={{color:'#F40036'}}/> : <IconCaution style={{color:'#F40036'}}/>}
                label="Unbond"
                onClick={() => {
                  unbondPool(
                    poolAddress,
                    toBaseUnitBN(unbondAmount, UNI.decimals),
                    (hash) => setUnbondAmount(new BigNumber(0))
                  );
                }}
                disabled={poolAddress === '' || !isPos(unbondAmount)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{width: '100%', paddingTop: '2%', textAlign: 'center'}}>
        <span style={{ opacity: 0.5 }}> Bonding events will restart the lockup timer </span>
      </div>
    </Box>
    </>
  );
}

export default BondUnbond;
