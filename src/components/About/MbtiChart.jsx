import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { data } from "../../store/data";

function MbitiChart() {
  const chart = data.mbti;
  const colors = ["#C490E4", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <h4 className="chart-title">ISFJ - 용감한 수호자</h4>
      <div className="pie-chart">
        {chart.map((item, index) => (
          <>
            <PieChart width={85} height={110} key={index}>
              <Pie
                data={item}
                cx={42}
                cy={42}
                innerRadius={25}
                outerRadius={38}
                fill={colors[index]}
                paddingAngle={5}
                dataKey="value"
              ></Pie>
              {item.map((entry, index) => (
                <Cell key={`cell-${index}`}></Cell>
              ))}
              <text
                x={index === 1 || index === 2 ? "26%" : "37%"}
                y={105}
                fill="black"
                fontSize={12}
              >
                {item[0].name}
              </text>
              <text
                x={"41%"}
                y={"47%"}
                fontSize={"14px"}
                fill={colors[index]}
              >{`${item[0].value}%`}</text>
            </PieChart>
          </>
        ))}
      </div>
    </div>
  );
}
export default MbitiChart;
