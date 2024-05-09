import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  // TooltipProps,
} from "recharts";

function AverageSessionChart({ data }: { data: any }) {
  console.log(data);
  return (
    <div className="average-session-chart">
      <LineChart width={258} height={263} data={data}>
        <XAxis dataKey="day" />
        <YAxis dataKey="sessionLength" hide={false} domain={[-4, "dataMax"]} />
        <Line type="monotone" dataKey="sessionLength" dot={false} />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default AverageSessionChart;
