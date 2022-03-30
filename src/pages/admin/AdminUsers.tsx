import React from 'react';
import { PageHeader } from 'components/PageHeader';
import { TableWrapper, GqlQueryRender, formatDate, formatBoolean } from '@pbale/pb_utils'
import gql from 'graphql-tag';
import { TableContainer } from "shared/CommonStyles";
import { useAdminModifyUserMutation, useAdminUsersQuery } from 'types/gqlReactTypings.generated.d';
import { Button } from 'react-bootstrap';
import { orderBy } from 'lodash';

interface IProps {
  match?: any;
}

gql`
  query AdminUsers {
    adminUsers {
      id
      email
      phoneNumber
      fullName
      admin
      verified
      createdAt
    }
  }
`

export const AdminUsers: React.FC<IProps> = ({ match }: IProps) => {
  const usersQuery = useAdminUsersQuery();
  const [adminModifyUserMutation] = useAdminModifyUserMutation();

  const verifyUser = (userId: string, val: boolean) => () => {
    adminModifyUserMutation({ variables: { modifyUserInput: { verified: val, }, userId } }).then(() => {
      usersQuery.refetch();
    });
  }

  return (
    <>
      <PageHeader title='App Users' />
      <TableContainer>
        <TableWrapper columns={[
          'Name (ID)',
          'Email',
          'Phone',
          'Is Admin?',
          'Created At',
          'Actions'
        ]}>
          <GqlQueryRender query={usersQuery}>
            {({ adminUsers }) => {
              return (
                <tbody>
                  {orderBy(adminUsers, item => item.fullName, 'asc')
                    .map(user => {
                      return (
                        <tr key={user.id}>
                          <td>{`${user.fullName} (${user.id})`}</td>
                          <td>{user.email}</td>
                          <td>{user.phoneNumber}</td>
                          <td>{formatBoolean(user.admin)}</td>
                          <td>{formatDate(user.createdAt)}</td>
                          <td>
                            {!!user.verified ?
                              <Button variant='warning' size='sm' onClick={verifyUser(user.id, false)}>Mark unverified</Button>

                              :
                              <Button variant='success' size='sm' onClick={verifyUser(user.id, true)}>Mark verified</Button>
                            }
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
