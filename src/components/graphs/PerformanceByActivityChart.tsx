//comment
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
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
      <RadarChart width={258} height={263} data={data}>
        <PolarGrid polarRadius={[12.2, 25, 50, 75, 100]} radialLines={false} stroke="#FFFFFF"/>
        <PolarAngleAxis dataKey="kind"/>
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7}/>
      </RadarChart>
    </div>
  );
}

export default PerformanceByActivityChart;
