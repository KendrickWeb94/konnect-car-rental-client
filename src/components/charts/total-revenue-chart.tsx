import ReactApexChart from "react-apexcharts";
import { ArrowUp } from "lucide-react";

export const TotalRevenueChart = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      colors: ["transparent"],
      width: 4,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 2,
        barHeight: "75%",
        distributed: false,
        // Removed invalid property 'barGap'
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // 7 smaller groups
    },
    colors: ["#3563E9", "#CFC8FF"], // Colors for the bars
    legend: {
      show: false,
    },
    grid: {
      strokeDashArray: 3,
    },
  };

  const chartSeries = [
    {
      name: "Revenue A",
      data: [10000, 12345, 8000, 15000, 11000, 9500, 12000], // Static data for the first bar in each group
    },
    {
      name: "Revenue B",
      data: [12000, 11000, 9000, 14000, 13000, 10500, 11500], // Static data for the second bar in each group
    },
  ];
  chartOptions.grid!.show = false;
  return (
    <div className="rounded-lg p-6  bg-white dark:bg-gray-900 w-full min-w-full max-w-[700px] h-[363px] flex flex-col">
      <h1 className="text-base font-semibold text-gray-600 font-inter dark:text-gray-200">
        Total Revenue
      </h1>

      <div className="flex items-center n mt-4 flex-wrap gap-4">
        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
          $236,535
        </p>
        <div className="flex items-center font-inter gap-2">
          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-tw_primary text-white">
            <ArrowUp size={15} className="" />
          </div>
          <div>
            <p className="text-sm text-tw_primary font-medium">0.8%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Than Last Month
            </p>
          </div>
        </div>
      </div>

      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={200}
        className="mt-6"
      />
    </div>
  );
};
