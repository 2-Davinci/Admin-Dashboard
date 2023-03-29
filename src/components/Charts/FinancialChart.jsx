import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Tooltip,
  Zoom,
  Crosshair,
  CandleSeries,
} from "@syncfusion/ej2-react-charts";
import {
  FinancialPrimaryXAxis,
  financialChartData,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
const FinancialChart = ({ width, height }) => {
  const legendSettings = { visible: false };
  return (
    <ChartComponent
      id="charts"
      width={width}
      height={height}
      primaryYAxis={FinancialPrimaryYAxis}
      tooltip={{ enable: true }}
      legendSettings={legendSettings}
      title="Financial Rate">
      <Inject services={[CandleSeries, Tooltip, Category, Crosshair, Zoom]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={financialChartData}
          xName="x"
          yName="low"
          name="Financail Rate"
          type="Candle"
          low="low"
          high="high"
          open="open"
          close="close"
          bearFillColor="##e56590"
          bullFillColor="#f8b883"></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default FinancialChart;
