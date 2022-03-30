import React, { useState, } from 'react';
import AppInput, { InputType } from 'components/AppInput';
import { OnboardingWrapper } from './components/onboardingWrapper';
import { devEntry, hookStateChangeInjector } from 'shared/Utilities';
import { AddressInput, useAddAddressMutation } from 'types/gqlReactTypings.generated.d';
import { random } from 'lodash';
import { DarkButton } from 'shared/CommonStyles';

interface IProps {
  embedded?: boolean;
}

export const AddressEntry: React.FC<IProps> = ({ embedded }: IProps) => {
  const [addressInput, setAddressInput] = useState<AddressInput>((devEntry<AddressInput>({
    street: '123 Sesame Street',
    unit: `${random(1, 100)}`,
    zipCode: '91313',
    estimatedMonthlyBill: `$${random(100, 10000)}`
  }) ?? {}) as AddressInput);
  const [addAddressMutation] = useAddAddressMutation();
  const changeInput = hookStateChangeInjector<AddressInput>(addressInput, setAddressInput);

  const submit = () => {
    console.log('submit', addressInput);

    addAddressMutation({ variables: { addressInput } }).then(() => {
      window.location.reload();
    });
  }

  const fields = (
    <>
      <AppInput type={InputType.TEXT} onChange={changeInput('nickname')} placeholder='Address Nickname' value={addressInput.nickname} />
      <AppInput type={InputType.TEXT} onChange={changeInput('street')} placeholder='Street Address' value={addressInput.street} />
      <AppInput type={InputType.TEXT} onChange={changeInput('unit')} placeholder='Apartment / Office Number' value={addressInput.unit} />
      <AppInput type={InputType.TEXT} onChange={changeInput('zipCode')} placeholder='Zip Code' value={addressInput.zipCode} />
      <AppInput type={InputType.TEXT} onChange={changeInput('estimatedMonthlyBill')} placeholder='Your monthly estimated bill' value={addressInput.estimatedMonthlyBill} />
      <div style={{ textAlign: 'left', marginBottom: 10, marginTop: -10 }}>
        <span style={{ opacity: .5, fontSize: 10 }}>text picture of bill to +1-614-845-1910</span>
      </div>
    </>
  )

  if (!!embedded) {
    return (
      <>
        { fields}
        <DarkButton onClick={submit} style={{ width: '100%', cursor: 'pointer' }}>Submit</DarkButton>
      </>
    )
  }

  return (
    <OnboardingWrapper
      title={"Help us calculate what's best for you"}
      action={{ title: 'Submit', onClick: submit }}
    >
      {fields}
    </OnboardingWrapper >
  )
}