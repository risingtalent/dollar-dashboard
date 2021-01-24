import React from 'react';
import { NavLink } from 'react-router-dom';

import { LinkBase, useTheme } from '@aragon/ui';
import ConnectButton from './ConnectButton';

type NavbarProps = {
  hasWeb3: boolean;
  user: string;
  setUser: Function;
};

function NavBar({ hasWeb3, user, setUser }: NavbarProps) {
  const currentTheme = useTheme();
  const logoUrl = `./logo/YAI_LOGO_1.svg`;

  return (
    <div style={{ position: 'relative', top:'500' }}>
      <div
        style={{
          borderTop: '1px solid ' + currentTheme.border,
          backgroundColor: 'currentTheme.border',
          height: '90px', 
          boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.1)',
          textAlign: 'center',
          
          width: '100%',
          fontSize: '14px',
        }}
      >
        
        <div style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'flex', paddingTop: '24px' }}>
            <div style={{ width: '10%', textAlign: 'left' }}>
              <NavLink to="/" component={LinkBase} style={{ marginRight: '16px', height: '40px' }}>
                <img src={logoUrl} height="40px" alt="Empty Set Dollar" />
              </NavLink>
            </div>
            <div style={{ width: '45%', textAlign: 'center', color: 'currentTheme.border', fontWeight: 'normal', display: 'flex', justifyContent: 'space-around' }}>
              <LinkButton title="DAO" to="/dao/" />
              <LinkButton title="Liquidity" to="/pool/" />
              <LinkButton title="Regulation" to="/regulation/" />
              <LinkButton title="Governance" to="#" />
              {/* <LinkButton title="Coupons" to="/coupons/" /> */}
              <LinkButton title="Trade" to="/trade/" />
            </div>
            <div style={{ width: '55%', textAlign: 'right' }}>  
              <ConnectButton hasWeb3={hasWeb3} user={user} setUser={setUser} />
            </div>
          </div>
        </div>
        </div>
  
    </div>
  );
}

type linkButtonProps = {
  title: string;
  to: string;
};

function LinkButton({ title, to }: linkButtonProps) {
  return (
    <NavLink
      to={to}
      component={LinkBase}
      external={false}
      style={{
        display: 'inline-flex',
        alignItems: 'center',

        height: '40px',
        opacity: 1,
      }}
      activeStyle={{ opacity: 1 }}
    >
      <span style={{ display: 'block', padding: '1%', fontSize: '16px' }}>{title}</span>
    </NavLink>
  );
}

export default NavBar;
