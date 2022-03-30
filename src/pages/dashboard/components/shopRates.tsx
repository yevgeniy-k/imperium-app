import React from 'react';

import { OrangeButton } from 'shared/CommonStyles';
import { Colors } from 'shared/Constants';
import { GenericAddressFieldsFragment, GenericRateRequestFieldsFragment, useRequestRatesMutation } from 'types/gqlReactTypings.generated.d';
import gql from 'graphql-tag';
import { isWaitingOnRates, needsRateSelection } from 'shared/Utilities';
import { ShopRatesModal } from './shopRatesModal';

interface IProps {
  address: GenericAddressFieldsFragment;
  rateRequests: GenericRateRequestFieldsFragment[];
  buttonOnly?: boolean;
}

gql`
  mutation RequestRates($addressId: Int!) {
    requestRates(addressId: $addressId)
  }
`;

export const ShopRates: React.FC<IProps> = ({ address, buttonOnly, rateRequests }: IProps) => {
  const [requestRatesMutation] = useRequestRatesMutation({ variables: { addressId: address.id } });
  const [showRates, setShowRates] = React.useState<boolean>();
  const [loading, setLoading] = React.useState<boolean>();

  const onShopRates = () => {
    setLoading(true);
    requestRatesMutation().then(() => {
      setLoading(false);
      window.alert("Request received.  You'll hear from us soon!");
      window.location.reload();
    }).finally(() => {
      setLoading(false);
    });
  }

  const rateModal = <ShopRatesModal
    address={address}
    show={showRates}
    rateRequests={rateRequests}
    onClose={() => setShowRates(false)}
  />;

  const getButton = () => {
    if (!!isWaitingOnRates(rateRequests)) {
      return null;
    }

    if (!!needsRateSelection(rateRequests)) {
      return (
        <OrangeButton
          disabled={!!loading}
          style={{ height: 45, margin: 0, fontSize: 14 }}
          onClick={() => setShowRates(true)}> VIEW NEW RATES</OrangeButton >
      );
    }

    return (
      <OrangeButton
        disabled={!!loading}
        style={{ height: 45, margin: 0, fontSize: 14 }}
        onClick={(onShopRates)}>SHOP RATES</OrangeButton>
    );
  }

  const button = getButton();
  if (!!buttonOnly) {
    return (
      <>
        {button}
        {rateModal}
      </>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <p style={{ fontSize: 18, margin: 0, paddingTop: 0, paddingBottom: 0, borderRadius: 3 }}>
          Your contract end date is in <span style={{ color: Colors.ORANGE, fontWeight: 500 }}>6 months</span><br />
          most optimal procurement date in <span style={{ color: Colors.ORANGE, fontWeight: 500 }}>5 months</span><br />
        </p>
      </div>
      <div>
        {button}
      </div>
      {rateModal}
    </div>
  )
}