import LatestInvestmentsCard from "@/app/(dashboard)/(homes)/investment/components/latest-investments-card";
import MostLocationCard from "@/app/(dashboard)/(homes)/investment/components/most-location-card";
import MyPortfolioCard from "@/app/(dashboard)/(homes)/investment/components/my-portfolio-card";
import NoticeBoardCard from "@/app/(dashboard)/(homes)/investment/components/notice-board-card";
import ProjectStatusCard from "@/app/(dashboard)/(homes)/investment/components/project-status-card";
import RevenueStatisticsCard from "@/app/(dashboard)/(homes)/investment/components/revenue-statistics-card";
import StaticCard from "@/app/(dashboard)/(homes)/investment/components/static-card";
import StatsCard from "@/app/(dashboard)/(homes)/investment/components/stats-card";
import TotalTransactionsCard from "@/app/(dashboard)/(homes)/investment/components/total-transactions-card";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import LoadingSkeleton from "@/components/loading-skeleton";
import type { Metadata } from "next";
import { Suspense } from "react";

const metadata: Metadata = {
  title: "Investment Dashboard | WowDash Admin Panel",
  description:
    "Track investment portfolios, returns, and market insights in the Investment Dashboard of WowDash Admin Template built with Next.js and Tailwind.",
};


const InvestmentPage = () => {
  return (
    <>
      <DashboardBreadcrumb title="Investment" text="Investment" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
        <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
          <StatsCard />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        <div className="col-span-12 2xl:col-span-8">
          <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            <RevenueStatisticsCard />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            <StaticCard />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
          <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            <MostLocationCard />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
          <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            <MyPortfolioCard />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
          <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            <LatestInvestmentsCard />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            <NoticeBoardCard />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            <TotalTransactionsCard />
          </Suspense>
        </div>
        <div className="col-span-12 2xl:col-span-4">
          <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            <ProjectStatusCard />
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default InvestmentPage;
