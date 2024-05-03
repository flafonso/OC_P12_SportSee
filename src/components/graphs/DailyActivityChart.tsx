import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";

function DailyActivityChart({ data }: { data: any }) {
  console.log(data);

  const renderTooltip = (custom: number) => {
    // const { payload } = props;
  
    return (
      <ul>
        {custom}
      </ul>
    );
  }

  return (
    <div className="daily-activity-chart">
      <h3>Activité quotidienne</h3>
      {/* <ResponsiveContainer width="100%" height="100%" className="daily-activity-chart"> */}
        <BarChart width={835} height={320} data={data} barSize={7} barGap={8} barCategoryGap={40} margin={{top: 23, right: 0, left: 23, bottom: 23}}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" dataKey="calories" hide={true} />
          <YAxis yAxisId="right" orientation="right" dataKey="kilogram" axisLine={false} domain={[75, 82]} />
          <Tooltip viewBox={{x: 0, y: 0, width: 40, height: 60}} labelStyle={{ backgroundColor: 'red' }} content={renderTooltip(12)}/>
          <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={70} wrapperStyle={{ right: 20 }}/>
          <Bar name="Poids (kg)" yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]}/>
          <Bar name="Calories brûlées (kCal)" yAxisId="left"dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]}/>
        </BarChart>
     {/* </ResponsiveContainer> */}
    </div>
  );
}

export default DailyActivityChart;
