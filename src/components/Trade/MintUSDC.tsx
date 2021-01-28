import React, { useState } from 'react';
import {
  Box, Button, IconCirclePlus,
} from '@aragon/ui';
import BigNumber from 'bignumber.js';
import {mintTestnetUSDC} from '../../utils/web3';

import { BalanceBlock } from '../common/index';
import {isPos, toBaseUnitBN} from '../../utils/number';
import {USDC} from "../../constants/tokens";
import BigNumberInput from "../common/BigNumberInput";

type MintUSDCProps = {
  user: string,
  userBalanceUSDC: BigNumber,
  theme: string
}


function MintUSDC({
  user, userBalanceUSDC, theme
}: MintUSDCProps) {
  const [mintAmount, setMintAmount] = useState(new BigNumber(0));

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }
  return (
    <Box heading="Mint">
      <div style={{ display: 'flex' }}>
        {/* USDC balance */}
        <div style={{ width: '30%' }}>
          <BalanceBlock asset="DAI Balance" balance={userBalanceUSDC} />
        </div>
        {/* Mint */}
        <div style={{ width: '38%'}} />
        <div style={{ width: '32%', paddingTop: '2%'}}>
          <div style={{display: 'flex'}}>
            <div style={{width: '60%'}}>
              <BigNumberInput
              theme={theme}
                adornment="DAI"
                value={mintAmount}
                setter={setMintAmount}
              />
            </div>
            <div style={{width: '40%'}}>
              <Button
              style={{backgroundColor:templatestart(), border:'1px solid #F40036', color:'#F40036'}}
                wide
                icon={<IconCirclePlus style={{color:'#F40036'}} />}
                label="Mint"
                onClick={() => {
                  mintTestnetUSDC(toBaseUnitBN(mintAmount, USDC.decimals));
                }}
                disabled={user === '' || !isPos(mintAmount)}
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default MintUSDC;
