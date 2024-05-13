//comment
import {
  RadarChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  TooltipProps,
  DotProps,
} from "recharts";
// import {
//   ValueType,
//   NameType,
// } from "recharts/types/component/DefaultTooltipContent";

function PerformanceByActivityChart({ performanceData }: { performanceData: any }) {
  // console.log(performanceData);
  const { kind, data } = performanceData;
  console.log(kind);
  console.log(data);

  return (
    <div className="performance-by-activity">
      {/* <RadarChart width={258} height={263} data={data}></RadarChart> */}
    </div>
  );
}

export default PerformanceByActivityChart;
