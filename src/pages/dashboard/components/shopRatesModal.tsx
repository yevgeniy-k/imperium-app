import React from 'react';

import { GenericAddressFieldsFragment, GenericRateRequestFieldsFragment, RateQuote, useSelectQuoteMutation } from 'types/gqlReactTypings.generated.d';
import { ModalContent, ModalStyled } from './dashboardAddAddress';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import imgExit from '../../../static/images/exit.png';
import Styled from 'styled-components';
import { getLatestRate } from 'shared/Utilities';
import { Colors } from 'shared/Constants';
import { OrangeButton } from 'shared/CommonStyles';
import gql from 'graphql-tag';

interface IProps {
  address: GenericAddressFieldsFragment;
  rateRequests: GenericRateRequestFieldsFragment[];
  show?: boolean;
  onClose: () => void;
}

const SelectionCard = Styled.div`
  position: relative;
  border: 1px solid #CBCBCB;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }

  &.selected {
    border-color: ${Colors.ORANGE};
  }
`

gql`
  mutation SelectQuote($quoteId: Int!) {
    selectQuote(quoteId: $quoteId)
  }

`


export const ShopRatesModal: React.FC<IProps> = ({ show, address, rateRequests, onClose }: IProps) => {
  const [selectedQuote, setSelectedQuote] = React.useState<RateQuote>();
  const [confirmed, setConfirmed] = React.useState<boolean>();
  const [selectQuoteMutation] = useSelectQuoteMutation();
  const [loading, setLoading] = React.useState<boolean>();

  const latestRate = getLatestRate(rateRequests);
  const cards = latestRate?.rateQuotes.map(quote => (
    <Col md={6} key={quote.id}>
      <SelectionCard onClick={() => setSelectedQuote(quote)} className={selectedQuote?.id === quote.id ? 'selected' : ''}>
        {!!quote.recommended && (
          <p style={{
            padding: '5px 10px', margin: 0, backgroundColor: Colors.PURPLE, color: 'white',
            fontSize: 12, borderRadius: 3,
            position: 'absolute', top: -17
          }}
          >
            Recommended
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{quote.companyName}</p>
            <p style={{ margin: 0, marginTop: 3, fontSize: 16 }}>{!!quote.fixed ? 'Fixed' : 'Variable'}, {quote.duration}</p>
          </div>
          <p style={{ margin: 0, fontSize: 22, fontWeight: 600 }}>${quote.rateCents}/kWh</p>
        </div>
      </SelectionCard>
    </Col>
  ));

  const onSelectRate = () => {
    if (selectedQuote == null) {
      return;
    }

    setLoading(true);
    selectQuoteMutation({ variables: { quoteId: selectedQuote.id } }).then(() => {
      setConfirmed(true);
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <ModalStyled width='900px' show={show} onHide={onClose} style={{ background: 'rgba(1,1,1,.43)' }}>
      <img src={imgExit}
        onClick={onClose}
        style={{ width: 40, position: 'absolute', zIndex: 10, top: -20, right: -20, cursor: 'pointer' }}
      />
      <Modal.Body style={{ padding: 20, textAlign: 'left' }}>
        <ModalContent>
          <div style={{ textAlign: 'center' }}>
            {!!confirmed ?
              <>
                <div style={{ height: 400, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ margin: 0, }}>
                    You are all set!<br />
                    Thank you for using Imperium,
                  </h4>
                  <p style={{ margin: 0, marginTop: 15 }}>You will receive a confirmation email with all the required details.</p>
                </div>
              </>
              :
              <>
                <h4 style={{ fontSize: 24, marginTop: 15 }}>Your Rates</h4>
                <p style={{ fontSize: 16 }}>View the below rates we found for you and select the one you prefer to lock in your rate.</p>

                <Container>
                  <Row>
                    {cards}
                  </Row>
                </Container>

                {selectedQuote != null &&
                  <OrangeButton
                    disabled={loading}
                    onClick={onSelectRate}
                    style={{ fontWeight: 600, height: 50, fontSize: 15, paddingLeft: 30, paddingRight: 30, marginTop: 20 }}>CONFIRM SELECTION</OrangeButton>
                }
              </>
            }
          </div>
        </ModalContent>
      </Modal.Body>
    </ModalStyled>
  )
}