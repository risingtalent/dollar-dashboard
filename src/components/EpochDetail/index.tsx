import React, { useState, useEffect } from 'react';
import { Header } from '@aragon/ui';

import {getEpoch, getEpochTime,
} from '../../utils/infura';
import {ESDS} from "../../constants/tokens";
import AdvanceEpoch from './AdvanceEpoch';
import EpochPageHeader from "./Header";
import IconHeader from "../common/IconHeader";
import Icon1 from '../../icons/icon1'

function EpochDetail({ user, theme }: {user: string, theme:string}) {

  const [epoch, setEpoch] = useState(0);
  const [epochTime, setEpochTime] = useState(0);
  useEffect(() => {
    let isCancelled = false;

    async function updateUserInfo() {
      const [epochStr, epochTimeStr] = await Promise.all([
        getEpoch(ESDS.addr),
        getEpochTime(ESDS.addr),
      ]);

      if (!isCancelled) {
        setEpoch(parseInt(epochStr, 10));
        setEpochTime(parseInt(epochTimeStr, 10));
      }
    }
    updateUserInfo();
    const id = setInterval(updateUserInfo, 15000);

    // eslint-disable-next-line consistent-return
    return () => {
      isCancelled = true;
      clearInterval(id);
    };
  }, [user]);

  

  return (
    <>
     <div style={{ position:'absolute', top: '130px', right: '15%', left: '15%'}} >
      <IconHeader theme={theme} icon={<Icon1 />} text="Epoch"/>

      <EpochPageHeader
      theme={theme}
        epoch={epoch}
        epochTime={epochTime}
      />

      <Header primary="Advance Epoch" />

      <AdvanceEpoch
      theme={theme}
        user={user}
        epoch={epoch}
        epochTime={epochTime}
      />
      </div>
    </>
  );
}

export default EpochDetail;
