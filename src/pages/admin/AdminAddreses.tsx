import React from 'react';
import { PageHeader } from 'components/PageHeader';
import { TableWrapper, GqlQueryRender, formatBoolean } from '@pbale/pb_utils'
import gql from 'graphql-tag';
import { TableContainer } from "shared/CommonStyles";
import { useAdminAddressesQuery, useAdminModifyAddressMutation } from 'types/gqlReactTypings.generated.d';
import { orderBy } from 'lodash';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AdminRoutes, getIdSluggedPath } from 'shared/Routes';

interface IProps {
  match?: any;
}

gql`
  query AdminAddresses {
    adminAddresses {
      ...GenericAddressFields,
      user { id, fullName}
    }
  }
`

export const AdminAddresses: React.FC<IProps> = ({ match }: IProps) => {
  const query = useAdminAddressesQuery();
  const [adminModifyAddressMutation] = useAdminModifyAddressMutation();

  const verifyAddress = (addressId: number, val: boolean) => () => {
    adminModifyAddressMutation({ variables: { modifyAddressInput: { verified: val, }, addressId } }).then(() => {
      query?.refetch();
    });
  }

  return (
    <>
      <PageHeader title='Addresses' />
      <TableContainer>
        <TableWrapper columns={[
          'Nickname (ID)',
          'User (ID)',
          'Street',
          'Unit',
          'Zip Code',
          'Is Verified?',
          'Est. Monthly Bill'
        ]}>
          <GqlQueryRender query={query}>
            {({ adminAddresses }) => {
              return (
                <tbody>
                  {orderBy(adminAddresses, 'id', 'desc')
                    .map(item => {
                      return (
                        <tr key={item.id}>
                          <td>{item.nickname} ({item.id})</td>
                          <td>{`${item.user?.fullName} (${item.user?.id})`}</td>
                          <td>{item.street}</td>
                          <td>{item.unit}</td>
                          <td>{item.zipCode}</td>
                          <td>{formatBoolean(item.verified)}</td>
                          <td>{`$${item.estimatedMonthlyBill}`.replace('$$', '$')}</td>
                          <td>
                            <span style={{ marginRight: 10 }}>
                              {!!item.verified ?
                                <Button variant='warning' size='sm' onClick={verifyAddress(item.id, false)}>Mark unverified</Button>

                                :
                                <Button variant='success' size='sm' onClick={verifyAddress(item.id, true)}>Mark verified</Button>
                              }
                            </span>
                            <Link to={getIdSluggedPath(AdminRoutes.ADDRESS, item.id)}><Button variant='primary' size='sm'>Modify</Button></Link>
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
