import CourseActivityCard from "@/app/(dashboard)/(homes)/lms/components/course-activity-card";
import CoursesCard from "@/app/(dashboard)/(homes)/lms/components/courses-card";
import StudentProgressCard from "@/app/(dashboard)/(homes)/lms/components/student-progress-card";
import TopCategoriesCard from "@/app/(dashboard)/(homes)/lms/components/top-categories-card";
import TopInstructorsCard from "@/app/(dashboard)/(homes)/lms/components/top-instructors-card";
import TrafficSourceCard from "@/app/(dashboard)/(homes)/lms/components/traffic-source-card";
import WidgetsAverageChart from "@/app/(dashboard)/(homes)/lms/components/widgets-average-chart";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import LoadingSkeleton from "@/components/loading-skeleton";
import type { Metadata } from "next";
import { Suspense } from "react";

const metadata: Metadata = {
    title: "LMS Dashboard | WowDash Admin Panel",
    description:
        "Manage courses, track student progress, and analyze learning outcomes with the LMS Dashboard in WowDash Admin Template built using Next.js and Tailwind.",
};

const LmsPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="LMS / Learning System" text="LMS / Learning System" />

            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <WidgetsAverageChart />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <TrafficSourceCard />
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <TopCategoriesCard />
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <TopInstructorsCard />
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <StudentProgressCard />
                </div>
                <div className="col-span-12 2xl:col-span-8">
                    <CoursesCard />
                </div>
                <div className="col-span-12 2xl:col-span-4">
                    <CourseActivityCard />
                </div>
            </div>
        </>
    );
};
export default LmsPage;
