import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div
      className="block mt-14 md:mt-1
     dark:bg-[#33373E] ">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  dark:bg-[#484B52] bg-no-repeat dark: bg-cover bg-center bg-[url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')]  ">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-4">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex  flex-wrap md:-ml-6  justify-center  gap-1  items-center ">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-[#484B52] md:w-48  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-[#484B52] m-3 p-4 rounded-2xl w-5/6  ">
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-semibold text-xl "> Revenue Update </p>
            </div>

            <div className="flex items-center gap-4">
              <p className=" flex items-center text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className="text-gray-100">Expenses</span>
              </p>
              <p className=" flex items-center text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-20 flex-wrap justify-center ">
            <div className=" border-color border-r-2 m-4 pr-10 ">
              <div>
                <p>
                  <span className="text-3xl font-semibold ">#93,438</span>
                  <span
                    className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full  text-white ml-3  text-xs   "
                    style={{ backgroundColor: currentColor }}>
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1 ">Budget</p>
              </div>
              <div className="mt-8 ">
                <p>
                  <span className="text-3xl font-semibold ">#53,438</span>
                </p>
                <p className="text-gray-500 mt-1 ">Expense </p>
              </div>
              <div className="mt-5 ">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue "
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className="dark:bg-gray-100">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
