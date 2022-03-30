import React from 'react';
import { PaddedCard } from 'shared/CommonStyles';
import { GenericAddressFieldsFragment } from 'types/gqlReactTypings.generated.d';
import imgCheck from '../static/images/check.png';

interface IProps {
  index: number;
  address: GenericAddressFieldsFragment;
  selected?: boolean;
  onClick?: () => void;
}

export const AddressCard: React.FC<IProps> = ({ address, index, selected, onClick }: IProps) => {
  return (
    <PaddedCard style={{ marginBottom: 10, opacity: (selected ? 1.0 : .6), cursor: 'pointer' }} onClick={onClick}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}>{address?.nickname ?? `Address #${index}`}</p>
          <p style={{ fontSize: 14, marginBottom: 0 }}>{address.street}</p>
        </div>
        {!!selected &&
          <img src={imgCheck} style={{ height: 11, width: 16 }} />
        }
      </div>
    </PaddedCard>
  )
}