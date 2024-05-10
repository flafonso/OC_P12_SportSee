import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  TooltipProps,
} from "recharts";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

function AverageSessionChart({ data }: { data: any }) {
  console.log(data);
  const renderTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
    console.log(payload);
    if (!(active && payload && payload.length)) {
      return null;
    }
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  };

  return (
    <div className="average-session-chart">
      <h3>Durée moyenne des sessions</h3>
      <LineChart width={258} height={263} data={data} margin={{ top: 77}}>
        <XAxis dataKey="day" tickLine={false} axisLine={false} padding={{ left: 12, right: 12 }} />
        <YAxis dataKey="sessionLength" hide={true} domain={[-4, "dataMax"]} />
        <defs>
          <linearGradient id="gradientLine">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
            <stop offset="81%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <Line
          type="monotone"
          dataKey="sessionLength"
          dot={false}
          stroke="url(#gradientLine)"
          strokeWidth={2}
        />
        <Tooltip content={renderTooltip} />
      </LineChart>
    </div>
  );
}

export default AverageSessionChart;
