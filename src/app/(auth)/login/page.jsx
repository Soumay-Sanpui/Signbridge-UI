"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Page() {
  const handleSubmit = () => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-[480px] bg-white border border-gray-200 rounded-lg p-10 md:p-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Login
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Welcome back. Enter your credentials to access the platform.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-gray-900 text-xs font-bold uppercase tracking-widest"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              className="h-12 bg-white border-gray-200 rounded-lg px-4 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label
                htmlFor="password"
                className="text-gray-900 text-xs font-bold uppercase tracking-widest"
              >
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-gray-600 hover:text-gray-900 transition-colors text-xs font-medium underline underline-offset-4"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-12 bg-white border-gray-200 rounded-lg px-4 text-base"
              required
            />
          </div>

          <div className="flex items-center gap-3 py-1">
            <Checkbox id="remember" className="rounded-sm" />
            <Label
              htmlFor="remember"
              className="text-gray-600 text-sm font-medium cursor-pointer select-none"
            >
              Keep me signed in
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-black transition-colors"
          >
            Sign In
          </Button>

          <div className="pt-8 mt-4 border-t border-gray-200 text-center">
            <p className="text-gray-600 font-medium text-sm">
              Don't have an account?
              <Link
                href="/register"
                className="text-gray-900 font-bold hover:underline ml-1"
              >
                Join now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
