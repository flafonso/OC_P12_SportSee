import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

function ScoreChart({ data }: { data: any }) {
  const scoreData = [
    {
      name: "Score",
      value: data.score,
      fill: "#FF0000",
    },
  ];

  return (
    <div className="score-chart">
      <h3>Score</h3>
      <p>
        <span className="score">{data.score * 100}%</span> de votre
        objectif
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="65%"
          barSize={10}
          data={scoreData}
          startAngle={180}
          endAngle={-180}
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar cornerRadius={20} background dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreChart;
