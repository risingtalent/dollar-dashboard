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
import Background from '../../icons/background/index'

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
  user: string,
  theme: string
};

function HomePage({user, theme}: HomePageProps) {
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

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }




  return (
    <>

      {/* <Background theme={theme} /> */}
      
 
      

    <div style={{ position:'absolute', top: '130px', right: '15%', left: '15%',  width: '85%'}} >
      <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <div style={{ padding: '1%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '100%', maxWidth: '100%', margin: '0 auto' }}>

        
          <Box style={{ height:'75px', width: '25%', display: 'flex', alignItems: 'center', backgroundColor: templatestart(), border: templatestart()}}>
            <EpochBlock epoch={epochTime} theme={theme}/>
          </Box>
      
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', height:'auto', maxWidth: '100%', margin: '0 auto'}}>
          <MainButton
          theme={theme}
            title="DAO"
            description="Earn rewards for governing"
            icon={<Icon1 />}
            onClick={() => {
              history.push('/dao/');
            }}
          />
     

      
          <MainButton
          theme={theme}
            title="LP Rewards"
            description="Earn rewards for providing liquidity."
            icon={<Icon2 />}
            onClick={() => {
              history.push('/pool/');
            }}
          />
       

        
          <MainButton
          theme={theme}
            title="Regulation"
            description="Network supply regulation statistics."
            icon={<Icon3 />}
            onClick={() => {
              history.push('/regulation/');
            }}
          />
        
     

      
        
        <MainButton
        theme={theme}
            title="Governance"
            description="Vote on upgrades."
            icon={<Icon4 />}
            onClick={() => {
              history.push('/governance/');
            }}
          />
       

       
        <MainButton
        theme={theme}
            title="Trade"
            description="Trade døllar tokens."
            icon={<Icon5 />}
            onClick={() => {
              history.push('/trade/');
            }}
          />
        

        
        <MainButton
        theme={theme}
            title="Coupons"
            description="Purchase and redeem coupons."
            icon={<Icon6 />}
            onClick={() => {
              history.push('/coupons/');
            }}
          />
        
      
      </div>
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
  tag?:string,
  theme:string
}

function MainButton({
  title, description, icon, onClick, tag, theme
}:MainButtonPropx) {

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#0C0C0C")  ;
  }

  return (
    <LinkBase onClick={onClick} style={{ width: '26%', minHeight: '100%', height:'100%'  }}>
      <Box style={{ minHeight: '250px' ,  display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', margin: '10px', backgroundColor:templatestart(), border:templatestart() }} >
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
