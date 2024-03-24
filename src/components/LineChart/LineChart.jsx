import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const marksData = [
    { student: "Alice", physics: 75, chemistry: 82, english: 78 },
    { student: "Bob", physics: 80, chemistry: 78, english: 75 },
    { student: "Charlie", physics: 85, chemistry: 70, english: 88 },
    { student: "David", physics: 72, chemistry: 90, english: 70 },
    { student: "Eva", physics: 90, chemistry: 85, english: 93 },
    { student: "Frank", physics: 68, chemistry: 76, english: 65 },
    { student: "Grace", physics: 78, chemistry: 82, english: 78 },
    { student: "Henry", physics: 83, chemistry: 88, english: 85 },
    { student: "Ivy", physics: 76, chemistry: 79, english: 90 },
    { student: "Jack", physics: 88, chemistry: 93, english: 79 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={marksData}>
        <XAxis dataKey="student" />
        <YAxis></YAxis>
        <Line dataKey={"physics"} stroke="red"></Line>
        <Line dataKey={"chemistry"} stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
