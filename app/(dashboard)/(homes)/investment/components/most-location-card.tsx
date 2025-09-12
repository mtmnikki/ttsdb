import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import WorldMapChart from "@/components/charts/world-map-chart";
import CountryList from "@/components/shared/country-list";

const MostLocationCard = () => {
  return (
    <Card className="card h-full rounded-lg border-0 !p-0">
      <CardContent className="card-body p-0">
        <div className="flex items-center flex-wrap gap-2 justify-between p-6">
          <h6 className="mb-0 font-bold text-lg"> Most Location </h6>
        </div>

        <div className="bg-neutral-100 dark:bg-slate-700/50 h-[160px] overflow-hidden">
          <WorldMapChart />
        </div>

        <div className="max-h-[266px] overflow-y-auto p-6 scrollbar-thin scrollbar-invisible hover:scrollbar-visible">
          <CountryList />
        </div>
      </CardContent>
    </Card>
  );
};

export default MostLocationCard;
