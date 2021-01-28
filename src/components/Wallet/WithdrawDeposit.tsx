import React, { useState } from 'react';
import {
  Box, Button, IconCirclePlus, IconCircleMinus, IconLock
} from '@aragon/ui';
import BigNumber from 'bignumber.js';
import {
  BalanceBlock, MaxButton,
} from '../common/index';
import {approve, deposit, withdraw} from '../../utils/web3';
import {isPos, toBaseUnitBN} from '../../utils/number';
import {ESD, ESDS} from "../../constants/tokens";
import {MAX_UINT256} from "../../constants/values";
import BigNumberInput from "../common/BigNumberInput";

type WithdrawDepositProps = {
  user: string
  balance: BigNumber,
  allowance: BigNumber,
  stagedBalance: BigNumber,
  status: number,
  theme:string
};

function WithdrawDeposit({
  user, balance, allowance, stagedBalance, status, theme
}: WithdrawDepositProps) {
  const [depositAmount, setDepositAmount] = useState(new BigNumber(0));
  const [withdrawAmount, setWithdrawAmount] = useState(new BigNumber(0));

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }

  return (
    <>
  
    <h1 style={{paddingLeft:'24px', fontSize: '16px', height:'42px', backgroundColor: templatestart(), border:templatestart(), borderTopLeftRadius:'5px', borderTopRightRadius:'5px', display:'flex', alignItems:'flex-end'}}>STAGE</h1>
    <Box style={{backgroundColor: templatestart(), border:templatestart()}}>
      {allowance.comparedTo(MAX_UINT256) === 0 ?
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {/* total Issued */}
          <div style={{flexBasis: '32%'}}>
            <BalanceBlock asset="Staged" balance={stagedBalance} suffix={" DAY"}/>
          </div>
          {/* Deposit Døllar into DAO */}
          <div style={{flexBasis: '33%', paddingTop: '2%'}}>
            <div style={{display: 'flex'}}>
              <div style={{width: '60%', minWidth: '6em'}}>
                <>
                  <BigNumberInput
                  theme={theme}
                    adornment=" DAY"
                    value={depositAmount}
                    setter={setDepositAmount}
                    disabled={status !== 0}
                  />
                  <MaxButton
                    onClick={() => {
                      setDepositAmount(balance);
                    }}
                  />
                </>
              </div>
              <div style={{width: '40%', minWidth: '6em'}}>
                <Button
                  wide
                  icon={status === 0 ? <IconCirclePlus/> : <IconLock/>}
                  label="Deposit"
                  onClick={() => {
                    deposit(
                      ESDS.addr,
                      toBaseUnitBN(depositAmount, ESD.decimals),
                    );
                  }}
                  disabled={status === 1 || !isPos(depositAmount) || depositAmount.isGreaterThan(balance)}
                />
              </div>
            </div>
          </div>
          <div style={{flexBasis: '2%'}}/>
          {/* Withdraw Døllar from DAO */}
          <div style={{flexBasis: '33%', paddingTop: '2%'}}>
            <div style={{display: 'flex'}}>
              <div style={{width: '60%', minWidth: '7em'}}>
                <>
                  <BigNumberInput
                  theme={theme}
                    adornment=" DAY"
                    value={withdrawAmount}
                    setter={setWithdrawAmount}
                    disabled={status !== 0}
                  />
                  <MaxButton
                    onClick={() => {
                      setWithdrawAmount(stagedBalance);
                    }}
                  />
                </>
              </div>
              <div style={{width: '40%', minWidth: '7em'}}>
                <Button
                  
                  wide
                  icon={status === 0 ? <IconCircleMinus/> : <IconLock/>}
                  label="Withdraw"
                  onClick={() => {
                    withdraw(
                      ESDS.addr,
                      toBaseUnitBN(withdrawAmount, ESD.decimals),
                    );
                  }}
                  disabled={status === 1 || !isPos(withdrawAmount) || withdrawAmount.isGreaterThan(stagedBalance)}
                />
              </div>
            </div>
          </div>
        </div>
        :
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {/* total Issued */}
          <div style={{flexBasis: '32%'}}>
            <BalanceBlock asset="Staged" balance={stagedBalance} suffix={" DAY"}/>
          </div>
          <div style={{flexBasis: '35%'}}/>
          {/* Approve DAO to spend Døllar */}
          <div style={{flexBasis: '33%', paddingTop: '2%'}}>
            <Button
             style={{backgroundColor:templatestart(), border:'1px solid #F40036', color:'#F40036'}}
              wide
              icon={<IconCirclePlus style={{color:'#F40036'}}  />}
              label="Approve"
              onClick={() => {
                approve(ESD.addr, ESDS.addr);
              }}
              disabled={user === ''
              
            }
            />
          </div>
        </div>
      }
    </Box>
    </>
  );
}

export default WithdrawDeposit;
