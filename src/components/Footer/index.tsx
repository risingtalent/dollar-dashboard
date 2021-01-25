import React from 'react';
import { LinkBase, useTheme } from '@aragon/ui';
import ChangeModeButton from "./SwitchTheme";


type FooterProps = {
  updateTheme: Function,
  theme: string,
  hasWeb3: boolean,
}

function Footer({updateTheme, theme, hasWeb3}: FooterProps) {
  const currentTheme = useTheme();

  function templatestart(){
    if (theme === 'light') return("#ffffff") ;

    else return("#000000")  ;
  }
  function borderColor(){
    if (theme === 'light') return("#F2F2F2") ;

    else return("#151515")  ;
  }
  function iconColor(){
    if (theme === 'light') return("#070809") ;

    else return("#F40136")  ;
  }
  function textColor(){
    if (theme === 'light') return('#070809') ;

    else return("#F2F2F2")  ;
  }

  return (
    <>
      <div
      style={{
        
        borderTop: '1px solid ' + borderColor(),
        backgroundColor: templatestart(),
        textAlign: 'center',
        position: 'static',
        left: '0',
        bottom: '0',
        height: 'auto',
        width: '100%',
        fontSize: '14px'
      }}>
       
        <div style={{ padding: '2% 6%', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{  textAlign: 'left', color: iconColor() }}>
            <FooterLink icon={<i className="fab fa-github"/>} href={"https://www.github.com/emptysetsquad/dollar"}/>
            <FooterLink icon={<i className="fab fa-twitter"/>} href={"https://www.twitter.com/emptysetsquad"}/>
            <FooterLink icon={<i className="fab fa-discord"/>} href={"https://discord.gg/vPws9Vp"}/>
            <FooterLink icon={<i className="fab fa-telegram"/>} href={"https://www.t.me/emptysetdollar"}/>
            <FooterLink icon={<i className="fab fa-medium"/>} href={"https://www.medium.com/@emptysetsquad"}/>
          </div>
          <div style={{ textAlign: 'right', height: '18px', marginTop: '15px', marginBottom: '15px', fontSize: '18px', color: textColor()}}>
            made with <span role="img" aria-labelledby="heartbreak">💔️</span> by The Creator
          </div>
          <div style={{ width: '5%', textAlign: 'right', marginTop: '4px' }}>
            <ChangeModeButton hasWeb3={hasWeb3} theme={theme} updateTheme={updateTheme} />
          </div>
        </div>
        
      </div>
    </>
  );
}

type FooterLinkProp = {
  icon: any,
  href: string,
}

function FooterLink({
  icon, href,
}:FooterLinkProp) {
  return (
    <LinkBase href={href} style={{marginLeft: '8px', marginRight: '8px'}}>
      <span style={{ fontSize: 32 }}>{icon}</span>
    </LinkBase>
  );
}

export default Footer;
