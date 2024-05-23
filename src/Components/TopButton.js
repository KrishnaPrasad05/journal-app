import React from 'react'
import { Button, Image } from 'react-bootstrap'
import up from '../Assets/Images/upload.png'
function TopButton() {
    function handleTop(){
        window.scrollTo(0,0);
    }
  return (
    <div>
        <Button onClick={handleTop} style={{position:'fixed',bottom:20,right:20,backgroundColor:'#A01E1E',border:0}}><Image src={up} style={{width:'15px',height:'15px'}}/></Button>
    </div>
  )
}

export default TopButton