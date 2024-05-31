//comment
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  // PolarRadiusAxis,
  Radar,
} from "recharts";
// import {
//   ValueType,
//   NameType,
// } from "recharts/types/component/DefaultTooltipContent";

function PerformanceByActivityChart({
  performanceData,
}: {
  performanceData: any;
}) {
  // console.log(performanceData);
  const { kind, data } = performanceData;
  // console.log(kind);
  // console.log(data);
  let reversedData = [];
  for(let i = data.length - 1; i >= 0; i--) {
    reversedData.push(data[i]);
  }
  console.log(reversedData);

  const kindTranslated: {[key: string]: string} = {
    "cardio": "Cardio",
    "energy": "Energie",
    "endurance": "Endurance",
    "strength": "Force",
    "speed": "Vitesse",
    "intensity": "Intensité",
  };

  const kindNbrToStr = (props: { value: number; kind: number }) => {
    // console.log(props);
    const kindStr: string = kind[props.kind] || "";
    if (kindTranslated[kindStr]) {
      return kindTranslated[kindStr];
    }
    return props.kind;
  };

  return (
    <div className="performance-by-activity">
      <RadarChart outerRadius={90} width={258} height={263} data={reversedData}>
        <PolarGrid
          polarRadius={[11.25, 22.5, 45, 67.5, 90]}
          radialLines={false}
          stroke="#FFFFFF"
        />
        <PolarAngleAxis
          dataKey={kindNbrToStr}
          // dataKey="kind"
          tick={{ fontSize: 12, fontWeight: 500, fill: "#FFFFFF" }}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
}

export default PerformanceByActivityChart;
