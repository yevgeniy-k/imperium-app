import { GqlQueryRender } from '@pbale/pb_utils';
import { MetricCard } from 'components/MetricCard';
import gql from 'graphql-tag';
import React from 'react';
import { Row } from 'react-bootstrap';
import { AdminRoutes } from 'shared/Routes';
import { useAdminMetricsQuery } from 'types/gqlReactTypings.generated.d';
import { PageHeader } from '../../components/PageHeader';

gql`
  query AdminMetrics {
    adminMetrics {
      userCount 
    }
  } 
`

export const AdminDashboard: React.FC = () => {
  const adminMetricsQuery = useAdminMetricsQuery();

  return (
    <div >
      <PageHeader title='Dashboard' />

      <GqlQueryRender query={adminMetricsQuery}>
        {({
          adminMetrics: { userCount, },
        }) => {

          return (
            <div>
              <Row>
                <MetricCard color='success' faIcon='user' label='App Users' value={userCount} to={AdminRoutes.USERS} />
              </Row>
            </div>
          );
        }}
      </GqlQueryRender>
    </div >
  );
}
