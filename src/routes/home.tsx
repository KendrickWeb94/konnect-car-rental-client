import { StatsCharts } from "@/components/charts/stats-chart";
import { TotalRevenueChart } from "@/components/charts/total-revenue-chart";
import PropertyReferrals from "@/components/ui/property-referals";

export const Home = () => {
  return (
    <div className="p-6 space-y-4">
      <h1>Hi, Sarah</h1>
      <StatsCharts />
      <div className="flex gap-4  ds:flex-wrap md:flex-nowrap">
        <div className="flex-1">
          <TotalRevenueChart />
        </div>
        <div className="max-w-sm w-full">
            <PropertyReferrals />
        </div>
      </div>
    </div>
  );
};
