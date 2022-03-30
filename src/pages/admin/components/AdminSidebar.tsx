import React, { ReactNode } from 'react';
import { Sidebar } from 'components/Sidebar';
import { Navbar } from 'components/Navbar';
import { NavbarLink } from 'components/NavbarLink';
import { AdminRoutes } from 'shared/Routes';

interface IProps {
  children?: ReactNode | ReactNode[]
  match?: any;
}

export const AdminSidebar: React.FC<IProps> = ({ children, match }: IProps) => {

  return (
    <div id='wrapper'>
      <Sidebar>

        <NavbarLink label='Dashboard' active faIcon='tachometer-alt' route={AdminRoutes.HOME} />

        <hr className="sidebar-divider" />
        <NavbarLink label='Users' active faIcon='user' route={AdminRoutes.USERS} />
        <NavbarLink label='Addresses' active faIcon='map-marker' route={AdminRoutes.ADDRESSES} />
        <NavbarLink label='Rate Requests' active faIcon='inbox' route={AdminRoutes.RATE_REQUESTS} />

      </Sidebar>

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar match={match} />

          <div className="container-fluid">
            {children}
          </div>
        </div>
      </div>
    </div >
  )
}
