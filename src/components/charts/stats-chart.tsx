
import ReactApexChart from "react-apexcharts";

const DonutChart = ({ series, colors }: { series: number[]; colors: string[] }) => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: colors,
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="">
      <ReactApexChart options={chartOptions} series={series} type="donut" width="55" height="55" />
    </div>
  );
};

export const StatsCharts = () => {
  return (
    <div className="grid-cat-2">
      <div className="rounded-md px-4 py-4 h-auto dark:bg-gray-900 bg-white flex items-center justify-between">
        <div>
          <h1 className="text-sm font-medium font-inter text-gray-400">Total cars</h1>
          <p className="text-gray-800 text-2xl dark:text-gray-200 font-bold">34</p>
        </div>
        <DonutChart series={[34, 66]} colors={["#3563E9", "#E5E5E5"]} />
      </div>
      <div className="rounded-md px-4 py-4 h-auto dark:bg-gray-900 bg-white flex items-center justify-between">
        <div>
          <h1 className="text-sm font-medium font-inter text-gray-400">Total customers</h1>
          <p className="text-gray-800 text-2xl dark:text-gray-200 font-bold">120</p>
        </div>
        <DonutChart series={[120, 80]} colors={["#FD8539", "#E5E5E5"]} />
      </div>
      <div className="rounded-md px-4 py-4 h-auto dark:bg-gray-900 bg-white flex items-center justify-between">
        <div>
          <h1 className="text-sm font-medium font-inter text-gray-400">Total cars</h1>
          <p className="text-gray-800 text-2xl dark:text-gray-200 font-bold">50</p>
        </div>
        <DonutChart series={[50, 50]} colors={["#29B6F6", "#E5E5E5"]} />
      </div>
      <div className="rounded-md px-4 py-4 h-auto dark:bg-gray-900 bg-white flex items-center justify-between">
        <div>
          <h1 className="text-sm font-medium font-inter text-gray-400">Cars bought</h1>
          <p className="text-gray-800 text-2xl dark:text-gray-200 font-bold">75</p>
        </div>
        <DonutChart series={[75, 25]} colors={["#8BC34A", "#E5E5E5"]} />
      </div>
    </div>
  );
};