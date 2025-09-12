import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import type { Metadata } from "next";
import Image from "next/image";

import AvatarShape1 from "@/public/assets/images/avatar/avatar-shape1.png";
import AvatarShape2 from "@/public/assets/images/avatar/avatar-shape2.png";
import AvatarShape3 from "@/public/assets/images/avatar/avatar-shape3.png";
import Avatar1 from "@/public/assets/images/avatar/avatar1.png";
import Avatar2 from "@/public/assets/images/avatar/avatar2.png";

import DefaultCardComponent from "@/app/(dashboard)/components/default-card-component";
import AvatarGroup1 from "@/public/assets/images/avatar/avatar-group1.png";
import AvatarGroup2 from "@/public/assets/images/avatar/avatar-group2.png";
import AvatarGroup3 from "@/public/assets/images/avatar/avatar-group3.png";
import AvatarGroup4 from "@/public/assets/images/avatar/avatar-group4.png";
import AvatarGroup5 from "@/public/assets/images/avatar/avatar-group5.png";
import AvatarGroup6 from "@/public/assets/images/avatar/avatar-group6.png";
import StatusAvatar from "@/public/assets/images/avatar/status-avatar.png";
import { Plus } from "lucide-react";

const metadata: Metadata = {
  title: "User Avatars & Profile Images | WowDash Admin Dashboard",
  description:
    "Manage and display user avatars, profile images, and avatar customization options in the WowDash Admin Dashboard built with Next.js and Tailwind CSS.",
};

