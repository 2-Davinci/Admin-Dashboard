import React from "react";
import { Header } from "../../components";
import PieChart from "../../components/Charts/PieChart";
const Pie = () => {
  return (
    <div className="m-4 md:m-3 mt-24 p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="Chart" title="Infaltion Rate" />
      <div className="w-full">
        <PieChart height="360px" width="100%" borderRadius="50%" />
      </div>
    </div>
  );
};

export default Pie;
