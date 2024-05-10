import { LineChart, XAxis, YAxis, Tooltip, Line, TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

function AverageSessionChart({ data }: { data: any }) {
  console.log(data);
  const renderTooltip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    if (!(active && payload && payload.length)) {
      return null;
    }
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  };

  const convertNbrToDay: Record<number, string> = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const foramtXAxis = (tick: number) => {
    return tick >= 1 && tick <= 7 ? convertNbrToDay[tick] : String(tick);
  };

  return (
    <div className="average-session-chart">
      <h3>Durée moyenne des sessions</h3>
      <LineChart
        width={258}
        height={263}
        data={data}
        margin={{ top: 77, bottom: 10 }}
      >
        <XAxis
          dataKey="day"
          tickLine={false}
          tickFormatter={foramtXAxis}
          axisLine={false}
          padding={{ left: 14, right: 14 }}
        />
        <YAxis dataKey="sessionLength" hide={true} domain={[-4, "dataMax"]} />
        <defs>
          <linearGradient id="gradientLine">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.88} />
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
