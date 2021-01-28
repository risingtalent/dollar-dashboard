import React from 'react';
import {
  Box, Button, IconCirclePlus,
} from '@aragon/ui';
import {advance} from '../../utils/web3';
import NumberBlock from "../common/NumberBlock";
import {ESDS} from "../../constants/tokens";

type AdvanceEpochProps = {
  user: string,
  epoch: number,
  epochTime: number,
  theme: string
}

function AdvanceEpoch({
  theme,
  user,
  epoch,
  epochTime,
}: AdvanceEpochProps) {
  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }
  return (
    <>
    <h1 style={{paddingLeft:'24px', fontSize: '16px', height:'42px', backgroundColor: templatestart(), border:templatestart(), borderTopLeftRadius:'5px', borderTopRightRadius:'5px', display:'flex', alignItems:'flex-end'}}>ADVANCE EPOCH</h1>
    <Box style={{backgroundColor: templatestart(), border: templatestart()}} >
      <div style={{ display: 'flex' }}>
        {/* Epoch Time */}
        <div style={{ width: '30%' }}>
          <NumberBlock title="Epoch (from current time)" num={epochTime} />
        </div>
        {/* Advance Epoch */}
        <div style={{ width: '40%' }}/>
        <div style={{ width: '30%', paddingTop: '2%' }}>
          <Button
          style={{backgroundColor:templatestart(), color:'#F40036', border:'1px solid #F40036'}}
            wide
            icon={<IconCirclePlus style={{color:'#F40036'}} />}
            label="Advance"
            onClick={() => {
              advance(ESDS.addr);
            }}
            disabled={user === '' || epoch >= epochTime}
          />
        </div>
      </div>
    </Box>
    </>
  );
}


export default AdvanceEpoch;
