import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  StackingColumnSeries,
  DateTime,
  Tooltip,
  DataLabel,
  Legend,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
  barChartData,
} from "../../data/dummy";
const BarChart = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="Charts"
      title="Inflation Rate"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      legendSettings={{ background: "white" }}
      tooltip={{ enable: true }}>
      <Inject
        services={[
          Legend,
          Category,
          ColumnSeries,
          DateTime,
          Tooltip,
          DataLabel,
        ]}
      />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} d />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default BarChart;
