import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AdminSidebar } from './components/AdminSidebar';
import { AdminDashboard } from './AdminDashboard';
import { AdminRoutes } from 'shared/Routes';
import { AdminUsers } from './AdminUsers';
import { AdminAddresses } from './AdminAddreses';
import { AdminRateRequests } from './AdminRateRequests';
import { AdminAddress } from './AdminAddress';

interface IProps {
  match?: any;
}

export const AdminRouter: React.FC<IProps> = ({ match }: IProps) => {
  return (
    <AdminSidebar match={match}>
      <Switch>
        <Route path={AdminRoutes.USERS} component={AdminUsers} />
        <Route path={AdminRoutes.ADDRESS} component={AdminAddress} />
        <Route path={AdminRoutes.ADDRESSES} component={AdminAddresses} />
        <Route path={AdminRoutes.RATE_REQUESTS} component={AdminRateRequests} />

        <Route path={AdminRoutes.HOME} component={AdminDashboard} />
      </Switch>
    </AdminSidebar>
  )
}
