import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../../Assets/Images/Logo.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
        <Container fluid style={{backgroundColor:'#A01E1E'}}>
            <Row className='pt-3'>
                <Col xs={12} sm={6} md={6} xl={3}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Image src={logo} style={{width:'400px',height:'150px'}} className='img-fluid'/>
                <p className='text-light'>IJRMA is dedicated to advancing knowledge across diverse fields including Science and Technology, Engineering, Social Sciences, Humanities, Business, Health Sciences, and Environmental Studies. As a peer-reviewed, open-access journal, we provide a robust platform for researchers, scholars, and professionals worldwide to publish and access Cutting-edge Research. </p>
                </div>
                </Col>
                <Col xs={12} sm={6} md={6} xl={3}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <h4 style={{color:'yellow'}}>Services</h4>
                <ul style={{fontWeight:600,lineHeight:'35px',color:'white'}}>
 <li>High Impact Factor : 7.583</li>
<li>10+ Years of existence</li>
<li>7200+ Articles published</li>
<li>5000+ Citations</li>
<li>DOI for each Article</li>
<li>High Quality & High Reputation</li>

<li>Best Peer Reviewed Journal for Paper Publication</li>

 </ul>
 </div>
                </Col>
                <Col xs={12} sm={6} md={6} xl={3}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <h4 style={{color:'yellow'}}>Useful Links</h4>
                <ul style={{fontWeight:600,lineHeight:'35px',listStyle:'none'}}>
 <li><a href='/' style={{textDecoration:'none',color:'white'}}>Home</a></li>
 <li><a href='/about-us' style={{textDecoration:'none',color:'white'}}>About us</a></li>
 <li><a href='/guidelines' style={{textDecoration:'none',color:'white'}}>Guidelines</a></li>
 <li><a href='/submit-paper' style={{textDecoration:'none',color:'white'}}>Submit Papaer</a></li>
 <li><a href='/processing-charges' style={{textDecoration:'none',color:'white'}}>Processing Fee</a></li>

 <li><a href='/contact-us' style={{textDecoration:'none',color:'white'}}> Contact Us</a></li>

 </ul>
 </div>
                </Col>
                <Col xs={12} sm={6} md={6} xl={3}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <h4 style={{color:'yellow'}}>Get in touch</h4>
                <h6 style={{color:'#cccccc'}}>Phone</h6>
                <p style={{color:'white'}}>+91-9900900912</p>
                <h6 style={{color:'#cccccc'}}>Email</h6>
                <p style={{color:'white'}}>Sample@gmail.com</p>
                <h6 style={{color:'#cccccc'}}>Address</h6>
                <div style={{lineHeight:'10px',color:'white'}}>
                <p>4th Street,</p>
                <p>Sona Road</p>
                <p>Salem</p>
                </div>
                </div>
                </Col>
            </Row>
            <Row>
              <p style={{textAlign:'center',color:'#cccccc'}}>&copy;2020-2025 All Rights Reserved | IJRMA</p>
              <p style={{textAlign:'center',color:'#cccccc'}}>Designed by <a target='_blank' href='https://www.linkedin.com/in/krishnaprasad-srinivasan' style={{color:'yellow',fontWeight:600}}>KRISHNA PRASAD S</a></p>
            </Row>
        </Container>
    </div>
  )
}

export default Footer