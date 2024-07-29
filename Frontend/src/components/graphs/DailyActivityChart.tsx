import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
  TooltipProps,
} from "recharts";

function DailyActivityChart({ data }: { data: any }) {
  const renderTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (!(active && payload && payload.length === 2)) {
      return null;
    }
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  };

  const foramtXAxis = (tick: string) => {
    const date = new Date(tick);
    return date.getDate().toString();
  };

  return (
    <div className="daily-activity-chart">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barSize={7}
          barGap={8}
          margin={{ top: 23, right: 30, left: 23, bottom: 28 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={foramtXAxis}
            domain={["dataMin", "dataMax"]}
            tickMargin={16}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            dataKey="calories"
            hide={true}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            dataKey="kilogram"
            axisLine={false}
            tickLine={false}
            type="number"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickMargin={30}
          />
          <Tooltip content={renderTooltip} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            height={70}
            wrapperStyle={{ right: 20 }}
          />
          <Bar
            name="Poids (kg)"
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivityChart;
