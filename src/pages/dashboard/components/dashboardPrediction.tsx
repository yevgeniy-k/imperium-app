import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CardHeader, PaddedCard } from 'shared/CommonStyles';
import { Colors } from 'shared/Constants';
import imgStar from '../../../static/images/star.png';
import imgZap from '../../../static/images/zap.png';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from 'styled-components';
import { GenericAddressFieldsFragment, GenericRateRequestFieldsFragment } from 'types/gqlReactTypings.generated.d';
import { ShopRates } from './shopRates';

const IMG_ZERO_DIAMETER_PX = 50;
const NEEDLE_LENGTH = 150;
const NEEDLE_OFFSET = -1 * (NEEDLE_LENGTH / 2 + IMG_ZERO_DIAMETER_PX / 2);

const Needle = styled.span<{ rotation: number }>`
  width: 4px;
  height: 100px;
  border-radius: 5px;
  align-self: center;
  margin-top: ${NEEDLE_OFFSET}px;

  transform-origin: bottom;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  z-index: 0;

  background-color: black;
`;

interface IProps {
  currentMonthData: {
    min: number;
    max: number;
    avg: number;
  },
  address: GenericAddressFieldsFragment;
  rateRequests: GenericRateRequestFieldsFragment[];
}

export const DashboardPrediction: React.FC<IProps> = ({ currentMonthData, address, rateRequests }: IProps) => {
  const filledPercent = (currentMonthData.avg - currentMonthData.min) / (currentMonthData.max - currentMonthData.min);

  return (
    <Row style={{ paddingTop: 20 }}>
      <Col md={6} style={{ marginBottom: 20 }}>
        <PaddedCard>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
            <img src={imgStar} style={{ marginRight: 8 }} />
            <CardHeader style={{ marginBottom: 0 }}>RECOMMENDED</CardHeader>
          </div>
          <p style={{ marginBottom: 0 }}><span style={{ color: Colors.ORANGE }}>February</span> is the most optimum month to shop for rates</p>
        </PaddedCard>

        <PaddedCard style={{ marginTop: 20 }}>
          <CardHeader>SHOP RATES</CardHeader>
          <p style={{ marginBottom: 0 }}>Get the most optimum rates that will suit your needs.</p>
          <div style={{ marginTop: 20, width: 'fit-content', paddingRight: 20 }}>
            <ShopRates address={address} buttonOnly rateRequests={rateRequests} />
          </div>
        </PaddedCard>
      </Col>
      <Col md={6}>
        {address != null &&
          <PaddedCard>
            <CardHeader>PREDICTION COMPASS</CardHeader>

            <div style={{ paddingLeft: 40, paddingTop: 40, paddingRight: 40, position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                  <img src={imgZap} style={{ width: IMG_ZERO_DIAMETER_PX, height: IMG_ZERO_DIAMETER_PX, borderRadius: IMG_ZERO_DIAMETER_PX, zIndex: 10, backgroundColor: 'white' }} />
                </div>

                <div style={{ display: 'flex', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
                  <Needle rotation={-140 + (filledPercent * 280)} />
                </div>


                <CircularProgressbar
                  value={filledPercent * 100}
                  circleRatio={0.75}
                  styles={buildStyles({
                    rotation: 1 / 2 + 1 / 8,
                    strokeLinecap: "round",
                    pathColor: Colors.ORANGE,
                  })}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -40, fontSize: 10, fontWeight: 600 }}>
                <span>${currentMonthData.min.toFixed(2)}</span>
                <span>${currentMonthData.max.toFixed(2)}</span>
              </div>
              <div style={{ textAlign: 'center', marginTop: -15, fontSize: 10, fontWeight: 600 }}>
                <span style={{ fontSize: 22 }}>${currentMonthData.avg.toFixed(2)}<small>/kWh</small></span>
                <br />
                <span>TAG RELATED TO SAVINGS</span>
              </div>
            </div>
          </PaddedCard>
        }
      </Col>
    </Row >
  )
}