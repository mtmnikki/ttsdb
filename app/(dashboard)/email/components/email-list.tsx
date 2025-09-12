import React from 'react';

import { Star } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const EmailList = () => {
    return (
        <ul className="overflow-x-auto">
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Jerome Bell</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Kristin Watson</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Cody Fisher</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Dianne Russell</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Floyd Miles</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Devon Lane</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Dianne Russell</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Annette Black</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Bessie Cooper</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Courtney Henry</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
            <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                <div className="form-check style-check flex items-center">
                    <Checkbox
                        className="border border-neutral-500 w-4 h-4"
                    />
                </div>
                <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                    <Star className="w-4" />
                </Button>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Wade Warren</Link>
                <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
            </li>
        </ul>
    );
};

export default EmailList;