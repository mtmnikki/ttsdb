import DefaultCardComponent from "@/app/(dashboard)/components/default-card-component";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import ListImg1 from "@/public/assets/images/lists/list-img1.png";
import ListImg2 from "@/public/assets/images/lists/list-img2.png";
import ListImg3 from "@/public/assets/images/lists/list-img3.png";
import ListImg4 from "@/public/assets/images/lists/list-img4.png";
import ListImg5 from "@/public/assets/images/lists/list-img5.png";
import { BellDot, FolderOpen, Reply, ShieldX, ShoppingCart } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

const metadata: Metadata = {
  title: "User List & Management | WowDash Admin Dashboard",
  description:
    "View, manage, and organize users with the user list and management features in the WowDash Admin Dashboard built with Next.js and Tailwind CSS.",
};

const TypographyPage = () => {
  return (
    <>
      <DashboardBreadcrumb title="List" text="List" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <DefaultCardComponent title="Default List">
          <ul className="rounded-lg border border-slate-200 dark:border-slate-600 overflow-hidden">
            <li className="text-secondary-light p-4 bg-slate-50 dark:bg-slate-600 border-b border-slate-200 dark:border-slate-600">1. This is list trust fund seitan letterpress, keytar raw denim keffiye</li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">2. This is list trust fund seitan letterpress, keytar raw denim </li>
            <li className="text-secondary-light p-4 bg-slate-50 dark:bg-slate-600 border-b border-slate-200 dark:border-slate-600">3. This is list trust fund seitan letterpress, keytar raw </li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">4. This is list trust fund seitan letterpress, keytar raw denim keffiye</li>
            <li className="text-secondary-light p-4 bg-slate-50 dark:bg-slate-600">5. This is list trust fund seitan letterpress, keytar raw denim </li>
          </ul>
        </DefaultCardComponent>

        <DefaultCardComponent title="Active List">
          <ul className="rounded-lg border border-slate-200 dark:border-slate-600 overflow-hidden">
            <li className="text-secondary-light p-4 bg-primary border-b border-slate-200 dark:border-slate-600 text-white">1. This is list trust fund seitan letterpress, keytar raw denim keffiye</li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">2. This is list trust fund seitan letterpress, keytar raw denim </li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">3. This is list trust fund seitan letterpress, keytar raw </li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">4. This is list trust fund seitan letterpress, keytar raw denim keffiye</li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700">5. This is list trust fund seitan letterpress, keytar raw denim </li>
          </ul>
        </DefaultCardComponent>

        <DefaultCardComponent title="Active List">
          <ul className="rounded-lg border border-slate-200 dark:border-slate-600 overflow-hidden">
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <BellDot className="w-5" />
                </span>
                Push Notification (This is push notifications)
              </div>
            </li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <ShoppingCart className="w-5" />
                </span>
                New Orders confirmed (This is Orders confirmed)
              </div>
            </li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <ShieldX className="w-5" />
                </span>
                Security Access (This is Security Access)
              </div>
            </li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <FolderOpen className="w-5" />
                </span>
                Storage Folder (This is Storage Folder)
              </div>
            </li>
            <li className="text-secondary-light p-4 bg-white dark:bg-slate-700">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <Reply className="w-5" />
                </span>
                Forward Message (This is Forward Message)
              </div>
            </li>
          </ul>
        </DefaultCardComponent>

        <DefaultCardComponent title="List Icons & label">
          <ul className="rounded-lg border border-slate-200 dark:border-slate-600 overflow-hidden">
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <BellDot className="w-5" />
                </span>
                Push Notification (This is push notifications)
              </div>
              <span className="text-xs bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400 rounded px-2.5 py-1 font-semibold">Low</span>
            </li>
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <ShoppingCart className="w-5" />
                </span>
                New Orders confirmed (This is Orders confirmed)
              </div>
              <span className="text-xs bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400 rounded px-2.5 py-1 font-semibold">High</span>
            </li>
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <ShieldX className="w-5" />
                </span>
                Security Access (This is Security Access)
              </div>
              <span className="text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 rounded px-2.5 py-1 font-semibold">Medium</span>
            </li>
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <FolderOpen className="w-5" />
                </span>
                Storage Folder (This is Storage Folder)
              </div>
              <span className="text-xs bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400 rounded px-2.5 py-1 font-semibold">Low</span>
            </li>
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700">
              <div className="flex items-center gap-2">
                <span className="flex">
                  <Reply className="w-5" />
                </span>
                Forward Message (This is Forward Message)
              </div>
              <span className="text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 rounded px-2.5 py-1 font-semibold">Medium</span>
            </li>
          </ul>
        </DefaultCardComponent>

        <DefaultCardComponent title="Colored Lists">
          <ul className="rounded-lg border border-slate-200 dark:border-slate-600 overflow-hidden">
            <li className="text-secondary-light p-4 bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <Image src={ListImg1} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                Push Notification (This is push notifications)
              </div>
            </li>
            <li className="text-secondary-light p-4 bg-cyan-100 dark:bg-cyan-600/25 text-cyan-600 dark:text-cyan-400 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <Image src={ListImg2} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                New Orders confirmed (This is Orders confirmed)
              </div>
            </li>
            <li className="text-secondary-light p-4 bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <Image src={ListImg3} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                Security Access (This is Security Access)
              </div>
            </li>
            <li className="text-secondary-light p-4 bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <Image src={ListImg4} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                Storage Folder (This is Storage Folder)
              </div>
            </li>
            <li className="text-secondary-light p-4 bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400">
              <div className="flex items-center gap-2">
                <Image src={ListImg5} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                Forward Message (This is Forward Message)
              </div>
            </li>
          </ul>
        </DefaultCardComponent>

        <DefaultCardComponent title="List Icons &amp; label">
          <ul className="rounded-lg border border-slate-200 dark:border-slate-600 overflow-hidden">
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <Image src={ListImg1} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                Push Notification (This is push notifications)
              </div>
              <span className="text-xs bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400 rounded px-2.5 py-1 font-semibold">Low</span>
            </li>
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <Image src={ListImg2} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                New Orders confirmed (This is Orders confirmed)
              </div>
              <span className="text-xs bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400 rounded px-2.5 py-1 font-semibold">High</span>
            </li>
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <Image src={ListImg3} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                Security Access (This is Security Access)
              </div>
              <span className="text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 rounded px-2.5 py-1 font-semibold">Medium</span>
            </li>
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-2">
                <Image src={ListImg4} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                Storage Folder (This is Storage Folder)
              </div>
              <span className="text-xs bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400 rounded px-2.5 py-1 font-semibold">Low</span>
            </li>
            <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-slate-700">
              <div className="flex items-center gap-2">
                <Image src={ListImg5} width={32} height={32} className="rounded-full" alt="Thumbnail" />
                Forward Message (This is Forward Message)
              </div>
              <span className="text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 rounded px-2.5 py-1 font-semibold">Medium</span>
            </li>
          </ul>
        </DefaultCardComponent>

      </div>
    </>
  );
};
export default TypographyPage;
