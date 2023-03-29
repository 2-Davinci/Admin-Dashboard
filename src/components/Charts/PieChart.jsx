import React from "react";
import {
  AccumulationChartComponent,
  ChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  SeriesCollectionDirective,
  PieSeries,
  SeriesDirective,
  Inject,
  Category,
  StackingColumnSeries,
  Tooltip,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";
const PieChart = ({ width, height, borderRadius }) => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      width={width}
      height={height}
      style={{ borderRadius: borderRadius }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373e" : "#fff"}
      id="charts"
      title="Inflation Rate Pie ">
      <Inject
        services={[
          PieSeries,
          AccumulationLegend,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
