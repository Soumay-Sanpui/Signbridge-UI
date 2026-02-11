import {ClosedCaption, Ear, MonitorPlay, ShieldCheck} from "lucide-react";
import {Badge} from "@/components/ui/badge";

const FeaturesGrid = () => {
    return (
        <section className={"py-24 px-6 md:px-20"}>
            {/* Header Section*/}
            <div className={"w-full flex flex-col items-center justify-center gap-2"}>
                <h2 className={"font-bold text-4xl mb-2"}>Build for Everyone</h2>
                <p className={"w-1/2 text-center text-gray-500"}>We&#39;ve re-engineered video calling to solve the
                    challenges
                    of modern digital communication with real time translation, even for sign languages.</p>
            </div>

            {/*------------------------------- Bento Grid ------------------------------------*/}
            {/* First Row */}
            <div className={"border w-full flex items-center justify-center"}>
                {/*Left-card*/}
                <div className={"p-4 bg-blue-500 text-white w-[80%] flex flex-col items-start justify-center gap-4"}>
                    <div>
                        <Ear/>
                    </div>
                    <div>
                        <h3>Sign Language Optimized</h3>
                        <p>Our algorithm prioritize the motion of hands and facial features, ensuring high fidelity even
                            on low bandwidth connections.</p>
                    </div>
                    <div className={"flex items-center justify-center gap-3"}>
                        <Badge variant="default">Adaptive Frame Rate</Badge>
                        <Badge variant="default">Motion Sharpening</Badge>
                    </div>
                </div>
                {/*Right-card*/}
                <div>
                    <div>
                        <ClosedCaption/>
                    </div>
                    <div>
                        <h3>Live Captioning</h3>
                        <p>Instant, accurate transcription of spoken words into text with custom font sizes and
                            colors.</p>
                    </div>
                </div>
            </div>
            {/* Second Row */}
            <div>
                {/* Left-card */}
                <div className={"bg-card"}>
                    <div>
                        <MonitorPlay/>
                    </div>
                    <div>
                        <h3>Screen Reader Support</h3>
                        <p>Full ARIA compliance ensures navigation is seamless for users with visaul impairments.</p>
                    </div>
                </div>

                {/* Right-card */}
                <div>
                    <div>
                        <ShieldCheck/>
                    </div>
                    <div>
                        <h3>Privacy By Design</h3>
                        <p>End-to-end encryption on every call. Your private conversation stay private and secure.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;

