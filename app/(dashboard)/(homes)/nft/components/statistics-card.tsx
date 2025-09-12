import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CommonLink from "@/components/shared/common-link";
import CardSmallChartTwo from "@/components/charts/card-small-chart-two";
import TodayIncomeChart from "@/components/charts/today-income-chart";

const StatisticsCard = () => {
    return (
        <Card className="card h-full rounded-lg border-0 !p-0">
            <CardContent className="card-body p-0 flex flex-col justify-between gap-8">
                <div>
                    <div className="card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6">
                        <div className="flex items-center flex-wrap gap-2 justify-between">
                            <h6 className="font-bold text-lg mb-0">Statistics</h6>
                            <CommonLink />
                        </div>
                    </div>
                    <div className="card-body py-4 px-6">
                        <div className="flex items-center gap-1 justify-between mb-[44px]">
                            <div>
                                <h5 className="font-semibold mb-3">145</h5>
                                <span className="text-secondary-light font-normal text-xl">Total Art Sold</span>
                            </div>
                            <TodayIncomeChart />
                        </div>
                        <div className="flex items-center gap-1 justify-between">
                            <div>
                                <h5 className="font-semibold mb-3">750 ETH</h5>
                                <span className="text-secondary-light font-normal text-xl">Total Earnings</span>
                            </div>
                            <div className="remove-tooltip-title rounded-tooltip-value remove-tooltip-marker">
                                <CardSmallChartTwo chartColor={"#ff9f29"} />
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default StatisticsCard;