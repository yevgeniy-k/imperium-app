import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from 'shared/Authentication';
import { OrangeButton } from 'shared/CommonStyles';
import { Colors } from 'shared/Constants';
import imgLogo from '../../static/images/imperium_logo.png';

export const PendingVerification: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div style={{ backgroundColor: Colors.PRIMARY, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container style={{ textAlign: 'center' }}>
        <img src={imgLogo} style={{ width: 80, marginBottom: 30 }} />
        <div style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
          <h2 style={{ color: 'white', lineHeight: 1.6, fontSize: 24 }}>Please gives us 24-48 business hours to verify credentials.</h2>
          <p style={{ color: 'white', fontSize: 16, marginTop: 15, lineHeight: '24px' }}> You will receive an email to <span style={{ color: Colors.ORANGE }}>{currentUser?.email}</span> once your verification has been completed</p>
          <a href='https://thisisimperium.com'><OrangeButton style={{ paddingLeft: 40, paddingRight: 40, marginTop: 20 }}>BACK TO HOME PAGE</OrangeButton></a>
        </div>
      </Container>
    </div>
  )
}