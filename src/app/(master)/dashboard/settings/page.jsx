"use client";

import {Accessibility, Bell, CreditCard, Shield, Smartphone, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {userData} from "@/data/dashboardData";
import {PreferenceItem, SettingsNavLink} from "@/components/custom/dashboard";

export default function SettingsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="space-y-1">
                <h2 className="text-3xl font-black tracking-tight text-slate-900">Settings</h2>
                <p className="text-slate-500 text-sm">Manage your profile, account preferences, and accessibility tools.</p>
            </div>

            <div className="grid grid-cols-12 gap-10">
                {/* Navigation Tabs */}
                <div className="col-span-12 lg:col-span-3 space-y-1 bg-white border border-slate-100 p-2 rounded-2xl h-fit">
                    <SettingsNavLink icon={<User className="w-4 h-4" />} label="Profile" isActive />
                    <SettingsNavLink icon={<Bell className="w-4 h-4" />} label="Notifications" />
                    <SettingsNavLink icon={<Shield className="w-4 h-4" />} label="Security" />
                    <SettingsNavLink icon={<Accessibility className="w-4 h-4" />} label="Accessibility" />
                    <SettingsNavLink icon={<Smartphone className="w-4 h-4" />} label="Connected Apps" />
                    <SettingsNavLink icon={<CreditCard className="w-4 h-4" />} label="Billing" />
                </div>

                {/* Content Area */}
                <div className="col-span-12 lg:col-span-9 space-y-8 pb-20">

                    {/* Profile Section */}
                    <section className="bg-white p-8 rounded-[32px] border border-slate-100/50 shadow-sm space-y-8">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-600" />
                            Public Profile
                        </h3>

                        <div className="flex items-center gap-6">
                            <div className="relative group">
                                <div className="w-24 h-24 rounded-[32px] overflow-hidden border-2 border-slate-100">
                                    <img src={userData.avatar} alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <button className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px] flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-wider">
                                    Change
                                </button>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-slate-900">Profile Picture</p>
                                <p className="text-xs text-slate-500">PNG, JPG or GIF. Max size 2MB.</p>
                                <div className="flex gap-2 mt-2">
                                    <Button variant="outline" size="sm" className="h-8 text-[10px] font-black uppercase tracking-widest rounded-lg">Upload</Button>
                                    <Button variant="ghost" size="sm" className="h-8 text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-600 rounded-lg">Remove</Button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullname" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</Label>
                                <Input id="fullname" defaultValue={userData.name} className="rounded-xl border-slate-100 py-6" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</Label>
                                <Input id="email" defaultValue={userData.email} className="rounded-xl border-slate-100 py-6" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Biography</Label>
                            <textarea
                                id="bio"
                                rows={4}
                                className="w-full rounded-xl border border-slate-100 p-4 text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-300 resize-none font-medium text-slate-700"
                                placeholder="Write a short summary about yourself..."
                            />
                        </div>
                    </section>

                    {/* Preferences Section */}
                    <section className="bg-white p-8 rounded-[32px] border border-slate-100/50 shadow-sm space-y-8">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <Accessibility className="w-5 h-5 text-blue-600" />
                            Interpretation Preferences
                        </h3>

                        <div className="space-y-6">
                            <PreferenceItem
                                title="Real-time Captions"
                                desc="Automatically generate captions during interpretation calls."
                                checked={true}
                            />
                            <PreferenceItem
                                title="High Contrast Video"
                                desc="Apply high contrast filters to video streams for better visibility."
                                checked={false}
                            />
                            <PreferenceItem
                                title="Automatic Session Logs"
                                desc="Send a summary of sessions to your registered email address."
                                checked={true}
                            />
                        </div>
                    </section>

                    {/* Footer Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                        <Button variant="ghost" className="rounded-xl px-8 h-12 font-bold text-slate-500">Cancel</Button>
                        <Button className="rounded-xl px-8 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/10">Save Changes</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
