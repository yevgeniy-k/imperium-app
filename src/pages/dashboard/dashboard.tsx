import { GqlQueryRender } from '@pbale/pb_utils';
import { AddressCard } from 'components/addressCard';
import { compact, orderBy } from 'lodash';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from 'shared/Authentication';
import { PaddedCard } from 'shared/CommonStyles';
import { Colors } from 'shared/Constants';
import { isWaitingOnRates } from 'shared/Utilities';
import { GenericAddressFieldsFragment, useAddressesQuery, useRateRequestsQuery } from 'types/gqlReactTypings.generated.d';
import { DashboardAddAddress } from './components/dashboardAddAddress';
import { DashboardHeader } from './components/dashboardHeader';
import { DashboardMonthlyRates } from './components/dashboardMonthlyRates';
import { ShopRates } from './components/shopRates';


export const Dashboard: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = React.useState<GenericAddressFieldsFragment>();
  const addressesQuery = useAddressesQuery();
  const { currentUser } = React.useContext(AuthContext);
  const rateRequestsQuery = useRateRequestsQuery({ variables: { addressId: selectedAddress?.id }, skip: selectedAddress == null });

  const rateRequests = compact(rateRequestsQuery.data?.rateRequests);

  console.log("dashboard");
  return (
    <div>
      <DashboardHeader />
      {isWaitingOnRates(rateRequests) &&
        <div style={{ backgroundColor: Colors.ORANGE, padding: 8 }}>
          <Container>
            <p style={{ textAlign: 'center', margin: 0 }}>Rates will be updated within the next <b>2-5 Days.</b></p>
          </Container>
        </div>
      }
      <Container style={{ paddingTop: 30 }}>
        <Row>
          <Col md={3}>
            <GqlQueryRender
              query={addressesQuery}
            >
              {({ addresses }) => {
                const sorted = orderBy(addresses, item => item.verified, 'desc')
                const addressItems = sorted.map((address, index) => (
                  <AddressCard
                    key={address.id}
                    address={address}
                    index={index + 1}
                    selected={selectedAddress?.id === address.id}
                    onClick={() => setSelectedAddress(address)}
                  />
                ))

                if (selectedAddress == null && addressItems.length > 0) {
                  setSelectedAddress(sorted[0]);
                }

                return (
                  <div>
                    {addressItems}
                  </div>
                );
              }}
            </GqlQueryRender>

            <PaddedCard>
              <p style={{ marginBottom: 10 }}>{currentUser?.fullName}</p>
              <p style={{ marginBottom: 10 }}>{currentUser?.email}</p>
              <p style={{ marginBottom: 0 }}>{currentUser?.phoneNumber}</p>
            </PaddedCard>

            <DashboardAddAddress />

            <div style={{ marginTop: 20, color: '#686868', fontSize: 12 }}>
              <p style={{ fontWeight: 600, marginBottom: 5 }}>Need help?</p>
              <p>please contact us at <a href='mailto:support@thisisimperium.com' style={{ color: '#686868', textDecoration: 'underline' }}>support@thisisimperium.com</a> or <a href='tel: +1-614-845-1910' style={{ textDecoration: 'underline', color: '#686868' }}>+1-614-845-1910</a></p>
            </div>
          </Col>
          <Col md={9}>
            <h5 style={{ fontSize: 18, fontWeight: 600 }}>Hey {currentUser?.firstName},</h5>
            {!!selectedAddress?.verified ?
              <>
                <ShopRates address={selectedAddress} rateRequests={rateRequests} />
                <DashboardMonthlyRates address={selectedAddress} rateRequests={rateRequests} />
              </>
              :
              <p>This address is pending verification.<br />We'll get back to you soon with next steps!</p>
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}