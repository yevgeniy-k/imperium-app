import React from 'react';
import { CardHeader, PaddedCard } from 'shared/CommonStyles';
import { Colors } from 'shared/Constants';
import { Modal } from 'react-bootstrap';
import Styled from 'styled-components';
import { AddressEntry } from 'pages/onboarding/addressEntry';
import imgExit from '../../../static/images/exit.png';

export const ModalStyled = Styled(Modal) <{ width?: string | number }>`
  background: rgba(1,87,155,.43);
  padding-top: 100px;

  .modal-dialog {
    border-radius: 25px;
    width: ${(props) => props.width ?? '400px'};
    max-width: 100%;
    margin-top: 100px;
    text-align: center;
  }
`;

export const ModalContent = Styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  overflow: hidden;

  padding-bottom: 10px;
`;

export const DashboardAddAddress: React.FC = () => {
  const [showAdd, setShowAdd] = React.useState<boolean>();
  return (
    <>
      <PaddedCard style={{ marginTop: 20, backgroundColor: 'transparent', borderStyle: 'dashed !important', padding: 15 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CardHeader>ADD ANOTHER ADDRESS</CardHeader>
          <a style={{ color: Colors.ORANGE, fontSize: 12, cursor: 'pointer' }} onClick={() => setShowAdd(true)}>ADD</a>
        </div>
        <p style={{ fontSize: 12, marginBottom: 0 }}>Add more addresses to keep track of your energy savings.</p>
      </PaddedCard>

      <ModalStyled show={showAdd} onHide={() => setShowAdd(false)}>
        <img src={imgExit}
          onClick={() => setShowAdd(false)}
          style={{ width: 40, position: 'absolute', zIndex: 10, top: -20, right: -20, cursor: 'pointer' }}
        />
        <Modal.Body style={{ padding: 20, textAlign: 'left' }}>
          <ModalContent>
            <AddressEntry embedded={true} />
          </ModalContent>
        </Modal.Body>
      </ModalStyled>
    </>
  )
}