"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => <div className="size-full bg-black" />,
});

const SPLINE_SCENE_URL =
    "https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode";

export function HeroSplineBackground() {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 z-0 size-full overflow-hidden bg-black"
        >
            <Spline
                scene={SPLINE_SCENE_URL}
                className="size-full pointer-events-auto"
            />
        </div>
    );
}
