import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

function MbitiChart() {
  const data = [
    {
      subject: "내향형",
      isfj: 67,
      B: 100,
      fullMark: 100,
    },

    {
      subject: "현실주의형",
      isfj: 73,
      B: 100,
      fullMark: 100,
    },
    {
      subject: "원칙주의자형",
      isfj: 64,
      B: 100,
      fullMark: 100,
    },
    {
      subject: "계획형",
      isfj: 75,
      B: 100,
      fullMark: 100,
    },
    {
      subject: "신중형",
      isfj: 61,
      B: 100,
      fullMark: 100,
    },
  ];
  return (
    <div>
      <RadarChart
        cx={145}
        cy={145}
        outerRadius={70}
        width={290}
        height={290}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />

        <Radar name="mbti" dataKey="isfj" fill="#174dff" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}
export default MbitiChart;
