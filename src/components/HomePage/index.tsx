import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box, LinkBase, Tag,
} from '@aragon/ui';
import EpochBlock from "../common/EpochBlock";
import Icon1 from '../../icons/icon1'
import Icon2 from '../../icons/icon2'
import Icon3 from '../../icons/icon3'
import Icon4 from '../../icons/icon4'
import Icon5 from '../../icons/icon5'
import Icon6 from '../../icons/icon6'
import Background from '../../icons/background'

function epochformatted() {
  const epochStart = 1611100800;
  const epochPeriod = 10 * 60;
  const hour = 60 * 60;
  const minute = 60;
  const unixTimeSec = Math.floor(Date.now() / 1000);

  let epochRemainder = unixTimeSec - epochStart
  const epoch = Math.floor(epochRemainder / epochPeriod);
  epochRemainder -= epoch * epochPeriod;
  const epochHour = Math.floor(epochRemainder / hour);
  epochRemainder -= epochHour * hour;
  const epochMinute = Math.floor(epochRemainder / minute);
  epochRemainder -= epochMinute * minute;
  return `${epoch}-0${epochHour}:${epochMinute > 9 ? epochMinute : "0" + epochMinute.toString()}:${epochRemainder > 9 ? epochRemainder : "0" + epochRemainder.toString()}`;
}

type HomePageProps = {
  user: string
};

function HomePage({user}: HomePageProps) {
  const history = useHistory();

  const [epochTime, setEpochTime] = useState("0-00:00:00");

  useEffect(() => {
    let isCancelled = false;

    async function updateUserInfo() {
      if (!isCancelled) {
        setEpochTime(epochformatted())
      }
    }
    updateUserInfo();
    const id = setInterval(updateUserInfo, 1000);

    // eslint-disable-next-line consistent-return
    return () => {
      isCancelled = true;
      clearInterval(id);
    };
  }, [user]);

  return (
    <>

      <Background style={{  width:"100%", height:'100%'}}/>

    <div style={{ position:'absolute', top: '130px', right: '15%', left: '15%', bottom: '-190px'}} >
      <div style={{ padding: '1%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '100%', maxWidth: '1020px', margin: '0 auto' }}>

        
          <Box style={{ height:'75px', width: '318px', display: 'flex', alignItems: 'center'}}>
            <EpochBlock epoch={epochTime}/>
          </Box>
      
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', maxWidth: '1020px', margin: '0 auto'}}>
          <MainButton
            title="DAO"
            description="Earn rewards for governing"
            icon={<Icon1 />}
            onClick={() => {
              history.push('/dao/');
            }}
          />
     

      
          <MainButton
            title="LP Rewards"
            description="Earn rewards for providing liquidity."
            icon={<Icon2 />}
            onClick={() => {
              history.push('/pool/');
            }}
          />
       

        
          <MainButton
            title="Regulation"
            description="Network supply regulation statistics."
            icon={<Icon3 />}
            onClick={() => {
              history.push('/regulation/');
            }}
          />
        
     

      
        
        <MainButton
            title="Governance"
            description="Vote on upgrades."
            icon={<Icon4 />}
            onClick={() => {
              history.push('/governance/');
            }}
          />
       

       
        <MainButton
            title="Trade"
            description="Trade døllar tokens."
            icon={<Icon5 />}
            onClick={() => {
              history.push('/trade/');
            }}
          />
        

        
        <MainButton
            title="Coupons"
            description="Purchase and redeem coupons."
            icon={<Icon6 />}
            onClick={() => {
              history.push('/coupons/');
            }}
          />
        
      
      </div>
  
    </div>   
    </>
  );
}

type MainButtonPropx = {
  title: string,
  description: string,
  icon: any,
  onClick: Function,
  tag?:string
}

function MainButton({
  title, description, icon, onClick, tag,
}:MainButtonPropx) {
  return (
    <LinkBase onClick={onClick} style={{ width: '338px', minHeight: '250px',  }}>
      <Box style={{ minHeight: '250px', maxHeight: '250px' ,  display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', margin: '10px' }} >
        <span style={{ fontSize: 48 }}>
          {icon}
        </span>
        <div style={{ padding: 10, fontSize: '24px', fontWeight: 'bold' }}>
          {title}
          {tag ? <Tag>{tag}</Tag> : <></>}
        </div>

        <p style={{ paddingTop: 5, opacity: 0.5, fontSize:'18px', whiteSpace: 'normal'}}>
          {' '}
          {description}
          {' '}
        </p>

      </Box>
    </LinkBase>
  );
}

export default HomePage;
