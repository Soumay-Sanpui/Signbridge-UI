import {Link2, Sparkle, Video} from "lucide-react";

const ProcessSection = () => {
    const cardsData = [
        {
            icn: <Link2 color="white" />,
            title: "Connect",
            description: "One-Click links that work in any browser. No complex setups, passwords, or plugin downloads required."
        },
        {
            icn: <Video color="white" fill="white" strokeWidth={2} />,
            title: "Communicate",
            description: "High-definition video with 30FPS support ensures every finger movement and facial expression is captured perfectly."
        },
        {
            icn: <Sparkle color="white"  fill="white" />,
            title: "Express",
            description: "Build in AI tools for real-time transcription, sign enhancement, and accessibility overlays."
        },
    ];
    return (
        <section className="p-20 flex flex-col gap-10">
            {/* Header section */}
            <div className="flex flex-col gap-5 items-start justify-center">
                <p className="text-primary uppercase font-semibold">Our Process</p>
                <h4 className="text-5xl font-bold">Three Step to seamless communication</h4>
                <p className="text-gray-500">Designed with simpllicity and accessibility at the core.</p>
            </div>
            {/* Cards section */}
            <div className="flex items-center justify-center gap-5">
                {
                    cardsData.map((card, index) => (
                        <div key={index} className="rounded-md shadow-lg border p-8 flex flex-col gap-5">
                            <div className="p-4 bg-chart-1 border w-max rounded-md">{card.icn}</div>
                            <h5 className="text-xl font-semibold">{card.title}</h5>
                            <p className="text-gray-500 text-md text-left">{card.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ProcessSection;