const TypographyPage = () => {
  return (
    <>
      <DashboardBreadcrumb title="Avatar" text="Avatar" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-6">
          <DefaultCardComponent title="Avatar Sizes">
            <div className="flex items-center flex-wrap gap-3">
              <Image src={Avatar1} width={24} height={24} className="rounded-full object-fit-cover" alt="Avatar" />
              <Image src={Avatar1} width={32} height={32} className="rounded-full object-fit-cover" alt="Avatar" />
              <Image src={Avatar1} width={40} height={40} className="rounded-full object-fit-cover" alt="Avatar" />
              <Image src={Avatar1} width={44} height={44} className="rounded-full object-fit-cover" alt="Avatar" />
              <Image src={Avatar1} width={56} height={56} className="rounded-full object-fit-cover" alt="Avatar" />
              <Image src={Avatar1} width={64} height={64} className="rounded-full object-fit-cover" alt="Avatar" />
              <Image src={Avatar1} width={72} height={72} className="rounded-full object-fit-cover" alt="Avatar" />
              <Image src={Avatar1} width={80} height={80} className="rounded-full object-fit-cover" alt="Avatar" />
            </div>
            <div className="flex items-center flex-wrap gap-3 mt-6">
              <Image src={Avatar2} width={24} height={24} className="rounded-lg object-fit-cover" alt="Avatar" />
              <Image src={Avatar2} width={32} height={32} className="rounded-lg object-fit-cover" alt="Avatar" />
              <Image src={Avatar2} width={40} height={40} className="rounded-lg object-fit-cover" alt="Avatar" />
              <Image src={Avatar2} width={44} height={44} className="rounded-lg object-fit-cover" alt="Avatar" />
              <Image src={Avatar2} width={56} height={56} className="rounded-lg object-fit-cover" alt="Avatar" />
              <Image src={Avatar2} width={64} height={64} className="rounded-lg object-fit-cover" alt="Avatar" />
              <Image src={Avatar2} width={72} height={72} className="rounded-lg object-fit-cover" alt="Avatar" />
              <Image src={Avatar2} width={80} height={80} className="rounded-lg object-fit-cover" alt="Avatar" />
            </div>
          </DefaultCardComponent>
        </div>

        <div className="col-span-12 md:col-span-6">
          <DefaultCardComponent title="Avatar With content">
            <div className="flex items-center flex-wrap gap-3">
              <span className="w-6 h-6 rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-blue-100 dark:bg-primary/25 text-primary dark:text-blue-400">24</span>
              <span className="w-8 h-8 rounded-full object-fit-cover flex justify-center items-center font-semibold text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400">32</span>
              <span className="w-10 h-10 rounded-full object-fit-cover flex justify-center items-center font-semibold text-sm bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400">40</span>
              <span className="w-[44px] h-[44px] rounded-full object-fit-cover flex justify-center items-center font-semibold text-base bg-cyan-100 dark:bg-cyan-600/25 text-cyan-600 dark:text-cyan-400">44</span>
              <span className="w-[56px] h-[56px] rounded-full object-fit-cover flex justify-center items-center font-semibold text-lg bg-yellow-100 dark:bg-yellow-600/25 text-yellow-600 dark:text-yellow-400">56</span>
              <span className="w-[64px] h-[64px] rounded-full object-fit-cover flex justify-center items-center font-semibold text-xl bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400">64</span>
            </div>
            <div className="flex items-center flex-wrap gap-3 mt-6">
              <span className="w-6 h-6 rounded object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-blue-100 dark:bg-primary/25 text-primary dark:text-blue-400">24</span>
              <span className="w-8 h-8 rounded-lg object-fit-cover flex justify-center items-center font-semibold text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400">32</span>
              <span className="w-10 h-10 rounded-lg object-fit-cover flex justify-center items-center font-semibold text-sm bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400">40</span>
              <span className="w-[44px] h-[44px] rounded-lg object-fit-cover flex justify-center items-center font-semibold text-base bg-cyan-100 dark:bg-cyan-600/25 text-cyan-600 dark:text-cyan-400">44</span>
              <span className="w-[56px] h-[56px] rounded-lg object-fit-cover flex justify-center items-center font-semibold text-lg bg-yellow-100 dark:bg-yellow-600/25 text-yellow-600 dark:text-yellow-400">56</span>
              <span className="w-[64px] h-[64px] rounded-lg object-fit-cover flex justify-center items-center font-semibold text-xl bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400">64</span>
            </div>
          </DefaultCardComponent>
        </div>
        <div className="col-span-12 md:col-span-6">
          <DefaultCardComponent title="Avatar Shape Style">
            <div className="flex items-center flex-wrap justify-between gap-3">
              <Image src={AvatarShape1} alt="Shape" className="w-[120px] h-[120px] rounded-lg object-fit-cover" />
              <Image src={AvatarShape2} alt="Shape" className="w-[120px] h-[120px] rounded-full object-fit-cover" />
              <Image src={AvatarShape3} alt="Shape" className="w-auto h-[120px]  object-fit-cover" />
            </div>
          </DefaultCardComponent>
        </div>
        <div className="col-span-12 md:col-span-6">
          <DefaultCardComponent title="Status Indicator">
            <div className="flex items-center flex-wrap gap-3">
              <div className="relative">
                <Image src={StatusAvatar} className="w-6 h-6 rounded-full object-fit-cover" alt="Avatar" />
                <span className="w-2 h-2 bg-primary border br-white rounded-full absolute end-0 bottom-[3px]"></span>
              </div>
              <div className="relative">
                <Image src={StatusAvatar} className="w-8 h-8 rounded-full object-fit-cover" alt="Avatar" />
                <span className="w-2 h-2 bg-primary border br-white rounded-full absolute end-0 bottom-[3px]"></span>
              </div>
              <div className="relative">
                <Image src={StatusAvatar} className="w-10 h-10 rounded-full object-fit-cover" alt="Avatar" />
                <span className="w-2 h-2 bg-primary border br-white rounded-full absolute end-0 bottom-[3px]"></span>
              </div>
              <div className="relative">
                <Image src={StatusAvatar} className="w-[44px] h-[44px] rounded-full object-fit-cover" alt="Avatar" />
                <span className="w-2 h-2 bg-primary border br-white rounded-full absolute end-0 bottom-[3px]"></span>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-3 mt-6">
              <div className="relative">
                <span className="w-6 h-6 rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-blue-100 dark:bg-primary/25 text-primary dark:text-blue-400">24</span>
                <span className="w-2 h-2 bg-primary border br-white rounded-full absolute end-0 bottom-[3px]"></span>
              </div>
              <div className="relative">
                <span className="w-8 h-8 rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400">24</span>
                <span className="w-2 h-2 bg-purple-600 border br-white rounded-full absolute end-0 bottom-[3px]"></span>
              </div>
              <div className="relative">
                <span className="w-10 h-10 rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400">24</span>
                <span className="w-2 h-2 bg-green-600 border br-white rounded-full absolute end-0 bottom-[3px]"></span>
              </div>
              <div className="relative">
                <span className="w-[44px] h-[44px] rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-cyan-100 dark:bg-cyan-600/25 text-cyan-600 dark:text-cyan-400">24</span>
                <span className="w-2 h-2 bg-cyan-600 border br-white rounded-full absolute end-0 bottom-[3px]"></span>
              </div>
            </div>
          </DefaultCardComponent>
        </div>
        <div className="col-span-12 md:col-span-6">
          <DefaultCardComponent title="Avatar Group">
            <div className="flex -space-x-2 overflow-hidden">
              <Image src={AvatarGroup1} alt="Thumbnail" className="w-6 h-6 rounded-full object-fit-cover relative" />
              <Image src={AvatarGroup2} alt="Thumbnail" className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup3} alt="Thumbnail" className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup4} alt="Thumbnail" className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup5} alt="Thumbnail" className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup6} alt="Thumbnail" className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup6} alt="Thumbnail" className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
              <span className="w-6 h-6 rounded-full object-fit-cover relative ms--10px border bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-white dark:border-neutral-500 text-xs inline-flex items-center justify-center">
                +5
              </span>
              <button type="button" className="w-6 h-6 rounded-full border border-primary text-primary ms--8 z-[1] bg-white border-dashed text-secondary-light text-xs inline-flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex -space-x-2 overflow-hidden mt-6">
              <Image src={AvatarGroup1} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover relative" />
              <Image src={AvatarGroup2} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup3} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup4} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup5} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup6} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
              <Image src={AvatarGroup6} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
              <span className="w-8 h-8 rounded-full object-fit-cover relative ms--10px border bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-white dark:border-neutral-500 text-xs inline-flex items-center justify-center">
                +5
              </span>
              <button type="button" className="w-8 h-8 rounded-full border border-primary text-primary ms--8 z-[1] bg-white border-dashed text-secondary-light text-lg inline-flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </DefaultCardComponent>
        </div>
        <div className="col-span-12 md:col-span-6">
          <DefaultCardComponent title="Images With content">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-2">
                <Image src={Avatar1} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover shrink-0" />
                <div className="grow inline-flex flex-col">
                  <h6 className="text-sm mb-0">Will mart</h6>
                  <span className="text-xs text-secondary-light">random@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Avatar1} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover shrink-0" />
                <div className="grow inline-flex flex-col">
                  <h6 className="text-sm mb-0">Will mart</h6>
                  <span className="text-xs text-secondary-light">random@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Avatar2} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover shrink-0" />
                <div className="grow inline-flex flex-col">
                  <h6 className="text-sm mb-0">Sangeeta</h6>
                  <span className="text-xs text-secondary-light">random@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Avatar2} alt="Thumbnail" className="w-8 h-8 rounded-full object-fit-cover shrink-0" />
                <div className="grow inline-flex flex-col">
                  <h6 className="text-sm mb-0">Sangeeta</h6>
                  <span className="text-xs text-secondary-light">random@gmail.com</span>
                </div>
              </div>
            </div>
          </DefaultCardComponent>
        </div>
      </div>

    </>
  );
};
export default TypographyPage;
