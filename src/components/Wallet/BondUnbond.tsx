import React, { useState } from 'react';
import {
  Box, Button, IconCirclePlus, IconCircleMinus, IconCaution
} from '@aragon/ui';
import BigNumber from 'bignumber.js';
import {
  BalanceBlock, MaxButton,
} from '../common/index';
import { bond, unbondUnderlying } from '../../utils/web3';
import {isPos, toBaseUnitBN} from '../../utils/number';
import { ESD, ESDS } from "../../constants/tokens";
import BigNumberInput from "../common/BigNumberInput";
import TextBlock from "../common/TextBlock";

type BondUnbondProps = {
  staged: BigNumber,
  bonded: BigNumber,
  status: number,
  lockup: number,
  theme: string,
};

function BondUnbond({
  staged, bonded, status, lockup,theme
}: BondUnbondProps) {
  const [bondAmount, setBondAmount] = useState(new BigNumber(0));
  const [unbondAmount, setUnbondAmount] = useState(new BigNumber(0));

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }
  function borderColor(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }

  return (
    <>
    <h1 style={{paddingLeft:'24px', fontSize: '16px', height:'42px', backgroundColor: templatestart(), border:templatestart(), borderTopLeftRadius:'5px', borderTopRightRadius:'5px', display:'flex', alignItems:'flex-end', marginTop:'19px'}}>BOND</h1>
    <Box style={{backgroundColor: templatestart(), border:templatestart()}}>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {/* Total bonded */}
        <div style={{flexBasis: '16%'}}>
          <BalanceBlock asset="Bonded" balance={bonded} suffix={" DAY"}/>
        </div>
        {/* Total bonded */}
        <div style={{flexBasis: '16%'}}>
          <TextBlock label="Exit Lockup" text={lockup === 0 ? "" : lockup === 1 ? "1 epoch" : `${lockup} epochs`}/>
        </div>
        {/* Bond Døllar within DAO */}
        <div style={{flexBasis: '33%', paddingTop: '2%'}}>
          <div style={{display: 'flex'}}>
            <div style={{width: '60%', minWidth: '6em', position:'relative'}}>
              <>
                <BigNumberInput
                  theme={theme}
                  adornment="DAY"
                  value={bondAmount}
                  setter={setBondAmount}
                />
                <div style={{display:'flex', position:"absolute", top:'12%', right:'2%'}}>DAY</div>
                <MaxButton
                  onClick={() => {
                    setBondAmount(staged);
                  }}
                />
              </>
            </div>
            <div style={{width: '40%', minWidth: '7em'}}>
              <Button
              style={{backgroundColor:templatestart(), color:'#F40036', border:'1px solid #F40036'}}
                wide
                icon={status === 0 ? <IconCirclePlus style={{color:'#F40036'}}/> : <IconCaution style={{color:'#F40036'}}/>}
                label="Bond"
                onClick={() => {
                  bond(
                    ESDS.addr,
                    toBaseUnitBN(bondAmount, ESD.decimals),
                  );
                }}
                disabled={status === 2 || !isPos(bondAmount) || bondAmount.isGreaterThan(staged)}
              />
            </div>
          </div>
        </div>
        <div style={{width: '2%'}}/>
        {/* Unbond Døllar within DAO */}
        <div style={{flexBasis: '33%', paddingTop: '2%'}}>
          <div style={{display: 'flex'}}>
            <div style={{width: '60%', minWidth: '6em', position:'relative'}}>
              <>
                <BigNumberInput
                  theme={theme}
                  adornment=" DAY"
                  value={unbondAmount}
                  setter={setUnbondAmount}
                />
                <div style={{display:'flex', position:"absolute", top:'12%', right:'2%'}}>DAY</div>
                <MaxButton
                  onClick={() => {
                    setUnbondAmount(bonded);
                  }}
                />
              </>
            </div>
            <div style={{width: '40%', minWidth: '7em'}}>
              <Button
                style={{backgroundColor:templatestart(), color:'#F40036', border:'1px solid #F40036'}}
                wide
                icon={status === 0 ? <IconCircleMinus style={{color:'#F40036'}}/> : <IconCaution style={{color:'#F40036'}}/>}
                label="Unbond"
                onClick={() => {
                  unbondUnderlying(
                    ESDS.addr,
                    toBaseUnitBN(unbondAmount, ESD.decimals),
                  );
                }}
                disabled={status === 2 || !isPos(unbondAmount) || unbondAmount.isGreaterThan(bonded)}
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
