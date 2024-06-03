import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  PolarAngleAxis,
} from "recharts";

function ScoreChart({ data }: { data: any }) {
  const scoreData = [
    {
      name: "Score",
      value: data.todayScore ? data.todayScore : data.score,
      fill: "#FF0000",
    },
  ];
  console.log(`score : ${scoreData[0].value}`);

  return (
    <div className="score-chart">
      <RadialBarChart
        width={258}
        height={263}
        innerRadius="70%"
        outerRadius="80%"
        data={scoreData}
        startAngle={180}
        endAngle={-180}
        // barSize={2}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          label={{ fill: "#666", position: "insideStart" }}
          background
          dataKey="value"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
}

export default ScoreChart;
