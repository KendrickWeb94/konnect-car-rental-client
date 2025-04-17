interface ProgressBarProps {
    title: string;
    percentage: number;
    color: string;
  }
  
  const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{title}</p>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{percentage}%</p>
      </div>
      <div className="relative w-full h-2 mt-2 bg-gray-200 rounded">
        <div
          className="absolute h-full rounded"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
  
  const PropertyReferrals = () => {
    const propertyReferralsInfo = [
      {
        title: "Social Media",
        percentage: 64,
        color: "#6C5DD3",
      },
      {
        title: "Marketplace",
        percentage: 40,
        color: "#7FBA7A",
      },
      {
        title: "Websites",
        percentage: 50,
        color: "#FFCE73",
      },
      {
        title: "Digital Ads",
        percentage: 80,
        color: "#FFA2C0",
      },
      {
        title: "Others",
        percentage: 15,
        color: "#F45252",
      },
    ];
  
    return (
      <div className="p-6 bg-white dark:bg-gray-900 rounded-lg  w-full max-w-lg">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200 font-inter">Car Referrals</h1>
        <div className="mt-6 space-y-4">
          {propertyReferralsInfo.map((bar) => (
            <ProgressBar key={bar.title} {...bar} />
          ))}
        </div>
      </div>
    );
  };
  
  export default PropertyReferrals;