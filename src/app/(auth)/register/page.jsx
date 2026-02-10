"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-[480px] bg-white border border-gray-200 rounded-lg p-10 md:p-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Join Signbridge
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Join our platform. Fill in your details to get started.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label
              htmlFor="fullname"
              className="text-gray-900 text-xs font-bold uppercase tracking-widest"
            >
              Full Name
            </Label>
            <Input
              id="fullname"
              type="text"
              placeholder="John Doe"
              className="h-12 bg-white border-gray-200 rounded-lg px-4 text-base"
              required
            />
          </div>

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
            <Label
              htmlFor="password"
              className="text-gray-900 text-xs font-bold uppercase tracking-widest"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-12 bg-white border-gray-200 rounded-lg px-4 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="confirmPassword"
              className="text-gray-900 text-xs font-bold uppercase tracking-widest"
            >
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="h-12 bg-white border-gray-200 rounded-lg px-4 text-base"
              required
            />
          </div>

          <div className="flex items-start gap-3 py-1">
            <Checkbox id="terms" className="rounded-sm mt-1" required />
            <Label
              htmlFor="terms"
              className="text-gray-600 text-sm font-medium cursor-pointer select-none leading-relaxed"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-gray-900 font-bold hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-gray-900 font-bold hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-black transition-colors"
          >
            Create Account
          </Button>

          <div className="pt-8 mt-4 border-t border-gray-200 text-center">
            <p className="text-gray-600 font-medium text-sm">
              Already have an account?
              <Link
                href="/login"
                className="text-gray-900 font-bold hover:underline ml-1"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
