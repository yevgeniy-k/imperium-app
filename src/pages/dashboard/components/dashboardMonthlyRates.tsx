import React from 'react';
import { PaddedCard } from 'shared/CommonStyles';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from "highcharts/highstock";
import moment from 'moment';
import { Colors } from 'shared/Constants';
import { DashboardPrediction } from './dashboardPrediction';
import { GenericAddressFieldsFragment, GenericRateRequestFieldsFragment } from 'types/gqlReactTypings.generated.d';

const MONTH_DATA = {
  'Jan': { min: 20.48069355, max: 25.33170138, avg: 22.27425594 },
  'Feb': { min: 22.40506874, max: 25.4967805, avg: 23.94992652 },
  'Mar': { min: 21.12840789, max: 25.95100392, avg: 23.50086074 },
  'Apr': { min: 19.01522320, max: 24.05416806, avg: 22.04660302 },
  'May': { min: 18.43406762, max: 24.15810628, avg: 21.68366793 },
  'Jun': { min: 18.14689584, max: 25.16319034, avg: 21.31010593 },
  'Jul': { min: 21.78263217, max: 26.70807696, avg: 24.97644567 },
  'Aug': { min: 21.27989124, max: 26.21632077, avg: 24.10078095 },
  'Sep': { min: 18.28624455, max: 25.4216109, avg: 21.43161089 },
  'Oct': { min: 17.20936906, max: 25.54853926, avg: 21.2394165 },
  'Nov': { min: 17.72822396, max: 24.59967011, avg: 20.79391187 },
  'Dec': { min: 19.07317916, max: 25.4112783, avg: 21.44468503 },
};

const POINT_SPREAD = .25;

interface IProps {
  address: GenericAddressFieldsFragment;
  rateRequests: GenericRateRequestFieldsFragment[];
}

export const DashboardMonthlyRates: React.FC<IProps> = ({ address, rateRequests }: IProps) => {
  const month = (month: keyof typeof MONTH_DATA) => {
    const { max, min, avg } = MONTH_DATA[month];
    // Date, open, high, low. close
    return [moment(`${month} 2020`).toDate().getTime(), avg + POINT_SPREAD, max, min, avg - POINT_SPREAD];
  }

  const currentMonthData = MONTH_DATA[Object.keys(MONTH_DATA)[moment().get('month')]]

  const options: Highcharts.Options = {
    chart: {
      marginRight: 20
    },
    credits: {
      enabled: false,
    },
    title: {
      text: undefined
    },
    yAxis: {
      title: undefined,
      gridLineWidth: 1,
    },
    xAxis: {
      type: 'datetime',
      gridLineWidth: 0,
      tickInterval: 24 * 3600 * 1000 * 31,
      dateTimeLabelFormats: {
        month: '%b',
      },
      labels: {
        step: 1
      }
    },
    legend: {
      width: 0,
    },
    tooltip: {
      shared: true,
      changeDecimals: 2,
      useHTML: true,
      xDateFormat: '%B',
      positioner: function (boxWidth, boxHeight, point) {
        return { x: point.plotX - 25, y: point.plotY - 20 };
      },
      backgroundColor: '#fffffffe',
      borderWidth: 0,
      padding: 10,
      borderRadius: 8,
      headerFormat: `<b style='margin-bottom: 10px'>{point.key}</b><table>`,
      pointFormatter: function () {
        const { color } = this.series as any;
        const { open, high, low } = this as any;
        return `
        <tr style="margin-top: 10px">
          <td style="color: black; margin-right: 5px;">Low: </td>
          <td style="text-align: right"><b>$${low.toFixed(2)}/kWh</b></td>
        </tr>
        <tr>
          <td style="color: black">High: </td>
          <td style="text-align: right"><b>$${high.toFixed(2)}/kWh</b></td>
        </tr>
        <tr>
          <td style="color: ${color};">Average: </td>
          <td style="text-align: right"><b style="color: ${color};">$${(open - POINT_SPREAD).toFixed(2)}/kWh</b></td>
        </tr>
        `;
      },
      footerFormat: '</table>',
      valueDecimals: 2,
      distance: 20
    },
    series: [{
      type: 'candlestick',
      name: 'Energy Price',
      showInLegend: false,
      color: Colors.ORANGE,
      upColor: Colors.ORANGE,
      edgeColor: Colors.PURPLE,
      upLineColor: Colors.PURPLE,
      ['lineColor' as any]: Colors.PURPLE,
      negativeColor: Colors.PURPLE,
      // pointWidth: 10,
      // lineWidth: 5,
      // pointStart: 50,
      // edgeWidth: 20,
      // pointPadding: 10,
      lineWidth: 3,
      pointWidth: 10,
      data: Object.keys(MONTH_DATA).map((key: any) => month(key)),
      dataGrouping: {
        units: [["month", [1, 2, 3, 4]]]
      }
    }]
  }

  return (
    <>
      {address != null &&
        <PaddedCard style={{ marginTop: 40, overflow: 'visible' }}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            style={{ visible: true }}
          />

        </PaddedCard>
      }
      <DashboardPrediction currentMonthData={currentMonthData} address={address} rateRequests={rateRequests} />
    </>
  )
}