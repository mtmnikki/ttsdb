import CommonLink from '@/components/shared/common-link';
import RecentOrdersTable from '@/components/table/recent-orders-table';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const RecentOrdersCard = () => {
    return (
        <Card className="card h-full border-0">
            <CardContent className="card-body p-0">
                <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
                    <h6 className="mb-0 font-bold text-lg">Recent Orders</h6>
                    <CommonLink/>
                </div>
                <RecentOrdersTable/>
            </CardContent>
        </Card>
    );
};

export default RecentOrdersCard;