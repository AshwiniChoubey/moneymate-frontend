import React, { useEffect, useState } from "react";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareExpenseBarChartData } from "../../utils/helper";

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
   const result = prepareExpenseBarChartData(data);
   setChartData(result);

    return () => {};
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg">Last 30 Days Expenses</h5>
      </div>
      

      <CustomBarChart
        data={chartData}
         xAxisKey={"category"} // Use category as the X-axis key if desired, or 'name' if data is structured differently
         //tooltipLabelKey={"category"} // Use category as the label in the tooltip
      />
    </div>
  );
};

export default Last30DaysExpenses;
