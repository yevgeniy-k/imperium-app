import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from 'shared/Authentication';
import { Colors } from 'shared/Constants';
import { AdminRoutes, GeneralRoutes } from 'shared/Routes';
import imgLogo from '../../../static/images/imperium_logo.png';

export const DashboardHeader: React.FC = () => {
  const { currentUser, signOut } = useContext(AuthContext);
  return (
    <div style={{ backgroundColor: Colors.PRIMARY, paddingTop: 15, paddingBottom: 15 }}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to={GeneralRoutes.DASHBOARD}><img src={imgLogo} style={{ width: 53 }} /></Link>
          <div>
            {!!currentUser?.admin && <Link to={AdminRoutes.HOME} style={{ color: 'white', marginRight: 30 }}>ADMIN</Link>}
            <a onClick={signOut} style={{ color: 'white', cursor: 'pointer' }}>LOG OUT</a>
          </div>
        </div>
      </Container>
    </div>
  )
}