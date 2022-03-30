import React from 'react';
import { PageHeader } from 'components/PageHeader';
import { formatDate, formatUser, GqlQueryRender, hookStateChangeInjector, TableWrapper } from '@pbale/pb_utils'
import gql from 'graphql-tag';
import { AdminModifyAddressInput, RateQuote, RateQuoteInput, useAddressQuery, useAdminModifyAddressMutation, useAdminModifyRateQuotesMutation, useRateRequestsQuery } from 'types/gqlReactTypings.generated.d';
import { Button, Col, Row } from 'react-bootstrap';
import { getIdSlug } from 'shared/Routes';
import AppInput, { InputType } from 'components/AppInput';
import { isNumber, omit, orderBy } from 'lodash';
import { typedOmit } from 'shared/Utilities';

interface IProps {
  match?: any;
}

gql`
  query Address($addressId: Int!) {
    address(addressId: $addressId) {
      ...GenericAddressFields, internalNotes
      user { id, fullName}
    }
  }

  mutation AdminModifyRateQuotes($rateQuoteInputs: [RateQuoteInput!]!) {
    adminModifyRateQuotes(rateQuoteInputs: $rateQuoteInputs)
  }
`

export const AdminAddress: React.FC<IProps> = ({ match }: IProps) => {
  const [adminModifyAddressMutation] = useAdminModifyAddressMutation();
  const [adminModifyRateQuotesMutation] = useAdminModifyRateQuotesMutation();
  const [addressInput, setAddressInput] = React.useState<Partial<AdminModifyAddressInput>>({});
  const addressId = parseInt(getIdSlug(match));
  const query = useAddressQuery({ variables: { addressId } });
  const rateRequestsQuery = useRateRequestsQuery({ variables: { addressId } })

  const [rateQuotesInputs, setRateQuotesInputs] = React.useState<{ [id: number]: RateQuoteInput }>({});


  const address = query.data?.address;
  const addressValue = (key: keyof AdminModifyAddressInput) => {
    return addressInput[key] ?? address?.[key];
  }

  const save = () => {
    adminModifyAddressMutation({ variables: { modifyAddressInput: addressInput, addressId } }).then(() => {
      query?.refetch();
      window.alert("Successfully saved");
    });
  }

  const modifyQuotes = () => {
    adminModifyRateQuotesMutation({ variables: { rateQuoteInputs: Object.values(rateQuotesInputs) } }).then(() => {
      query?.refetch();
      rateRequestsQuery?.refetch();
      setRateQuotesInputs({});
      window.alert("Successfully saved");
    });
  }

  const changeAddress = hookStateChangeInjector<Partial<AdminModifyAddressInput>>(addressInput, setAddressInput);

  console.log(rateQuotesInputs);

  const changeQuote = (quote: Partial<RateQuoteInput & RateQuote> & { id: number }) => function <T extends keyof RateQuoteInput>(key: T, defaultVal?: RateQuoteInput[T]) {
    return (val: RateQuoteInput[T]) => {
      return setRateQuotesInputs({
        ...rateQuotesInputs,
        [quote.id]: {
          ...typedOmit(quote, ['createdAt', '__typename']),
          ...rateQuotesInputs[quote.id],
          [key]: (val == null || (isNumber(val) && isNaN(val))) ? defaultVal : val
        }
      })
    }
  }

  const isNewInput = (input?: Partial<RateQuoteInput>) => {
    return input?.id != null && input.id < 0;
  }

  return (
    <GqlQueryRender
      query={query}
    >
      {({ address }) => {

        return (
          <>
            <PageHeader title={`Address: ${address.street}, ${address.zipCode}`} />

            <Row>
              <Col md={2}>
                <AppInput type={InputType.TEXT}
                  label='Nickname' value={addressValue('nickname')} onChange={changeAddress('nickname')}
                />
              </Col>
              <Col md={2}>
                <AppInput type={InputType.TEXT}
                  label='Street' value={addressValue('street')} onChange={changeAddress('street')}
                />
              </Col>
              <Col md={1}>
                <AppInput type={InputType.TEXT}
                  label='Unit' value={addressValue('unit')} onChange={changeAddress('unit')}
                />
              </Col>
              <Col md={1}>
                <AppInput type={InputType.TEXT}
                  label='Zip Code' value={addressValue('zipCode')} onChange={changeAddress('zipCode')}
                />
              </Col>
              <Col md={1}>
                <AppInput type={InputType.TEXT}
                  label='Monthly Est.' value={addressValue('estimatedMonthlyBill')} onChange={changeAddress('estimatedMonthlyBill')}
                />
              </Col>
              <Col md={2}>
                <AppInput type={InputType.TEXT}
                  label='Bill Copy URL' value={addressValue('billCopyUrl')} onChange={changeAddress('billCopyUrl')}
                />
              </Col>
              <Col md={2}>
                <AppInput type={InputType.TEXT}
                  label='Internal Notes' value={addressValue('internalNotes')} onChange={changeAddress('internalNotes')}
                />
              </Col>
              <Col md={1}>
                <AppInput type={InputType.TOGGLE}
                  label='Verified' value={addressValue('verified')} onChange={changeAddress('verified')}
                />
              </Col>
            </Row>

            <Button variant='primary' onClick={save} style={{ width: '100%' }}>Save Address</Button>
            <hr />
            <h3>Rate Requests</h3>

            <GqlQueryRender
              query={rateRequestsQuery}
            >
              {({ rateRequests }) => {
                const rows = orderBy(rateRequests, item => item.createdAt, 'desc').map(item => {
                  const quoteInputs = orderBy(Object.values(rateQuotesInputs).filter(input => input.rateRequestId === item.id), input => input.id, 'desc');
                  const allQuotes: (RateQuote | RateQuoteInput)[] = [...item.rateQuotes, ...quoteInputs.filter(isNewInput)];

                  const quotes = allQuotes.map((quote, index) => {
                    const changer = changeQuote(quote);

                    const quoteValue = (key: keyof RateQuoteInput) => {
                      return rateQuotesInputs[quote.id]?.[key] ?? quote?.[key];
                    }

                    return (
                      <tr key={quote.id}>
                        <td>{('createdAt' in quote) ? `${formatDate(quote?.createdAt)} (${quote.id})` : 'New'}</td>
                        <td>
                          <AppInput type={InputType.NUMBER}
                            placeholder='Rate Cents*' value={quoteValue('rateCents')} onChange={changer('rateCents', 0)}
                          />
                        </td>
                        <td>
                          <AppInput type={InputType.TEXT}
                            placeholder='Company Name*' value={quoteValue('companyName')} onChange={changer('companyName')}
                          />
                        </td>
                        <td>
                          <AppInput type={InputType.TEXT}
                            placeholder='Duration*' value={quoteValue('duration')} onChange={changer('duration')}
                          />
                        </td>
                        <td>
                          <AppInput type={InputType.TOGGLE}
                            placeholder='Recommended?' value={quoteValue('recommended')} onChange={changer('recommended')}
                          />
                        </td>
                        <td>
                          <AppInput type={InputType.TOGGLE}
                            placeholder='Fixed Rate?' value={quoteValue('fixed')} onChange={changer('fixed')}
                          />
                        </td>
                        <td>
                          {isNewInput(quote) &&
                            <Button variant='danger' size='sm' onClick={() => {
                              setRateQuotesInputs(omit(rateQuotesInputs, quote.id))
                            }} style={{}}>Delete</Button>
                          }
                        </td>
                      </tr>
                    );
                  })

                  return (
                    <tr key={item.id}>
                      <td>{formatDate(item.createdAt)} ({item.id})</td>
                      <td>{formatUser(address.user)}</td>
                      <td>{item.selectedRateQuoteId ?? "N/A"}</td>
                      <td>
                        <TableWrapper columns={['Created At (ID)', 'Rate Cents*', 'Company*', 'Duration*', 'Recommended?', 'Fixed Rate?']}>
                          {quotes}
                        </TableWrapper>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Button variant='success' onClick={() => {
                            const newId = -1 * parseInt(new Date().getTime().toString().slice(-7));
                            setRateQuotesInputs({
                              ...rateQuotesInputs,
                              [newId]: { id: newId, rateRequestId: item.id, rateCents: 0, companyName: '', duration: '' }
                            })
                          }} style={{ marginRight: 5, width: '100%' }}>Add Quote</Button>
                          <Button variant='primary' onClick={modifyQuotes} style={{ marginLeft: 5, width: '100%' }}>Save Quotes</Button>
                        </div>
                      </td>
                    </tr>
                  )
                })

                return (
                  <TableWrapper columns={['Created At (ID)', 'User (ID)', 'Selected Quote', 'Quotes', '']}>
                    {rows}
                  </TableWrapper>
                )
              }}
            </GqlQueryRender>

          </>
        );
      }}

    </GqlQueryRender>
  );
}
