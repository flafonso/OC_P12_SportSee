import { useState, useEffect, useRef } from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

function PerformanceByActivityChart({ performanceData }: { performanceData: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setcontainerWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setcontainerWidth(containerRef.current.offsetWidth);
      }
    }

    updateWidth();
    function cleanup() {
      window.removeEventListener('resize', updateWidth);
    }
    window.addEventListener('resize', updateWidth);
    return cleanup;
  }, []);

  const maxRadius = 0.3488 * containerWidth;
  // console.log(containerWidth);
  // console.log(maxRadius);
  const polarRadius = [
    maxRadius * 0.125,
    maxRadius * 0.25,
    maxRadius * 0.5,
    maxRadius * 0.75,
    maxRadius
  ];

  const dynamicFont = () => {
    if (containerWidth > 245) {
      return 12;
    }
    else if (containerWidth > 232){
      return 11;
    }
    else {
      return 9;
    }
  }

  const { kind, data } = performanceData;
  let reversedData = [];
  for (let i = data.length - 1; i >= 0; i--) {
    reversedData.push(data[i]);
  }

  const kindTranslated: { [key: string]: string } = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const kindNbrToStr = (props: { value: number; kind: number }) => {
    const kindStr: string = kind[props.kind] || "";
    if (kindTranslated[kindStr]) {
      return kindTranslated[kindStr];
    }
    return props.kind;
  };

  return (
    <div ref={containerRef} className="performance-by-activity">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={maxRadius}
          data={reversedData}
        >
          <PolarGrid
            polarRadius={polarRadius}
            radialLines={false}
            stroke="#FFFFFF"
          />
          <PolarAngleAxis
            dataKey={kindNbrToStr}
            tick={{ fontSize: dynamicFont(), fontWeight: 500, fill: "#FFFFFF" }}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceByActivityChart;
