import { Card, CardContent } from "./ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ChartCard = ({ title, type, data, dataKey }) => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold">{title}</h2>
        <ResponsiveContainer width="100%" height={200}>
          {type === "bar" && (
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey={dataKey} fill="#8884d8" />
            </BarChart>
          )}
          {type === "pie" && (
            <PieChart>
              <Pie data={data} dataKey={dataKey} nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
          {type === "line" && (
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
            </LineChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
