import React from "react";
import { Header } from "../../components";
import StackedChart from "../../components/Charts/StackedChart";

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#33373E] rounded-3xl text-white">
      <Header category="Chart" title="Stacked Chart " />
      <div className="w-full">
        <StackedChart width="100%" height="320px" />
      </div>
    </div>
  );
};

export default Stacked;
