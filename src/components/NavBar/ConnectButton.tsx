import React, { useState } from 'react';
import { useWallet } from 'use-wallet';

import {
  Button, IdentityBadge, IconConnect, Box, IconPower, LinkBase,
} from '@aragon/ui';

import { connect } from '../../utils/web3';
import TotalBalance from "./TotalBalance";
import ConnectModal from './ConnectModal';
import PowerIcon from '../../icons/powericon'

type connectButtonProps = {
  hasWeb3: boolean,
  user: string,
  setUser: Function,
  theme: string
}

function ConnectButton({ hasWeb3, user, setUser, theme }: connectButtonProps) {
  const { status, reset } = useWallet();

  const [isModalOpen, setModalOpen] = useState(false);

  const connectWeb3 = async (wallet) => {
    connect(wallet.ethereum);
    setUser(wallet.account);
  };

  const disconnectWeb3 = async () => {
    setUser('');
    reset();
  };

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#000000")  ;
  }
  function balance(){
    if (theme === 'light') return("#F8F8F8") ;

    else return("#010101")  ;
  }

  const toggleModal = () => setModalOpen(!isModalOpen);

  return status === 'connected' ? (
    <div style={{display: 'flex'}}>
      <div style={{flex: '1'}}/>
      <div>
        <Box padding={4} style={{width: '250px', border:'none', backgroundColor: templatestart()}}>
          <div style={{display: 'flex', alignItems:'center'}}>
            
              <LinkBase onClick={disconnectWeb3} style={{marginRight: '10px', height: '26px'}}>
                
                <PowerIcon theme={theme} />
             
              </LinkBase>
            
            <div style={{flex: '1', textAlign: 'right',  backgroundColor:templatestart()}}>
              <IdentityBadge entity={user} style={{ backgroundColor:templatestart()}} />
            </div>
            <div style={{display: 'flex'}}>
            <div style={{ textAlign: 'right', border: '0.5px solid rgba(0, 0, 0, 0.1)', backgroundColor: balance(), borderRadius: '6px', marginLeft:'16px' }}>
              <TotalBalance user={user} />
             </div>
          
            </div>
          </div>
        </Box>
      </div>
    </div>
  ) : (
    <>
      <ConnectModal visible={isModalOpen} onClose={toggleModal} onConnect={connectWeb3}/>
      <Button icon='' label="Start" onClick={toggleModal} disabled={!hasWeb3} style={{backgroundColor: '#F40036', color: '#FFFFFF', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold'}} />
    </>
  );
}


export default ConnectButton;
