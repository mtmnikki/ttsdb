"use client";

import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import AuthImage from "@/public/assets/images/auth/forgot-pass-img.png";
import ThemeLogo from "@/components/shared/theme-logo";
import { StaticImg } from "@/types/static-image";
import ForgotPasswordComponent from "@/components/auth/forgot-password";

const metadata: Metadata = {
  title: "Forgot Password & Account Recovery | WowDash Admin Dashboard",
  description:
    "Recover your account by resetting your password in the WowDash Admin Dashboard built with Next.js and Tailwind CSS.",
};

const forgotPassImage: StaticImg = {
  image: AuthImage,
};

const ForgotPassword = () => {

  return (
    <section className="bg-white dark:bg-slate-900 flex flex-wrap min-h-screen">
      {/* Left Image */}
      <div className="lg:w-1/2 hidden lg:block">
        <div className="flex items-center justify-center h-screen flex-col">
          <Image
            src={forgotPassImage.image}
            alt="Auth Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Form */}
      <div className="lg:w-1/2 w-full py-8 px-6 flex flex-col justify-center">
        <div className="lg:max-w-[464px] w-full mx-auto">
          {/* Logo and heading */}
          <div>
            <div className="mb-2.5 inline-block max-w-[290px]">
              <ThemeLogo />
            </div>

            <h4 className="font-semibold mb-3">Forgot Password</h4>
            <p className="mb-8 text-secondary-light text-lg">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>
          </div>

          {/* Login Form */}
          <ForgotPasswordComponent />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
