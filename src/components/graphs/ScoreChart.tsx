import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

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
      <h3>Score</h3>
      <p>
        <span className="score">{scoreData[0].value * 100}%</span> de votre
        objectif
      </p>
      <RadialBarChart
        width={258}
        height={263}
        innerRadius={80}
        barSize={10}
        data={scoreData}
        startAngle={180}
        endAngle={-180}
      >
        <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
        <RadialBar cornerRadius={20} background dataKey="value" />
      </RadialBarChart>
    </div>
  );
}

export default ScoreChart;
