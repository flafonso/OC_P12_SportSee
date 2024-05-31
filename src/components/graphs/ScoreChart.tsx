import { RadialBarChart, RadialBar, Legend } from "recharts";

function ScoreChart({ data }: { data: any }) {
  const scoreData = [{
    name: "Score",
    score: data.todayScore ? data.todayScore: data.score,
    fill: "#FF0000",
  }];
  console.log(`score : ${scoreData[0].score}`);

  return (
    <div className="score-chart">
      <RadialBarChart
        width={258}
        height={263}
        innerRadius="70%"
        outerRadius="80%"
        data={scoreData}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          dataKey="score"
        />
      </RadialBarChart>
    </div>
  );
}

export default ScoreChart;
