"use client";

import {Mail, MapPin, MessageSquare, Phone, Send} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted");
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Background blobs for flair */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-chart-2 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-chart-2 rounded-full blur-[100px] opacity-60" />
            </div>

            <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Content & Info */}
                    <div className="flex flex-col gap-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chart-2 border border-primary text-white text-sm font-medium">
                                <MessageSquare className="w-4 h-4" />
                                <span>Contact Our Team</span>
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                                Let&#39;s build <br />
                                <span className="text-primary">better connections.</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                                Have questions about sign language optimization or real-time translation?
                                Tell us how we can help your communication bridge.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            <ContactInfoItem
                                icon={<Mail className="w-6 h-6" />}
                                title="Email Support"
                                detail="hello@signbridge.com"
                                desc="Fast response within 24 hours"
                            />
                            <ContactInfoItem
                                icon={<Phone className="w-6 h-6" />}
                                title="Call Us"
                                detail="+1 (555) 000-0000"
                                desc="Mon-Fri from 8am to 6pm"
                            />
                            <ContactInfoItem
                                icon={<MapPin className="w-6 h-6" />}
                                title="Our Office"
                                detail="123 Tech Plaza, SF"
                                desc="Come visit our innovation hub"
                            />
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-sm -z-10" />
                        <div className="bg-white border border-primary p-8 lg:p-12 rounded-md shadow-xl shadow-primary/5">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <Label htmlFor="first-name">First Name</Label>
                                        <Input id="first-name" placeholder="John" className="h-12 rounded-xl focus:ring-ring" />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="last-name">Last Name</Label>
                                        <Input id="last-name" placeholder="Doe" className="h-12 rounded-xl focus:ring-ring" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl focus:ring-ring" />
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="message">Message</Label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        className="flex w-full rounded-xl border border-input bg-transparent px-3 py-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] focus:ring-ring"
                                    />
                                </div>

                                <Button type="submit" className="w-full h-14 rounded-xl bg-chart-2 hover:bg-chart-3 text-base font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] gap-2">
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </Button>

                                <p className="text-center text-sm text-slate-400">
                                    By clicking send, you agree to our <span className="text-primary underline cursor-pointer">Privacy Policy</span>.
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

const ContactInfoItem = ({ icon, title, detail, desc }) => (
    <div className="flex items-start gap-5 p-4 rounded-2xl transition-colors group">
        <div className="p-3 bg-chart-2 text-white rounded-xl group-hover:bg-chart-3 group-hover:text-white transition-all">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
            <p className="text-primary font-medium">{detail}</p>
            <p className="text-slate-400 text-sm mt-1">{desc}</p>
        </div>
    </div>
);

export default ContactPage;
