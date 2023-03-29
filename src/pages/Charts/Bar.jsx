import React from "react";
import { Header } from "../../components";
import BarChart from "../../components/Charts/BarChart";
const Bar = () => {
  return (
    <div className="m-4 md:m-9 mt-24 p-10 bg-white dark:bg-[#33373E] rounded-3xl text-white">
      <Header category="Chart" title="Infaltion Rate Bar " />
      <div className="w-full">
        <BarChart width="100%" height="360px" />
      </div>
    </div>
  );
};

export default Bar;
