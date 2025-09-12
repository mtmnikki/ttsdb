import CommonLink from "@/components/shared/common-link";
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Category {
    id: number;
    title: string;
    courses: string;
    icon: string;
    bgColor: string;
}

const categories: Category[] = [
    {
        id: 1,
        title: "Web Development",
        courses: "40+ Courses",
        icon: "/assets/images/home-six/category-icon1.png",
        bgColor: "bg-cyan-50 dark:bg-cyan-600/20",
    },
    {
        id: 2,
        title: "Graphic Design",
        courses: "40+ Courses",
        icon: "/assets/images/home-six/category-icon2.png",
        bgColor: "bg-green-50 dark:bg-green-600/20",
    },
    {
        id: 3,
        title: "UI/UX Design",
        courses: "40+ Courses",
        icon: "/assets/images/home-six/category-icon3.png",
        bgColor: "bg-violet-50 dark:bg-violet-600/20",
    },
    {
        id: 4,
        title: "Digital Marketing",
        courses: "40+ Courses",
        icon: "/assets/images/home-six/category-icon4.png",
        bgColor: "bg-yellow-50 dark:bg-yellow-600/20",
    },
    {
        id: 5,
        title: "3D Illustration & Art Design",
        courses: "40+ Courses",
        icon: "/assets/images/home-six/category-icon5.png",
        bgColor: "bg-red-50 dark:bg-red-600/20",
    },
    {
        id: 6,
        title: "Logo Design",
        courses: "40+ Courses",
        icon: "/assets/images/home-six/category-icon6.png",
        bgColor: "bg-primary/10",
    },
];

const TopCategoriesCard: React.FC = () => {
    return (
        <Card className="card h-full rounded-lg border-0 !p-0">
            <CardContent className="card-body p-0 flex flex-col justify-between gap-8">
                <div className="">
                    <div className="card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6">
                        <div className="flex items-center flex-wrap gap-2 justify-between">
                            <h6 className="font-bold text-lg mb-0">Top Categories</h6>
                            <CommonLink />
                        </div>
                    </div>
                    <div className="card-body py-4 px-6">
                        {categories.map((category, index) => (
                            <div
                                key={category.id}
                                className={`flex items-center justify-between gap-3 ${index === categories.length - 1 ? "mb-0" : "mb-[26px]"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-10 h-10 rounded-lg flex-shrink-0 ${category.bgColor} flex justify-center items-center`}
                                    >
                                        <Image
                                            src={category.icon}
                                            alt={category.title}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-normal">{category.title}</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-100 font-normal">
                                            {category.courses}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    href="#"
                                    className="w-6 h-6 bg-primary/10 text-primary dark:text-primary flex justify-center items-center text-lg hover:bg-primary/20 rounded"
                                >
                                    <ChevronRight className="w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TopCategoriesCard;
