import { Button, Card } from 'react-bootstrap';
import Styled from 'styled-components';
import { Colors } from './Constants';

export const GraphLabel = Styled.h5`
  color: ${Colors.PRIMARY};
  text-align: center;
`;

export const TableContainer = Styled.div`
  overflow: auto;
`;

export const DarkButton = Styled(Button)`
  background-color: ${Colors.PRIMARY} !important;
  height: 45px;
  border-radius: 10px !important;
`;

export const OrangeButton = Styled(Button)`
  background-color: ${Colors.ORANGE} !important;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 55px;
  border-width: 0 !important;
  border-color: ${Colors.ORANGE};
`;

export const PaddedCard = Styled(Card)`
  padding: 20px;
  border-radius: 10px !important;
`;

export const CardHeader = Styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;
