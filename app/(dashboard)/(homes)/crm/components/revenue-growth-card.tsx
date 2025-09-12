import RevenueGrowthChart from '@/components/charts/revenue-growth-chart';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const RevenueGrowthCard = () => {
    return (
        <Card className="card h-full rounded-lg border-0">
          <CardContent className="card-body p-0">
            <div className="flex items-center flex-wrap gap-2 justify-between">
              <div>
                <h6 className="mb-0 font-bold text-lg">Revenue Growth</h6>
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-100">Weekly Report</span>
              </div>
              <div className="text-end">
                <h6 className="mb-0 font-bold text-lg">$50,000.00</h6>
                <span className="bg-green-100 dark:bg-green-600/25 px-3 py-1 rounded font-medium text-green-600 dark:text-green-400 text-sm">$10k</span>
              </div>
            </div>
            <RevenueGrowthChart chartColor="#487fff"/>
          </CardContent>
        </Card>
    );
};

export default RevenueGrowthCard;