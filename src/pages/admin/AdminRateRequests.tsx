import React from 'react';
import { PageHeader } from 'components/PageHeader';
import { TableWrapper, GqlQueryRender, formatDate, formatBoolean, getIdSluggedPath } from '@pbale/pb_utils'
import { TableContainer } from "shared/CommonStyles";
import { useRateRequestsQuery } from 'types/gqlReactTypings.generated.d';
import { orderBy } from 'lodash';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AdminRoutes } from 'shared/Routes';

interface IProps {
  match?: any;
}

export const AdminRateRequests: React.FC<IProps> = ({ match }: IProps) => {
  const query = useRateRequestsQuery();

  return (
    <>
      <PageHeader title='Rate Requests' />
      <TableContainer>
        <TableWrapper columns={[
          'ID',
          'Address ID',
          'Quotes Provided?',
          'Rate Selected?',
          'Created At'
        ]}>
          <GqlQueryRender query={query}>
            {({ rateRequests }) => {
              return (
                <tbody>
                  {orderBy(rateRequests, 'id', 'desc')
                    .map(item => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.addressId}</td>
                          <td>{formatBoolean(item.rateQuotes.length > 0)}</td>
                          <td>{formatBoolean(item.selectedRateQuoteId != null)}</td>
                          <td>{formatDate(item.createdAt)}</td>
                          <td>
                            <Link to={getIdSluggedPath(AdminRoutes.ADDRESS, item.addressId)}><Button variant='primary'>Modify</Button></Link>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              )
            }}
          </GqlQueryRender>
        </TableWrapper>
      </TableContainer>
    </>
  );
}
