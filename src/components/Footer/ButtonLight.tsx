import React from 'react'
import Button1 from '../../icons/button/Button1/Button1'
import Button2 from '../../icons/button/Button2/Button2'

const ButtonDark = () => {
  return(
    <div style={{width:'158px', height:'37px', backgroundColor:'#5558FF', borderRadius:'139px', display:'flex',alignItems:'center', justifyContent:'space-around', color:'#ffffff', fontSize:'18px'}}>
<Button1 />
      <p style={{marginRight:'20px'}}>Dark mode</p>
    </div>
  )
}

export default ButtonDark